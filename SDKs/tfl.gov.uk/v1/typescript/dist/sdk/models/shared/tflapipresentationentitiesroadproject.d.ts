import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TflApiPresentationEntitiesRoadProjectPhaseEnum {
    Unscoped = "Unscoped",
    Concept = "Concept",
    ConsultationEnded = "ConsultationEnded",
    Consultation = "Consultation",
    Construction = "Construction",
    Complete = "Complete"
}
export declare class TflApiPresentationEntitiesRoadProject extends SpeakeasyBase {
    boroughsBenefited?: string[];
    constructionEndDate?: Date;
    constructionStartDate?: Date;
    consultationEndDate?: Date;
    consultationPageUrl?: string;
    consultationStartDate?: Date;
    contactEmail?: string;
    contactName?: string;
    cycleSuperhighwayId?: string;
    externalPageUrl?: string;
    phase?: TflApiPresentationEntitiesRoadProjectPhaseEnum;
    projectDescription?: string;
    projectId?: string;
    projectName?: string;
    projectPageUrl?: string;
    projectSummaryPageUrl?: string;
    schemeName?: string;
}
