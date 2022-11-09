import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Group } from "./group";
import { ContactPoint } from "./contactpoint";
import { GroupFeature } from "./groupfeature";
import { Lookup } from "./lookup";
import { Link } from "./link";
import { Location } from "./location";
import { Group } from "./group";


export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=address1" })
  address1?: string;

  @Metadata({ data: "json, name=address2" })
  address2?: string;

  @Metadata({ data: "json, name=address3" })
  address3?: string;

  @Metadata({ data: "json, name=childGroups", elemType: shared.Group })
  childGroups?: Group[];

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=contactPoints", elemType: shared.ContactPoint })
  contactPoints?: ContactPoint[];

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=fhirResourceId" })
  fhirResourceId?: string;

  @Metadata({ data: "json, name=groupFeatures", elemType: shared.GroupFeature })
  groupFeatures?: GroupFeature[];

  @Metadata({ data: "json, name=groupType" })
  groupType?: Lookup;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lastImportDate" })
  lastImportDate?: Date;

  @Metadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @Metadata({ data: "json, name=links", elemType: shared.Link })
  links?: Link[];

  @Metadata({ data: "json, name=locations", elemType: shared.Location })
  locations?: Location[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentGroups", elemType: shared.Group })
  parentGroups?: Group[];

  @Metadata({ data: "json, name=postcode" })
  postcode?: string;

  @Metadata({ data: "json, name=sftpUser" })
  sftpUser?: string;

  @Metadata({ data: "json, name=shortName" })
  shortName?: string;

  @Metadata({ data: "json, name=visible" })
  visible?: boolean;

  @Metadata({ data: "json, name=visibleToJoin" })
  visibleToJoin?: boolean;
}
