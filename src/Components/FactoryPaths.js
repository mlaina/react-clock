
class FactoryPaths {
    constructor(ti, tf, center, radius, isHand){
        this.center=center;
        this.radius=radius;
        if(isHand){
            this.ti=new Date();
            this.tf=new Date()+1;
        }else{
            this.ti=ti;
            this.tf=tf;
        }
    }

    anglesMinutes(ti, tf, isHand) {
        var angleIni, angleFin;

        if (tf.getHours() - ti.getHours() > 1 ||
            (ti.getHours() < tf.getHours() && ti.getMinutes() < tf.getMinutes() && tf.getHours() - ti.getHours() === 1))
            return [0, 359];


        angleIni = ti.getMinutes() * 6 + ti.getSeconds()*0.1+ti.getMilliseconds()*0.0001;
        angleFin = tf.getMinutes() * 6 + tf.getSeconds()*0.1+tf.getMilliseconds()*0.0001;

        if(isHand){
            angleFin=angleIni+1.5;
        }
        
        return [angleIni, angleFin];
    }

    anglesHours(ti, tf) {
        var angleIni, angleFin;

        angleIni = (ti.getHours() % 12) * 30 + (ti.getMinutes() / 2)+ti.getSeconds()*(0.1/12);
        angleFin = (tf.getHours() % 12) * 30 + (tf.getMinutes() / 2)+tf.getSeconds()*(0.1/12);

        return [angleIni, angleFin];
    }
    getD(ring){
        let now =new Date();
        let plusnow=new Date();
        
        let d="";
        if(ring==="hours"){
            let ahours = this.anglesHours(this.ti, this.tf);
            d=this.arc(this.radius, ahours[1], ahours[0]);
        }
        if(ring==="mins"){
            let amins = this.anglesMinutes(this.ti, this.tf);
            d=this.arc(this.radius, amins[1], amins[0]);
        }
        if(ring==="hmin"){
            plusnow.setSeconds(now.getSeconds()+1);
            let amins = this.anglesMinutes(now, plusnow, true);
            d=this.arc(this.radius, amins[1], amins[0]);
        }
        if(ring==="hhour"){
            plusnow.setMinutes(now.getMinutes()+5);
            let ahours = this.anglesHours(now, plusnow);
            d=this.arc(this.radius, ahours[1], ahours[0]);
        }
        
        return d;
    }

    arc(radius, ai, af) {
        let start = this.polarToCartesian(this.center.x, this.center.y, radius, ai);
        let end = this.polarToCartesian(this.center.x, this.center.y, radius, af);

        let largeArcFlag = af - ai <= 180 ? "0" : "1";

        let d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");

        return d;
    }

    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }
   
}

export default FactoryPaths;
