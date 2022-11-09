import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FactorEnumFactorTypesEnum } from "./factorenumfactortypesenum";
import { FactorEnumFactorStatusesEnum } from "./factorenumfactorstatusesenum";


export class VerifyV2ServiceEntityFactor extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=config" })
  config?: any;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=entity_sid" })
  entitySid?: string;

  @Metadata({ data: "json, name=factor_type" })
  factorType?: FactorEnumFactorTypesEnum;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=identity" })
  identity?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: any;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: FactorEnumFactorStatusesEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
