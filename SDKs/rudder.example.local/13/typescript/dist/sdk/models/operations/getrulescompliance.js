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
var GetRulesComplianceQueryParams = /** @class */ (function (_super) {
    __extends(GetRulesComplianceQueryParams, _super);
    function GetRulesComplianceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=level" }),
        __metadata("design:type", Number)
    ], GetRulesComplianceQueryParams.prototype, "level", void 0);
    return GetRulesComplianceQueryParams;
}(SpeakeasyBase));
export { GetRulesComplianceQueryParams };
export var GetRulesCompliance200ApplicationJsonActionEnum;
(function (GetRulesCompliance200ApplicationJsonActionEnum) {
    GetRulesCompliance200ApplicationJsonActionEnum["GetRulesCompliance"] = "getRulesCompliance";
})(GetRulesCompliance200ApplicationJsonActionEnum || (GetRulesCompliance200ApplicationJsonActionEnum = {}));
var GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails = /** @class */ (function (_super) {
    __extends(GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails, _super);
    function GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Number)
    ], GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noReport" }),
        __metadata("design:type", Number)
    ], GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "noReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=successAlreadyOK" }),
        __metadata("design:type", Number)
    ], GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "successAlreadyOk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=successNotApplicable" }),
        __metadata("design:type", Number)
    ], GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "successNotApplicable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=successRepaired" }),
        __metadata("design:type", Number)
    ], GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "successRepaired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unexpectedMissingComponent" }),
        __metadata("design:type", Number)
    ], GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "unexpectedMissingComponent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unexpectedUnknownComponent" }),
        __metadata("design:type", Number)
    ], GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails.prototype, "unexpectedUnknownComponent", void 0);
    return GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails;
}(SpeakeasyBase));
export { GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails };
export var GetRulesCompliance200ApplicationJsonDataRulesModeEnum;
(function (GetRulesCompliance200ApplicationJsonDataRulesModeEnum) {
    GetRulesCompliance200ApplicationJsonDataRulesModeEnum["FullCompliance"] = "full-compliance";
    GetRulesCompliance200ApplicationJsonDataRulesModeEnum["ChangesOnly"] = "changes-only";
    GetRulesCompliance200ApplicationJsonDataRulesModeEnum["ReportsDisabled"] = "reports-disabled";
})(GetRulesCompliance200ApplicationJsonDataRulesModeEnum || (GetRulesCompliance200ApplicationJsonDataRulesModeEnum = {}));
var GetRulesCompliance200ApplicationJsonDataRules = /** @class */ (function (_super) {
    __extends(GetRulesCompliance200ApplicationJsonDataRules, _super);
    function GetRulesCompliance200ApplicationJsonDataRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compliance" }),
        __metadata("design:type", Number)
    ], GetRulesCompliance200ApplicationJsonDataRules.prototype, "compliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=complianceDetails" }),
        __metadata("design:type", GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails)
    ], GetRulesCompliance200ApplicationJsonDataRules.prototype, "complianceDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetRulesCompliance200ApplicationJsonDataRules.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], GetRulesCompliance200ApplicationJsonDataRules.prototype, "mode", void 0);
    return GetRulesCompliance200ApplicationJsonDataRules;
}(SpeakeasyBase));
export { GetRulesCompliance200ApplicationJsonDataRules };
var GetRulesCompliance200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetRulesCompliance200ApplicationJsonData, _super);
    function GetRulesCompliance200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: GetRulesCompliance200ApplicationJsonDataRules }),
        __metadata("design:type", Array)
    ], GetRulesCompliance200ApplicationJsonData.prototype, "rules", void 0);
    return GetRulesCompliance200ApplicationJsonData;
}(SpeakeasyBase));
export { GetRulesCompliance200ApplicationJsonData };
export var GetRulesCompliance200ApplicationJsonResultEnum;
(function (GetRulesCompliance200ApplicationJsonResultEnum) {
    GetRulesCompliance200ApplicationJsonResultEnum["Success"] = "success";
    GetRulesCompliance200ApplicationJsonResultEnum["Error"] = "error";
})(GetRulesCompliance200ApplicationJsonResultEnum || (GetRulesCompliance200ApplicationJsonResultEnum = {}));
var GetRulesCompliance200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRulesCompliance200ApplicationJson, _super);
    function GetRulesCompliance200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetRulesCompliance200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetRulesCompliance200ApplicationJsonData)
    ], GetRulesCompliance200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetRulesCompliance200ApplicationJson.prototype, "result", void 0);
    return GetRulesCompliance200ApplicationJson;
}(SpeakeasyBase));
export { GetRulesCompliance200ApplicationJson };
var GetRulesComplianceRequest = /** @class */ (function (_super) {
    __extends(GetRulesComplianceRequest, _super);
    function GetRulesComplianceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRulesComplianceQueryParams)
    ], GetRulesComplianceRequest.prototype, "queryParams", void 0);
    return GetRulesComplianceRequest;
}(SpeakeasyBase));
export { GetRulesComplianceRequest };
var GetRulesComplianceResponse = /** @class */ (function (_super) {
    __extends(GetRulesComplianceResponse, _super);
    function GetRulesComplianceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRulesComplianceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRulesComplianceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRulesCompliance200ApplicationJson)
    ], GetRulesComplianceResponse.prototype, "getRulesCompliance200ApplicationJsonObject", void 0);
    return GetRulesComplianceResponse;
}(SpeakeasyBase));
export { GetRulesComplianceResponse };
