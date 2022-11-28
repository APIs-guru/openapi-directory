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
export var GetBrandingConf200ApplicationJsonActionEnum;
(function (GetBrandingConf200ApplicationJsonActionEnum) {
    GetBrandingConf200ApplicationJsonActionEnum["GetBrandingConf"] = "getBrandingConf";
})(GetBrandingConf200ApplicationJsonActionEnum || (GetBrandingConf200ApplicationJsonActionEnum = {}));
var GetBrandingConf200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetBrandingConf200ApplicationJsonData, _super);
    function GetBrandingConf200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branding" }),
        __metadata("design:type", shared.BrandingConf)
    ], GetBrandingConf200ApplicationJsonData.prototype, "branding", void 0);
    return GetBrandingConf200ApplicationJsonData;
}(SpeakeasyBase));
export { GetBrandingConf200ApplicationJsonData };
export var GetBrandingConf200ApplicationJsonResultEnum;
(function (GetBrandingConf200ApplicationJsonResultEnum) {
    GetBrandingConf200ApplicationJsonResultEnum["Success"] = "success";
    GetBrandingConf200ApplicationJsonResultEnum["Error"] = "error";
})(GetBrandingConf200ApplicationJsonResultEnum || (GetBrandingConf200ApplicationJsonResultEnum = {}));
var GetBrandingConf200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBrandingConf200ApplicationJson, _super);
    function GetBrandingConf200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetBrandingConf200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetBrandingConf200ApplicationJsonData)
    ], GetBrandingConf200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetBrandingConf200ApplicationJson.prototype, "result", void 0);
    return GetBrandingConf200ApplicationJson;
}(SpeakeasyBase));
export { GetBrandingConf200ApplicationJson };
var GetBrandingConfResponse = /** @class */ (function (_super) {
    __extends(GetBrandingConfResponse, _super);
    function GetBrandingConfResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBrandingConfResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBrandingConfResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBrandingConf200ApplicationJson)
    ], GetBrandingConfResponse.prototype, "getBrandingConf200ApplicationJsonObject", void 0);
    return GetBrandingConfResponse;
}(SpeakeasyBase));
export { GetBrandingConfResponse };
