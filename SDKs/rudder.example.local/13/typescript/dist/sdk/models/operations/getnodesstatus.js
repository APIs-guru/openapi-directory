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
var GetNodesStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetNodesStatusQueryParams, _super);
    function GetNodesStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], GetNodesStatusQueryParams.prototype, "ids", void 0);
    return GetNodesStatusQueryParams;
}(SpeakeasyBase));
export { GetNodesStatusQueryParams };
export var GetNodesStatus200ApplicationJsonActionEnum;
(function (GetNodesStatus200ApplicationJsonActionEnum) {
    GetNodesStatus200ApplicationJsonActionEnum["GetNodesStatus"] = "getNodesStatus";
})(GetNodesStatus200ApplicationJsonActionEnum || (GetNodesStatus200ApplicationJsonActionEnum = {}));
export var GetNodesStatus200ApplicationJsonDataNodesStatusEnum;
(function (GetNodesStatus200ApplicationJsonDataNodesStatusEnum) {
    GetNodesStatus200ApplicationJsonDataNodesStatusEnum["Pending"] = "pending";
    GetNodesStatus200ApplicationJsonDataNodesStatusEnum["Accepted"] = "accepted";
    GetNodesStatus200ApplicationJsonDataNodesStatusEnum["Deleted"] = "deleted";
    GetNodesStatus200ApplicationJsonDataNodesStatusEnum["Unknown"] = "unknown";
})(GetNodesStatus200ApplicationJsonDataNodesStatusEnum || (GetNodesStatus200ApplicationJsonDataNodesStatusEnum = {}));
var GetNodesStatus200ApplicationJsonDataNodes = /** @class */ (function (_super) {
    __extends(GetNodesStatus200ApplicationJsonDataNodes, _super);
    function GetNodesStatus200ApplicationJsonDataNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetNodesStatus200ApplicationJsonDataNodes.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetNodesStatus200ApplicationJsonDataNodes.prototype, "status", void 0);
    return GetNodesStatus200ApplicationJsonDataNodes;
}(SpeakeasyBase));
export { GetNodesStatus200ApplicationJsonDataNodes };
// GetNodesStatus200ApplicationJsonData
/**
 * List of nodeId and associated status
**/
var GetNodesStatus200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetNodesStatus200ApplicationJsonData, _super);
    function GetNodesStatus200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodes", elemType: GetNodesStatus200ApplicationJsonDataNodes }),
        __metadata("design:type", Array)
    ], GetNodesStatus200ApplicationJsonData.prototype, "nodes", void 0);
    return GetNodesStatus200ApplicationJsonData;
}(SpeakeasyBase));
export { GetNodesStatus200ApplicationJsonData };
export var GetNodesStatus200ApplicationJsonResultEnum;
(function (GetNodesStatus200ApplicationJsonResultEnum) {
    GetNodesStatus200ApplicationJsonResultEnum["Success"] = "success";
    GetNodesStatus200ApplicationJsonResultEnum["Error"] = "error";
})(GetNodesStatus200ApplicationJsonResultEnum || (GetNodesStatus200ApplicationJsonResultEnum = {}));
var GetNodesStatus200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetNodesStatus200ApplicationJson, _super);
    function GetNodesStatus200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetNodesStatus200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetNodesStatus200ApplicationJsonData)
    ], GetNodesStatus200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetNodesStatus200ApplicationJson.prototype, "result", void 0);
    return GetNodesStatus200ApplicationJson;
}(SpeakeasyBase));
export { GetNodesStatus200ApplicationJson };
var GetNodesStatusRequest = /** @class */ (function (_super) {
    __extends(GetNodesStatusRequest, _super);
    function GetNodesStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodesStatusQueryParams)
    ], GetNodesStatusRequest.prototype, "queryParams", void 0);
    return GetNodesStatusRequest;
}(SpeakeasyBase));
export { GetNodesStatusRequest };
var GetNodesStatusResponse = /** @class */ (function (_super) {
    __extends(GetNodesStatusResponse, _super);
    function GetNodesStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNodesStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNodesStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNodesStatus200ApplicationJson)
    ], GetNodesStatusResponse.prototype, "getNodesStatus200ApplicationJsonObject", void 0);
    return GetNodesStatusResponse;
}(SpeakeasyBase));
export { GetNodesStatusResponse };
