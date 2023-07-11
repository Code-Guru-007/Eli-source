function Bot () {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: "numeric" };
    console.log((new Date(Date.now()).toLocaleDateString('en-US', options)) )
}

export default Bot;