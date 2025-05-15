let qanak_qayleri=0;
let qanak_qayleri1=0;
let minute=0;
let second=0;
let mil=0;
let minute_DFS=0;
let second_DFS=0;
let mil_DFS=0;
let minute1=0;
let second1=0;
let mil1=0;
let jamanak;
let jamanak1;
let erexa_DFS;
let erexa_GBFS;
let erexa_BFS;
function timer1(){
	let we=document.getElementById("timer1");
	jamanak1=setInterval(() => {
		if(second1===60){
			minute1++;
			second1=0;
		}
		if (mil1==100) {
			mil1=0;
			second1++;
		}
		if (second1<10) {
			if (mil1<10) {
				we.innerHTML = `Time: 0${minute1} min 0${second1} sec 00${mil1++} mil`;
			}else  {
				we.innerHTML = `Time: 0${minute1} min 0${second1} sec 0${mil1++} mil`;
			}
		}else{
			if (mil<10) {
				we.innerHTML = `Time: 0${minute1} min ${second1} sec 00${mil1++} mil`;
			}else  {
				we.innerHTML = `Time: 0${minute1} min ${second1} sec 0${mil1++} mil`;
			}
		}
		
	}, 10);
}
function timer_DFS(){
	let we=document.getElementById("timer_DFS");
	jamanak_DFS=setInterval(() => {
		if(second_DFS===60){
			minute_DFS++;
			second_DFS=0;
		}
		if (mil_DFS==100) {
			mil_DFS=0;
			second_DFS++;
		}
		if (second_DFS<10) {
			if (mil_DFS<10) {
				we.innerHTML = `Time: 0${minute_DFS} min 0${second_DFS} sec 00${mil_DFS++} mil`;
			}else  {
				we.innerHTML = `Time: 0${minute_DFS} min 0${second_DFS} sec 0${mil_DFS++} mil`;
			}
		}else{
			if (mil_DFS<10) {
				we.innerHTML = `Time: 0${minute_DFS} min ${second_DFS} sec 00${mil_DFS++} mil`;
			}else  {
				we.innerHTML = `Time: 0${minute_DFS} min ${second_DFS} sec 0${mil_DFS++} mil`;
			}
		}
		
	}, 10);
}
function timer(){
	let we=document.getElementById("timer");
	jamanak=setInterval(() => {
		if(second===60){
			minute++;
			second=0;
		}
		if (mil==100) {
			mil=0;
			second++;
		}
		if (second<10) {
			if (mil<10) {
				we.innerHTML = `Time: 0${minute} min 0${second} sec 00${mil++} mil`;
			}else  {
				we.innerHTML = `Time: 0${minute} min 0${second} sec 0${mil++} mil`;
			}
		}else{
			if (mil<10) {
				we.innerHTML = `Time: 0${minute} min ${second} sec 00${mil++} mil`;
			}else  {
				we.innerHTML = `Time: 0${minute} min ${second} sec 0${mil++} mil`;
			}
		}
		
	}, 10);
}
let time=250;
let qayler=0;
let qayler_DFS=0;
let chanapare_DFS=0;
let chapser=0;
let uxutyun=null;
let popoxutyun=0;
let avenaverjinket=null;
let chaps=12;
let zapas=0;
let koxq=0;
let asdf=document.createElement("table");
let asdfg=document.createElement("table");
let t_DFS=document.createElement("table");
let element=document.getElementById("mek");
let element1=document.getElementById("erkus");
let element_DFS=document.getElementById("ereq");
for(let i=1; i<chaps+1; i++){
    let ghjk=document.createElement("tr");
    let ghjkl=document.createElement("tr");
    let tox_DFS=document.createElement("tr");
    for(let j=1; j<chaps+1; j++){
    	let qwer=document.createElement("td");
    	let qwert=document.createElement("td");
    	let s_DFS=document.createElement("td");
    	qwer.id=`table2,${i}_${j}`;
		qwer.onclick= function (event) {
	      event.preventDefault();
	      avel(this);
	    };
		qwer.onmouseover = function (event) {
	      event.preventDefault();
	      avel1(this);
	    };
		qwer.oncontextmenu = function (event) {
	      event.preventDefault();
	      sexmel(this);
	    };
		qwert.id=`table1,${i}_${j}`;
		qwert.onclick= function (event) {
	      event.preventDefault();
	      avel(this);
	    };
		qwert.onmouseover = function (event) {
	      event.preventDefault();
	      avel1(this);
	    };
		qwert.oncontextmenu = function (event) {
	      event.preventDefault();
	      sexmel(this);
	    };
	    s_DFS.id=`table3,${i}_${j}`;
		s_DFS.onclick= function (event) {
	      event.preventDefault();
	      avel(this);
	    };
		s_DFS.onmouseover = function (event) {
	      event.preventDefault();
	      avel1(this);
	    };
		s_DFS.oncontextmenu = function (event) {
	      event.preventDefault();
	      sexmel(this);
	    };
	    if (i==1 || i==chaps || j==1 || j==chaps) {
              	qwer.className="vandak";
				qwert.className="vandak";
				s_DFS.className="vandak";
        }else if (i%2==0 && j%2==0) {
        	
            let qq = Math.random() * 25;
	        if (qq > 9) {
	            koxq=0;
	            let mn1=asdf.children[i-2];
	            mn1.children[j-1].className= "vandak";
	            let mn2=asdfg.children[i-2];
	            mn2.children[j-1].className= "vandak";
	            let mn3=t_DFS.children[i-2];
	            mn3.children[j-1].className= "vandak";
	        }else {
	            if (koxq>=4) {
	              	koxq=0;

		            let mn1=asdf.children[i-2];
		            mn1.children[j-1].className= "vandak";
		            let mn2=asdfg.children[i-2];
		            mn2.children[j-1].className= "vandak";
		            let mn3=t_DFS.children[i-2];
		            mn3.children[j-1].className= "vandak";
	            }else{

		            koxq+=2;
		            ghjk.children[j-2].className= "vandak";
				    ghjkl.children[j-2].className= "vandak";
				    tox_DFS.children[j-2].className= "vandak";
	            }
	                
	        }
	        qwer.className="vandak";
			qwert.className="vandak";
			s_DFS.className="vandak";

        }else{
          	qwer.className="datark";
			qwert.className="datark";
			s_DFS.className="datark";
        }
		
    	
    	erexa_DFS=s_DFS;
    	erexa_BFS=qwert;
    	erexa_GBFS=qwer;
      	ghjk.appendChild(qwer);
      	ghjkl.appendChild(qwert);
      	tox_DFS.appendChild(s_DFS);
    }
    asdf.appendChild(ghjk);
    asdfg.appendChild(ghjkl);
    t_DFS.appendChild(tox_DFS);
}
element1.appendChild(asdf);
element.appendChild(asdfg);
element_DFS.appendChild(t_DFS);
//---start index---------
let skzbnaket;
let chap=1;
//--finish index------
let verjnaket;
let skzbnaket1;
let verjnaket1;
//-----masiv for trip----
let masiv1=[];
//------node for canapar-----
class node{
		
	constructor(l){
		this.left=null;
		this.right=null;
		this.top=null;
		this.top_right=null;
		this.top_left=null;
		this.bottom=null;
		this.bottom_left=null;
		this.bottom_right=null;
		this.prev=null;
		this.value=l;
	}
}
//---------class canapar for trip
class canapar{
	constructor(){
		this.root=null;

	}
	//----push start---------
	push(a){
		
		this.root=new node(a);
		avenaverjinket=this.root;
		masiv1.push(this.root);
	}
	//-------find b in chanaper.node.value------

