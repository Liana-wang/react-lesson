import React, { Component } from 'react';
import Dialog from "../components/Dialog";

export default class DialogPage extends Component {
    state = {
        isShowDialog: false
    }

    render() {
        const { isShowDialog } = this.state

        return (
            <div>
                <h3>DialogPage</h3>
                <button
                    onClick={() => this.setState({ isShowDialog: !isShowDialog })}
                >
                    toggle
                </button>
                {
                    isShowDialog &&
                    <Dialog>
                        <p>我是一段文本</p>
                    </Dialog>
                }
            </div>
        )
    }
}
