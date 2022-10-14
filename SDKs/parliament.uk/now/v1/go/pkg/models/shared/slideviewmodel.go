package shared

import (
	"time"
)

type SlideViewModelSoundToPlayEnum string

const (
	SlideViewModelSoundToPlayEnumNewSlide     SlideViewModelSoundToPlayEnum = "NewSlide"
	SlideViewModelSoundToPlayEnumDivisionBell SlideViewModelSoundToPlayEnum = "DivisionBell"
	SlideViewModelSoundToPlayEnumAlert        SlideViewModelSoundToPlayEnum = "Alert"
	SlideViewModelSoundToPlayEnumGenericBeep  SlideViewModelSoundToPlayEnum = "GenericBeep"
)

type SlideViewModelTypeEnum string

const (
	SlideViewModelTypeEnumDebate                  SlideViewModelTypeEnum = "Debate"
	SlideViewModelTypeEnumDivision                SlideViewModelTypeEnum = "Division"
	SlideViewModelTypeEnumOralQuestionTime        SlideViewModelTypeEnum = "OralQuestionTime"
	SlideViewModelTypeEnumUrgentQuestion          SlideViewModelTypeEnum = "UrgentQuestion"
	SlideViewModelTypeEnumStatement               SlideViewModelTypeEnum = "Statement"
	SlideViewModelTypeEnumPrayers                 SlideViewModelTypeEnum = "Prayers"
	SlideViewModelTypeEnumHouseRisen              SlideViewModelTypeEnum = "HouseRisen"
	SlideViewModelTypeEnumGeneric                 SlideViewModelTypeEnum = "Generic"
	SlideViewModelTypeEnumNotSitting              SlideViewModelTypeEnum = "NotSitting"
	SlideViewModelTypeEnumPrimeMinistersQuestions SlideViewModelTypeEnum = "PrimeMinistersQuestions"
	SlideViewModelTypeEnumPointsOfOrder           SlideViewModelTypeEnum = "PointsOfOrder"
	SlideViewModelTypeEnumBlankSlide              SlideViewModelTypeEnum = "BlankSlide"
)

type SlideViewModel struct {
	CarouselDisplaySeconds *int32                         `json:"carouselDisplaySeconds,omitempty"`
	CarouselOrder          *int32                         `json:"carouselOrder,omitempty"`
	ID                     *int32                         `json:"id,omitempty"`
	Lines                  []LineViewModel                `json:"lines,omitempty"`
	SlideTime              *time.Time                     `json:"slideTime,omitempty"`
	SoundToPlay            *SlideViewModelSoundToPlayEnum `json:"soundToPlay,omitempty"`
	SpeakerTime            *time.Time                     `json:"speakerTime,omitempty"`
	Type                   *SlideViewModelTypeEnum        `json:"type,omitempty"`
}
