import BeMedia from 'be-media';

class BeCat extends BeMedia {
    constructor() {
        super();
        this.refresh();
    }

    'click::event'() {
        this.refresh();
    }

    refresh() {
        axios.get('https://aws.random.cat/meow')
            .then(response => this.src = response.data.file)
            .catch(error => console.error(error));
    }

}

var beCat = xtag.create('be-cat', BeCat);

export default beCat;