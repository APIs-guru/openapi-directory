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
export var GetAllSettings200ApplicationJsonActionEnum;
(function (GetAllSettings200ApplicationJsonActionEnum) {
    GetAllSettings200ApplicationJsonActionEnum["GetAllSettings"] = "getAllSettings";
})(GetAllSettings200ApplicationJsonActionEnum || (GetAllSettings200ApplicationJsonActionEnum = {}));
// GetAllSettings200ApplicationJsonData
/**
 * Information about the setting
**/
var GetAllSettings200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetAllSettings200ApplicationJsonData, _super);
    function GetAllSettings200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", Object)
    ], GetAllSettings200ApplicationJsonData.prototype, "settings", void 0);
    return GetAllSettings200ApplicationJsonData;
}(SpeakeasyBase));
export { GetAllSettings200ApplicationJsonData };
export var GetAllSettings200ApplicationJsonResultEnum;
(function (GetAllSettings200ApplicationJsonResultEnum) {
    GetAllSettings200ApplicationJsonResultEnum["Success"] = "success";
    GetAllSettings200ApplicationJsonResultEnum["Error"] = "error";
})(GetAllSettings200ApplicationJsonResultEnum || (GetAllSettings200ApplicationJsonResultEnum = {}));
var GetAllSettings200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAllSettings200ApplicationJson, _super);
    function GetAllSettings200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetAllSettings200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetAllSettings200ApplicationJsonData)
    ], GetAllSettings200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetAllSettings200ApplicationJson.prototype, "result", void 0);
    return GetAllSettings200ApplicationJson;
}(SpeakeasyBase));
export { GetAllSettings200ApplicationJson };
var GetAllSettingsResponse = /** @class */ (function (_super) {
    __extends(GetAllSettingsResponse, _super);
    function GetAllSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllSettings200ApplicationJson)
    ], GetAllSettingsResponse.prototype, "getAllSettings200ApplicationJsonObject", void 0);
    return GetAllSettingsResponse;
}(SpeakeasyBase));
export { GetAllSettingsResponse };
