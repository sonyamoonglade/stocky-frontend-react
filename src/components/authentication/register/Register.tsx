import React, {useState} from 'react';
import {Input, InputGroup, InputLeftAddon, Stack} from "@chakra-ui/react";

const Register = () => {

    const [formState, setFormState] = useState(1)

    return (
        <div className='register auth-card'>

            <form>

                <Stack spacing={4}>
                    <InputGroup size={'md'}>
                        <InputLeftAddon children={'firstname'}/>
                        <Input placeholder='Dmitri...'/>
                    </InputGroup>
                </Stack>

            </form>

        </div>
    );
};

export default Register;