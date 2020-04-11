import React from 'react';
import Card from "../kit/Card/card";
import Button from "../kit/Button/button";

const Buttons = () => {
    return (
        <div style={{display: 'flex', flexDirection: `column`}}>
            <h4 style={{marginTop: 0}}>Buttons</h4>

            <div style={{display: "flex"}}>

                {/*text buttons*/}
                <Card
                    style={{
                        padding: 16,
                        marginRight: 16,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <h4 className={`label`}>Text</h4>
                    <Button style={{marginBottom: 8}}>default</Button>
                    <Button style={{marginBottom: 8}} className={`primary`}>
                        primary
                    </Button>
                    <Button style={{marginBottom: 8}} className={`secondary`}>
                        secondary
                    </Button>

                    <Button style={{marginBottom: 8}} className={`success`}>
                        success
                    </Button>
                    <Button style={{marginBottom: 8}} className={`error`}>
                        error
                    </Button>
                    <Button style={{marginBottom: 8}} disabled>
                        disabled
                    </Button>
                </Card>

                {/*outlined buttons*/}
                <Card
                    style={{
                        padding: 16,
                        marginRight: 16,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <h4 className={`label`}>Outlined</h4>
                    <Button style={{marginBottom: 8}} className={`outlined`}>
                        default
                    </Button>
                    <Button style={{marginBottom: 8}} className={`outlined primary`}>
                        primary
                    </Button>
                    <Button style={{marginBottom: 8}} className={`outlined secondary`}>
                        secondary
                    </Button>

                    <Button style={{marginBottom: 8}} className={`outlined success`}>
                        success
                    </Button>
                    <Button style={{marginBottom: 8}} className={`outlined error`}>
                        error
                    </Button>
                    <Button style={{marginBottom: 8}} className={`outlined`} disabled>
                        disabled
                    </Button>
                </Card>

                {/*contained buttons*/}
                <Card
                    style={{
                        padding: 16,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <h4 className={`label`}>Contained</h4>
                    <Button style={{marginBottom: 8}} className={`contained`}>
                        default
                    </Button>
                    <Button style={{marginBottom: 8}} className={`contained primary`}>
                        primary
                    </Button>
                    <Button style={{marginBottom: 8}} className={`contained secondary`}>
                        secondary
                    </Button>

                    <Button style={{marginBottom: 8}} className={`contained success`}>
                        success
                    </Button>
                    <Button style={{marginBottom: 8}} className={`contained error`}>
                        error
                    </Button>
                    <Button style={{marginBottom: 8}} className={`contained`} disabled>
                        disabled
                    </Button>
                </Card>

            </div>

        </div>
    );
};

export default Buttons;