import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactPoint } from "./contactpoint";
import { GroupFeature } from "./groupfeature";
import { Lookup } from "./lookup";
import { Link } from "./link";
import { Location } from "./location";



export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=address3" })
  address3?: string;

  @SpeakeasyMetadata({ data: "json, name=childGroups", elemType: Group })
  childGroups?: Group[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=contactPoints", elemType: ContactPoint })
  contactPoints?: ContactPoint[];

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=fhirResourceId" })
  fhirResourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=groupFeatures", elemType: GroupFeature })
  groupFeatures?: GroupFeature[];

  @SpeakeasyMetadata({ data: "json, name=groupType" })
  groupType?: Lookup;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lastImportDate" })
  lastImportDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=locations", elemType: Location })
  locations?: Location[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentGroups", elemType: Group })
  parentGroups?: Group[];

  @SpeakeasyMetadata({ data: "json, name=postcode" })
  postcode?: string;

  @SpeakeasyMetadata({ data: "json, name=sftpUser" })
  sftpUser?: string;

  @SpeakeasyMetadata({ data: "json, name=shortName" })
  shortName?: string;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=visibleToJoin" })
  visibleToJoin?: boolean;
}
