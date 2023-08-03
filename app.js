const vm = Vue.createApp({
    data(){
        return {
            name:'',
            circleColor:'greenyellow',
            textColor:'black',
            size:150,
            fontSize: 30,
            degree:0,
            isBordered: false,
        }
    },
    methods:{
        resetProperties(){
           this.circleColor = 'greenyellow';
           this.textColor = 'black';
           this.size = 150;
           this.fontSize = 30,
           this.degree = 0,
           this.isBordered= false;
        },
        async copyStyle(){
            let text = `${this.properties} ${this.borderProperty}`
            await navigator.clipboard.writeText(text);

            alert('CSS copied to clipboard');
            
        }

    },
    computed:{
        circleStyle(){
            return{
                backgroundColor: this.circleColor,
                color : this.textColor,
                width : `${this.size}px`,
                height: `${this.size}px`,
                lineHeight: `${this.size}px`,
                fontSize : `${this.fontSize}px`,
                transform : `rotate(${this.degree}deg)`
            }
        },
        borderClass(){
            return { border : this.isBordered};
        },
        properties(){
            return [`background-color:${this.circleColor};`,`color:${this.textColor};`,`width:${this.size}px;`,`height:${this.size}px;`,
            `line-height:${this.size}px;`, `font-size:${this.fontSize}px;`,`transform:rotate(${this.degree}deg);`]
        },
        borderProperty(){
            if(this.isBordered){
                return `border: 2px solid black;`
            }else{
                return '';
            }
        }
        
        
        
        
    }
}).mount('#app');