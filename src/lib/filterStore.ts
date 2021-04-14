/* Core */
import { makeAutoObservable } from 'mobx';
import { Filter } from '../types';

class FilterStore {
    filter: Filter = 'upcoming';

    constructor() {
        makeAutoObservable(this);
    }

    setFilter(nextFilter: Filter) {
        this.filter = nextFilter;
    }
}

export const filterStore = new FilterStore();
