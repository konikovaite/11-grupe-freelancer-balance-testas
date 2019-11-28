function renderlentele( list1, list2 ) {
    let HTML = '';
    let iplaukos = 0;
    let islaidos = 0;
    let skirtumas = 0;

    // menesiu rusiavimas is eiles
    for ( let i=0; i<list1.length; i++) {
        for ( let j=0; j<list1.length-1; j++) {
            if(list1[j].month > list1[j+1].month){
                let tarp = list1[j];
                list1[j] = list1[j+1];
                list1[j+1] = tarp;               
            }
        }
    }
    
    let m1 = list1[0].income;
    let pav1 = list2[0];
    let m2 = list1[0].income;
    let pav2 = list2[0];
    let m3 = list1[0].expense;
    let pav3 = list2[0];
    let m4 = list1[0].expense;
    let pav4 = list2[0];

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

        // summary menesiu pavadinimai
        // mėnuo, kai buvo mažiausiai uždirbta,bet ne lygu nuliui
        if( parametrai.income < m1 &&
            parametrai.income > 0){
                m1 = parametrai.income;
                pav1 = list2[i];
        }
        // mėnuo, kai buvo daugiausiai uždirbta
        if( parametrai.income > m2){
                m2 = parametrai.income;
                pav2 = list2[i];
        }
        // mėnuo, kai buvo mažiausiai išlaidos, bet ne lygios nuliui
        if( parametrai.expense < m3 &&
            parametrai.expense > 0){
                m3 = parametrai.expense;
                pav3 = list2[i];
        }
        // mėnuo, kai buvo didžiausios išlaidos
        if( parametrai.expense > m4){
                m4 = parametrai.expense;
                pav4 = list2[i];
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

    HTML = '';
        // summary
        HTML = `<div class="item">
                    <div class="value">${pav1}</div>
                    <div class="title">mėnuo, kai buvo mažiausiai uždirbta,bet ne lygu nuliui</div>
                </div>
                <div class="item">
                    <div class="value">${pav2}</div>
                    <div class="title">mėnuo, kai buvo daugiausiai uždirbta</div>
                </div>
                <div class="item">
                    <div class="value">${pav3}</div>
                    <div class="title">mėnuo, kai buvo mažiausiai išlaidos, bet ne lygios nuliui</div>
                </div>
                <div class="item">
                    <div class="value">${pav4}</div>
                    <div class="title">mėnuo, kai buvo didžiausios išlaidos</div>
                </div>`;

        document.querySelector('#summary').innerHTML = HTML;








}


