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
	CarouselDisplaySeconds *int32                         `json:"carouselDisplaySeconds"`
	CarouselOrder          *int32                         `json:"carouselOrder"`
	ID                     *int32                         `json:"id"`
	Lines                  []LineViewModel                `json:"lines"`
	SlideTime              *time.Time                     `json:"slideTime"`
	SoundToPlay            *SlideViewModelSoundToPlayEnum `json:"soundToPlay"`
	SpeakerTime            *time.Time                     `json:"speakerTime"`
	Type                   *SlideViewModelTypeEnum        `json:"type"`
}
