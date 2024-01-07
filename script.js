//  PRINT PDF ------------------------------------------------------

function getPrint() {
    window.print();
  }


//  LOGO ---------------------------------------------------------
var fileInput = document.getElementById('file-input');
document.getElementById('drop-area').addEventListener('click', function () {
  fileInput.click();
});

fileInput.addEventListener('change', function () {
  if (fileInput.files.length > 0) {
    var selectedFile = fileInput.files[0];

    var logoPreview = document.getElementById('logo-preview');
    logoPreview.src = URL.createObjectURL(selectedFile);
    console.log(URL.createObjectURL(selectedFile));

    // Réinitialisez la valeur du champ d'entrée pour que l'événement change soit déclenché à nouveau si le même fichier est sélectionné
    fileInput.value = "";
  }
});

//  DATE DE DEVIS ------------------------------------------------------------------

document
.getElementById("addInputIconTot")
.addEventListener("click", function () {
  var newRowTot = document.createElement("tr");

  var newCellTot1 = document.createElement("td");
  newCellTot1.className = "header-name";
  newCellTot1.id = "date-devis";
  newCellTot1.style.backgroundColor = "rgb(241, 243, 245)";
  newCellTot1.style.color = "black";
  var span1 = document.createElement("span");
  span1.className = "editable prevent-line-break";
  span1.textContent = "Titre";
  span1.setAttribute("contenteditable", "true");
  newCellTot1.appendChild(span1);
  
  var newCellTot2 = document.createElement("td");
  newCellTot2.className = "header-value last-tot";
  var iTot = document.createElement("i");
  iTot.className = "bi bi-dash-circle-fill";

  iTot.addEventListener("click", function () {
    var parentTot = this.closest("tr");
    if (parentTot) {
      parentTot.remove();
    }
  });
  var span2 = document.createElement("span");
  span2.className = "editable prevent-line-break";
  span2.textContent = "Contenu";
  span2.setAttribute("contenteditable", "true");
  newCellTot2.appendChild(span2);
  newCellTot2.appendChild(iTot);

  newRowTot.appendChild(newCellTot1);
  newRowTot.appendChild(newCellTot2);
  var tableTot = document.getElementById("tdTitleCreate");
  tableTot.appendChild(newRowTot);
});

//  info USER ---------------------------------------------------------------------------------

document
.getElementById("clearPhoneIcon")
.addEventListener("click", function () {
  var phoneNumberInput =
    document.getElementById("phoneNumber");
  var phoneInput = document.getElementById("phoneSection");
  var clearPhoneIcon = document.getElementById("clearPhoneIcon");
  if (phoneNumberInput) {
    phoneNumberInput.parentNode.removeChild(
      phoneNumberInput
    );
    phoneInput.parentNode.removeChild(phoneInput);
  }
  if (clearPhoneIcon) {
    clearPhoneIcon.parentNode.removeChild(clearPhoneIcon);
  }
});

var addInputIcon = document.getElementById("addInputIcon");
                if (addInputIcon) {
                  addInputIcon.addEventListener("click", function () {
                    var newInput1 = document.createElement("input");
                    newInput1.className =
                      "col-lg-8 rounded mt-3 border-0 fw-bold";
                    newInput1.type = "text";
                    newInput1.value = "En-Téte";
                    newInput1.style.marginLeft = "10px";
                    newInput1.style.marginRight = "14px";
                    newInput1.style.width = "100px";
                    var newInput2 = document.createElement("input");
                    newInput2.className = " mt-3 main-info editable";
                    newInput2.type = "text";
                    newInput2.placeholder = "Nouvel input 2";
                    newInput2.style.width = "130px";
                    newInput2.style.marginLeft = "0px";
                    // newInput2.style.border = "none";
                    var deleteIcon2 = document.createElement("i");
                    deleteIcon2.className =
                      "bi bi-dash-circle-fill clear-icon  ";

                    deleteIcon2.addEventListener("click", function () {
                      newInput2.parentNode.removeChild(newInput2);
                      newInput1.parentNode.removeChild(newInput1);
                      deleteIcon2.parentNode.removeChild(deleteIcon2);
                    });
                    var inputContainer =
                      document.getElementById("inputContainer");
                    var sect = document.createElement("div");
                    sect.className = "d-flex flex-row first";
                    sect.appendChild(newInput1);
                    sect.appendChild(newInput2);
                    sect.appendChild(deleteIcon2);
                    inputContainer.appendChild(sect);
                  });
                }

