import React from 'react';

export default class ComboSelector extends React.Component {
    constructor() {
        super();
        this.state = {
            activeSort: 'Popularity',
            showMenu: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.changeSort = this.changeSort.bind(this);
    }

    toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    changeSort(sortType, sortTypeTidy) {
        this.props.throw(sortType);
        this.setState({
            activeSort: sortTypeTidy
        })
    }

    render() {
        return (
            <div className="comboSelector" onClick={this.toggleMenu}>
                Sort by: {this.state.activeSort}
                <div className="comboSelector-menu" style={{display: this.state.showMenu ? 'block' : 'none'}}>
                    {this.props.menuList.map((val, i) => {
                        return <div key={"combo" + i} className="comboSelector-menu-item" onClick={() => this.changeSort(val.messy, val.tidy)}>{val.tidy}</div>
                    })}
                </div>
            </div>
        )
    }
} 