## Q.1.  Ex-1

```js

function x(){
    var i = 1;
    setTimeout(function () {
        console.log(i);
    },3000)
    console.log("Namaste JavaScript");
}

x()

```
## Q.2.  Print 1 to n after 1 to n Seconds ?

* EX:-1

```js

function x(){
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        },i*1000)
    }
    console.log("Namaste JavaScript");
}

x()

```

* Solutions :-

```css

Namaste JavaScript
6
6
6
6
6

```

* EX:-2

```js

function x(){
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        },i*1000)
    }
    console.log("Namaste JavaScript");
}

x()

```

* Solutions :-

```css

Namaste JavaScript
1
2
3
4
5


```
* EX:-3

```js

function x(){
    for (var i = 1; i <= 5; i++) {
        function close(i){
            setTimeout(function () {
                console.log(i);
            },i*1000)
        }
        close(i)
    }
    console.log("Namaste JavaScript");
}

x()

```

* Solutions :-

```css

Namaste JavaScript
1
2
3
4
5


```

### JavaScript :-

* Strongly Typed inherently safe Compiled Programming Languages .