//   SECTION BAS ---------------------------------------------------------

document
.getElementById("basRemove")
.addEventListener("click", function () {
  var basSection =
    document.getElementById("bas-section");


  basSection.parentNode.removeChild(basSection);
}

);

// BANK  REMOVE -----------------------------------------------------------------

document
                  .getElementById("bankRemove")
                  .addEventListener("click", function () {
                    var basSection =
                      document.getElementById("bank");


                    bank.parentNode.removeChild(bank);
                  }

                  );


//  info client ---------------------------------------------------------------------------------
                  var addInputIconClient =
                  document.getElementById("addInputIconClient");
                if (addInputIconClient) {
                  addInputIconClient.addEventListener("click", function () {
                    var newInput10 = document.createElement("input");
                    newInput10.className =
                      "col-lg-8 rounded   mt-3 border-0 fw-bold";
                    newInput10.type = "text";
                    newInput10.value = "En-Téte";
                    newInput10.style.marginLeft = "10px";
                    newInput10.style.marginRight = "14px";
                    newInput10.style.paddingLeft = "25px";
                    newInput10.style.width = "100px";
                    var newInput20 = document.createElement("input");
                    newInput20.className = " mt-3 editable";
                    newInput20.type = "text";
                    newInput20.placeholder = "Nouvel input 2";
                    newInput20.style.width = "155px";
                    newInput20.style.marginLeft = "0px";
                    // newInput2.style.border = "none";
                    var deleteIcon20 = document.createElement("i");
                    deleteIcon20.className =
                      "bi bi-dash-circle-fill clear-icon";

                    deleteIcon20.addEventListener("click", function () {
                      newInput20.parentNode.removeChild(newInput20);
                      newInput10.parentNode.removeChild(newInput10);
                      deleteIcon20.parentNode.removeChild(deleteIcon20);
                    });
                    var inputContainerClient = document.getElementById(
                      "inputContainerClient"
                    );
                    var sect0 = document.createElement("div");
                    sect0.className = "d-flex flex-row first";
                    sect0.appendChild(newInput10);
                    sect0.appendChild(newInput20);
                    sect0.appendChild(deleteIcon20);
                    inputContainerClient.appendChild(sect0);
                  });
                }

// select COLOR --------------------------------------------------------------------------------------------------------------------------

                var colorSelect = document.getElementById("colorSelect");
                var tableHead = document.getElementById("tableHead");
                var btoon = document.getElementById("btoon");
                var thElements = tableHead.getElementsByTagName("th");
                // var dateDevis = document.getElementById('date-devis');
                var basTotal0 = document.getElementsByClassName('bas-total-0');
                var basTotal1 = document.getElementsByClassName('bas-total-1');
                var basTotal = document.getElementsByClassName('bas-total');
    
                colorSelect.addEventListener("change", function () {
                  // Mettre à jour la couleur du thead
                  colorSelect.style.backgroundColor = colorSelect.value;
                  colorSelect.style.color = 'white';
                  btoon.style.backgroundColor = colorSelect.value;
                  btoon.style.borderColor = colorSelect.value;
                  btoon.style.color = 'white';
                  // dateDevis.style.backgroundColor = colorSelect.value;
                  // dateDevis.style.color = "white";
                  tableHead.style.backgroundColor = colorSelect.value;
                  for (var i = 0; i < thElements.length; i++) {
                    thElements[i].style.color = "white";
                  }
                  for (var n = 0; n < basTotal.length; n++) {
                    basTotal[n].style.backgroundColor = colorSelect.value;
                    basTotal[n].style.color = "white";
                  }
    
                  for (var j = 0; j < basTotal0.length; j++) {
                    basTotal0[j].style.backgroundColor = colorSelect.value;
                    basTotal0[j].style.color = "white";
                  }
                  for (var k = 0; k < basTotal1.length; k++) {
                    basTotal1[k].style.backgroundColor = colorSelect.value;
                    basTotal1[k].style.color = "white";
                  }
                });




