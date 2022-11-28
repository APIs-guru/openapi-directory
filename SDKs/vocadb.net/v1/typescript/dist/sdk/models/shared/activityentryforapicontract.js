var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchivedObjectVersionForApiContract } from "./archivedobjectversionforapicontract";
import { UserForApiContract } from "./userforapicontract";
import { EntryForApiContract } from "./entryforapicontract";
export var ActivityEntryForApiContractEditEventEnum;
(function (ActivityEntryForApiContractEditEventEnum) {
    ActivityEntryForApiContractEditEventEnum["Created"] = "Created";
    ActivityEntryForApiContractEditEventEnum["Updated"] = "Updated";
    ActivityEntryForApiContractEditEventEnum["Deleted"] = "Deleted";
    ActivityEntryForApiContractEditEventEnum["Restored"] = "Restored";
})(ActivityEntryForApiContractEditEventEnum || (ActivityEntryForApiContractEditEventEnum = {}));
var ActivityEntryForApiContract = /** @class */ (function (_super) {
    __extends(ActivityEntryForApiContract, _super);
    function ActivityEntryForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archivedVersion" }),
        __metadata("design:type", ArchivedObjectVersionForApiContract)
    ], ActivityEntryForApiContract.prototype, "archivedVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", UserForApiContract)
    ], ActivityEntryForApiContract.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], ActivityEntryForApiContract.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editEvent" }),
        __metadata("design:type", String)
    ], ActivityEntryForApiContract.prototype, "editEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entry" }),
        __metadata("design:type", EntryForApiContract)
    ], ActivityEntryForApiContract.prototype, "entry", void 0);
    return ActivityEntryForApiContract;
}(SpeakeasyBase));
export { ActivityEntryForApiContract };
