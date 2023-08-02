const vm = Vue.createApp({
    data(){
        return {
            name:'',
            circleColor:'greenyellow',
            textColor:'black',
            size:150,
            fontSize: 30,
            degree:0,
            isBordered: false
        }
    },
    computed:{
        selectedCircleColor(){
            return { backgroundColor: this.circleColor};
        },
        selectedTextColor(){
            return { color : this.textColor};
        },
        circleSize(){
            const circleGame = {
                width : `${this.size}px`,
                height: `${this.size}px`,
                lineHeight: `${this.size}px`
            }
            return circleGame
        },
        selectedFontSize(){
            return { fontSize : `${this.fontSize}px`}
        },
        rotationDegree(){
            return { transform : `rotate(${this.degree}deg)`}
        },
        borderClass(){
            return { border : this.isBordered};
        }
        
    }
}).mount('#app');