// variable TVA ----------------------------------------------------------------------------------------------

            //     document
            //   .getElementById("variable-ligne-check")
            //   .addEventListener("change", function () {
            //     toogleVariable();
            //   });

            //   function toogleVariable() {
            //     var phtTot = document.getElementById('pht');
            //     // var TotVariable = document.getElementById('TotVariable');
            //     // var tvaTotVariable = document.getElementById('tvaTotVariable');
            //      var variableLigneCheck = document.getElementById('variable-ligne-check');
            //     var tauxTva = document.getElementsByClassName('taux-tva');
            //     var tauxTvaPourcent = document.getElementsByClassName('taux-tva-pourcent');
            //     var TvaVariable = document.getElementById('tva-variable');
  
            //     if (variableLigneCheck.checked) {
            //       for (var i = 0; i < tauxTva.length; i++) {
            //         tauxTva[i].style.display = "";
            //       }
            //       for (var j = 0; j < tauxTvaPourcent.length; j++) {
            //         tauxTvaPourcent[j].style.display = "";
            //       }
            //       TvaVariable.style.display = "none";
                  
                 
            //     } else {
            //       for (var i = 0; i < tauxTva.length; i++) {
            //         tauxTva[i].style.display = "none";
            //       }
            //       for (var j = 0; j < tauxTvaPourcent.length; j++) {
            //         tauxTvaPourcent[j].style.display = "none";
            //       }
            //       TvaVariable.style.display = "";
  
            //     }
            //   }
            //   function toggleTvaDoyble(){
            //     var tvaCheck = document.getElementById("tvaCheck");
            //     var variableLigneCheck = document.getElementById('variable-ligne-check');
  
            //     if(tvaCheck.checked && variableLigneCheck.checked){
  
            //     }
            //    }

 //   TVA check ----------------------------------------------------------------------------------------------------------------

            document
            .getElementById("tvaCheck")
            .addEventListener("change", function () {
              toggleTva();
            });

            function toggleTva() {
              var colorSelect = document.getElementById("colorSelect");
              var tvaInput = document.getElementsByClassName("tva-uncheck");
              var tvaCheck = document.getElementById("tvaCheck");
              var totalTvaASupprimer = document.getElementsByClassName("tva-uncheck");
              var totalASupprimer = document.getElementsByClassName("total-uncheck");
              var tvaVariableLigne = document.getElementById('tva-variable-ligne');
              var tvaVariable = document.getElementById('tva-variable');

              var tauxTva = document.getElementsByClassName('taux-tva');
                var tauxTvaPourcent = document.getElementsByClassName('taux-tva-pourcent');
                // var TvaVariable = document.getElementById('tva-variable');

              if (tvaCheck.checked) {
                // tvaVariableLigne.style.display = "";
                // tvaVariable.style.display = "";
                // Total TVA %
                for (var i = 0; i < tauxTva.length; i++) {
                    tauxTva[i].style.display = "";
                  }
                  for (var j = 0; j < tauxTvaPourcent.length; j++) {
                    tauxTvaPourcent[j].style.display = "";
                  }
                  for (var k = 0; k < totalTvaASupprimer.length; k++) {
                    totalTvaASupprimer[k].style.display = "";
                  }
  
                  for (var z = 0; z < totalASupprimer.length; z++) {
                    totalASupprimer[z].style.display = "";
                  }

                // var tvaTr0 = document.createElement("tr");
                // tvaTr0.className = "tva-uncheck";
                // var tableTotale = document.getElementById("totalTable");
                // var tvaTd01 = document.createElement("td");
                // tvaTd01.className = "bas-total-0";
                // tvaTd01.style.backgroundColor = colorSelect.value;
                // tvaTd01.style.color = "white";
                // tvaTd01.width = "150px";
                // tvaTd01.height = "40px";
                // tvaTd01.style.borderRadius = "5px";
                // tvaTd01.style.paddingLeft = "10px";
                // tvaTd01.style.paddingBottom = "5px";
                // tvaTd01.textContent = "Total TVA(%)";

                // // var totoHt = document.getElementById('totHT').value;
                // var tvaPoucen = document.createElement("td");
                // var tvaTd02 = document.createElement("input");
               
                // tvaTd02.style.width='77px';
                // tvaTd02.style.marginLeft='50px';
                // tvaTd02.value ='0.00';
                // tvaTd02.style.border='none';
                // tvaTd02.setAttribute("readonly", "");
                // tvaTd02.id='totFin';

                // var tvaTd03 = document.createElement("span");
                // tvaTd03.className = "total";
                // tvaTd03.style.borderColor = "black";
                // tvaTd03.style.paddingLeft = "0px";
                // tvaTd03.textContent = "MAD";

                // tvaPoucen.appendChild(tvaTd02);
                // tvaPoucen.appendChild(tvaTd03);

                // tvaTr0.appendChild(tvaTd01);
                // tvaTr0.appendChild(tvaPoucen);
                
                // // Total
                

                // var tvaTr1 = document.createElement("tr");
                // tvaTr1.className = "total-uncheck";
                // var tableTotale = document.getElementById("totalTable");
                // var tvaTd11 = document.createElement("td");
                // tvaTd11.style.width = "250px";
                
                // tvaTd11.className = "bas-total-1";
                // tvaTd11.style.backgroundColor = colorSelect.value;
                // tvaTd11.style.color = "white";
                
                // tvaTd11.height = "40px";
                // tvaTd11.style.borderRadius = "5px";
                // tvaTd11.style.paddingLeft = "10px";
                // tvaTd11.style.paddingBottom = "5px";
                // tvaTd11.textContent = "Total";

                // var tvaTd12 = document.createElement("td");
                // var tvaTd1203 = document.createElement("input");
                // tvaTd1203.className = "total";
                // tvaTd1203.style.borderColor = "black";
                // tvaTd1203.style.width='77px';
                // tvaTd1203.style.marginLeft='50px';
                // tvaTd1203.value='0.00';
                // tvaTd1203.style.border='none';
                // tvaTd1203.id = "to";
                // tvaTd1203.setAttribute("readonly", "");

                // var tvaTd1204 = document.createElement("span");
                // tvaTd1204.className = "total";
                // tvaTd1204.style.borderColor = "black";
                // tvaTd1204.style.paddingLeft = "0px";
                // tvaTd1204.textContent = "MAD";


                
                // tvaTd12.appendChild(tvaTd1203);
                // tvaTd12.appendChild(tvaTd1204);

                // tvaTr1.appendChild(tvaTd11);
                // tvaTr1.appendChild(tvaTd12);

                // var tableTotale = document.getElementById("totalTable");
                // tableTotale.appendChild(tvaTr0);
                // tableTotale.appendChild(tvaTr1);



              } else {

                for (var i = 0; i < tauxTva.length; i++) {
                    tauxTva[i].style.display = "none";
                  }
                  for (var j = 0; j < tauxTvaPourcent.length; j++) {
                    tauxTvaPourcent[j].style.display = "none";
                  }

                // tvaVariableLigne.style.display = "none";
                // tvaVariable.style.display = "none";

                for (var k = 0; k < totalTvaASupprimer.length; k++) {
                    totalTvaASupprimer[k].style.display = "none";
                  }
  
                  for (var z = 0; z < totalASupprimer.length; z++) {
                    totalASupprimer[z].style.display = "none";
                  }


              }

            }

 //   QUANTITY check --------------------------------------------------------------------------------------------------------

                            document
                            .getElementById("flexCheckChecked")
                            .addEventListener("change", function () {
                            toggleColumns();
                            });
                        
                function toggleColumns() {
                    var checkbox = document.getElementById("flexCheckChecked");
                    var unitCheck = document.getElementById("unit-check");
                    var table = document.getElementById("DevTable");
                    var qChe = document.getElementsByClassName("q-che");
                    var unite = document.getElementById("unite");
                    var unitey = document.getElementById("unity");

                    if (checkbox.checked) {
                    for (var i = 0; i < qChe.length; i++) {
                        qChe[i].style.display = "";
                    }

                  
                    } else {
                    for (var i = 0; i < qChe.length; i++) {
                        qChe[i].style.display = "none";
                    }

                    
                    }
                }

 // unit check -------------------------------------------------------------------------------------------------------------------------

            // document
            //   .getElementById("unit-check")
            //   .addEventListener("change", function () {
            //     toggleUnitColums();
            //   });

            //   function toggleUnitColums() {
            //     var unitCheck = document.getElementById("unit-check");
            //     var unitChek = document.getElementsByClassName("unity");
  
            //     if (unitCheck.checked) {
            //       for (var i = 0; i < unitChek.length; i++) {
            //         unitChek[i].style.display = "";
            //       }
            //     } else {
            //       for (var i = 0; i < unitChek.length; i++) {
            //         unitChek[i].style.display = "none";
            //       }
            //     }
            //   }



