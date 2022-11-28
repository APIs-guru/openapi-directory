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
var ChangeRequestChangesRules = /** @class */ (function (_super) {
    __extends(ChangeRequestChangesRules, _super);
    function ChangeRequestChangesRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ChangeRequestChangesRules.prototype, "action", void 0);
    return ChangeRequestChangesRules;
}(SpeakeasyBase));
export { ChangeRequestChangesRules };
var ChangeRequestChanges = /** @class */ (function (_super) {
    __extends(ChangeRequestChanges, _super);
    function ChangeRequestChanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: ChangeRequestChangesRules }),
        __metadata("design:type", Array)
    ], ChangeRequestChanges.prototype, "rules", void 0);
    return ChangeRequestChanges;
}(SpeakeasyBase));
export { ChangeRequestChanges };
export var ChangeRequestStatusEnum;
(function (ChangeRequestStatusEnum) {
    ChangeRequestStatusEnum["Deployed"] = "Deployed";
    ChangeRequestStatusEnum["PendingDeployment"] = "Pending deployment";
    ChangeRequestStatusEnum["Cancelled"] = "Cancelled";
    ChangeRequestStatusEnum["PendingValidation"] = "Pending validation";
    ChangeRequestStatusEnum["Open"] = "Open";
})(ChangeRequestStatusEnum || (ChangeRequestStatusEnum = {}));
// ChangeRequest
/**
 * Content of the change request
**/
var ChangeRequest = /** @class */ (function (_super) {
    __extends(ChangeRequest, _super);
    function ChangeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acceptable" }),
        __metadata("design:type", Boolean)
    ], ChangeRequest.prototype, "acceptable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changes" }),
        __metadata("design:type", ChangeRequestChanges)
    ], ChangeRequest.prototype, "changes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created by" }),
        __metadata("design:type", String)
    ], ChangeRequest.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ChangeRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ChangeRequest.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ChangeRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ChangeRequest.prototype, "status", void 0);
    return ChangeRequest;
}(SpeakeasyBase));
export { ChangeRequest };
