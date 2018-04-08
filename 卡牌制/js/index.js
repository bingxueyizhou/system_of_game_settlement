var main = $("#main");


var Log = function(word){
    main.append("<div>"+word+"</div>");
}

var Player = function(){
    id = 0;
}

var Players = {
    SIZE : 2,
    init : function(){
        for(var i=0;i<Players.SIZE;i++){
            var tmp = new Player();
            Players.append(tmp);
        }
    },
    first : function(){
        return 0;
    },
    switch : function(id){
        id++;
        if (id >= Players.SIZE) return -1;
        return id;
    }
}

var Battle = {
    ready : function(){
        Log("----    战斗准备    ----");
        
        Log("<br>");
    },
    start : function(){
        Log("----    战斗开始    ----");
    },
    turnLoop : function(turn,max_turn){
        if (turn > max_turn) return 0;
        Log("----    第"+turn+"回合    ----");
        Battle.playerLoop(Players.first());
        
        Log("<br>");
        Battle.turnLoop(turn+1, max_turn);
    },
    playerLoop : function(player){
        if (player < 0) return 0;
        Log(">>玩家"+player);
        Log("<br>");
        Battle.playerLoop(Players.switch(player));
    },
    end : function(){
        Log("----    战斗结束    ----");
    }
}

Battle.ready();
Battle.start();
Battle.turnLoop(1,16);
Battle.end();

