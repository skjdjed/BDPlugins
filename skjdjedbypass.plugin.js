//META{"name":"skjdjedbypass","Github":"https://github.com/skjdjed"}*//
class skjdjedbypass {
    getName() {
        return "skjdjedbypass";
    }
    getDescription() {
        return "credits to skjdjed#7958";
    }
    getVersion() {
        return "Alpha 1.0 (May be tons of bugs)";
    }
    getAuthor() {
        return "skjdjed";
    }
    stop() {}
	
    start() {
        const checkExist = setInterval(() => {	
    		for (const mdl of Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache)) {
    		    const d = mdl.exports.default;
    		    if (d && d['getCurrentUser']) d.getCurrentUser().premiumType = 2;
    		}
        	clearInterval(checkExist);
    	}, 1000);
    }

    onSwitch() {
        const useFileUpload = false;
        const div = document.getElementsByClassName("name-3YKhmS")[0];
	    const serverName = div != undefined ? div.innerHTML : "noServer";
        const btn = $(".buttonContainer-28fw2U")[1];
        if (btn != null)
            btn.onclick = () => {
                const checkExist = setInterval(function() {
                    const scroller = $(".listItems-1uJgMC")[0];
                    if (scroller == null) return;
                    clearInterval(checkExist);
                    scroller.parentElement.onclick = (e) => {
                        const target = e.target;
                        const src = target.firstChild.src;
			const ext = src.slice(-7, -4);
			    
                        if (ext == "gif" || target.parentElement.parentElement.children[0].firstChild.children[1].innerHTML != serverName) {
                            const curChannel = BdApi.findModuleByProps("getLastSelectedChannelId").getChannelId();
                            const url = src.slice(0, -4) + "?size=40";
                            useFileUpload ?
                                fetch(url)
                                .then(res => res.blob()).then(blob => {
                                    BdApi.findModuleByProps("instantBatchUpload").instantBatchUpload(curChannel, [new File([blob], 'oSumAtrIX.'+ext, blob)]);
                                }) :
                                BdApi.findModuleByProps("sendMessage").sendMessage(curChannel, {
                                    content: url
                                });
                        }
                    }
                }, 100);
            }
    }
}
