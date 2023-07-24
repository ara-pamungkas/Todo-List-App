let dataList = [];

// Menambahkan Data
function addData() {
  let input = document.getElementById("input");
  let hasilInput = input.value.trim();

  return new Promise((resolve, reject) => {
    if (hasilInput === "") {
      reject(new Error(alert("Tidak dapat menambahkan data kosong!")));
    } else {
      dataList.push(hasilInput);
      input.value = "";
      resolve();
    }
  });
}

// Membuat tampilan data
function tampilData() {
  let contentView = document.getElementById("content-view");
  contentView.innerHTML = ""

  for (let i = 0; i < dataList.length; i++) {
    let contentViewContainer = document.createElement("div");
    contentViewContainer.classList.add("content-view-container");

    let divJudul = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.textContent = dataList[i];

    let divButton = document.createElement("div");
    let buttonEdit = document.createElement("button");
    buttonEdit.style = "margin-right: 10px;"
    buttonEdit.textContent = "Edit";
    buttonEdit.addEventListener('click', function(){
        editData(i)
        tampilData()
    })

    let buttonHapus = document.createElement("button");
    buttonHapus.textContent = "Hapus";
    buttonHapus.addEventListener('click', function(){
        deleteData(i)
        tampilData()
    })

    divJudul.appendChild(h4);
    divButton.appendChild(buttonEdit);
    divButton.appendChild(buttonHapus);

    contentViewContainer.appendChild(divJudul);
    contentViewContainer.appendChild(divButton);

    contentView.appendChild(contentViewContainer);
  }
}

// Menghapus Data
function deleteData(index){
    dataList.splice(index, 1)
    console.log(dataList)
}


// Mengedit data
function editData(index){
    let input = document.getElementById('input')
    for (let i = 0; i < dataList.length; i++){
        input.value = dataList[i]
        dataList.splice(index, 1)
    }
}

// Menghandle proses pembuatan dan menampilkan data
async function handleTambahData(){
    try {
        await addData()
        tampilData()
        console.log(dataList);
    } catch (error) {
        console.error(error.message)
    }
}


// Search   
// function searchData(){
//   let contentView = document.getElementById("content-view");
  
//   for(let i = 0; i < dataList.length; i++){
//     let search = document.getElementById('search')
//     let hasilSearch = search.value.trom()

//     if(dataList[i] === hasilSearch ){
//       contentView.innerHTML = ""
//       contentView.innerHTML = dataList[i]
//     }
//   }
// }
