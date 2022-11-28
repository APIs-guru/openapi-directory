import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RoleNameEnum {
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
export declare class Role extends SpeakeasyBase {
    description?: string;
    id?: number;
    name?: RoleNameEnum;
    visible?: boolean;
}
