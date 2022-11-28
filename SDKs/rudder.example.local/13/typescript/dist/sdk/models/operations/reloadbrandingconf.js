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
export var ReloadBrandingConf200ApplicationJsonActionEnum;
(function (ReloadBrandingConf200ApplicationJsonActionEnum) {
    ReloadBrandingConf200ApplicationJsonActionEnum["GetBrandingConf"] = "getBrandingConf";
})(ReloadBrandingConf200ApplicationJsonActionEnum || (ReloadBrandingConf200ApplicationJsonActionEnum = {}));
var ReloadBrandingConf200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ReloadBrandingConf200ApplicationJsonData, _super);
    function ReloadBrandingConf200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branding" }),
        __metadata("design:type", shared.BrandingConf)
    ], ReloadBrandingConf200ApplicationJsonData.prototype, "branding", void 0);
    return ReloadBrandingConf200ApplicationJsonData;
}(SpeakeasyBase));
export { ReloadBrandingConf200ApplicationJsonData };
export var ReloadBrandingConf200ApplicationJsonResultEnum;
(function (ReloadBrandingConf200ApplicationJsonResultEnum) {
    ReloadBrandingConf200ApplicationJsonResultEnum["Success"] = "success";
    ReloadBrandingConf200ApplicationJsonResultEnum["Error"] = "error";
})(ReloadBrandingConf200ApplicationJsonResultEnum || (ReloadBrandingConf200ApplicationJsonResultEnum = {}));
var ReloadBrandingConf200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReloadBrandingConf200ApplicationJson, _super);
    function ReloadBrandingConf200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ReloadBrandingConf200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ReloadBrandingConf200ApplicationJsonData)
    ], ReloadBrandingConf200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ReloadBrandingConf200ApplicationJson.prototype, "result", void 0);
    return ReloadBrandingConf200ApplicationJson;
}(SpeakeasyBase));
export { ReloadBrandingConf200ApplicationJson };
var ReloadBrandingConfResponse = /** @class */ (function (_super) {
    __extends(ReloadBrandingConfResponse, _super);
    function ReloadBrandingConfResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReloadBrandingConfResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReloadBrandingConfResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReloadBrandingConf200ApplicationJson)
    ], ReloadBrandingConfResponse.prototype, "reloadBrandingConf200ApplicationJsonObject", void 0);
    return ReloadBrandingConfResponse;
}(SpeakeasyBase));
export { ReloadBrandingConfResponse };
