# TODO APP TypeScript

1. create application : npx creat-react-app todolist-youtube --template typescript
    node : v16.14.2

    note to myself: 
        onSubmit:フォームにタスクを打ち、エンターキーを押したときに、どういう操作をするのか指定
        input:タスクを打ち込むところ。
        onChange:inputに文字を打ち込む度に呼ぶプロパティ。
        input type="submit"はボタンとしての機能も果たす。

    todo: {
        value: string,
        id: number,
        checked: boolean,
    }
    のプロパティを持つ

    送信ボタン（Submit）:e.preventDefalut

    map : 子要素に対してkeyの設定

    input disabled : boolean　クリックしたら操作が負荷になるという設定

    filter : delete　条件に合ったものを残す
    