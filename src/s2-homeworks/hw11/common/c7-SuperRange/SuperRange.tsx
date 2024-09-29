import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '150px',
                color: '#00CC22',
                height: '4px',
                '& .MuiSlider-rail': {
                    color: '#8B8B8B'
                },
                '& .MuiSlider-thumb': {
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(0,204,34,0.15)',
                    },
                    '&:before': {
                        width: '7px',
                        height: '7px',

                        backgroundColor: 'currentColor',
                        borderRadius: '50%',
                        boxShadow: 'none'
                    },
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
                />
                )
            }

            export default SuperRange
