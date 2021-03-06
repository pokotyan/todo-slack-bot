// Description:
//   TODO を管理することができるボットです
// Commands:
//   ボット名 todo     - TODO を作成
//   ボット名 done     - TODO を完了にする
//   ボット名 del      - TODO を消す
//   ボット名 list     - TODO の一覧表示
//   ボット名 donelist - 完了した TODO の一覧表示
'use strict';
const todo = require('todo');
module.exports = (robot) => {
    //respondは明示的にhubotに対して呼びかけを行なったときに反応する。
    //参考：http://qiita.com/Kta-M/items/d7e0f371e40b4cefc38a
    robot.respond(/todo (.+)/i,(msg)=>{
        const task = msg.match[1].trim();
        todo.todo(task);
        msg.send('追加しました：' + task);
    });
    robot.respond(/done (.+)/i,(msg)=>{
        const task = msg.match[1].trim();
        todo.done(task);
        msg.send('完了しました：' + task);
    });
    robot.respond(/del (.+)/i,(msg)=>{
        const task = msg.match[1].trim();
        todo.del(task);
        msg.send('削除しました：' + task);
    });
    robot.respond(/list/i,(msg)=>{
        if(todo.list().length === 0){
            return msg.send('タスクなし');
        }
        msg.send(todo.list().join('\n'));
    });
    robot.respond(/donelist/i,(msg)=>{
        if(todo.donelist().length === 0){
            return msg.send('完了タスクなし');
        }
        msg.send(todo.donelist().join('\n'));
    });
};