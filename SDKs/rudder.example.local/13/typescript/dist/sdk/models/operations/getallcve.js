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
export var GetAllCve200ApplicationJsonActionEnum;
(function (GetAllCve200ApplicationJsonActionEnum) {
    GetAllCve200ApplicationJsonActionEnum["GetAllCve"] = "getAllCve";
})(GetAllCve200ApplicationJsonActionEnum || (GetAllCve200ApplicationJsonActionEnum = {}));
var GetAllCve200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetAllCve200ApplicationJsonData, _super);
    function GetAllCve200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CVEs", elemType: shared.CveDetails }),
        __metadata("design:type", Array)
    ], GetAllCve200ApplicationJsonData.prototype, "cvEs", void 0);
    return GetAllCve200ApplicationJsonData;
}(SpeakeasyBase));
export { GetAllCve200ApplicationJsonData };
export var GetAllCve200ApplicationJsonResultEnum;
(function (GetAllCve200ApplicationJsonResultEnum) {
    GetAllCve200ApplicationJsonResultEnum["Success"] = "success";
    GetAllCve200ApplicationJsonResultEnum["Error"] = "error";
})(GetAllCve200ApplicationJsonResultEnum || (GetAllCve200ApplicationJsonResultEnum = {}));
var GetAllCve200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAllCve200ApplicationJson, _super);
    function GetAllCve200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetAllCve200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetAllCve200ApplicationJsonData)
    ], GetAllCve200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetAllCve200ApplicationJson.prototype, "result", void 0);
    return GetAllCve200ApplicationJson;
}(SpeakeasyBase));
export { GetAllCve200ApplicationJson };
var GetAllCveResponse = /** @class */ (function (_super) {
    __extends(GetAllCveResponse, _super);
    function GetAllCveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllCveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllCveResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllCve200ApplicationJson)
    ], GetAllCveResponse.prototype, "getAllCve200ApplicationJsonObject", void 0);
    return GetAllCveResponse;
}(SpeakeasyBase));
export { GetAllCveResponse };
