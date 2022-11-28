import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RoleNameEnum {
    Patient = "PATIENT",
    UnitAdmin = "UNIT_ADMIN",
    StaffAdmin = "STAFF_ADMIN",
    DiseaseGroupAdmin = "DISEASE_GROUP_ADMIN",
    SpecialtyAdmin = "SPECIALTY_ADMIN",
    GlobalAdmin = "GLOBAL_ADMIN",
    GpAdmin = "GP_ADMIN",
    Member = "MEMBER",
    Public = "PUBLIC",
    UnitAdminApi = "UNIT_ADMIN_API",
    Importer = "IMPORTER"
}


export class Role extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  id?: number;

  @SpeakeasyMetadata()
  name?: RoleNameEnum;

  @SpeakeasyMetadata()
  visible?: boolean;
}
