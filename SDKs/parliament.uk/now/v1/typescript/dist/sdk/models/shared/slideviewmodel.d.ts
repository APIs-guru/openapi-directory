import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LineViewModel } from "./lineviewmodel";
export declare enum SlideViewModelSoundToPlayEnum {
    NewSlide = "NewSlide",
    DivisionBell = "DivisionBell",
    Alert = "Alert",
    GenericBeep = "GenericBeep"
}
export declare enum SlideViewModelTypeEnum {
    Debate = "Debate",
    Division = "Division",
    OralQuestionTime = "OralQuestionTime",
    UrgentQuestion = "UrgentQuestion",
    Statement = "Statement",
    Prayers = "Prayers",
    HouseRisen = "HouseRisen",
    Generic = "Generic",
    NotSitting = "NotSitting",
    PrimeMinistersQuestions = "PrimeMinistersQuestions",
    PointsOfOrder = "PointsOfOrder",
    BlankSlide = "BlankSlide"
}
export declare class SlideViewModel extends SpeakeasyBase {
    carouselDisplaySeconds?: number;
    carouselOrder?: number;
    id?: number;
    lines?: LineViewModel[];
    slideTime?: Date;
    soundToPlay?: SlideViewModelSoundToPlayEnum;
    speakerTime?: Date;
    type?: SlideViewModelTypeEnum;
}