	find(a){
		for(let y=0; y<masiv1.length; y++){
			let e=masiv1[y];
			if(e.value==a){
				return e;
			}
		}
		return null;
	}
	//---------push left right top and botton
	push_left(v, b){
		if (v==this.root.value) {
			this.root.left=new node(b);
			this.root.left.right=this.root;
			this.root.left.prev=this.root;
			masiv1.push(this.root.left);
			avenaverjinket=this.root.left;
		}else{
			let w=this.find(v);
			if (w!=null) {
				w.left=new node(b);
				w.left.right=w;
				w.left.prev=w;
				masiv1.push(w.left);
				avenaverjinket=w.left;
			}
		}
	}
	push_right(a, b){
		if (a==this.root.value) {
			this.root.right=new node(b);
			this.root.right.left=this.root;
			this.root.right.prev=this.root;
			masiv1.push(this.root.right);
			avenaverjinket=this.root.right;
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.right=new node(b);
				masiv1.push(w.right);
				w.right.left=w;
				w.right.prev=w;
				avenaverjinket=w.right;
			}
		}
	}
	push_top(a, b){
		if (a==this.root.value) {
			this.root.top=new node(b);
			this.root.top.bottom=this.root;
			this.root.top.prev=this.root;
			masiv1.push(this.root.top);
			avenaverjinket=this.root.top;
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.top=new node(b);
				w.top.bottom=w;
				w.top.prev=w;
				masiv1.push(w.top);
				avenaverjinket=w.top;
			}
		}
	}
	push_top_right(a, b){
		if (a==this.root.value) {
			this.root.top_right=new node(b);
			this.root.top_right.bottom_left=this.root;
			this.root.top_right.prev=this.root;
			masiv1.push(this.root.top_right);
			avenaverjinket=this.root.top_right;
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.top_right=new node(b);
				w.top_right.bottom_left=w;
				w.top_right.prev=w;
				masiv1.push(w.top_right);
				avenaverjinket=w.top_right;
			}
		}
	}
	push_top_left(a, b){
		if (a==this.root.value) {
			this.root.top_left=new node(b);
			this.root.top_left.bottom_right=this.root;
			this.root.top_left.prev=this.root;
			masiv1.push(this.root.top_left);
			avenaverjinket=this.root.top_left;
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.top_left=new node(b);
				w.top_left.bottom_right=w;
				w.top_left.prev=w;
				masiv1.push(w.top_left);
				avenaverjinket=w.top_left;
			}
		}
	}
	push_bottom(a, b){
		if (a==this.root.value) {
			this.root.bottom=new node(b);
			this.root.bottom.top=this.root;
			this.root.bottom.prev=this.root;
			masiv1.push(this.root.bottom);
			avenaverjinket=this.root.bottom;
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.bottom=new node(b);
				w.bottom.top=w;
				w.bottom.prev=w;
				masiv1.push(w.bottom);
				avenaverjinket=w.bottom;
			}
		}
	}
	push_bottom_left(a, b){
		if (a==this.root.value) {
			this.root.bottom_left=new node(b);
			this.root.bottom_left.top_right=this.root;
			this.root.bottom_left.prev=this.root;
			masiv1.push(this.root.bottom_left);
			avenaverjinket=this.root.bottom_left;
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.bottom_left=new node(b);
				w.bottom_left.top_right=w;
				w.bottom_left.prev=w;
				masiv1.push(w.bottom_left);
				avenaverjinket=w.bottom_left;
			}
		}
	}
	push_bottom_right(a, b){
		if (a==this.root.value) {
			this.root.bottom_right=new node(b);
			this.root.bottom_right.top_left=this.root;
			this.root.bottom_right.prev=this.root;
			masiv1.push(this.root.bottom_right);
			avenaverjinket=this.root.bottom_right;
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.bottom_right=new node(b);
				w.bottom_right.top_left=w;
				w.bottom_right.prev=w;
				masiv1.push(w.bottom_right);
				avenaverjinket=w.bottom_right;
			}
		}
	}
	print_verj(){
		let q=this.find(verjnaket1);
		if (q!=null) {
			while(q.value!=skzbnaket1){
				q.value.style.backgroundColor="red";
				qanak_qayleri++;
				q=q.prev;
			}
		}
			
		
	}
}
//------------node for Priority_Queue----------
let mard;
class Node{
	constructor(l){
		this.value=l;
		this.next=null;
		this.prev=null;
	}
}

