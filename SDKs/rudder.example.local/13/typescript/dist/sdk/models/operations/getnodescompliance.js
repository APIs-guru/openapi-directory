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
var GetNodesComplianceQueryParams = /** @class */ (function (_super) {
    __extends(GetNodesComplianceQueryParams, _super);
    function GetNodesComplianceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=level" }),
        __metadata("design:type", Number)
    ], GetNodesComplianceQueryParams.prototype, "level", void 0);
    return GetNodesComplianceQueryParams;
}(SpeakeasyBase));
export { GetNodesComplianceQueryParams };
export var GetNodesCompliance200ApplicationJsonActionEnum;
(function (GetNodesCompliance200ApplicationJsonActionEnum) {
    GetNodesCompliance200ApplicationJsonActionEnum["GetNodesCompliance"] = "getNodesCompliance";
})(GetNodesCompliance200ApplicationJsonActionEnum || (GetNodesCompliance200ApplicationJsonActionEnum = {}));
var GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails = /** @class */ (function (_super) {
    __extends(GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails, _super);
    function GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Number)
    ], GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noReport" }),
        __metadata("design:type", Number)
    ], GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "noReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=successAlreadyOK" }),
        __metadata("design:type", Number)
    ], GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "successAlreadyOk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=successNotApplicable" }),
        __metadata("design:type", Number)
    ], GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "successNotApplicable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=successRepaired" }),
        __metadata("design:type", Number)
    ], GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "successRepaired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unexpectedMissingComponent" }),
        __metadata("design:type", Number)
    ], GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "unexpectedMissingComponent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unexpectedUnknownComponent" }),
        __metadata("design:type", Number)
    ], GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails.prototype, "unexpectedUnknownComponent", void 0);
    return GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails;
}(SpeakeasyBase));
export { GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails };
export var GetNodesCompliance200ApplicationJsonDataNodesModeEnum;
(function (GetNodesCompliance200ApplicationJsonDataNodesModeEnum) {
    GetNodesCompliance200ApplicationJsonDataNodesModeEnum["FullCompliance"] = "full-compliance";
    GetNodesCompliance200ApplicationJsonDataNodesModeEnum["ChangesOnly"] = "changes-only";
    GetNodesCompliance200ApplicationJsonDataNodesModeEnum["ReportsDisabled"] = "reports-disabled";
})(GetNodesCompliance200ApplicationJsonDataNodesModeEnum || (GetNodesCompliance200ApplicationJsonDataNodesModeEnum = {}));
var GetNodesCompliance200ApplicationJsonDataNodes = /** @class */ (function (_super) {
    __extends(GetNodesCompliance200ApplicationJsonDataNodes, _super);
    function GetNodesCompliance200ApplicationJsonDataNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compliance" }),
        __metadata("design:type", Number)
    ], GetNodesCompliance200ApplicationJsonDataNodes.prototype, "compliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=complianceDetails" }),
        __metadata("design:type", GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails)
    ], GetNodesCompliance200ApplicationJsonDataNodes.prototype, "complianceDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetNodesCompliance200ApplicationJsonDataNodes.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], GetNodesCompliance200ApplicationJsonDataNodes.prototype, "mode", void 0);
    return GetNodesCompliance200ApplicationJsonDataNodes;
}(SpeakeasyBase));
export { GetNodesCompliance200ApplicationJsonDataNodes };
var GetNodesCompliance200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetNodesCompliance200ApplicationJsonData, _super);
    function GetNodesCompliance200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodes", elemType: GetNodesCompliance200ApplicationJsonDataNodes }),
        __metadata("design:type", Array)
    ], GetNodesCompliance200ApplicationJsonData.prototype, "nodes", void 0);
    return GetNodesCompliance200ApplicationJsonData;
}(SpeakeasyBase));
export { GetNodesCompliance200ApplicationJsonData };
export var GetNodesCompliance200ApplicationJsonResultEnum;
(function (GetNodesCompliance200ApplicationJsonResultEnum) {
    GetNodesCompliance200ApplicationJsonResultEnum["Success"] = "success";
    GetNodesCompliance200ApplicationJsonResultEnum["Error"] = "error";
})(GetNodesCompliance200ApplicationJsonResultEnum || (GetNodesCompliance200ApplicationJsonResultEnum = {}));
var GetNodesCompliance200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetNodesCompliance200ApplicationJson, _super);
    function GetNodesCompliance200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetNodesCompliance200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetNodesCompliance200ApplicationJsonData)
    ], GetNodesCompliance200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetNodesCompliance200ApplicationJson.prototype, "result", void 0);
    return GetNodesCompliance200ApplicationJson;
}(SpeakeasyBase));
export { GetNodesCompliance200ApplicationJson };
var GetNodesComplianceRequest = /** @class */ (function (_super) {
    __extends(GetNodesComplianceRequest, _super);
    function GetNodesComplianceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodesComplianceQueryParams)
    ], GetNodesComplianceRequest.prototype, "queryParams", void 0);
    return GetNodesComplianceRequest;
}(SpeakeasyBase));
export { GetNodesComplianceRequest };
var GetNodesComplianceResponse = /** @class */ (function (_super) {
    __extends(GetNodesComplianceResponse, _super);
    function GetNodesComplianceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNodesComplianceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNodesComplianceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodesCompliance200ApplicationJson)
    ], GetNodesComplianceResponse.prototype, "getNodesCompliance200ApplicationJsonObject", void 0);
    return GetNodesComplianceResponse;
}(SpeakeasyBase));
export { GetNodesComplianceResponse };
