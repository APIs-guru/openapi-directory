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
export var CreateSiprecServerList = [
    "https://api.twilio.com",
];
var CreateSiprecPathParams = /** @class */ (function (_super) {
    __extends(CreateSiprecPathParams, _super);
    function CreateSiprecPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateSiprecPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], CreateSiprecPathParams.prototype, "callSid", void 0);
    return CreateSiprecPathParams;
}(SpeakeasyBase));
export { CreateSiprecPathParams };
export var CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum;
(function (CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum) {
    CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum["Head"] = "HEAD";
    CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum["Get"] = "GET";
    CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum["Post"] = "POST";
    CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum["Patch"] = "PATCH";
    CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum["Put"] = "PUT";
    CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum["Delete"] = "DELETE";
})(CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum || (CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum = {}));
var CreateSiprecCreateSiprecRequest = /** @class */ (function (_super) {
    __extends(CreateSiprecCreateSiprecRequest, _super);
    function CreateSiprecCreateSiprecRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ConnectorName;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "connectorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter1.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter1Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter1.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter1Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter10.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter10Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter10.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter10Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter11.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter11Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter11.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter11Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter12.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter12Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter12.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter12Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter13.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter13Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter13.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter13Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter14.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter14Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter14.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter14Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter15.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter15Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter15.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter15Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter16.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter16Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter16.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter16Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter17.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter17Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter17.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter17Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter18.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter18Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter18.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter18Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter19.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter19Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter19.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter19Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter2.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter2Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter2.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter2Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter20.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter20Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter20.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter20Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter21.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter21Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter21.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter21Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter22.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter22Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter22.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter22Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter23.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter23Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter23.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter23Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter24.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter24Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter24.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter24Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter25.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter25Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter25.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter25Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter26.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter26Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter26.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter26Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter27.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter27Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter27.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter27Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter28.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter28Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter28.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter28Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter29.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter29Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter29.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter29Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter3.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter3Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter3.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter3Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter30.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter30Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter30.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter30Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter31.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter31Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter31.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter31Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter32.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter32Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter32.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter32Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter33.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter33Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter33.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter33Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter34.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter34Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter34.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter34Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter35.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter35Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter35.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter35Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter36.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter36Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter36.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter36Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter37.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter37Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter37.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter37Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter38.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter38Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter38.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter38Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter39.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter39Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter39.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter39Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter4.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter4Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter4.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter4Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter40.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter40Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter40.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter40Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter41.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter41Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter41.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter41Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter42.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter42Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter42.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter42Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter43.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter43Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter43.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter43Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter44.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter44Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter44.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter44Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter45.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter45Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter45.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter45Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter46.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter46Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter46.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter46Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter47.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter47Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter47.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter47Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter48.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter48Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter48.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter48Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter49.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter49Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter49.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter49Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter5.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter5Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter5.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter5Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter50.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter50Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter50.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter50Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter51.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter51Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter51.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter51Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter52.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter52Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter52.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter52Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter53.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter53Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter53.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter53Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter54.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter54Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter54.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter54Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter55.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter55Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter55.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter55Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter56.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter56Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter56.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter56Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter57.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter57Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter57.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter57Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter58.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter58Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter58.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter58Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter59.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter59Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter59.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter59Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter6.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter6Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter6.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter6Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter60.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter60Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter60.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter60Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter61.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter61Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter61.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter61Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter62.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter62Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter62.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter62Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter63.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter63Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter63.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter63Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter64.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter64Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter64.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter64Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter65.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter65Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter65.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter65Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter66.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter66Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter66.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter66Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter67.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter67Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter67.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter67Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter68.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter68Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter68.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter68Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter69.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter69Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter69.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter69Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter7.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter7Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter7.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter7Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter70.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter70Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter70.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter70Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter71.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter71Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter71.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter71Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter72.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter72Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter72.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter72Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter73.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter73Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter73.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter73Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter74.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter74Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter74.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter74Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter75.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter75Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter75.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter75Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter76.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter76Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter76.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter76Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter77.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter77Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter77.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter77Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter78.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter78Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter78.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter78Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter79.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter79Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter79.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter79Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter8.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter8Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter8.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter8Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter80.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter80Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter80.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter80Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter81.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter81Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter81.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter81Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter82.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter82Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter82.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter82Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter83.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter83Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter83.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter83Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter84.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter84Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter84.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter84Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter85.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter85Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter85.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter85Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter86.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter86Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter86.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter86Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter87.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter87Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter87.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter87Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter88.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter88Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter88.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter88Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter89.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter89Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter89.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter89Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter9.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter9Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter9.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter9Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter90.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter90Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter90.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter90Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter91.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter91Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter91.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter91Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter92.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter92Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter92.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter92Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter93.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter93Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter93.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter93Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter94.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter94Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter94.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter94Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter95.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter95Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter95.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter95Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter96.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter96Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter96.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter96Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter97.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter97Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter97.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter97Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter98.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter98Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter98.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter98Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter99.Name;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter99Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Parameter99.Value;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "parameter99Value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallback;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "statusCallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "statusCallbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Track;" }),
        __metadata("design:type", String)
    ], CreateSiprecCreateSiprecRequest.prototype, "track", void 0);
    return CreateSiprecCreateSiprecRequest;
}(SpeakeasyBase));
export { CreateSiprecCreateSiprecRequest };
var CreateSiprecSecurity = /** @class */ (function (_super) {
    __extends(CreateSiprecSecurity, _super);
    function CreateSiprecSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSiprecSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSiprecSecurity;
}(SpeakeasyBase));
export { CreateSiprecSecurity };
var CreateSiprecRequest = /** @class */ (function (_super) {
    __extends(CreateSiprecRequest, _super);
    function CreateSiprecRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSiprecRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSiprecPathParams)
    ], CreateSiprecRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSiprecCreateSiprecRequest)
    ], CreateSiprecRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSiprecSecurity)
    ], CreateSiprecRequest.prototype, "security", void 0);
    return CreateSiprecRequest;
}(SpeakeasyBase));
export { CreateSiprecRequest };
var CreateSiprecResponse = /** @class */ (function (_super) {
    __extends(CreateSiprecResponse, _super);
    function CreateSiprecResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSiprecResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSiprecResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountCallSiprec)
    ], CreateSiprecResponse.prototype, "apiV2010AccountCallSiprec", void 0);
    return CreateSiprecResponse;
}(SpeakeasyBase));
export { CreateSiprecResponse };
