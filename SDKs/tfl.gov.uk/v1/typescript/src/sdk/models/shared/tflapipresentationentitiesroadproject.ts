import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TflApiPresentationEntitiesRoadProjectPhaseEnum {
    Unscoped = "Unscoped",
    Concept = "Concept",
    ConsultationEnded = "ConsultationEnded",
    Consultation = "Consultation",
    Construction = "Construction",
    Complete = "Complete"
}


export class TflApiPresentationEntitiesRoadProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boroughsBenefited" })
  boroughsBenefited?: string[];

  @SpeakeasyMetadata({ data: "json, name=constructionEndDate" })
  constructionEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=constructionStartDate" })
  constructionStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=consultationEndDate" })
  consultationEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=consultationPageUrl" })
  consultationPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=consultationStartDate" })
  consultationStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=cycleSuperhighwayId" })
  cycleSuperhighwayId?: string;

  @SpeakeasyMetadata({ data: "json, name=externalPageUrl" })
  externalPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=phase" })
  phase?: TflApiPresentationEntitiesRoadProjectPhaseEnum;

  @SpeakeasyMetadata({ data: "json, name=projectDescription" })
  projectDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName?: string;

  @SpeakeasyMetadata({ data: "json, name=projectPageUrl" })
  projectPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=projectSummaryPageUrl" })
  projectSummaryPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=schemeName" })
  schemeName?: string;
}
