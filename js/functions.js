function renderlentele( list1, list2 ) {
    let HTML = '';

    for ( let i=0; i<list1.length; i++) {
        for ( let j=0; j<list1.length-1; j++) {
            if(list1[j].month > list1[j+1].month){
                let tarp = list1[j];
                list1[j] = list1[j+1];
                list1[j+1] = tarp;               
            }
        }
    }
    let iplaukos = 0;
    let islaidos = 0;
    let skirtumas = 0; 
    for ( let i=0; i<list1.length; i++) {
        let parametrai = list1[i];    
        
        // jei nera tai dedu -
        if( !parametrai.month){
            parametrai.month = '-';
        }
        if( !parametrai.income){
            parametrai.income = '-';
        }
        if( !parametrai.expense){
            parametrai.expense = '-';
        }
        let kelintasmenesis = parametrai.month-1;
          
        // skaiciuoju balansa
        let balansas = parametrai.income - parametrai.expense;
        // jei nera iplauku arba islaidu arba abieju
        if(parametrai.income === '-'){
            balansas = -1 * parametrai.expense;
        }
        if(parametrai.expense === '-'){
            balansas = parametrai.income;
        }
        if(parametrai.income === '-' && parametrai.expense === '-'){
            balansas = '-';
        }

        // footerio sumos
        if(parametrai.income !== '-'){
            iplaukos += parametrai.income;
        }
        if(parametrai.expense !== '-'){
            islaidos += parametrai.expense;
        }
        if(balansas !== '-'){
            skirtumas += balansas;
        }

        // surenku lentele
        HTML += `<div class="table-row">
                    <div class="cell">${parametrai.month}</div>
                    <div class="cell">${list2[kelintasmenesis]}</div>
                    <div class="cell">${parametrai.income} ${parametrai.income === '-' ? '' : 'Eur'}</div>
                    <div class="cell">${parametrai.expense} ${parametrai.expense === '-' ? '' : 'Eur'}</div>
                    <div class="cell">${balansas} ${balansas === '-' ? '' : 'Eur'}</div>
                </div>`;
        }
         document.querySelector('#menesiai').innerHTML = HTML;

    HTML = '';
        // surenku lenteles footeri
        HTML = `<div class="cell"></div>
                <div class="cell"></div>
                <div class="cell">${iplaukos} ${iplaukos === '-' ? '' : 'Eur'}</div>
                <div class="cell">${islaidos} ${islaidos === '-' ? '' : 'Eur'}</div>
                <div class="cell">${skirtumas} ${skirtumas  === '-' ? '' : 'Eur'}</div>`;

        document.querySelector('#footer').innerHTML = HTML;
        }


