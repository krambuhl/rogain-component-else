# rogain-component-else

Used to denote an inverse branch. _Implicit component._

```html
<If data={LoggedIn} value="true">
    <Dashboard />
<Else />
    <LoginScreen />
</If>
```

__Else helper is not meant to be called as a block, it's used to split trees inside other helpers.__

## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-component-else
```

## License

MIT