function renderlentele( list1, list2 ) {
    let HTML = '';
    for ( let i=0; i<list1.length; i++) {
        let parametrai = list1[i];       
        let menuo = list2[i];
        
        if( !parametrai.month){
            parametrai.month = '-';
        }
        if( !parametrai.income){
            parametrai.income = '-';
        }
        if( !parametrai.expense){
            parametrai.expense = '-';
        }
        let kelintasmenesis = parametrai.month;
        
  //     let balansas = parametrai.income - parametrai.expense;
  
        HTML += `<div class="table-row">
                    <div class="cell">${parametrai.month}</div>
                    <div class="cell">${list2.kelintasmenesis}</div>
                    <div class="cell">${parametrai.income}</div>
                    <div class="cell">${parametrai.expense}</div>
                    <div class="cell">${'-'}</div>
                </div>`;
    }

    return document.querySelector('#menesiai').innerHTML = HTML;
}
