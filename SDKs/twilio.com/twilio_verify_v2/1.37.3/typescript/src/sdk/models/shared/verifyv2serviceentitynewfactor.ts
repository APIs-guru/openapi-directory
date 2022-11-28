import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewFactorEnumFactorTypesEnum } from "./newfactorenumfactortypesenum";
import { NewFactorEnumFactorStatusesEnum } from "./newfactorenumfactorstatusesenum";



export class VerifyV2ServiceEntityNewFactor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=binding" })
  binding?: any;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: any;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=entity_sid" })
  entitySid?: string;

  @SpeakeasyMetadata({ data: "json, name=factor_type" })
  factorType?: NewFactorEnumFactorTypesEnum;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: any;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: NewFactorEnumFactorStatusesEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