//    add ligne à table --------------------------------------------------------------------------------------------------------

            
                document
              .getElementById("addTdIconDev")
              .addEventListener("click", function () {
                var devTr = document.createElement("tr");
                devTr.style.position = "relative";
                devTr.className = 'ligne';
                devTr.style.border = "1px solid #e7e6e6";
                devTr.style.padding = "2px 5px";

                var devTd1 = document.createElement("td");
                devTd1.className = "description";

                var devSpan1 = document.createElement("span");
                devSpan1.className = "editable";
                devSpan1.setAttribute("contenteditable", "true");
                devSpan1.textContent = "Description";

                var devBr1 = document.createElement("br");

                var devSpan12 = document.createElement("span");
                devSpan12.className = "editable";
                devSpan12.setAttribute("contenteditable", "true");
                devSpan12.textContent = "Description de la prestation";

                devTd1.appendChild(devSpan1);
                devTd1.appendChild(devBr1);
                devTd1.appendChild(devSpan12);

                // Unité
                var devTd00 = document.createElement("td");
                devTd00.className = "quanti unity";
                devTd00.style.display = "none";

                var devSpan00 = document.createElement("span");
                devSpan00.className = "editable prevent-line-break out";
                devSpan00.setAttribute("contenteditable", "true");
                devSpan00.textContent = "----";

                devTd00.appendChild(devSpan00);

                // Quantité

                var devTd2 = document.createElement("td");
                devTd2.className = "quanti quantity q-che";

                var devSpan2 = document.createElement("input");
                devSpan2.value = "1";
                devSpan2.className = "out qty";
                devSpan2.style.width = "100px";
                devSpan2.style.textAlign = "center";
                devSpan2.style.border = 'none';
                devSpan2.setAttribute('oninput', 'updateTotal()');
                devSpan2.setAttribute("contenteditable", "true");

                devTd2.appendChild(devSpan2);

                // Prix Unitaire
                var devTd3 = document.createElement("td");
                devTd3.className = "unit-price quanti prix-unitaire q-che";

                var devSpan31 = document.createElement("input");
                devSpan31.value = "0.00";
                devSpan31.className = "out pun";
                devSpan31.style.width = "50px";
                devSpan31.style.marginLeft="10px";
                devSpan31.style.border = 'none';
                devSpan31.setAttribute('oninput', 'updateTotal()');
                devSpan31.setAttribute("contenteditable", "true");

                var devSpan32 = document.createElement("span");
                devSpan32.textContent = "MAD";
                devSpan32.style.marginRight="10px";
                devSpan32.style.paddingRight="10px";
                devSpan32.style.marginLeft="5px";
                

                devTd3.appendChild(devSpan31);
                devTd3.appendChild(devSpan32);


                // TVA variable par ligne
                var devTd0031 = document.createElement("td");
                devTd0031.className = "taux-tva";

                var devSpan3331 = document.createElement("input");
                devSpan3331.className = "out editable prevent-line-break totTvaPo";
                devSpan3331.setAttribute("contenteditable", "true");
                devSpan3331.setAttribute("oninput", "updateTotal()");
                
                devSpan3331.value = "0";
                devSpan3331.style.border ="none";
                devSpan3331.style.width ="64px";
                var devSpan3332 = document.createElement("span");
                devSpan3332.textContent = "%";
                devSpan3332.style.marginLeft ="15px";
              

                devTd0031.appendChild(devSpan3331);
                devTd0031.appendChild(devSpan3332);
                // Total
                var devTd0032 = document.createElement("td");
                devTd0032.className = "taux-tva-pourcent";
                var devSpan3311 = document.createElement("input");
                devSpan3311.type="text";

                devSpan3311.className ="out TotVariable";

                devSpan3311.value = "0.00";
                // devSpan3311.setAttribute("readonly", "");
                devSpan3311.style.width="73px";
                devSpan3311.style.marginLeft="5px";
                devSpan3311.style.border="none";
                // devSpan3311.setAttribute('readonly', '');
                var devSpan3322 = document.createElement("span");
                devSpan3322.textContent = "MAD";
                devSpan3322.style.marginLeft = "15px";

                devTd0032.appendChild(devSpan3311);
                devTd0032.appendChild(devSpan3322);
              

                // total Ht
                var devTd4 = document.createElement("td");

                var devSpan41 = document.createElement("input");
                devSpan41.value = "0.00";
                devSpan41.className = "out pht"; 
                devSpan41.type = "text";
                // devSpan41.className="qty";
                devSpan41.style.width = "100px";
                devSpan41.style.marginLeft = "12px";
                
                devSpan41.style.border = 'none';
                devSpan41.oninput = "updateTotal()";
              
                devSpan41.setAttribute('readonly', '');
                var devSpan42 = document.createElement("span");
                devSpan42.textContent = "MAD";
                devSpan42.style.marginLeft = "6px";
                var devDiv42 = document.createElement("div");
                devDiv42.className = "last-tab";
                var devDiv411 = document.createElement("i");
                devDiv411.className = "bi bi-dash-circle-fill";

                devDiv411.addEventListener("click", function () {
                  // Trouver le parent tr de l'icône et le supprimer
                  var parentRowDev = this.closest("tr");
                  if (parentRowDev) {
                    parentRowDev.remove();
                  }
                });

                devTd4.appendChild(devSpan41);
                devTd4.appendChild(devSpan42);
                devDiv42.appendChild(devDiv411);
                devTd4.appendChild(devDiv42);

                devTr.appendChild(devTd1);
                devTr.appendChild(devTd00);
                devTr.appendChild(devTd2);
                devTr.appendChild(devTd3);
                devTr.appendChild(devTd0031);
                devTr.appendChild(devTd0032);
                devTr.appendChild(devTd4);


                var tableBodyDev = document.getElementById("tdCreateDev");
                tableBodyDev.appendChild(devTr);
                // Applique l'événement de toggleColumns
                toggleColumns();
                toggleTva();
                // toogleVariable();
                updateTotal();
                

              });

 //   calcule TOTAL --------------------------------------------------------------------------------------------------

            function updateTotal() {
                // Récupérer toutes les lignes du tableau
                var lignes = document.querySelectorAll('#DevTable tbody tr');
                var tvaVL =  document.getElementById('tvL');
                var sumPrixHT = 0; 
                var sumTVA = 0;
                var totl = 0;
                
                
                // Parcourir chaque ligne et mettre à jour les totaux
                lignes.forEach(function (ligne) {
                   
                var quantite = parseFloat(ligne.querySelector('.qty').value) || 0;
                var prixUnitaire = parseFloat(ligne.querySelector('.pun').value) || 0;
                var tvaTotVariable = parseFloat(ligne.querySelector('.totTvaPo').value) || 0;
                var prixHT = quantite * prixUnitaire || 0;
                var PrIxT = (prixHT*tvaTotVariable)/100;
                var prixToTva = (prixHT*tvaTotVariable)/100 + prixHT;
                
                
                
                ligne.querySelector('.pht').value = prixHT.toFixed(2);
                
                ligne.querySelector('.TotVariable').value = prixToTva;
                        // ligne.querySelector('.TotVariable').value = prixToTva;
                sumPrixHT += prixHT;
                sumTVA += PrIxT;
                
                totl=sumPrixHT+sumTVA;
                });
                // var tutu =  parseFloat((sumPrixHT * 0.20).toFixed(2));
                document.getElementById('totHT').value = sumPrixHT.toFixed(2);
              
                document.getElementById('totFin').value = sumTVA.toFixed(2);
                document.getElementById('to').value = totl.toFixed(2);
                // console.log('Debug: totTvar element',parseFloat(document.getElementById('totTvar'))||0 );
                // document.getElementById('totTvar').value = tutu;
            }
            

            document.addEventListener('DOMContentLoaded',function(){
            updateTotal();
            
                    });

 
           