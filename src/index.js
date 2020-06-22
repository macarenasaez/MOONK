/*let coll = document.getElementsByClassName("collapsible");
                        let i;
                        
                        for (i = 0; i < coll.length; i++) {
                          coll[i].addEventListener("click", function() {
                            this.classList.toggle("active");
                            let content = this.nextElementSibling;
                            if (content.style.maxHeight){
                              content.style.maxHeight = null;
                            } else {
                              content.style.maxHeight = content.scrollHeight + "px";
                            } 
                          });
                        }*/

 //Variables
const container = document.querySelector('.contenido');
const question1 = document.getElementById('question1');

//listener
question1.addEventListener('click', () => {
    const row = document.createElement('div')
    row.innerHTML = `
    <div class="answer-container answer">
    <div class="answers-section">
        <h3 class="title">${question1.textContent}</h3>
        <div class="answer-divider"></div>
        </div>
        <p>
                        If you had thought about the possibility of 
                        carrying around a virtually unlimited supply of 
                        music ten years ago, it would have seemed a bit 
                        futuristic, but it has all happened, and now 
                        all we have to do when we get tired of our present 
                        music collection is download free song for Ipod. 
                        This could however, be the start of a few problems…
                        <br><br>
                        Your computer picks up a virus. 
                        You did an internet search, looking to 
                        download free song for Ipod, and, totally without 
                        knowing, you downloaded some nasty 
                        spyware or malware from a dodgy p2p site. 
                        Your laptop has now stopped working,  
                        version of songs etc, but you have probably 
                        noticed that you often download a file, 
                        and it is completely different from what it is 
                        supposed to be. In case you have ever 
                        <br><br>
                        It is illegal. It is against the law to 
                        download from a P2P site. It could lead to your arrest. 
                        It is not difficult with modern equipment for 
                        law enforcement officers to locate your IP address, 
                        and then locate you. World governments are becoming 
                        ever more proactive in combating this – 
                        it will not be long before you are found out if 
                        you are using P2P . 
                        You will have to think about whether 
                        it is worth risking prison or possibly a huge fine, 
                        just to download free song for Ipod. 
                        I’m sure it won’t be worth it for many. 
                    </p>
                    </div>

    `
    container.innerHTML= "";
    container.appendChild(row);
})



//VARIABLES
let cont = document.querySelector('.contenido');
let question2 = document.getElementById('question2');


question2.addEventListener('click',() =>{
    const row = document.createElement('div')
    row.innerHTML = `
    <div class="answer-container answer">
    <div class="answers-section">
        <h3 class="title">${question2.textContent}</h3>
        <div class="answer-divider"></div>
        </div>
    <p>
    If you had thought about the possibility of 
    carrying around a virtually unlimited supply of 
    music ten years ago, it would have seemed a bit 
    futuristic, but it has all happened, and now 
    all we have to do when we get tired of our present 
    music collection is download free song for Ipod. 
    This could however, be the start of a few problems…
    <br><br>
    Your computer picks up a virus. 
    You did an internet search, looking to 
    download free song for Ipod, and, totally without 
    knowing, you downloaded some nasty 
    spyware or malware from a dodgy p2p site. 
    Your laptop has now stopped working,  
    version of songs etc, but you have probably 
    noticed that you often download a file, 
    and it is completely different from what it is 
    supposed to be. In case you have ever 
</p>
</div>

    `

container.innerHTML= "";
    container.appendChild(row)
})

//VARIABLES
let conta = document.querySelector('.contenido');
let question3 = document.getElementById('question3');


