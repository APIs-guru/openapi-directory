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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var ControllersSystemItemAttributes = /** @class */ (function (_super) {
    __extends(ControllersSystemItemAttributes, _super);
    function ControllersSystemItemAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], ControllersSystemItemAttributes.prototype, "created", void 0);
    __decorate([
        Metadata({ data: "json, name=culled_timestamp" }),
        __metadata("design:type", String)
    ], ControllersSystemItemAttributes.prototype, "culledTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], ControllersSystemItemAttributes.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=insights_id" }),
        __metadata("design:type", String)
    ], ControllersSystemItemAttributes.prototype, "insightsId", void 0);
    __decorate([
        Metadata({ data: "json, name=last_evaluation" }),
        __metadata("design:type", String)
    ], ControllersSystemItemAttributes.prototype, "lastEvaluation", void 0);
    __decorate([
        Metadata({ data: "json, name=last_upload" }),
        __metadata("design:type", String)
    ], ControllersSystemItemAttributes.prototype, "lastUpload", void 0);
    __decorate([
        Metadata({ data: "json, name=os_major" }),
        __metadata("design:type", String)
    ], ControllersSystemItemAttributes.prototype, "osMajor", void 0);
    __decorate([
        Metadata({ data: "json, name=os_minor" }),
        __metadata("design:type", String)
    ], ControllersSystemItemAttributes.prototype, "osMinor", void 0);
    __decorate([
        Metadata({ data: "json, name=os_name" }),
        __metadata("design:type", String)
    ], ControllersSystemItemAttributes.prototype, "osName", void 0);
    __decorate([
        Metadata({ data: "json, name=other_count" }),
        __metadata("design:type", Number)
    ], ControllersSystemItemAttributes.prototype, "otherCount", void 0);
    __decorate([
        Metadata({ data: "json, name=packages_installed" }),
        __metadata("design:type", Number)
    ], ControllersSystemItemAttributes.prototype, "packagesInstalled", void 0);
    __decorate([
        Metadata({ data: "json, name=packages_updatable" }),
        __metadata("design:type", Number)
    ], ControllersSystemItemAttributes.prototype, "packagesUpdatable", void 0);
    __decorate([
        Metadata({ data: "json, name=rhba_count" }),
        __metadata("design:type", Number)
    ], ControllersSystemItemAttributes.prototype, "rhbaCount", void 0);
    __decorate([
        Metadata({ data: "json, name=rhea_count" }),
        __metadata("design:type", Number)
    ], ControllersSystemItemAttributes.prototype, "rheaCount", void 0);
    __decorate([
        Metadata({ data: "json, name=rhsa_count" }),
        __metadata("design:type", Number)
    ], ControllersSystemItemAttributes.prototype, "rhsaCount", void 0);
    __decorate([
        Metadata({ data: "json, name=rhsm" }),
        __metadata("design:type", String)
    ], ControllersSystemItemAttributes.prototype, "rhsm", void 0);
    __decorate([
        Metadata({ data: "json, name=stale" }),
        __metadata("design:type", Boolean)
    ], ControllersSystemItemAttributes.prototype, "stale", void 0);
    __decorate([
        Metadata({ data: "json, name=stale_timestamp" }),
        __metadata("design:type", String)
    ], ControllersSystemItemAttributes.prototype, "staleTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=stale_warning_timestamp" }),
        __metadata("design:type", String)
    ], ControllersSystemItemAttributes.prototype, "staleWarningTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=third_party" }),
        __metadata("design:type", Boolean)
    ], ControllersSystemItemAttributes.prototype, "thirdParty", void 0);
    return ControllersSystemItemAttributes;
}(SpeakeasyBase));
export { ControllersSystemItemAttributes };
