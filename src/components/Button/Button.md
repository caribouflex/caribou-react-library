Button example :

```js
const theme1 = {
    primaryButtonColor: "#A389F4",
    primaryButtonHoverColor: "#592DEA"
};

const theme2 = {
    primaryButtonColor: "#EFF2F7",
    primaryButtonHoverColor: "#E5E9F2",
    primaryButtonFontColor: "#000000",
};

<div>
    <Button label="Cancel"/><br/>
    <Button label="Cancel" theme={theme1}/><br/>
    <Button label="Cancel" theme={theme2}/>
</div>
```