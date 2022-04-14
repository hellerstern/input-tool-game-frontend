import React, { Component, useEffect, useState, useRef } from 'react';
import ReactPlayer from "react-player";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'

import useSound from 'use-sound';
import phoneRing from '../../assets/sounds/ringing.mp3';

export default function SizeExample() {
    const player = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [play] = useSound(phoneRing);

    useEffect(() => {
        onOpen()
    }, []);

    // Play Phone Ringing audio
    useEffect(() => {
        if (!isOpen) {
            try {
                // play();
                console.log("Audio playing now..");
            } catch (error) {
                console.log(error);
            }
        }
    }, [isOpen]);

    return (
        <div className="player-wrapper">
            <Modal onClose={onClose} size="full" isOpen={isOpen} >
                <ModalOverlay />
                <ModalContent>
                    <ModalBody
                    >
                        <ReactPlayer
                            ref={player}
                            className='react-player'
                            url={['video/Acclaim_Intro_Video.m4v']}
                            width="100%"
                            height="100%"
                            playing={isOpen}
                            muted='true'
                            config={{ file: { forceHLS: true } }}
                            style={{ position: 'absolute', top: '0', left: '0' }}
                            onEnded={onClose}
                        />
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button colorScheme='blue' onClick={onClose}>Close</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </div>
    )
}