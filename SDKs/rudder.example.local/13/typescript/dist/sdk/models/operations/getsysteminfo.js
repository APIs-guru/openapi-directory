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
export var GetSystemInfo200ApplicationJsonActionEnum;
(function (GetSystemInfo200ApplicationJsonActionEnum) {
    GetSystemInfo200ApplicationJsonActionEnum["GetSystemInfo"] = "getSystemInfo";
})(GetSystemInfo200ApplicationJsonActionEnum || (GetSystemInfo200ApplicationJsonActionEnum = {}));
// GetSystemInfo200ApplicationJsonData
/**
 * Information about the service
**/
var GetSystemInfo200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetSystemInfo200ApplicationJsonData, _super);
    function GetSystemInfo200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rudder" }),
        __metadata("design:type", Object)
    ], GetSystemInfo200ApplicationJsonData.prototype, "rudder", void 0);
    return GetSystemInfo200ApplicationJsonData;
}(SpeakeasyBase));
export { GetSystemInfo200ApplicationJsonData };
export var GetSystemInfo200ApplicationJsonResultEnum;
(function (GetSystemInfo200ApplicationJsonResultEnum) {
    GetSystemInfo200ApplicationJsonResultEnum["Success"] = "success";
    GetSystemInfo200ApplicationJsonResultEnum["Error"] = "error";
})(GetSystemInfo200ApplicationJsonResultEnum || (GetSystemInfo200ApplicationJsonResultEnum = {}));
var GetSystemInfo200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSystemInfo200ApplicationJson, _super);
    function GetSystemInfo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetSystemInfo200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetSystemInfo200ApplicationJsonData)
    ], GetSystemInfo200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetSystemInfo200ApplicationJson.prototype, "result", void 0);
    return GetSystemInfo200ApplicationJson;
}(SpeakeasyBase));
export { GetSystemInfo200ApplicationJson };
var GetSystemInfoResponse = /** @class */ (function (_super) {
    __extends(GetSystemInfoResponse, _super);
    function GetSystemInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSystemInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSystemInfoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSystemInfo200ApplicationJson)
    ], GetSystemInfoResponse.prototype, "getSystemInfo200ApplicationJsonObject", void 0);
    return GetSystemInfoResponse;
}(SpeakeasyBase));
export { GetSystemInfoResponse };