question3.addEventListener('click',() =>{
    const row = document.createElement('div')
    row.innerHTML = `
    <div class="answer-container answer">
    <div class="answers-section">
        <h3 class="title">${question3.textContent}</h3>
        <div class="answer-divider"></div>
        </div>
    <p>
                        Your computer picks up a virus. 
                        You did an internet search, looking to 
                        download free song for Ipod, and, totally without 
                        knowing, you downloaded some nasty 
                        spyware or malware from a dodgy p2p site. 
                        Your laptop has now stopped working,  
                        version of songs etc, but you have probably 
                        noticed that you often download a file, 
                        and it is completely different from what it is 
                        supposed to be. In case you have ever 
                        <br><br>
                        It is illegal. It is against the law to 
                        download from a P2P site. It could lead to your arrest. 
                        It is not difficult with modern equipment for 
                        law enforcement officers to locate your IP address, 
                        and then locate you. World governments are becoming 
                        ever more proactive in combating this – 
                        it will not be long before you are found out if 
                        you are using P2P . 
                        You will have to think about whether 
                        it is worth risking prison or possibly a huge fine, 
                        just to download free song for Ipod. 
                        I’m sure it won’t be worth it for many. 
                    </p>
                    </div>
    `

    container.innerHTML= "";
    container.appendChild(row)
})


//VARIABLES
let contai = document.querySelector('.contenido');
let question4 = document.getElementById('question4');

//LIsTENER
question4.addEventListener('click',() =>{
    const row = document.createElement('div')
    row.innerHTML = `
    <div class="answer-container answer">
    <div class="answers-section">
    <h3 class="title">${question4.textContent}</h3>
    <div class="answer-divider"></div>
    </div>
    <p>
    If you had thought about the possibility of 
    carrying around a virtually unlimited supply of 
    music ten years ago, it would have seemed a bit 
    futuristic, but it has all happened, and now 
    all we have to do when we get tired of our present 
    music collection is download free song for Ipod. 
    This could however, be the start of a few problems…
    <br><br>
    It is illegal. It is against the law to 
    download from a P2P site. It could lead to your arrest. 
    It is not difficult with modern equipment for 
    law enforcement officers to locate your IP address, 
    and then locate you. World governments are becoming 
    ever more proactive in combating this – 
    it will not be long before you are found out if 
    you are using P2P . 
    You will have to think about whether 
    it is worth risking prison or possibly a huge fine, 
    just to download free song for Ipod. 
    I’m sure it won’t be worth it for many. 
</p>
</div>

    `

    container.innerHTML= "";
    container.appendChild(row)
})


//VARIABLES
let contain = document.querySelector('.contenido');
let question5 = document.getElementById('question5');


question5.addEventListener('click',() =>{
    const row = document.createElement('div')
    row.innerHTML = `
    <div class="answer-container answer">
    <div class="answers-section">
    <h3 class="title">${question5.textContent}</h3>
    <div class="answer-divider"></div>
    </div>
    <p>
    If you had thought about the possibility of 
    carrying around a virtually unlimited supply of 
    music ten years ago, it would have seemed a bit 
    futuristic, but it has all happened, and now 
    all we have to do when we get tired of our present 
    music collection is download free song for Ipod. 
    This could however, be the start of a few problems…
    <br><br>
    Your computer picks up a virus. 
    You did an internet search, looking to 
    download free song for Ipod, and, totally without 
    knowing, you downloaded some nasty 
    spyware or malware from a dodgy p2p site. 
    Your laptop has now stopped working,  
    version of songs etc, but you have probably 
    noticed that you often download a file, 
    and it is completely different from what it is 
    supposed to be. In case you have ever 
    <br><br>
    It is illegal. It is against the law to 
    download from a P2P site. It could lead to your arrest. 
    It is not difficult with modern equipment for 
    law enforcement officers to locate your IP address, 
    and then locate you. World governments are becoming 
    ever more proactive in combating this – 
    it will not be long before you are found out if 
    you are using P2P . 
    You will have to think about whether 
    it is worth risking prison or possibly a huge fine, 
    just to download free song for Ipod. 
    I’m sure it won’t be worth it for many. 
    </p>
    </div>
    `

    container.innerHTML= "";
    container.appendChild(row)
})

