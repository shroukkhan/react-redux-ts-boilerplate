import "../service/array-helpers";

import React, {Component} from "react";
import {times} from "lodash";
import classNames from "classnames";

import FlipMove from "react-flip-move";
import "./styles/app.scss";

const NUM_SQUARES = 10;

const FLIP_DURATION = 750;

const tag = "[AppUi]";

declare interface Square {
    id: number;
}

// tslint:disable-next-line
declare interface Props {

}

declare interface State {
    squares: Square[];
}

class Board extends Component <Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            squares: times(NUM_SQUARES, i => ({
                id: i,
            })),
        };
    }

    public renderSquares() {
        // @ts-ignore
        return this.state.squares.map((square, index) => {
            const classes = classNames({
                square: true,
            });

            return (
                // @ts-ignore
                <div
                    key={square.id}
                    className={classes}
                    onClick={() => {
                        this.flipRight(index);
                    }}
                    id={square.id.toString()}
                    index={index}
                >
                    <input/>
                </div>
            );
        });
    }

    public flipRight(index: number) {

        const currentIndex = index;
        const newIndex = currentIndex + 1;
        console.log(tag + " flipping between ", {currentIndex, newIndex});

        this.setState({
            // @ts-ignore
            squares: this.state.squares.slice().swap(currentIndex, newIndex),
        });
    }

    public render() {
        return (
            <div id="app">
                <div className="numbers">
                    <FlipMove
                        duration={FLIP_DURATION}
                        easing="cubic-bezier(.12,.36,.14,1.2)"
                    >
                        {this.renderSquares()}
                    </FlipMove>
                </div>
            </div>
        );
    }
}

export default Board;
