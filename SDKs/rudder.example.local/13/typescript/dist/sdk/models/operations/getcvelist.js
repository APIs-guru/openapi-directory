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
import * as shared from "../shared";
// GetCveListRequestBody
/**
 * cveList
**/
var GetCveListRequestBody = /** @class */ (function (_super) {
    __extends(GetCveListRequestBody, _super);
    function GetCveListRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cveIds" }),
        __metadata("design:type", Array)
    ], GetCveListRequestBody.prototype, "cveIds", void 0);
    return GetCveListRequestBody;
}(SpeakeasyBase));
export { GetCveListRequestBody };
export var GetCveList200ApplicationJsonActionEnum;
(function (GetCveList200ApplicationJsonActionEnum) {
    GetCveList200ApplicationJsonActionEnum["GetCveList"] = "getCVEList";
})(GetCveList200ApplicationJsonActionEnum || (GetCveList200ApplicationJsonActionEnum = {}));
var GetCveList200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetCveList200ApplicationJsonData, _super);
    function GetCveList200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CVEs", elemType: shared.CveDetails }),
        __metadata("design:type", Array)
    ], GetCveList200ApplicationJsonData.prototype, "cvEs", void 0);
    return GetCveList200ApplicationJsonData;
}(SpeakeasyBase));
export { GetCveList200ApplicationJsonData };
export var GetCveList200ApplicationJsonResultEnum;
(function (GetCveList200ApplicationJsonResultEnum) {
    GetCveList200ApplicationJsonResultEnum["Success"] = "success";
    GetCveList200ApplicationJsonResultEnum["Error"] = "error";
})(GetCveList200ApplicationJsonResultEnum || (GetCveList200ApplicationJsonResultEnum = {}));
var GetCveList200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCveList200ApplicationJson, _super);
    function GetCveList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetCveList200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetCveList200ApplicationJsonData)
    ], GetCveList200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetCveList200ApplicationJson.prototype, "result", void 0);
    return GetCveList200ApplicationJson;
}(SpeakeasyBase));
export { GetCveList200ApplicationJson };
var GetCveListRequest = /** @class */ (function (_super) {
    __extends(GetCveListRequest, _super);
    function GetCveListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetCveListRequestBody)
    ], GetCveListRequest.prototype, "request", void 0);
    return GetCveListRequest;
}(SpeakeasyBase));
export { GetCveListRequest };
var GetCveListResponse = /** @class */ (function (_super) {
    __extends(GetCveListResponse, _super);
    function GetCveListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCveListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCveListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCveList200ApplicationJson)
    ], GetCveListResponse.prototype, "getCveList200ApplicationJsonObject", void 0);
    return GetCveListResponse;
}(SpeakeasyBase));
export { GetCveListResponse };