//-------Priority_Queue for DFS-------------
//------այստե ես այնքան եմ փոփոծություն արել որ դարձել է deque-----
class Priority_Queue{
	constructor(){
		this.head=null;
		this.tail=null;
	}
	push(q){
		if(this.head==null){
			this.head=new Node(q);
			this.tail=this.head;
		}else{
			this.tail.next=new Node(q);
			this.tail.next.prev=this.tail;
			this.tail=this.tail.next;
		}
	}
	push1(q){
		if(this.head==null){
			this.head=new Node(q);
			this.tail=this.head;
		}else{
			this.head.prev=new Node(q);
			this.head.prev.next=this.head;
			this.head=this.head.prev;
		}
	}
	//---------pop function start---
	//--returns smallest element ---- orinaki hamar
	pop(){
		if(this.head==null){
			return null;
		}else if(this.head==this.tail){
			let yyy=this.head.value;
			this.head=null;
			this.tail=null;
			return yyy;
		}else{
			let yyy=this.head.value;
			this.head=this.head.next;
			this.head.prev=null;
			return yyy;
		}
	}
	pop1(){
		if(this.head==null){
			return null;
		}else if(this.head==this.tail){
			let yyy=this.head.value;
			this.head=null;
			this.tail=null;
			return yyy;
		}else{
			let yyy=this.tail.value;
			this.tail=this.tail.prev;
			this.tail.next=null;
			return yyy;
		}
	}
	print(){
		for(let y=this.head; y!=null; y=y.next){
			console.log(y.value.id);
		}
	}
}
let masiv=new Priority_Queue();
let ww=new Priority_Queue();
let q=new canapar();
//---------DFS botton--------
let stop=0;
let i=4;
function stugel_all(w){
	popoxutyun=0;
	if (w!=skzbnaket1) {
		w.style.backgroundColor="lime";
	}
	ww.push(w);
	let rrr=w.id.split(",");
	let j=rrr[1].split("_");
	let y=document.getElementById(rrr[0]+","+(parseInt(j[0])+1)+"_"+(parseInt(j[1])-1));
	if (y!=null) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket1) {
				y.style.backgroundColor="lightblue";
			}
			masiv.push(w);
		}
	}
	y=document.getElementById(rrr[0]+","+j[0]+"_"+(parseInt(j[1])+1));
	if (y!=null) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket1) {
				y.style.backgroundColor="lightblue";
			}
			masiv.push(w);
		}
	}
	y=document.getElementById(rrr[0]+","+(parseInt(j[0])+1)+"_"+j[1]);
	if (y!=null) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket1) {
				y.style.backgroundColor="lightblue";
			}
			masiv.push(w);
		}
	}
	y=document.getElementById(rrr[0]+","+(parseInt(j[0])-1)+"_"+j[1]);
	if (y!=null) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket1) {
				y.style.backgroundColor="lightblue";
			}
			masiv.push(w);
		}
	}
	y=document.getElementById(rrr[0]+","+(parseInt(j[0])+1)+"_"+(parseInt(j[1])+1));
	if (y!=null) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket1) {
				y.style.backgroundColor="lightblue";
			}
			masiv.push(w);
		}
	}
	y=document.getElementById(rrr[0]+","+(parseInt(j[0])-1)+"_"+(parseInt(j[1])+1));
	if (y!=null) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket1) {
				y.style.backgroundColor="lightblue";
			}
			masiv.push(w);
		}
	}
	y=document.getElementById(rrr[0]+","+(parseInt(j[0])-1)+"_"+(parseInt(j[1])-1));
	if (y!=null) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket1) {
				y.style.backgroundColor="lightblue";
			}
			masiv.push(w);
		}
	}
	y=document.getElementById(rrr[0]+","+j[0]+"_"+(parseInt(j[1])-1));
	if (y!=null) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket1) {
				y.style.backgroundColor="lightblue";
			}
			masiv.push(w);
		}
	}
	
	shatacnel();
}
function prpur(q){
	let rrr=q.id.split(",");
	let j=rrr[1].split("_");
	let y=document.getElementById(rrr[0]+","+(parseInt(j[0])+1)+"_"+(parseInt(j[1])-1));
	if (y!=null && y!=skzbnaket1 && y!=skzbnaket && y!=verjnaket && y!=verjnaket1 && y!=skzbnaket_DFS && y!=skzbnaket_DFS) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket) {
				y.style.backgroundColor="lightblue";
			}
		}
	}
	y=document.getElementById(rrr[0]+","+j[0]+"_"+(parseInt(j[1])+1));
	if (y!=null && y!=skzbnaket1 && y!=skzbnaket && y!=verjnaket && y!=verjnaket1 && y!=skzbnaket_DFS && y!=skzbnaket_DFS) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket) {
				y.style.backgroundColor="lightblue";
			}
		}
	}
	y=document.getElementById(rrr[0]+","+(parseInt(j[0])+1)+"_"+j[1]);
	if (y!=null && y!=skzbnaket1 && y!=skzbnaket && y!=verjnaket && y!=verjnaket1 && y!=skzbnaket_DFS && y!=skzbnaket_DFS) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket) {
				y.style.backgroundColor="lightblue";
			}
		}
	}
	y=document.getElementById(rrr[0]+","+(parseInt(j[0])-1)+"_"+j[1]);
	if (y!=null && y!=skzbnaket1 && y!=skzbnaket && y!=verjnaket && y!=verjnaket1 && y!=skzbnaket_DFS && y!=skzbnaket_DFS) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket) {
				y.style.backgroundColor="lightblue";
			}
		}
	}
	y=document.getElementById(rrr[0]+","+(parseInt(j[0])+1)+"_"+(parseInt(j[1])+1));
	if (y!=null && y!=skzbnaket1 && y!=skzbnaket && y!=verjnaket && y!=verjnaket1 && y!=skzbnaket_DFS && y!=skzbnaket_DFS) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket) {
				y.style.backgroundColor="lightblue";
			}
		}
	}
	y=document.getElementById(rrr[0]+","+(parseInt(j[0])-1)+"_"+(parseInt(j[1])+1));
	if (y!=null && y!=skzbnaket1 && y!=skzbnaket && y!=verjnaket && y!=verjnaket1 && y!=skzbnaket_DFS && y!=skzbnaket_DFS) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket) {
				y.style.backgroundColor="lightblue";
			}
		}
	}
	y=document.getElementById(rrr[0]+","+(parseInt(j[0])-1)+"_"+(parseInt(j[1])-1));
	if (y!=null && y!=skzbnaket1 && y!=skzbnaket && y!=verjnaket && y!=verjnaket1 && y!=skzbnaket_DFS && y!=skzbnaket_DFS) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket) {
				y.style.backgroundColor="lightblue";
			}
		}
	}
	y=document.getElementById(rrr[0]+","+j[0]+"_"+(parseInt(j[1])-1));
	if (y!=null && y!=skzbnaket1 && y!=skzbnaket && y!=verjnaket && y!=verjnaket1 && y!=skzbnaket_DFS && y!=skzbnaket_DFS) {
		if (y.className=="datark" && y.style.backgroundColor!="lime" && y!=skzbnaket1) {
			if (y!=verjnaket) {
				y.style.backgroundColor="lightblue";
			}
		}
	}
}
function shatacnel_botton(){
	qayler++;
	chapser=0;
	uxutyun=null;
	let t=ww.pop();
	if (t!=null) {
		if (stop==0) {
			setTimeout(function(){
				popoxutyun++;
				let rrr=t.id.split(",");
				let i=rrr[1].split("_");
				w=document.getElementById(rrr[0]+","+(parseInt(i[0])+1)+"_"+i[1]);
				if (w!=null) {
					if (w==verjnaket1) {
						stop++;
						clearInterval(jamanak);
						q.push_bottom(t, w);
					}else{
						if (w.className=="datark" && w.style.backgroundColor!="lime" && w!=skzbnaket1) {
							q.push_bottom(t, w);
							stugel_all(w);
						}else{
							if (popoxutyun==5) {
								let gg=masiv.pop1();
								ww.push1(gg);
								avenaverjinket=gg;
								popoxutyun=0;
							}else{
								ww.push1(t);
							}	
							shatacnel();
						}
					}
				}else{
					if (popoxutyun==5) {
						let gg=masiv.pop1();
						ww.push1(gg);
						popoxutyun=0;
						avenaverjinket=gg;
					}else{
						ww.push1(t);
					}
					shatacnel();							
				}
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
			
		}
	}
		
}
//---------DFS---top--------
function shatacnel_top(){
	qayler++;
	chapser=0;
	uxutyun=null;
	let t=ww.pop();
	if (t!=null) {
		if (stop==0) {
			setTimeout(function(){
				popoxutyun++;
				let rrr=t.id.split(",");
				let i=rrr[1].split("_");
				w=document.getElementById(rrr[0]+","+(parseInt(i[0])-1)+"_"+i[1]);
				if (w!=null) {
					if (w==verjnaket1) {
						stop++;
						clearInterval(jamanak);
						q.push_top(t, w);
					}else{
						if (w.className=="datark" && w.style.backgroundColor!="lime" && w!=skzbnaket1){
							q.push_top(t, w);
							stugel_all(w);
						}else{
							if (popoxutyun==5) {
								let gg=masiv.pop1();
								ww.push1(gg);
								avenaverjinket=gg;
								popoxutyun=0;
							}else{
								ww.push1(t);
							}	
							shatacnel();	
						}
						
					}
				}else{
					if (popoxutyun==5) {
						let gg=masiv.pop1();
						ww.push1(gg);
						popoxutyun=0;
						avenaverjinket=gg;
					}else{
						ww.push1(t);
					}
					shatacnel();							
				}
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
		}
	}
}
function shatacnel_botton_left(){
	qayler++;
	chapser=0;
	uxutyun=null;
	let t=ww.pop();
	if (t!=null) {
		if (stop==0) {
			setTimeout(function(){
				popoxutyun++;
				let rrr=t.id.split(",");
				let i=rrr[1].split("_");
				w=document.getElementById(rrr[0]+","+(parseInt(i[0])+1)+"_"+(parseInt(i[1])-1));
				if (w!=null) {
					if (w==verjnaket1) {
						stop++;
						clearInterval(jamanak);
						q.push_bottom_left(t, w);
					}else{
						if (w.className=="datark" && w.style.backgroundColor!="lime" && w!=skzbnaket1) {
							q.push_bottom_left(t, w);
							stugel_all(w);
							
						}else{
							if (popoxutyun==5) {
								let gg=masiv.pop1();
								ww.push1(gg);
								avenaverjinket=gg;
								popoxutyun=0;
							}else{
								ww.push1(t);
							}	
							shatacnel();
						}
					}
				}else{
					if (popoxutyun==5) {
						let gg=masiv.pop1();
						ww.push1(gg);
						popoxutyun=0;
						avenaverjinket=gg;
					}else{
						ww.push1(t);
					}
					shatacnel();							
				}
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
			
		}
	}
		
}
function shatacnel_top_left(){
	qayler++;
	chapser=0;
	uxutyun=null;
	let t=ww.pop();
	if (t!=null) {
		if (stop==0) {
			setTimeout(function(){
				popoxutyun++;
				let rrr=t.id.split(",");
				let i=rrr[1].split("_");
				w=document.getElementById(rrr[0]+","+(parseInt(i[0])-1)+"_"+(parseInt(i[1])-1));
				if (w!=null) {
					if (w==verjnaket1) {
						stop++;
						clearInterval(jamanak);
						q.push_top_left(t, w);
					}else{
						if (w.className=="datark" && w.style.backgroundColor!="lime" && w!=skzbnaket1){
							q.push_top_left(t, w);
							stugel_all(w);
						}else{
							if (popoxutyun==5) {
								let gg=masiv.pop1();
								ww.push1(gg);
								popoxutyun=0;
								avenaverjinket=gg;
							}else{
								ww.push1(t);
							}	
							shatacnel();	
						}
						
					}
				}else{
					if (popoxutyun==5) {
						let gg=masiv.pop1();
						ww.push1(gg);
						popoxutyun=0;
						avenaverjinket=gg;
					}else{
						ww.push1(t);
					}
					shatacnel();							
				}
					
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
		}
	}	
}
function shatacnel_botton_right(){
	qayler++;
	chapser=0;
	uxutyun=null;
	let t=ww.pop();
	if (t!=null) {
		if (stop==0) {
			setTimeout(function(){
				popoxutyun++;
				let rrr=t.id.split(",");
				let i=rrr[1].split("_");
				w=document.getElementById(rrr[0]+","+(parseInt(i[0])+1)+"_"+(parseInt(i[1])+1));
				if (w!=null) {
					if (w==verjnaket1) {
						stop++;
						clearInterval(jamanak);
						q.push_bottom_right(t, w);
					}else if (w.className=="datark" && w.style.backgroundColor!="lime" && w!=skzbnaket1) {
						q.push_bottom_right(t, w);
						stugel_all(w);
					}else{
						if (popoxutyun==5) {
							let gg=masiv.pop1();
							ww.push1(gg);
							popoxutyun=0;
							avenaverjinket=gg;
						}else{
							ww.push1(t);
						}	
						shatacnel();
					}
				}else{
					if (popoxutyun==5) {
						let gg=masiv.pop1();
						ww.push1(gg);
						popoxutyun=0;
						avenaverjinket=gg;
					}else{
						ww.push1(t);
					}
					shatacnel();							
				}
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
		}
	}
		
}
function shatacnel_top_right(){
	qayler++;
	chapser=0;
	uxutyun=null;
	let t=ww.pop();
	if (t!=null) {
		if (stop==0) {
			setTimeout(function(){
				popoxutyun++;
				let rrr=t.id.split(",");
				let i=rrr[1].split("_");
				w=document.getElementById(rrr[0]+","+(parseInt(i[0])-1)+"_"+(parseInt(i[1])+1));
				if (w!=null) {
					if (w==verjnaket1) {
						stop++;
						clearInterval(jamanak);
						q.push_top_right(t, w);
					}else if (w.className=="datark" && w.style.backgroundColor!="lime" && w!=skzbnaket1){
						q.push_top_right(t, w);
						stugel_all(w);
					}else{
						if (popoxutyun==5) {
							let gg=masiv.pop1();
							ww.push1(gg);
							popoxutyun=0;
							avenaverjinket=gg;
						}else{
							ww.push1(t);
						}	
						shatacnel();	
					}
				}else{
					if (popoxutyun==5) {
						let gg=masiv.pop1();
						ww.push1(gg);
						popoxutyun=0;
						avenaverjinket=gg;
					}else{
						ww.push1(t);
					}
					shatacnel();							
				}
					
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
		}
	}	
}
function shatacnel_left(){
	qayler++;
	chapser=0;
	uxutyun=null;
	let t=ww.pop();
	if (t!=null) {
		if (stop==0) {
			setTimeout(function(){
				popoxutyun++;
				let rrr=t.id.split(",");
				let i=rrr[1].split("_");
				w=document.getElementById(rrr[0]+","+i[0]+"_"+(parseInt(i[1])-1));
				if (w!=null) {
					if (w==verjnaket1) {
						stop++;
						clearInterval(jamanak);
						q.push_left(t, w);
					}else if (w.className=="datark" && w.style.backgroundColor!="lime" && w!=skzbnaket1) {
						q.push_left(t, w);
						stugel_all(w);
					}else{
						if (popoxutyun==5) {
							let gg=masiv.pop1();
							ww.push1(gg);
							avenaverjinket=gg;
							popoxutyun=0;
						}else{
							ww.push1(t);
						}	
						shatacnel();
					}
				}else{
					if (popoxutyun==5) {
						let gg=masiv.pop1();
						ww.push1(gg);
						popoxutyun=0;
						avenaverjinket=gg;
					}else{
						ww.push1(t);
					}
					shatacnel();							
				}
					
					
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
				
		}
	}
		
		
}
function shatacnel_right(){
	qayler++;
	chapser=0;
	uxutyun=null;
	let t=ww.pop();
	if (t!=null) {
		if (stop==0) {
			setTimeout(function(){
				popoxutyun++;
				let rrr=t.id.split(",");
				let i=rrr[1].split("_");
				w=document.getElementById(rrr[0]+","+i[0]+"_"+(parseInt(i[1])+1));
				if (w!=null) {
					if (w==verjnaket1) {
						stop++;
						clearInterval(jamanak);
						q.push_right(t, w);
						return;
					}else if (w.className=="datark" && w.style.backgroundColor!="lime" && w!=skzbnaket1) {
						q.push_right(t, w);
						stugel_all(w);
					}else{
						if (popoxutyun==9) {
							let gg=masiv.pop1();
							ww.push1(gg);
							avenaverjinket=gg;
							popoxutyun=0;
						}else{
							ww.push1(t);
						}
						shatacnel()
						
					}
				}else{
					if (popoxutyun==5) {
						let gg=masiv.pop1();
						ww.push1(gg);
						popoxutyun=0;
						avenaverjinket=gg;
					}else{
						ww.push1(t);
					}
					shatacnel();							
				}
					
					
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
				
		}
	}
}
function stugel1(w){
	if (w!=null) {
		let rrr=w.id.split(",");
		let i=rrr[1].split("_");
		let erk;
		let layn;
		let kordinat1=verjnaket.id.split(",");
		let kordinat=kordinat1[1].split("_");
		if (w.className=="datark" && w.style.backgroundColor!="lime" && w!=skzbnaket1) {
			erk=(parseInt(i[1]))-parseInt(kordinat[1]);
			layn=(parseInt(i[0]))-parseInt(kordinat[0]);
			let pp=Math.sqrt((layn*layn)+(erk*erk));
			if (uxutyun==null){
				chapser=pp;
				uxutyun=w;
			}else{
				if(pp<chapser){
					chapser=pp;
					uxutyun=w;
				}
			}
		}
	}
		
}
function shatacnel(){
	if (stop==0) {
		let t=ww.pop();
		if (t!=null) {
			let rrr=t.id.split(",");
			let i=rrr[1].split("_");
			stugel1(document.getElementById("table2,"+i[0]+"_"+(parseInt(i[1])+1)));
			stugel1(document.getElementById("table2,"+i[0]+"_"+(parseInt(i[1])-1)));
			stugel1(document.getElementById("table2,"+(parseInt(i[0])+1)+"_"+i[1]));
			stugel1(document.getElementById("table2,"+(parseInt(i[0])-1)+"_"+i[1]));
			stugel1(document.getElementById("table2,"+(parseInt(i[0])-1)+"_"+(parseInt(i[1])+1)));
			stugel1(document.getElementById("table2,"+(parseInt(i[0])-1)+"_"+(parseInt(i[1])-1)));
			stugel1(document.getElementById("table2,"+(parseInt(i[0])+1)+"_"+(parseInt(i[1])+1)));
			stugel1(document.getElementById("table2,"+(parseInt(i[0])+1)+"_"+(parseInt(i[1])-1)));
			ww.push1(t);
			if (uxutyun==document.getElementById("table2,"+i[0]+"_"+(parseInt(i[1])+1))) {
				shatacnel_right();
			}else if(uxutyun==document.getElementById("table2,"+i[0]+"_"+(parseInt(i[1])-1))){
				shatacnel_left();
			}else if(uxutyun==document.getElementById("table2,"+(parseInt(i[0])+1)+"_"+i[1])){
				shatacnel_botton();
			}else if(uxutyun==document.getElementById("table2,"+(parseInt(i[0])-1)+"_"+i[1])){
				shatacnel_top();
			}else if(uxutyun==document.getElementById("table2,"+(parseInt(i[0])-1)+"_"+(parseInt(i[1])+1))){
				shatacnel_top_right();
			}else if(uxutyun==document.getElementById("table2,"+(parseInt(i[0])-1)+"_"+(parseInt(i[1])-1))){
				shatacnel_top_left();
			}else if(uxutyun==document.getElementById("table2,"+(parseInt(i[0])+1)+"_"+(parseInt(i[1])+1))){
				shatacnel_botton_right();
			}else if(uxutyun==document.getElementById("table2,"+(parseInt(i[0])+1)+"_"+(parseInt(i[1])-1))){
				shatacnel_botton_left();
			}else{
				let gg=masiv.pop1();
				ww.push1(gg);
				avenaverjinket=gg;
				popoxutyun=0;
				shatacnel();
			}
		}
			

	}else{
		return;
	}
		
}
function gtnel_mek(){
	if (skzbnaket1==verjnaket1) {
		skzbnaket1.style.backgroundColor="lime";
	}else{
		q.push(skzbnaket1);
		stugel_all(skzbnaket1);
		shatacnel();
	}
}

function verj(){
	q.print_verj();
	skzbnaket1.style.backgroundColor="yellow";
	verjnaket1.style.backgroundColor="blue";
	document.getElementById("qw2").innerHTML="բոլոր քայլերի քանակը։ "+qayler;
	document.getElementById("qw3").innerHTML="ճանապարի երկարությունը։ "+qanak_qayleri;
}
function avel(q){

	if (zapas==0) {
		if(q.className=="vandak"){
			let c=q.id.split(",");
			document.getElementById("table1,"+c[1]).className="datark";
			document.getElementById("table2,"+c[1]).className="datark";
			document.getElementById("table3,"+c[1]).className="datark";
		}else{
			let c=q.id.split(",");
			document.getElementById("table1,"+c[1]).className="vandak";
			document.getElementById("table2,"+c[1]).className="vandak";
			document.getElementById("table3,"+c[1]).className="vandak";
		}
		zapas=1;
	}else{
		zapas=0;
	}
}
function avel1(q){
	if (zapas==1) {
		if(q.className=="vandak"){
			let c=q.id.split(",");
			document.getElementById("table1,"+c[1]).className="datark";
			document.getElementById("table2,"+c[1]).className="datark";
			document.getElementById("table3,"+c[1]).className="datark";
		}else{
			let c=q.id.split(",");
			document.getElementById("table1,"+c[1]).className="vandak";
			document.getElementById("table2,"+c[1]).className="vandak";
			document.getElementById("table3,"+c[1]).className="vandak";
		}
	}
}
//---------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
chap=1;
let qayler1=0;
let array1=[];
class node1{
		
	constructor(l){
		this.left=null;
		this.right=null;
		this.top=null;
		this.top_right=null;
		this.top_left=null;
		this.bottom=null;
		this.bottom_left=null;
		this.bottom_right=null;
		this.prev=null;
		this.value=l;
	}
}
//---------class chanapar for trip
class chanapar{
	constructor(){
		this.root=null;
	}
	//----push start---------
	push(a){
		
		this.root=new node1(a);
		array1.push(this.root);
	}
	//-------find b in chanaper.node.value------

	find(a){
		for(let y=0; y<array1.length; y++){
			let e=array1[y];
			if(e.value==a){
				return e;
			}
		}
		return null;
	}
	//---------push left right top and botton
	push_left(v, b){
		if (v==this.root.value) {
			this.root.left=new node1(b);
			this.root.left.right=this.root;
			this.root.left.prev=this.root;
			array1.push(this.root.left);
		}else{
			let w=this.find(v);
			if (w!=null) {
				w.left=new node1(b);
				w.left.right=w;
				w.left.prev=w;
				array1.push(w.left);
			}
		}
	}
	push_right(a, b){
		if (a==this.root.value) {
			this.root.right=new node1(b);
			this.root.right.left=this.root;
			this.root.right.prev=this.root;
			array1.push(this.root.right);
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.right=new node1(b);
				array1.push(w.right);
				w.right.left=w;
				w.right.prev=w;
			}
		}
	}
	push_top(a, b){
		if (a==this.root.value) {
			this.root.top=new node1(b);
			this.root.top.bottom=this.root;
			this.root.top.prev=this.root;
			array1.push(this.root.top);
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.top=new node1(b);
				w.top.bottom=w;
				w.top.prev=w;
				array1.push(w.top);
			}
		}
	}
	push_bottom(a, b){
		if (a==this.root.value) {
			this.root.bottom=new node1(b);
			this.root.bottom.top=this.root;
			this.root.bottom.prev=this.root;
			array1.push(this.root.bottom);
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.bottom=new node1(b);
				w.bottom.top=w;
				w.bottom.prev=w;
				array1.push(w.bottom);
			}
		}
	}
	push_top_left(v, b){
		if (v==this.root.value) {
			this.root.top_left=new node1(b);
			this.root.top_left.bottom_right=this.root;
			this.root.top_left.prev=this.root;
			array1.push(this.root.top_left);
		}else{
			let w=this.find(v);
			if (w!=null) {
				w.top_left=new node1(b);
				w.top_left.bottom_right=w;
				w.top_left.prev=w;
				array1.push(w.top_left);
			}
		}
	}
	push_bottom_right(a, b){
		if (a==this.root.value) {
			this.root.bottom_right=new node1(b);
			this.root.bottom_right.top_left=this.root;
			this.root.bottom_right.prev=this.root;
			array1.push(this.root.bottom_right);
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.bottom_right=new node1(b);
				array1.push(w.bottom_right);
				w.bottom_right.top_left=w;
				w.bottom_right.prev=w;
			}
		}
	}
	push_top_right(a, b){
		if (a==this.root.value) {
			this.root.top_right=new node1(b);
			this.root.top_right.bottom_left=this.root;
			this.root.top_right.prev=this.root;
			array1.push(this.root.top_right);
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.top_right=new node1(b);
				w.top_right.bottom_left=w;
				w.top_right.prev=w;
				array1.push(w.top_right);
			}
		}
	}
	push_bottom_left(a, b){
		if (a==this.root.value) {
			this.root.bottom_left=new node1(b);
			this.root.bottom_left.top_right=this.root;
			this.root.bottom_left.prev=this.root;
			array1.push(this.root.bottom_left);
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.bottom_left=new node1(b);
				w.bottom_left.top_right=w;
				w.bottom_left.prev=w;
				array1.push(w.bottom_left);
			}
		}
	}
	print_verj(){
		let q=this.find(verjnaket);
		if (q!=null) {
			while(q.value!=skzbnaket){
				q.value.style.backgroundColor="red";
				qanak_qayleri1++;
				q=q.prev;
			}
		}
			
		
	}
}
//------------node for Priority_Queue----------
class Node1{
	constructor(l){
		this.value=l;
		this.next=null;
		this.prev=null;
	}
}

//-------Priority_Queue for BFS-------------
class Priority_Queue1{
	constructor(){
		this.head=null;
		this.tail=null;
	}
	push(q){
		if(this.head==null){
			this.head=new Node1(q);
			this.tail=this.head;
		}else{
			this.tail.next=new Node1(q);
			this.tail.next.prev=this.tail;
			this.tail=this.tail.next;
		}
	}
	push1(q){
		if(this.head==null){
			this.head=new Node1(q);
			this.tail=this.head;
		}else{
			this.head.prev=new Node1(q);
			this.head.prev.next=this.head;
			this.head=this.head.prev;
		}
	}
	//---------pop function start---
	//--returns smallest element ---- orinaki hamar
	pop(){
		if(this.head==null){
			return null;
		}else if(this.head==this.tail){
			let yyy=this.head.value;
			this.head=null;
			this.tail=null;
			return yyy;
		}else{
			let yyy=this.head.value;
			this.head=this.head.next;
			this.head.prev=null;
			return yyy;
		}
	}
	pop1(){
		if(this.head==null){
			return null;
		}else if(this.head==this.tail){
			let yyy=this.head.value;
			this.head=null;
			this.tail=null;
			return yyy;
		}else{
			let yyy=this.tail.value;
			this.tail=this.tail.prev;
			this.tail.next=null;
			return yyy;
		}
	}
	print(){
		for(let y=this.head; y!=null; y=y.next){
			console.log(y.value.id);
		}
	}
}
ww1=new Priority_Queue1();
q1=new chanapar();
stop1=0;
function avelacnel_bottom(t){
	if (stop1==0) {
		let rrr=t.id.split(",");
		let w=rrr[1].split("_");
		w=document.getElementById(rrr[0]+","+(parseInt(w[0])+1)+"_"+w[1]);
		if (w!=null) {
			if (w==verjnaket) {
				stop1++;
				clearInterval(jamanak1);
				q1.push_bottom(t, w);
			}
			if (w.className=="datark" && w.style.backgroundColor!="lime") {
				prpur(w);
				qayler1++;
				q1.push_bottom(t, w);
				w.style.backgroundColor="lime";
				ww1.push(w);
			}
			avelacnel();
		}
			
	}
}
function avelacnel_top(t){
	
	if (stop1==0) {
		let rrr=t.id.split(",");
		let w=rrr[1].split("_");
		w=document.getElementById(rrr[0]+","+(parseInt(w[0])-1)+"_"+w[1]);
		if (w!=null) {
			if (w==verjnaket) {
				stop1++;
				clearInterval(jamanak1);
				q1.push_top(t, w);
			}else{
				if (w.className=="datark" && w.style.backgroundColor!="lime") {
					prpur(w);
					qayler1++;
					q1.push_top(t, w);
					w.style.backgroundColor="lime";
					ww1.push(w);
				}
				avelacnel();
			}
		}
			
			
	}
		
}
function avelacnel_left(t){
	
	if (stop1==0) {
		let rrr=t.id.split(",");
		let w=rrr[1].split("_");
		w=document.getElementById(rrr[0]+","+w[0]+"_"+(parseInt(w[1])-1));
		if (w!=null) {
			if (w==verjnaket) {
				stop1++;
				clearInterval(jamanak1);
				q1.push_left(t, w);
			}
			if (w.className=="datark" && w.style.backgroundColor!="lime") {
				qayler1++;
				prpur(w);
				q1.push_left(t, w);
				w.style.backgroundColor="lime";
				ww1.push(w);
			}
			avelacnel();
		}
			
	}
		
}
function avelacnel_right(t){
	
	if (stop1==0) {
		let rrr=t.id.split(",");
		let w=rrr[1].split("_");
		w=document.getElementById(rrr[0]+","+w[0]+"_"+(parseInt(w[1])+1));
		if (w!=null) {
			if (w==verjnaket) {
				stop1++;
				clearInterval(jamanak1);
				q1.push_right(t, w);
			}
			if (w.className=="datark" && w.style.backgroundColor!="lime") {
				prpur(w);
				qayler1++;
				q1.push_right(t, w);
				w.style.backgroundColor="lime";
				ww1.push(w);
			}
			avelacnel();
		}
			
	}
		
}
function avelacnel_bottom_right(t){
	
	if (stop1==0) {
		let rrr=t.id.split(",");
		let w=rrr[1].split("_");
		w=document.getElementById(rrr[0]+","+(parseInt(w[0])+1)+"_"+(parseInt(w[1])+1));
		if (w!=null) {
			if (w==verjnaket) {
				stop1++;
				clearInterval(jamanak1);
				q1.push_bottom_right(t, w);
			}
			if (w.className=="datark" && w.style.backgroundColor!="lime") {
				prpur(w);
				qayler1++;
				q1.push_bottom_right(t, w);
				w.style.backgroundColor="lime";
				ww1.push(w);
			}
			avelacnel();
		}
			
	}
}
function avelacnel_top_left(t){
	
	if (stop1==0) {
		let rrr=t.id.split(",");
		let w=rrr[1].split("_");
		w=document.getElementById(rrr[0]+","+(parseInt(w[0])-1)+"_"+(parseInt(w[1])-1));
		if (w!=null) {
			if (w==verjnaket) {
				stop1++;
				clearInterval(jamanak1);
				q1.push_top_left(t, w);
			}else{
				if (w.className=="datark" && w.style.backgroundColor!="lime") {
					qayler1++;
					prpur(w);
					q1.push_top_left(t, w);
					w.style.backgroundColor="lime";
					ww1.push(w);
				}
				avelacnel();
			}
		}
			
			
	}
		
}
function avelacnel_bottom_left(t){
	
	if (stop1==0) {
		let rrr=t.id.split(",");
		let w=rrr[1].split("_");
		w=document.getElementById(rrr[0]+","+(parseInt(w[0])+1)+"_"+(parseInt(w[1])-1));
		if (w!=null) {
			if (w==verjnaket) {
				stop1++;
				clearInterval(jamanak1);
				q1.push_bottom_left(t, w);
			}
			if (w.className=="datark" && w.style.backgroundColor!="lime") {
				prpur(w);
				qayler1++;
				q1.push_bottom_left(t, w);
				w.style.backgroundColor="lime";
				ww1.push(w);
			}
			avelacnel();
		}
			
	}
		
}
function avelacnel_top_right(t){
	
	if (stop1==0) {
		let rrr=t.id.split(",");
		let w=rrr[1].split("_");
		w=document.getElementById(rrr[0]+","+(parseInt(w[0])-1)+"_"+(parseInt(w[1])+1));
		if (w!=null) {
			if (w==verjnaket) {
				stop1++;
				clearInterval(jamanak1);
				q1.push_top_right(t, w);
			}
			if (w.className=="datark" && w.style.backgroundColor!="lime") {
				prpur(w);
				qayler1++;
				q1.push_top_right(t, w);
				w.style.backgroundColor="lime";
				ww1.push(w);
			}
			avelacnel();
		}
			
	}
		
}
//-------in avelacnel() work BFS algoritm---
i=4;

function avelacnel(){
	let a=ww1.pop();

	if (a!=null) {
		let rrr=a.id.split(",");
		let w=rrr[1].split("_");
		if (stop1==0) {
			setTimeout(function(){
				avelacnel_left(a);
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
			setTimeout(function(){
				avelacnel_right(a);
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
			setTimeout(function(){
				avelacnel_bottom(a);
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
			setTimeout(function(){
				avelacnel_top(a);
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
			setTimeout(function(){
				avelacnel_bottom_left(a);
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
			setTimeout(function(){
				avelacnel_top_right(a);
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
			setTimeout(function(){
				avelacnel_bottom_right(a);
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
			setTimeout(function(){
				avelacnel_top_left(a);
				if (i==1) {
					i++;
				}else{
					i=1;
				}
			}, i*time);
		}
	}
		

		
}
function gtnel1(){
	if (skzbnaket==verjnaket) {
		skzbnaket.style.backgroundColor="lime";
	}else{
		q1.push(skzbnaket);
		ww1.push(skzbnaket);
		avelacnel();


	}
}
function verj12(){
	q1.print_verj();
	skzbnaket.style.backgroundColor="yellow";
	verjnaket.style.backgroundColor="blue";
	document.getElementById("qw").innerHTML="բոլոր քայլերի քանակը։ "+qayler1;
	document.getElementById("qw1").innerHTML="ճանապարի երկարությունը։ "+qanak_qayleri1;
	
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let popoxutyun_DFS=0;
let verjinket_DFS=null;
zapas=0;
//---start index---------
let skzbnaket_DFS;
chap=1;
//--finish index------
let verjnaket_DFS;
//-----array_DFS for trip----
let masiv_DFS=[];
//------node for chanapar_DFS-----
class node_DFS{
		
	constructor(l){
		this.left=null;
		this.right=null;
		this.top=null;
		this.bottom=null;
		this.prev=null;
		this.value=l;
	}
}
//---------class chanapar_DFS for trip
class chanapar_DFS{
	constructor(){
		this.root=null;

	}
	//----push start---------
	push(a){
		
		this.root=new node_DFS(a);
		verjinket_DFS=this.root;
		masiv_DFS.push(this.root);
	}
	//-------find b in chanaper.node.value------

	find(a){
		for(let y=0; y<masiv_DFS.length; y++){
			let e=masiv_DFS[y];
			if(e.value==a){
				return e;
			}
		}
		return null;
	}
	//---------push left right top and botton
	push_left(v, b){
		if (v==this.root.value) {
			this.root.left=new node_DFS(b);
			this.root.left.right=this.root;
			this.root.left.prev=this.root;
			masiv_DFS.push(this.root.left);
			verjinket_DFS=this.root.left;
		}else{
			let w=this.find(v);
			if (w!=null) {
				w.left=new node_DFS(b);
				w.left.right=w;
				w.left.prev=w;
				masiv_DFS.push(w.left);
				verjinket_DFS=w.left;
			}
		}
	}
	push_right(a, b){
		if (a==this.root.value) {
			this.root.right=new node_DFS(b);
			this.root.right.left=this.root;
			this.root.right.prev=this.root;
			masiv_DFS.push(this.root.right);
			verjinket_DFS=this.root.right;
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.right=new node_DFS(b);
				masiv_DFS.push(w.right);
				w.right.left=w;
				w.right.prev=w;
				verjinket_DFS=w.right;
			}
		}
	}
	push_top(a, b){
		if (a==this.root.value) {
			this.root.top=new node_DFS(b);
			this.root.top.bottom=this.root;
			this.root.top.prev=this.root;
			masiv_DFS.push(this.root.top);
			verjinket_DFS=this.root.top;
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.top=new node_DFS(b);
				w.top.bottom=w;
				w.top.prev=w;
				masiv_DFS.push(w.top);
				verjinket_DFS=w.top;
			}
		}
	}
	push_bottom(a, b){
		if (a==this.root.value) {
			this.root.bottom=new node_DFS(b);
			this.root.bottom.top=this.root;
			this.root.bottom.prev=this.root;
			masiv_DFS.push(this.root.bottom);
			verjinket_DFS=this.root.bottom;
		}else{
			let w=this.find(a);
			if (w!=null) {
				w.bottom=new node_DFS(b);
				w.bottom.top=w;
				w.bottom.prev=w;
				masiv_DFS.push(w.bottom);
				verjinket_DFS=w.bottom;
			}
		}
	}
	print_verj(){
		let q=this.find(verjnaket_DFS);
		if (q!=null) {
			chanapare_DFS=0;
			while(q.value!=skzbnaket_DFS){
				chanapare_DFS++;
				q.value.style.backgroundColor="red";
				q=q.prev;
			}
		}
			
		
	}
}
//------------node for Priority_Queue_DFS----------
class Node_DFS{
	constructor(l){
		this.value=l;
		this.next=null;
		this.prev=null;
	}
}

//-------Priority_Queue_DFS for DFS-------------
//------այստե ես այնքան եմ փոփոծություն արել որ դարձել է deque-----
class Priority_Queue_DFS{
	constructor(){
		this.head=null;
		this.tail=null;
	}
	push(q){
		if(this.head==null){
			this.head=new Node_DFS(q);
			this.tail=this.head;
		}else{
			this.tail.next=new Node_DFS(q);
			this.tail.next.prev=this.tail;
			this.tail=this.tail.next;
		}
	}
	push1(q){
		if(this.head==null){
			this.head=new Node_DFS(q);
			this.tail=this.head;
		}else{
			this.head.prev=new Node_DFS(q);
			this.head.prev.next=this.head;
			this.head=this.head.prev;
		}
	}
	//---------pop function start---
	//--returns smallest element ---- orinaki hamar
	pop(){
		if(this.head==null){
			return null;
		}else if(this.head==this.tail){
			let yyy=this.head.value;
			this.head=null;
			this.tail=null;
			return yyy;
		}else{
			let yyy=this.head.value;
			this.head=this.head.next;
			this.head.prev=null;
			return yyy;
		}
	}
	pop1(){
		if(this.head==null){
			return null;
		}else if(this.head==this.tail){
			let yyy=this.head.value;
			this.head=null;
			this.tail=null;
			return yyy;
		}else{
			let yyy=this.tail.value;
			this.tail=this.tail.prev;
			this.tail.next=null;
			return yyy;
		}
	}
	print(){
		for(let y=this.head; y!=null; y=y.next){
			console.log(y.value.id);
		}
	}
}

let array_DFS=new Priority_Queue_DFS();
let ww_DFS=new Priority_Queue_DFS();
let q_DFS=new chanapar_DFS();
//---------DFS botton--------
let stop_DFS=0;
i=4;
function stugel_DFS(w){
	prpur(w);
	qayler_DFS++;
	popoxutyun_DFS=0;
	w.style.backgroundColor="lime";
	ww_DFS.push(w);
	let rrr=w.id.split(",");
	let j=rrr[1].split("_");
	let ytr=0;
	let u=document.getElementById(rrr[0]+","+j[0]+"_"+(parseInt(j[1])-1));
	if (u!=null) {
		if (u.className=="datark" && u.style.backgroundColor!="lime" && u!=skzbnaket_DFS) {
			ytr++;
			array_DFS.push(w);
		}
	}	
	u=document.getElementById(rrr[0]+","+j[0]+"_"+(parseInt(j[1])+1));
	if (u!=null) {
		if (u.className=="datark" && u.style.backgroundColor!="lime" && u!=skzbnaket_DFS) {
			ytr++;
			array_DFS.push(w);
		}
	}
	u=document.getElementById(rrr[0]+","+(parseInt(j[0])-1)+"_"+j[1]);
	if (u!=null) {
		if (u.className=="datark" && u.style.backgroundColor!="lime" && u!=skzbnaket_DFS) {
			ytr++;
			array_DFS.push(w);
		}
	}
	u=document.getElementById(rrr[0]+","+(parseInt(j[0])+1)+"_"+j[1]);
	if (u!=null) {
		if (u.className=="datark" && u.style.backgroundColor!="lime" && u!=skzbnaket_DFS) {
			ytr++;
			array_DFS.push(w);
		}
	}
	if (ytr!=0) {
		let v=array_DFS.pop1();
	}
}
function avelacnel_DFS_botton(){
	let t=ww_DFS.pop();
	if (t!=null) {
		if (stop_DFS==0) {
			setTimeout(function(){
				popoxutyun_DFS++;
				let rrr=t.id.split(",");
				let i=rrr[1].split("_");
				let w=document.getElementById(rrr[0]+","+(parseInt(i[0])+1)+"_"+i[1]);
				if (w==verjnaket_DFS) {
					stop_DFS++;
					clearInterval(jamanak_DFS);
					q_DFS.push_bottom(t, w);
				}else{
					if(w!=null){
						if (w.className=="datark" && w.style.backgroundColor!="lime" && w!=skzbnaket_DFS) {
							q_DFS.push_bottom(t, w);
							stugel_DFS(w);
							avelacnel_DFS_left();
							
						}else{
							if (popoxutyun_DFS==5) {
								let gg=array_DFS.pop1();
								ww_DFS.push1(gg);
								popoxutyun_DFS=0;
							}else{
								ww_DFS.push1(t);
							}	
							avelacnel_DFS_right();
						}
					}else{
						if (popoxutyun_DFS==5) {
							let gg=array_DFS.pop1();
							ww_DFS.push1(gg);
							popoxutyun_DFS=0;
						}else{
							ww_DFS.push1(t);
						}
						avelacnel_DFS_right();							
					}
				}
					
					
				if (i==1) {
					i=1.0000000001;
				}else{
					i=1;
				}
			}, i*time);
			
		}
	}
		
}
//---------DFS---top--------
function avelacnel_DFS_top(){
	let t=ww_DFS.pop();
	if (t!=null) {
		if (stop_DFS==0) {
			setTimeout(function(){
				popoxutyun_DFS++;
				let rrr=t.id.split(",");
				let i=rrr[1].split("_");
				let w=document.getElementById(rrr[0]+","+(parseInt(i[0])-1)+"_"+i[1]);
				if (w==verjnaket_DFS) {
					stop_DFS++;
					clearInterval(jamanak_DFS);
					q_DFS.push_top(t, w);
				}else{
					if (w!=null) {
						if (w.className=="datark" && w.style.backgroundColor!="lime" && w!=skzbnaket_DFS){
							q_DFS.push_top(t, w);
							stugel_DFS(w);
							avelacnel_DFS_right();
						}else{
							if (popoxutyun_DFS==5) {
								let gg=array_DFS.pop1();
								ww_DFS.push1(gg);
								popoxutyun_DFS=0;
							}else{
								ww_DFS.push1(t);
							}	
							avelacnel_DFS_left();	
						}
					}else{
						if (popoxutyun_DFS==5) {
							let gg=array_DFS.pop1();
							ww_DFS.push1(gg);
							popoxutyun_DFS=0;
						}else{
							ww_DFS.push1(t);
						}								
						avelacnel_DFS_left();						
					}
					
				}
				if (i==1) {
					i=1.0000000001;
				}else{
					i=1;
				}
			}, i*time);
				
				
		}
	}
		
		
}
//---------DFS left--------
function avelacnel_DFS_left(){
	let t=ww_DFS.pop();
	if (t!=null) {
		if (stop_DFS==0) {
			setTimeout(function(){
				popoxutyun_DFS++;
				let rrr=t.id.split(",");
				let i=rrr[1].split("_");
				let w=document.getElementById(rrr[0]+","+i[0]+"_"+(parseInt(i[1])-1));
				if (w==verjnaket_DFS) {
					stop_DFS++;
					clearInterval(jamanak_DFS);
					q_DFS.push_left(t, w);
				}else if (w!=null) {
					if (w.className=="datark" && w.style.backgroundColor!="lime" && w!=skzbnaket_DFS) {
						q_DFS.push_left(t, w);
						stugel_DFS(w);
						avelacnel_DFS_top();
					}else{
						if (popoxutyun_DFS==5) {
							let gg=array_DFS.pop1();
							ww_DFS.push1(gg);
							popoxutyun_DFS=0;
						}else{
							ww_DFS.push1(t);
						}	
						avelacnel_DFS_botton();
					}
				}else{
					if (popoxutyun_DFS==5) {
						let gg=array_DFS.pop1();
						ww_DFS.push1(gg);
						popoxutyun_DFS=0;
						stugel(gg);
					}else{
						ww_DFS.push1(t);
					}	
					avelacnel_DFS_botton();
				}
					
				if (i==1) {
					i=1.0000000001;
				}else{
					i=1;
				}
			}, i*time);
				
		}
	}
		
		
}
//---------DFS right--------
function avelacnel_DFS_right(){
	let t=ww_DFS.pop();
	if (t!=null) {
		if (stop_DFS==0) {
			setTimeout(function(){
				popoxutyun_DFS++;
				let rrr=t.id.split(",");
				let i=rrr[1].split("_");
				let w=document.getElementById(rrr[0]+","+i[0]+"_"+(parseInt(i[1])+1));
				if (w==verjnaket_DFS) {
					stop_DFS++;
					clearInterval(jamanak_DFS);
					q_DFS.push_right(t, w);
					return;
				}else if (w!=null) {
					if (w.className=="datark" && w.style.backgroundColor!="lime" && w!=skzbnaket_DFS) {
						q_DFS.push_right(t, w);
						stugel_DFS(w);
						avelacnel_DFS_botton();
					}else{
						if (popoxutyun_DFS==5) {
							let gg=array_DFS.pop1();
							ww_DFS.push1(gg);
							
							popoxutyun_DFS=0;
						}else{
							ww_DFS.push1(t);
						}
						avelacnel_DFS_top()
						
					}
				}else{
					if (popoxutyun_DFS==5) {
						let gg=array_DFS.pop1();
						ww_DFS.push1(gg);
						popoxutyun_DFS=0;
					}else{
						ww_DFS.push1(t);
					}
					avelacnel_DFS_top();
					
				}
					
				if (i==1) {
					i=1.0000000001;
				}else{
					i=1;
				}
			}, i*time);
				
		}
	}
		
		
}
function gtnel(){
	if (skzbnaket_DFS==verjnaket_DFS) {
		skzbnaket_DFS.style.backgroundColor="lime";
	}else{
		q_DFS.push(skzbnaket_DFS);
		ww_DFS.push(skzbnaket_DFS);
		array_DFS.push(skzbnaket_DFS);
		avelacnel_DFS_right();
	}
}
function sexmel(a) {
	if (a.className!="vandak") {
		let dfg=a.id.split(",");
		if (skzbnaket_DFS==null) {
			skzbnaket_DFS=document.getElementById("table3,"+dfg[1]);
			skzbnaket1=document.getElementById("table2,"+dfg[1]);
			skzbnaket=document.getElementById("table1,"+dfg[1]);
			skzbnaket_DFS.style.backgroundColor="green";
			skzbnaket1.style.backgroundColor="green";
			skzbnaket.style.backgroundColor="green";
		}else if (verjnaket_DFS==null) {
			verjnaket_DFS=document.getElementById("table3,"+dfg[1]);
			verjnaket1=document.getElementById("table2,"+dfg[1]);
			verjnaket=document.getElementById("table1,"+dfg[1]);
			verjnaket_DFS.style.backgroundColor="blue";
			verjnaket1.style.backgroundColor="blue";
			verjnaket.style.backgroundColor="blue";
			gtnel();
			gtnel1();
			gtnel_mek();
			timer();
			timer1();
			timer_DFS();
		}
	}

}

function verj_DFS(){
	q_DFS.print_verj();
	skzbnaket_DFS.style.backgroundColor="yellow";
	verjnaket_DFS.style.backgroundColor="blue";
	document.getElementById("qw4").innerHTML="բոլոր քայլերի քանակը։ "+qayler_DFS;
	document.getElementById("qw5").innerHTML="ճանապարի երկարությունը։ "+chanapare_DFS;
	
}