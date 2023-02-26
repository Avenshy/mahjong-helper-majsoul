// ==UserScript==
// @name         mahjong-helper-majsoul
// @namespace    https://github.com/Avenshy
// @version      20230227
// @description  majsoul for mahjong-helper
// @author       Avenshy
// @iconURL      https://www.maj-soul.com/homepage/character/1/yiji_0.png
// @homepageURL  https://github.com/Avenshy/mahjong-helper-majsoul
// @supportURL   https://github.com/Avenshy/mahjong-helper-majsoul/issues
// @match        https://game.maj-soul.com/1/
// @match        https://game.maj-soul.net/1/
// @match        https://game.mahjongsoul.com/
// @match        https://game.mahjongsoul.com/index.html
// @match        https://mahjongsoul.game.yo-star.com/
// @grant        GM_xmlhttpRequest
// @connect      localhost
// @license      GPL-3.0
// ==/UserScript==

let API_URL = 'https://localhost:12121/'

! function mahjong_helper_majsoul() {
    try {
        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        app.Log.log("ActionLockTile play data:" + JSON["stringify"](P));
                        var m = P.seat;
                        P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1);
                        var B = mjcore["MJPai"]["Create"](P.tile ? P.tile : '5z'),
                            J = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)];
                        if (P["operation"] && Laya["timer"].once(500, this, function () {
                            S["ActionOperation"].play(P["operation"]);
                        }), void 0 != P["zhenting"] && void 0 == P["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](P["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"])), S["DesktopMgr"].Inst["setScores"](P["scores"]), 0 == P["lock_state"] ? J["RevealFailed"](B) : 1 == P["lock_state"] && J["PlaySound"]("act_locktile"), 3 == P["lock_state"]) {
                            J["PlaySound"]("act_unveil");
                            var L = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](S["DesktopMgr"].Inst["lastpai_seat"])];
                            L["RevealFailed"](B),
                                S["DesktopMgr"].Inst["onRevealStateChange"](S["DesktopMgr"].Inst["lastpai_seat"], !1);
                        } else
                            S["DesktopMgr"].Inst["onRevealStateChange"](m, !1);
                        S["DesktopMgr"].Inst["ActionRunComplete"](),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]);
                    },
                    m["fastplay"] = function (P, m) {
                        app.Log.log("ActionLockTile fastplay data:" + JSON["stringify"](P) + " usetime:" + m);
                        var B = P.seat;
                        P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1);
                        var J = mjcore["MJPai"]["Create"](P.tile ? P.tile : '5z'),
                            L = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)];
                        if (P["operation"] && -1 != m && Laya["timer"].once(500, this, function () {
                            S["ActionOperation"].play(P["operation"], m);
                        }), void 0 != P["zhenting"] && void 0 == P["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](P["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"])), S["DesktopMgr"].Inst["setScores"](P["scores"]), 0 == P["lock_state"] && L["RevealFailed"](J, !1), 3 == P["lock_state"]) {
                            var w = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](S["DesktopMgr"].Inst["lastpai_seat"])];
                            w["RevealFailed"](J, !1),
                                S["DesktopMgr"].Inst["onRevealStateChange"](S["DesktopMgr"].Inst["lastpai_seat"], !1);
                        } else
                            S["DesktopMgr"].Inst["onRevealStateChange"](B, !1);
                        uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"], !1);
                    },
                    m["record"] = function (P, m) {
                        if (void 0 === m && (m = 0), app.Log.log("ActionLockTile record data:" + JSON["stringify"](P)), S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && P["operations"])
                            for (var B = 0; B < P["operations"]["length"]; B++)
                                S["ActionOperation"].ob(P["operations"][B], m, 450);
                        P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1),
                            S["DesktopMgr"].Inst["setScores"](P["scores"]);
                        var J = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](P.seat)],
                            L = mjcore["MJPai"]["Create"](P.tile ? P.tile : '5z');
                        if (0 == P["lock_state"] ? J["RevealFailed"](L) : 1 == P["lock_state"] && J["PlaySound"]("act_locktile"), 3 == P["lock_state"]) {
                            J["PlaySound"]("act_unveil");
                            var w = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](S["DesktopMgr"].Inst["lastpai_seat"])];
                            w["RevealFailed"](L),
                                S["DesktopMgr"].Inst["onRevealStateChange"](S["DesktopMgr"].Inst["lastpai_seat"], !1);
                        } else
                            S["DesktopMgr"].Inst["onRevealStateChange"](P.seat, !1);
                        return uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]),
                            1000;
                    },
                    m["fastrecord"] = function (P, m) {
                        if (void 0 === m && (m = -1), app.Log.log("ActionLockTile record data:" + JSON["stringify"](P)), S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && P["operations"])
                            for (var B = 0; B < P["operations"]["length"]; B++)
                                S["ActionOperation"].ob(P["operations"][B], m, 450);
                        S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1);
                        var J = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](P.seat)],
                            L = mjcore["MJPai"]["Create"](P.tile ? P.tile : '5z');
                        if (0 == P["lock_state"] && J["RevealFailed"](L, !1), 3 == P["lock_state"]) {
                            var w = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](S["DesktopMgr"].Inst["lastpai_seat"])];
                            w["RevealFailed"](L, !1),
                                S["DesktopMgr"].Inst["onRevealStateChange"](S["DesktopMgr"].Inst["lastpai_seat"], !1);
                        } else
                            S["DesktopMgr"].Inst["onRevealStateChange"](P.seat, !1);
                        uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"], !1);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionLockTile"] = P;
        }
            (view || (view = {}));





        !function (S) {
            S["PAIMODEL_HEIGHT"] = "0.043225" * 0.94,
                S["PAIMODEL_WIDTH"] = "0.032775" * 0.94,
                S["PAIMODEL_THICKNESS"] = "0.0235" * 0.95 * 0.94,
                S["PAI_COUNT"] = 136;
            var P;
            !function (S) {
                S[S.NULL = 0] = "NULL",
                    S[S.AUTH = 1] = "AUTH",
                    S[S["SYNCING"] = 2] = "SYNCING",
                    S[S["READY"] = 3] = "READY";
            }
                (P = S["ELink_State"] || (S["ELink_State"] = {}));
            var m;
            !function (S) {
                S[S["Liqi4"] = 0] = "Liqi4",
                    S[S["Liqi3"] = 1] = "Liqi3";
            }
                (m = S["ERuleMode"] || (S["ERuleMode"] = {}));
            var B;
            !function (S) {
                S[S.play = 0] = "play",
                    S[S["paipu"] = 1] = "paipu",
                    S[S["live_broadcast"] = 2] = "live_broadcast";
            }
                (B = S["EMJMode"] || (S["EMJMode"] = {}));
            var J = function (J) {
                function L() {
                    var P = J.call(this) || this;
                    return P["rule_mode"] = m["Liqi4"],
                        P.mode = B.play,
                        P["active"] = !1,
                        P["game_config"] = null,
                        P.seat = 0,
                        P.dora = [],
                        P["xuezhan"] = !1,
                        P["anpai"] = !1,
                        P["last_anpai_score"] = 0,
                        P["players"] = null,
                        P["mainrole"] = null,
                        P["num_left_show"] = new Array(),
                        P["container_other"] = null,
                        P["plane_chang"] = null,
                        P["plane_ju"] = null,
                        P["container_other_reveal"] = null,
                        P["plane_chang_reveal"] = null,
                        P["plane_ju_reveal"] = null,
                        P["num_left_show_reveal"] = new Array(),
                        P["score_reveal"] = new Array(),
                        P["trans_container_effect"] = null,
                        P["effect_pai_canchi"] = null,
                        P["effect_dora3D"] = null,
                        P["effect_dora3D_touying"] = null,
                        P["effect_doraPlane"] = null,
                        P["effect_shadow"] = null,
                        P["effect_shadow_touming"] = null,
                        P["effect_recommend"] = null,
                        P["auto_hule"] = !1,
                        P["auto_nofulu"] = !1,
                        P["auto_moqie"] = !1,
                        P["auto_liqi"] = !0,
                        P["emoji_switch"] = !1,
                        P["duringReconnect"] = !1,
                        P["gameing"] = !1,
                        P["lastpai_seat"] = 0,
                        P["lastqipai"] = null,
                        P["oplist"] = [],
                        P["liqi_select"] = [],
                        P["operation_showing"] = !1,
                        P["myaccountid"] = 0,
                        P["player_datas"] = [],
                        P["player_effects"] = [],
                        P["mjp_res_name"] = '',
                        P["last_gang"] = 0,
                        P["gameEndResult"] = null,
                        P["levelchangeinfo"] = null,
                        P["activity_reward"] = null,
                        P["rewardinfo"] = null,
                        P["choosed_pai"] = null,
                        P["muyu_info"] = null,
                        P["muyu_effect"] = null,
                        P["actionList"] = [],
                        P["action_index"] = 0,
                        P["current_step"] = 0,
                        P["actionMap"] = null,
                        P["tingpais"] = [],
                        P["record_show_hand"] = !1,
                        P["record_show_paopai"] = !1,
                        P["record_show_anim"] = !0,
                        P["ptchange"] = 0,
                        P["waiting_lingshang_deal_tile"] = !1,
                        P.md5 = '',
                        P["paipu_config"] = 0,
                        P["ai_level"] = 1,
                        P["timestoped"] = !1,
                        P["handles_after_timerun"] = [],
                        P["doactioncd"] = 0,
                        P["dochain_fast"] = !1,
                        P["action_running"] = !1,
                        P["hangupCount"] = 0,
                        P["state_cache"] = {},
                        P["mind_voice_seat"] = -1,
                        P["mind_voice_type"] = '',
                        P["during_playing_mind_voice"] = !1,
                        L.Inst = P,
                        P["actionMap"] = {},
                        P["actionMap"]["ActionMJStart"] = new Laya["Handler"](P, function (S) {
                            S.msg;
                            return app.Log.log("ActionMJStart begin"),
                                P["ClearOperationShow"](),
                                GameMgr.Inst["EnterMJ"](),
                                uiscript["UI_FightBegin"].show(Laya["Handler"]["create"](P, function () {
                                    uiscript["UI_Loading"].Inst["close"](),
                                        P["ActionRunComplete"]();
                                })),
                                2000;
                        }, null, !1),
                        P["actionMap"]["ActionNewRound"] = new Laya["Handler"](P, function (m) {
                            app.Log.log("ActionNewRound begin");
                            var B = m.msg,
                                J = m.fast;
                            if (P["ClearOperationShow"](), uiscript["UI_Loading"].Inst["close"](), GameMgr.Inst["EnterMJ"](), J)
                                return uiscript["UI_FightBegin"].hide(), S["ActionNewRound"]["fastplay"](B, -1), 0;
                            var L = uiscript["UI_FightBegin"].hide();
                            return Laya["timer"].once(L + 200, P, function () {
                                S["ActionNewRound"].play(B);
                            }),
                                B.al && (L += 1300),
                                P["is_jiuchao_mode"]() && (L += 150),
                                L + 200 + 1200 + 400;
                        }, null, !1),
                        P["actionMap"]["ActionNewCard"] = new Laya["Handler"](P, function (m) {
                            app.Log.log("ActionNewCard begin");
                            var B = m.msg,
                                J = m.fast;
                            return P["ClearOperationShow"](),
                                uiscript["UI_Loading"].Inst["close"](),
                                GameMgr.Inst["EnterMJ"](),
                                J ? (S["ActionNewCard"]["fastplay"](B, -1), 0) : S["ActionNewCard"].play(B);
                        }, null, !1),
                        P["actionMap"]["ActionDiscardTile"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg,
                                J = m.fast;
                            return J ? (S["ActionDiscardTile"]["fastplay"](B, -1), 0) : (S["ActionDiscardTile"].play(B), Laya["timer"].once(500, P, P["ActionRunComplete"]), 500);
                        }, null, !1),
                        P["actionMap"]["ActionDealTile"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg,
                                J = m.fast;
                            return J ? (S["ActionDealTile"]["fastplay"](B, -1), 0) : (S["ActionDealTile"].play(B), 500);
                        }, null, !1),
                        P["actionMap"]["ActionChiPengGang"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg,
                                J = m.fast;
                            return J ? (S["ActionChiPengGang"]["fastplay"](B, -1), 0) : (S["ActionChiPengGang"].play(B), 1100);
                        }, null, !1),
                        P["actionMap"]["ActionAnGangAddGang"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg,
                                J = m.fast;
                            return J ? (S["ActionAnGangAddGang"]["fastplay"](B, -1), 0) : (S["ActionAnGangAddGang"].play(B), 1100);
                        }, null, !1),
                        P["actionMap"]["ActionHule"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg;
                            return S["ActionHule"].play(B),
                                5000;
                        }, null, !1),
                        P["actionMap"]["ActionHuleXueZhanMid"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg;
                            return S["ActionHuleXueZhanMid"].play(B),
                                1000;
                        }, null, !1),
                        P["actionMap"]["ActionHuleXueZhanEnd"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg;
                            return S["ActionHuleXueZhanEnd"].play(B),
                                1000;
                        }, null, !1),
                        P["actionMap"]["ActionNoTile"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg;
                            return S["ActionNoTile"].play(B),
                                5000;
                        }, null, !1),
                        P["actionMap"]["ActionLiuJu"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg;
                            return S["ActionLiuJu"].play(B),
                                5000;
                        }, null, !1),
                        P["actionMap"]["ActionBaBei"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg,
                                J = m.fast;
                            return J ? (S["ActionBabei"]["fastplay"](B, -1), 0) : (S["ActionBabei"].play(B), 1000);
                        }, null, !1),
                        P["actionMap"]["ActionChangeTile"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg,
                                J = m.fast;
                            return J ? (S["ActionChangeTile"]["fastplay"](B, -1), 0) : (S["ActionChangeTile"].play(B), 3000);
                        }, null, !1),
                        P["actionMap"]["ActionSelectGap"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg,
                                J = m.fast;
                            return J ? (S["ActionSelectGap"]["fastplay"](B, -1), 0) : (S["ActionSelectGap"].play(B), 800);
                        }, null, !1),
                        P["actionMap"]["ActionGangResult"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg,
                                J = m.fast;
                            return J ? (S["ActionGangResult"]["fastplay"](B, -1), 0) : (S["ActionGangResult"].play(B), 1000);
                        }, null, !1),
                        P["actionMap"]["ActionGangResultEnd"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg,
                                J = m.fast;
                            return J ? (S["ActionGangResultEnd"]["fastplay"](B, -1), 0) : (S["ActionGangResultEnd"].play(B), 2000);
                        }, null, !1),
                        P["actionMap"]["ActionRevealTile"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg,
                                J = m.fast;
                            return J ? (S["ActionRevealTile"]["fastplay"](B, -1), 0) : (S["ActionRevealTile"].play(B), Laya["timer"].once(500, P, P["ActionRunComplete"]), 500);
                        }, null, !1),
                        P["actionMap"]["ActionLockTile"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg,
                                J = m.fast;
                            return J ? (S["ActionLockTile"]["fastplay"](B, -1), 0) : (S["ActionLockTile"].play(B), 1000);
                        }, null, !1),
                        P["actionMap"]["ActionUnveilTile"] = new Laya["Handler"](P, function (m) {
                            P["ClearOperationShow"]();
                            var B = m.msg,
                                J = m.fast;
                            return J ? (S["ActionUnveilTile"]["fastplay"](B, -1), 0) : (S["ActionUnveilTile"].play(B), 1000);
                        }, null, !1),
                        P["actionMap"]["ActionFillAwaitingTiles"] = new Laya["Handler"](P, function (P) {
                            app.Log.log("ActionFillAwaitingTiles begin");
                            var m = P.msg,
                                B = P.fast;
                            return B ? (S["ActionFillAwaitingTiles"]["fastplay"](m, -1), 0) : S["ActionFillAwaitingTiles"].play(m);
                        }, null, !1),
                        app["NetAgent"]["AddListener2MJ"]("NotifyGameEndResult", Laya["Handler"]["create"](P, function (S) {
                            P["gameEndResult"] = S["result"],
                                uiscript["UI_Hangup_Warn"].Inst["enable"] && uiscript["UI_Hangup_Warn"].Inst["close"](),
                                P.mode == B.play && (uiscript["UI_Activity"]["need_check_activity"] = !0),
                                Laya["timer"].once(10000, P, function () {
                                    game["MJNetMgr"].Inst["Close"]();
                                });
                        })),
                        app["NetAgent"]["AddListener2MJ"]("ActionPrototype", Laya["Handler"]["create"](P, function (S) {
                            if (app.Log.log("Receive Action: " + JSON["stringify"](S)), P["duringReconnect"])
                                P["actionList"].push(S);
                            else if (P["actionList"]["length"] > 0)
                                P["actionList"].push(S);
                            else {
                                P["actionList"].push(S);
                                var m = P["doactioncd"] - Laya["timer"]["currTimer"];
                                0 > m && (m = 0),
                                    P["StartChainAction"](m);
                            }
                        })),
                        app["NetAgent"]["AddListener2MJ"]("NotifyGameTerminate", Laya["Handler"]["create"](P, function (m) {
                            app.Log.log("NotifyGameTerminate:" + JSON["stringify"](m)),
                                S["AudioMgr"]["StopMusic"](),
                                "user-manual-terminate" != m["reason"] && uiscript["UI_SecondConfirm"].Inst["show_only_confirm"](game["Tools"]["strOfLocalization"](2227), Laya["Handler"]["create"](P, function () {
                                    P["Reset"](),
                                        game["Scene_MJ"].Inst["GameEnd"]();
                                })),
                                uiscript["UI_VoteProgress"].Inst["enable"] && uiscript["UI_VoteProgress"].Inst["close"]();
                        })),
                        S["ModelAnimationController"]["init_data"](),
                        app["NetAgent"]["AddListener2MJ"]("NotifyGamePause", Laya["Handler"]["create"](P, function (S) {
                            app.Log.log("NotifyGamePause:" + JSON["stringify"](S));
                            var m = S["paused"];
                            P["setGameStop"](m);
                        })),
                        app["NetAgent"]["AddListener2MJ"]("NotifyGameFinishReward", Laya["Handler"]["create"](P, function (S) {
                            app.Log.log("NotifyGameFinishReward: " + JSON["stringify"](S)),
                                P["levelchangeinfo"] = S["level_change"],
                                P["rewardinfo"] = S;
                        })),
                        app["NetAgent"]["AddListener2MJ"]("NotifyActivityReward", Laya["Handler"]["create"](P, function (S) {
                            app.Log.log("NotifyActivityReward: " + JSON["stringify"](S)),
                                P["activity_reward"] = S;
                        })),
                        app["NetAgent"]["AddListener2MJ"]("NotifyActivityPoint", Laya["Handler"]["create"](P, function (S) {
                            for (var P = S["activity_points"], m = 0; m < P["length"]; m++) {
                                var B = P[m];
                                B["activity_id"] == uiscript["UI_Activity_DuanWu_Point"]["activity_id"] && (uiscript["UI_Activity_DuanWu_Point"]["point"] = B["point"], uiscript["UI_Chunjie"]["need_refresh_rank"] = !0);
                            }
                        })),
                        app["NetAgent"]["AddListener2MJ"]("NotifyLeaderboardPoint", Laya["Handler"]["create"](P, function (S) {
                            for (var P = S["leaderboard_points"], m = 0; m < P["length"]; m++) {
                                var B = P[m];
                                B["leaderboard_id"] == uiscript["UI_Activity_DuanWu_Rank"]["activity_id"] && (uiscript["UI_Activity_DuanWu_Rank"]["point"] = B["point"]);
                            }
                        })),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyGameFinishRewardV2", Laya["Handler"]["create"](P, function (S) {
                            app.Log.log("NotifyGameFinishReward: " + JSON["stringify"](S)),
                                P["levelchangeinfo"] = S["level_change"],
                                P["rewardinfo"] = S;
                        })),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyActivityRewardV2", Laya["Handler"]["create"](P, function (S) {
                            app.Log.log("NotifyActivityReward: " + JSON["stringify"](S)),
                                P["activity_reward"] = S;
                        })),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyActivityPointV2", Laya["Handler"]["create"](P, function (S) {
                            for (var P = S["activity_points"], m = 0; m < P["length"]; m++) {
                                var B = P[m];
                                B["activity_id"] == uiscript["UI_Activity_DuanWu_Point"]["activity_id"] && (uiscript["UI_Activity_DuanWu_Point"]["point"] = B["point"], uiscript["UI_Chunjie"]["need_refresh_rank"] = !0);
                            }
                        })),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyLeaderboardPointV2", Laya["Handler"]["create"](P, function (S) {
                            for (var P = S["leaderboard_points"], m = 0; m < P["length"]; m++) {
                                var B = P[m];
                                B["leaderboard_id"] == uiscript["UI_Activity_DuanWu_Rank"]["activity_id"] && (uiscript["UI_Activity_DuanWu_Rank"]["point"] = B["point"]);
                            }
                        })),
                        app["NetAgent"]["AddListener2MJ"]("PlayerLeaving", Laya["Handler"]["create"](P, function (S) {
                            S && S.seat == P.seat && uiscript["UI_Hangup_Warn"].Inst.show();
                        })),
                        P;
                }
                return __extends(L, J),
                    L["is_yuren_type"] = function (S) {
                        if (void 0 === S && (S = !1), S) {
                            var P = new Date();
                            this["_is_yuren_type"] = 3 == P["getMonth"]() && 1 == P["getDate"]();
                        }
                        return this["_is_yuren_type"];
                    },
                    Object["defineProperty"](L["prototype"], "round_id", {
                        get: function () {
                            return this["index_change"] + '-' + this["index_ju"] + '-' + this["index_ben"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](L["prototype"], "main_role_character_info", {
                        get: function () {
                            return this["player_datas"][this.seat]["character"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](L["prototype"], "player_count", {
                        get: function () {
                            return this["rule_mode"] == m["Liqi3"] ? 3 : 4;
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    L["prototype"]["seat2LocalPosition"] = function (S) {
                        if (this["rule_mode"] == m["Liqi3"]) {
                            for (var P = this.seat, B = 0; 4 > B; B++) {
                                if (S == P)
                                    return B;
                                P++,
                                    P >= 3 && (P = -1);
                            }
                            return 0;
                        }
                        return (S - this.seat + 4) % 4;
                    },
                    L["prototype"]["localPosition2Seat"] = function (S) {
                        if (this["rule_mode"] == m["Liqi3"]) {
                            for (var P = this.seat, B = 0; S > B; B++)
                                P++, P >= 3 && (P = -1);
                            return P;
                        }
                        return (this.seat + S) % 4;
                    },
                    L["prototype"]["getPlayerName"] = function (S) {
                        var P = this["player_datas"][S]["account_id"];
                        if (this.mode == B["paipu"] && uiscript["UI_Replay"].Inst["hide_name"]) {
                            var m = this["seat2LocalPosition"](S);
                            switch (m) {
                                case 0:
                                    return {
                                        account_id: P,
                                        nickname: game["Tools"]["strOfLocalization"](3076),
                                        verified: 0
                                    };
                                case 1:
                                    return {
                                        account_id: P,
                                        nickname: game["Tools"]["strOfLocalization"](3073),
                                        verified: 0
                                    };
                                case 2:
                                    return {
                                        account_id: P,
                                        nickname: game["Tools"]["strOfLocalization"](3074),
                                        verified: 0
                                    };
                                case 3:
                                    return {
                                        account_id: P,
                                        nickname: game["Tools"]["strOfLocalization"](3075),
                                        verified: 0
                                    };
                            }
                            return {
                                account_id: P,
                                nickname: '',
                                verified: 0
                            };
                        }
                        var J = this["player_datas"][S]["nickname"];
                        return P && !game["Tools"]["is_same_zone"](GameMgr.Inst["account_id"], P) && (GameMgr.Inst["nickname_replace_enable"] && GameMgr.Inst["nickname_replace_lst"]["length"] > 0 ? GameMgr.Inst["nickname_replace_table"][P] ? J = GameMgr.Inst["nickname_replace_table"][P] : (J = GameMgr.Inst["nickname_replace_lst"][Math["floor"](Math["random"]() * GameMgr.Inst["nickname_replace_lst"]["length"])], GameMgr.Inst["nickname_replace_table"][P] = J) : null != app["Taboo"].test(J) && (J = game["Tools"]["strOfLocalization"](3060))), {
                            account_id: P,
                            nickname: J,
                            verified: this["player_datas"][S]["verified"]
                        };
                    },
                    Object["defineProperty"](L["prototype"], "showingPaopai", {
                        get: function () {
                            return this.mode != B.play;
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    L["prototype"]["is_dora3_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["dora3_mode"] ? !0 : !1;
                    },
                    L["prototype"]["is_peipai_open_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["begin_open_mode"] ? !0 : !1;
                    },
                    L["prototype"]["is_muyu_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["muyu_mode"] ? !0 : !1;
                    },
                    L["prototype"]["is_open_hand"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["open_hand"] ? !0 : !1;
                    },
                    L["prototype"]["is_shilian_mode"] = function () {
                        return this["game_config"] && this["game_config"].meta && this["game_config"].meta["mode_id"] == game["EMatchMode"]["shilian"] ? !0 : !1;
                    },
                    L["prototype"]["is_xiuluo_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["xuezhandaodi"] ? !0 : !1;
                    },
                    L["prototype"]["is_jiuchao_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["jiuchao_mode"] ? !0 : !1;
                    },
                    L["prototype"]["is_reveal_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["reveal_discard"] ? !0 : !1;
                    },
                    L["prototype"]["is_hesu_mode"] = function () {
                        return this["game_config"] && this["game_config"].meta && this["game_config"].meta["mode_id"] == game["EMatchMode"].hesu ? !0 : !1;
                    },
                    L["prototype"]["is_huansanzhang_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["huansanzhang"] ? !0 : !1;
                    },
                    L["prototype"]["is_chuanma_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["chuanma"] ? !0 : !1;
                    },
                    L["prototype"]["is_jjc_mode"] = function () {
                        return this["game_config"] && this["game_config"].meta && this["game_config"].meta["mode_id"] == game["EMatchMode"].jjc ? !0 : !1;
                    },
                    L["prototype"]["is_top_match"] = function () {
                        var S = 0;
                        if (this["game_config"] && this["game_config"].meta && (S = this["game_config"].meta["mode_id"]), (15 == S || 16 == S || 25 == S || 26 == S) && this["player_datas"]) {
                            for (var P = 0, B = this["player_datas"]; P < B["length"]; P++) {
                                var J = B[P],
                                    L = this["rule_mode"] == m["Liqi4"] ? J["level"].id : J["level3"].id;
                                if (6 != cfg["level_definition"]["level_definition"].get(L)["primary_level"])
                                    return !1;
                            }
                            return !0;
                        }
                        return !1;
                    },
                    L["prototype"]["ActionRunComplete"] = function () {
                        this["action_running"] = !1;
                    },
                    L["prototype"]["StartChainAction"] = function (S) {
                        this["doactioncd"] = Laya["timer"]["currTimer"] + S,
                            Laya["timer"]["frameLoop"](1, this, this["DoChainAction"]);
                    },
                    L["prototype"]["DoChainAction"] = function () {
                        var S = this;
                        if (this["action_index"] >= this["actionList"]["length"])
                            this["action_index"] = 0, this["actionList"] = [], this["dochain_fast"] = !1, Laya["timer"]["clear"](this, this["DoChainAction"]), this["duringReconnect"] && (app.Log.log("finishSyncGame0"), app["NetAgent"]["sendReq2MJ"]("FastTest", "finishSyncGame", {}, function () { }), this["duringReconnect"] = !1);
                        else {
                            if (!this["dochain_fast"]) {
                                if (this["action_running"])
                                    return;
                                if (Laya["timer"]["currTimer"] <= this["doactioncd"] - Laya["timer"]["delta"])
                                    return;
                                Laya["timer"]["clear"](this, this["DoChainAction"]);
                            }
                            this["action_index"] == this["actionList"]["length"] - 1 && this["duringReconnect"] && (this["duringReconnect"] = !1, app.Log.log("finishSyncGame1"), app["NetAgent"]["sendReq2MJ"]("FastTest", "finishSyncGame", {}, function () { })),
                                this["dochain_fast"] ? this["action_index"] + 2 < this["actionList"]["length"] ? this["DoMJAction"](this["actionList"][this["action_index"]++], !0) : (this["dochain_fast"] = !1, this["DoMJAction"](this["actionList"][this["action_index"]++], !1)) : (this["dochain_fast"] = !1, this["action_index"] + 4 < this["actionList"]["length"] && (this["dochain_fast"] = !0), this["dochain_fast"] ? Laya["timer"].once(800, this, function () {
                                    for (var P = S["actionList"]["length"] - 1; P >= S["action_index"]; P--)
                                        if ("ActionNewRound" == S["actionList"][P].name) {
                                            S["action_index"] = P;
                                            break;
                                        }
                                    S["DoMJAction"](S["actionList"][S["action_index"]++], !0);
                                }) : this["DoMJAction"](this["actionList"][this["action_index"]++], !1));
                        }
                    },
                    L["EnDecode"] = function (S) {
                        for (var P = [132, 94, 78, 66, 57, 162, 31, 96, 28], m = 0; m < S["byteLength"]; m++) {
                            var B = (23 ^ S["byteLength"]) + 5 * m + P[m % P["length"]] & 255;
                            S[m] ^= B;
                        }
                        return S;
                    },
                    L["prototype"]["DoMJAction"] = function (S, P) {
                        var m = this;
                        if (this["active"]) {
                            var B = net["ProtobufManager"]["lookupType"]("lq." + S.name);
                            if (!B)
                                throw new Error("ERR_CANNOT_FIND_MESSAGE_TYPE, lq." + S.name);
                            var J = S.step,
                                w = B["decode"](L["EnDecode"](S.data));
                            if (app.Log.log("DoMJAction step:" + J + ' [' + S.name + "]:  " + JSON["stringify"](w) + " fast:" + P), J > 1 && J != this["current_step"] + 1)
                                return app.Log.log("step 不对 强制触发全数据重连 step:" + J + " current_step:" + this["current_step"]), this["trySyncGame"](), void 0;
                            var h = 0;
                            if (this["current_step"] = J, this["actionMap"]["hasOwnProperty"](S.name))
                                try {
                                    P || (this["action_running"] = !0),
                                        h = this["actionMap"][S.name]["runWith"]({
                                            msg: w,
                                            fast: P
                                        });
                                } catch (s) {
                                    var R = {};
                                    return R["error"] = s["message"],
                                        R["stack"] = s["stack"],
                                        R["method"] = "DoMJAction",
                                        R.name = S.name,
                                        R.data = S,
                                        R.step = J,
                                        GameMgr.Inst["onFatalError"](R),
                                        void 0;
                                }
                            else
                                app.Log["Error"]("没有监听操作：" + S.name);
                            P ? this["DoChainAction"]() : Laya["timer"]["frameOnce"](1, this, function () {
                                m["StartChainAction"](h);
                            });
                        }
                    },
                    L["prototype"]["_load"] = function (P) {
                        this["desktop3D"] = P,
                            this["desktop3D"]["getChildByName"]("all")["active"] = !1;
                        var m = this["desktop3D"]["getChildByName"]("poss");
                        this["players"] = new Array(),
                            this["mainrole"] = m["getChildByName"]("man_1")["addComponent"](S["ViewPlayer_Me"]),
                            this["mainrole"]["InitMe"](this, 0, game["Scene_MJ"].Inst["root2"]["getChildByName"]("hands"), m),
                            this["players"].push(this["mainrole"]);
                        for (var B = 2; 4 >= B; B++) {
                            var J = m["getChildByName"]("man_" + B)["addComponent"](S["ViewPlayer_Other"]);
                            J.Init(this, B - 1, m),
                                this["players"].push(J);
                        }
                        var L = this["desktop3D"]["getChildByName"]("other"),
                            w = L["getChildByName"]("left");
                        this["num_left_show"].push(w["getChildByName"]('0')),
                            this["num_left_show"].push(w["getChildByName"]('1'));
                        var h = L["getChildByName"]("chang");
                        this["container_other"] = L,
                            this["plane_chang"] = h["getChildByName"]("chang"),
                            this["plane_ju"] = h["getChildByName"]('ju'),
                            this["container_other"] = L,
                            this["container_other_reveal"] = this["desktop3D"]["getChildByName"]("other_reveal");
                        var s = this["container_other_reveal"]["getChildByName"]("left");
                        this["num_left_show_reveal"].push(s["getChildByName"]('0')),
                            this["num_left_show_reveal"].push(s["getChildByName"]('1'));
                        var R = this["container_other_reveal"]["getChildByName"]("chang");
                        if (this["plane_chang_reveal"] = R["getChildByName"]("chang"), this["plane_ju_reveal"] = R["getChildByName"]('ju'), 'kr' == GameMgr["client_language"]) {
                            var v = "scene/Assets/Resource/table/tablemid/",
                                f = this["plane_chang_reveal"]["meshRender"]["material"];
                            f["albedoTexture"] = Laya["Loader"]["getRes"](v + "chang_kr.png"),
                                f = R["getChildByName"]("juzi")["meshRender"]["material"],
                                f["albedoTexture"] = Laya["Loader"]["getRes"](v + "chang_kr.png"),
                                f = s["getChildByName"]("left")["meshRender"]["material"],
                                f["albedoTexture"] = Laya["Loader"]["getRes"](v + "left_kr.png"),
                                f = this["plane_chang"]["meshRender"]["material"],
                                f["albedoTexture"] = Laya["Loader"]["getRes"](v + "chang_kr.png"),
                                f = h["getChildByName"]("juzi")["meshRender"]["material"],
                                f["albedoTexture"] = Laya["Loader"]["getRes"](v + "chang_kr.png"),
                                f = w["getChildByName"]("left")["meshRender"]["material"],
                                f["albedoTexture"] = Laya["Loader"]["getRes"](v + "left_kr.png");
                        }
                        for (var A = this["container_other_reveal"]["getChildByName"]("score"), B = 0; 6 > B; B++)
                            this["score_reveal"].push(A["getChildAt"](B));
                        this["SetLeftPaiShow"](0),
                            this["SetChangJuShow"](0, 0, 0),
                            this["trans_container_effect"] = this["desktop3D"]["getChildByName"]("effect"),
                            this["effect_dora3D"] = this["trans_container_effect"]["getChildByName"]("effect_dora"),
                            this["effect_dora3D_touying"] = this["trans_container_effect"]["getChildByName"]("effect_touming_dora");
                        var u = this["effect_dora3D"]["getChildAt"](0)["meshRender"]["material"];
                        u["disableLight"](),
                            this["effect_shadow"] = this["trans_container_effect"]["getChildByName"]("effect_shadow"),
                            this["effect_shadow_touming"] = this["trans_container_effect"]["getChildByName"]("effect_shadow_touming"),
                            this["effect_dora3D"]["active"] = !0,
                            this["effect_shadow"]["active"] = !0,
                            this["effect_shadow_touming"]["active"] = !0,
                            this["effect_dora3D_touying"]["active"] = !0,
                            this["effect_doraPlane"] = game["Scene_MJ"].Inst["root2"]["getChildByName"]("hands")["getChildByName"]("effect_dora"),
                            this["effect_recommend"] = game["Scene_MJ"].Inst["root2"]["getChildByName"]("hands")["getChildByName"]("effect_recommend"),
                            this["effect_doraPlane"]["active"] = !1,
                            this["effect_recommend"]["active"] = !1;
                        var y = this["effect_recommend"]["getChildAt"](0)["meshRender"]["material"],
                            e = "myres2/mjp/recommend.png";
                        "chs" != GameMgr["client_language"] && (e = GameMgr["client_language"] + '/' + e),
                            Laya["loader"]["getRes"](e) && (y["diffuseTexture"] = Laya["loader"]["getRes"](e));
                    },
                    L["prototype"]["initRoom"] = function (P, J, w, h, s) {
                        var R = this;
                        uiscript["UI_Rpg"]["needShow"] = !1,
                            uiscript["UI_WaitingRoom"].Inst["resetData"](),
                            GameMgr.Inst["in_hesu"] = !1,
                            this["game_config"] = P,
                            this["rule_mode"] = m["Liqi4"],
                            P.mode.mode && (this["rule_mode"] = P.mode.mode < 10 ? m["Liqi4"] : m["Liqi3"]),
                            this["xuezhan"] = !1,
                            P.mode && P.mode["detail_rule"] && (this["xuezhan"] = !!P.mode["detail_rule"]["xuezhandaodi"]),
                            P.mode && P.mode["detail_rule"] && (this["field_spell"] = P.mode["detail_rule"]["field_spell_mode"]),
                            P.mode && P.mode["detail_rule"] && P.mode["detail_rule"]["reveal_discard"] ? (this["container_other"]["active"] = !1, this["container_other_reveal"]["active"] = !0, this["anpai"] = !0) : (this["anpai"] = !1, this["container_other"]["active"] = !0, this["container_other_reveal"]["active"] = !1),
                            this.mode = h,
                            this.seat = -1,
                            this["player_datas"] = J,
                            this["gameEndResult"] = null,
                            this["levelchangeinfo"] = null,
                            this["activity_reward"] = null,
                            this["rewardinfo"] = null,
                            this["active"] = !0,
                            this["ptchange"] = 0,
                            this["timestoped"] = !1,
                            this["action_running"] = !1,
                            this["hangupCount"] = 0,
                            this["handles_after_timerun"] = [],
                            this["muyu_info"] = null,
                            this["muyu_effect"] && (this["muyu_effect"]["destroy"](), this["muyu_effect"] = null),
                            uiscript["UI_GameStop"].Inst["close"](),
                            uiscript["UI_Replay"].Inst["hide_name"] = !1,
                            this.mode == B["paipu"] ? (this["record_show_hand"] = '0' != Laya["LocalStorage"]["getItem"]("record_show_hand"), this["record_show_paopai"] = '0' != Laya["LocalStorage"]["getItem"]("record_show_paopai"), this["record_show_anim"] = '0' != Laya["LocalStorage"]["getItem"]("record_show_anim")) : (this["record_show_anim"] = !0, this["record_show_hand"] = this["record_show_paopai"] = !1),
                            this.mode == B.play ? (uiscript["UI_Invite"].Inst["enable"] = !1, 4 == P["category"] && (GameMgr.Inst["custom_match_id"] = P.meta["contest_uid"])) : uiscript["UI_Invite"].Inst["enable"] = !0,
                            this["myaccountid"] = w;
                        for (var v = {}, f = 0; f < J["length"]; f++)
                            for (var A = cfg["item_definition"].skin.get(J[f]["avatar_id"]), u = cfg["item_definition"]["character"].get(A["character_id"]), y = cfg["voice"]["sound"]["getGroup"](u["sound"]), e = 0; e < y["length"]; e++)
                                if (J[f]["character"] && 2 == y[e]["category"] && y[e]["level_limit"] <= J[f]["character"]["level"]) {
                                    var x = y[e].path + S["AudioMgr"]["suffix"];
                                    v["hasOwnProperty"](x) || (v[x] = 1);
                                }
                        for (var C in v)
                            Laya["loader"].load(C, null, null, null, 3);
                        for (var f = 0; f < this["player_datas"]["length"]; f++)
                            this["player_datas"][f]["account_id"] == w && (this.seat = f);
                        if (GameMgr["sakiLimited"])
                            for (var f = 0; f < this["player_datas"]["length"]; f++)
                                if (this["player_datas"][f]["account_id"] != GameMgr.Inst["account_id"]) {
                                    game["GameUtility"]["char_limited"](this["player_datas"][f]["character"]["charid"]) && (this["player_datas"][f]["character"]["charid"] = game["GameUtility"]["get_default_ai_character"](), this["player_datas"][f]["character"].skin = game["GameUtility"]["get_default_ai_skin"](), this["player_datas"][f]["avatar_id"] = game["GameUtility"]["get_default_ai_skin"]());
                                    var g = this["player_datas"][f]["views"];
                                    if (g)
                                        for (var e = g["length"] - 1; e >= 0; e--) {
                                            var H = g[e]["item_id"];
                                            H && 1 == cfg["item_definition"].item.get(H)["collaboration"] && g["splice"](e, 1);
                                        }
                                }
                        if (-1 == this.seat) {
                            if (this.mode == B.play)
                                return uiscript["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2228)), app.Log["Error"](JSON["stringify"](J)), void 0;
                            this.seat = 0;
                        }
                        if (this["emoji_switch"] = !1, P.mode && P.mode["game_setting"] && (this["emoji_switch"] = !!P.mode["game_setting"]["emoji_switch"]), uiscript["UI_Replay"].Inst["enable"] = this.mode == B["paipu"], uiscript["UI_Ob_Replay"].Inst["enable"] = !1, L["bianjietishi"] = !0, h == B.play) {
                            if (P.mode && P.mode["detail_rule"]) {
                                var I = P.mode["detail_rule"];
                                null != I["bianjietishi"] && (L["bianjietishi"] = I["bianjietishi"]);
                            }
                            if (2 == P["category"] && P.meta) {
                                var Q = cfg["desktop"]["matchmode"].get(P.meta["mode_id"]);
                                Q && 6 == Q.room && (L["bianjietishi"] = !1);
                            }
                            uiscript["UI_MJTask_Progress"]["record"]();
                        }
                        this["mjp_res_name"] = game["GameUtility"]["get_view_res_name"](game["EView"].mjp),
                            this["player_effects"] = [];
                        for (var i = game["EView"]["liqibang"], c = game["EView"]["lobby_bg"], f = 0; f < this["player_datas"]["length"]; f++) {
                            for (var j = this["player_datas"][f]["character"], t = {}, p = i; c >= p; p++) {
                                var N = game["GameUtility"]["get_view_default_item_id"](p);
                                t[p] = N;
                            }
                            if (j) {
                                var g = this["player_datas"][f]["views"],
                                    W = cfg["item_definition"]["character"].get(j["charid"]);
                                if (W && (t[game["EView"]["hand_model"]] = W.hand), g)
                                    for (var e = 0; e < g["length"]; e++) {
                                        var q = g[e].slot,
                                            H = g[e]["item_id"];
                                        H && (t[q] = H);
                                    }
                            } else
                                this["player_datas"][f]["character"] = {
                                    charid: game["GameUtility"]["get_default_ai_character"](),
                                    level: 0,
                                    exp: 0,
                                    views: [],
                                    skin: game["GameUtility"]["get_default_ai_skin"](),
                                    is_upgraded: !1
                                };
                            this["player_effects"].push(t);
                        }
                        uiscript["UI_DesktopInfo"].Inst["initRoom"](),
                            uiscript["UI_DesktopInfo"].Inst["refreshSeat"](),
                            uiscript["UI_Hangup_Warn"].Inst["enable"] = !1,
                            uiscript["UI_TingPai"].Inst["enable"] = !0,
                            uiscript["UI_HuanSanZhange"].Inst["enable"] = !1,
                            uiscript["UI_HuanSanZhange_ChangeType"].Inst["enable"] = !1,
                            uiscript["UI_Dingque"].Inst["enable"] = !1,
                            this["index_change"] = 0,
                            this["index_ju"] = 0,
                            this["index_ben"] = 0,
                            this["index_player"] = 0,
                            this["index_chuanma_ju"] = 0,
                            this["gameing"] = !0,
                            this["left_tile_count"] = 69,
                            this["duringReconnect"] = !1,
                            this["current_step"] = 0,
                            this["action_index"] = 0,
                            this["dochain_fast"] = !1,
                            this["actionList"] = [],
                            this["setAutoHule"](!1),
                            this["setAutoMoQie"](!1),
                            this["setAutoNoFulu"](!1),
                            uiscript["UI_DesktopInfo"].Inst["resetFunc"](),
                            this["SetChangJuShow"](this["index_change"], this["index_ju"], this["index_chuanma_ju"]),
                            uiscript["UI_DesktopInfo"].Inst["setBen"](this["index_ben"]),
                            uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1);
                        for (var f = 0; 4 > f; f++)
                            this["players"][f]["onInitRoom"](this["localPosition2Seat"](f)), this["players"][f]["SetScore"](0, 0), this["players"][f]["trans_ind"]["active"] = !1, this["players"][f]["RefreshDir"]();
                        if (this["RefreshPaiLeft"](), uiscript["UI_GameEnd"].Inst["forceclose"](), uiscript["UI_RankChange"].Inst["close"](), uiscript["UI_MJReward"].Inst["close"](), Laya["timer"]["frameOnce"](6, this, function () {
                            R["Reset"](),
                                app.Log.log("场景init结束：" + Laya.Stat["currentMemorySize"] / 1024 / 1024 + " MB"),
                                s && s.run();
                        }), this["state_cache"] = {}, uiscript["UI_Activity"]["activity_is_running"](uiscript["UI_Activity_DuanWu_Point"]["activity_id"]) && (this["state_cache"]["duanwu_point"] = uiscript["UI_Activity_DuanWu_Point"]["point"], this["state_cache"]["duanwu_rank"] = uiscript["UI_Activity_DuanWu_Rank"]["point"]), this["is_muyu_mode"]()) {
                            var O = "scene/effect_muyu_" + GameMgr["client_language"] + ".lh";
                            this["muyu_effect"] = new game["EffectBase"](O),
                                this["muyu_effect"].root["active"] = !1,
                                this["trans_container_effect"]["addChild"](this["muyu_effect"].root);
                        }
                    },
                    L["prototype"]["changeMainbody"] = function (S) {
                        if (this.mode != B.play && this["gameing"]) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({ 'change_seat_to': S }),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({ 'change_seat_to': S }));
                                }
                            }));
                            this.seat = S,
                                uiscript["UI_DesktopInfo"].Inst["refreshSeat"](!0);
                            for (var P = 0; 4 > P; P++)
                                this["players"][P]["onInitRoom"](this["localPosition2Seat"](P)), this["players"][P]["trans_ind"]["active"] = !1, this["players"][P]["RefreshDir"]();
                            this["Reset"](),
                                this.mode == B["paipu"] && uiscript["UI_Replay"].Inst["onChangeMainBody"](),
                                this.mode == B["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["onChangeMainbody"](),
                                this.mode == B["live_broadcast"] && uiscript["UI_Live_Broadcast1"].Inst["onChangeMainbody"]();
                        }
                    },
                    L["prototype"]["trySyncGame"] = function () {
                        var S = this;
                        this["Reset"](),
                            this["duringReconnect"] = !0,
                            this["hangupCount"] = 0,
                            app["NetAgent"]["sendReq2MJ"]("FastTest", "syncGame", {
                                round_id: this["round_id"],
                                step: 0
                            }, function (P, m) {
                                P || m["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("syncGame", P, m), game["Scene_MJ"].Inst["ForceOut"]()) : (app.Log.log("[syncGame2] " + JSON["stringify"](m)), m["isEnd"] ? (uiscript["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2229)), game["Scene_MJ"].Inst["GameEnd"]()) : (S["fetchLinks"](), S["Reset"](), S["duringReconnect"] = !0, S["syncGameByStep"](m["game_restore"])));
                            });
                    },
                    L["prototype"]["syncGameByStep"] = function (P) {
                        var m = this,
                            B = !1;
                        if (this["timestoped"] = !1, this["handles_after_timerun"] = [], this["action_running"] = !1, uiscript["UI_GameStop"].Inst["close"](), this["hangupCount"] = 0, uiscript["UI_Hangup_Warn"].Inst["enable"] = !1, P && 5 === P["game_state"] && (this["timestoped"] = !0), GameMgr.Inst["EnterMJ"](), P && P["actions"] && P["actions"]["length"] > 0) {
                            var actions = [];
                            for (var idx = 0; idx < P.actions.length; idx++) {
                                var rawAction = P.actions[idx];
                                var action = net.ProtobufManager.lookupType("lq." + rawAction.name).decode(rawAction.data);
                                actions.push({
                                    name: rawAction.name,
                                    data: action
                                });
                            }
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'sync_game_actions': actions
                                }),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'sync_game_actions': actions
                                    }));
                                }
                            }));
                            this["actionList"] = [];
                            var J = -1;
                            null != P["passed_waiting_time"] && void 0 != P["passed_waiting_time"] && (J = 1000 * P["passed_waiting_time"]);
                            for (var w = 0; w < P["actions"]["length"]; w++) {
                                var h = P["actions"][w],
                                    s = w == P["actions"]["length"] - 1 ? J : -1,
                                    R = net["ProtobufManager"]["lookupType"]("lq." + h.name);
                                if (!R)
                                    throw new Error("ERR_CANNOT_FIND_MESSAGE_TYPE, lq." + h.name);
                                var v = R["decode"](h.data);
                                this["current_step"] = h.step;
                                try {
                                    switch (h.name) {
                                        case "ActionNewRound":
                                            S["ActionNewRound"]["fastplay"](v, s);
                                            break;
                                        case "ActionChangeTile":
                                            S["ActionChangeTile"]["fastplay"](v, s);
                                            break;
                                        case "ActionDiscardTile":
                                            S["ActionDiscardTile"]["fastplay"](v, s);
                                            break;
                                        case "ActionDealTile":
                                            S["ActionDealTile"]["fastplay"](v, s);
                                            break;
                                        case "ActionChiPengGang":
                                            S["ActionChiPengGang"]["fastplay"](v, s);
                                            break;
                                        case "ActionAnGangAddGang":
                                            S["ActionAnGangAddGang"]["fastplay"](v, s);
                                            break;
                                        case "ActionHule":
                                            S["ActionHule"]["fastplay"](v, s),
                                                B = !0;
                                            break;
                                        case "ActionHuleXueZhanMid":
                                            S["ActionHuleXueZhanMid"]["fastplay"](v, s),
                                                B = !0;
                                            break;
                                        case "ActionHuleXueZhanEnd":
                                            S["ActionHuleXueZhanEnd"]["fastplay"](v, s),
                                                B = !0;
                                            break;
                                        case "ActionLiuJu":
                                            S["ActionLiuJu"]["fastplay"](v, s),
                                                B = !0;
                                            break;
                                        case "ActionNoTile":
                                            S["ActionNoTile"]["fastplay"](v, s),
                                                B = !0;
                                            break;
                                        case "ActionBaBei":
                                            S["ActionBabei"]["fastplay"](v, s);
                                            break;
                                        case "ActionSelectGap":
                                            S["ActionSelectGap"]["fastplay"](v, s);
                                            break;
                                        case "ActionGangResult":
                                            S["ActionGangResult"]["fastplay"](v, s);
                                            break;
                                        case "ActionGangResultEnd":
                                            S["ActionGangResultEnd"]["fastplay"](v, s);
                                            break;
                                        case "ActionLockTile":
                                            S["ActionLockTile"]["fastplay"](v, s);
                                            break;
                                        case "ActionRevealTile":
                                            S["ActionRevealTile"]["fastplay"](v, s);
                                            break;
                                        case "ActionUnveilTile":
                                            S["ActionUnveilTile"]["fastplay"](v, s);
                                            break;
                                        case "ActionNewCard":
                                            S["ActionNewCard"]["fastplay"](v, s);
                                            break;
                                        case "ActionFillAwaitingTiles":
                                            S["ActionFillAwaitingTiles"]["fastplay"](v, s);
                                    }
                                } catch (f) {
                                    var A = {};
                                    A["error"] = f["message"],
                                        A["stack"] = f["stack"],
                                        A["method"] = "syncGameByStep",
                                        A.name = h.name,
                                        A.data = h,
                                        A.step = w,
                                        GameMgr.Inst["onFatalError"](A);
                                    break;
                                }
                            }
                            Laya["timer"].once(1000, this, function () {
                                m["duringReconnect"] = !1,
                                    uiscript["UI_Loading"].Inst["close"](),
                                    B || S["BgmListMgr"]["PlayMJBgm"](),
                                    m["DoChainAction"]();
                            });
                        } else
                            this["duringReconnect"] = !1, this["timestoped"] ? this["handles_after_timerun"].push(Laya["Handler"]["create"](this, function () {
                                app["NetAgent"]["sendReq2MJ"]("FastTest", "confirmNewRound", {}, function () { });
                            })) : app["NetAgent"]["sendReq2MJ"]("FastTest", "confirmNewRound", {}, function () { });
                        app.Log.log("finishSyncGame11"),
                            app["NetAgent"]["sendReq2MJ"]("FastTest", "finishSyncGame", {}, function () { }),
                            L.Inst["fetchLinks"](),
                            this["timestoped"] && uiscript["UI_GameStop"].Inst.show();
                    },
                    L["prototype"]["setGameStop"] = function (S) {
                        if (S != this["timestoped"])
                            if (this["timestoped"] = S, this["timestoped"])
                                this["handles_after_timerun"] = [], uiscript["UI_GameStop"].Inst.show();
                            else {
                                if (uiscript["UI_GameStop"].Inst["close"](), this["handles_after_timerun"])
                                    for (var P = 0; P < this["handles_after_timerun"]["length"]; P++)
                                        this["handles_after_timerun"][P].run();
                                this["handles_after_timerun"] = [],
                                    this["hangupCount"] = 0;
                            }
                    },
                    L["prototype"]["CreatePai3D"] = function (S) {
                        var P = this["desktop3D"]["getChildByName"]("all")["getChildByName"]("mjp")["getChildByName"](S["touming"] ? "touming" : S["toString"]())["clone"](),
                            m = this["desktop3D"]["getChildByName"]("all")["getChildByName"]("maque_outline")["clone"](),
                            B = P,
                            J = (new caps["BaseMaterial"](caps["Cartoon"]["filename"]), "scene/Assets/Resource/mjpai/");
                        if (S["touming"]) {
                            var w = new caps["Material_TouMingPai"](caps["TouMingPai"]["filename"]),
                                h = "scene/Assets/Resource/mjpai/";
                            ('en' == GameMgr["client_language"] || 'kr' == GameMgr["client_language"]) && (h += "en_kr/"),
                                h += L["en_mjp"] ? "toumingpai_0/mjp.png" : "toumingpai/mjp.png",
                                w["setTexture"](caps["TouMingPai"]["TEXTURE"], Laya["loader"]["getRes"](h)),
                                B["meshRender"]["sharedMaterial"] = w;
                        } else {
                            var s = new caps["BaseMaterial"](caps["Cartoon"]["filename"]),
                                R = "scene/Assets/Resource/mjpai/";
                            ('en' == GameMgr["client_language"] || 'kr' == GameMgr["client_language"]) && (R += "en_kr/"),
                                R += this["mjp_res_name"] + "/mjp.png",
                                s["setTexture"](caps["Cartoon"]["TEXTURE"], Laya["loader"]["getRes"](R)),
                                s["setNumber"](caps["Cartoon"]["SPLIT"], 0.4),
                                s["setColor"](caps["Cartoon"]["COLOR_LIGHT"], new Laya["Vector3"](1, 1, 1)),
                                s["setColor"](caps["Cartoon"]["COLOR_UNLIGHT"], new Laya["Vector3"](0.788, 0.788, "0.8235")),
                                s["setColor"](caps["Cartoon"]["COLOR"], new Laya["Vector3"](1, 1, 1)),
                                B["meshRender"]["sharedMaterial"] = s;
                        }
                        var v = m;
                        P["addChild"](v),
                            v["transform"]["localPosition"] = new Laya["Vector3"](0, 0, 0),
                            v["transform"]["localScale"] = new Laya["Vector3"](1, 1, 1),
                            v["transform"]["localRotation"] = new Laya["Quaternion"](0, 0, 0, 0);
                        var f = v,
                            A = new caps["Material_Outline"](caps["Outline"]["filename"]);
                        A["renderQueue"] = 2999,
                            A["setColor"](caps["Outline"]["OUTLINE_COLOR"], new Laya["Vector3"](0.165, 0.192, 0.204)),
                            A["setNumber"](caps["Outline"]["OUTLINE_ALPHA"], 0.6),
                            A["setNumber"](caps["Outline"]["OUTLINE"], "0.0012"),
                            f["meshRender"]["sharedMaterial"] = A;
                        var u = new Laya["Sprite3D"]();
                        if (u.name = "effect", u["transform"]["localPosition"] = new Laya["Vector3"](0, 0, 0), u["transform"]["localScale"] = new Laya["Vector3"](1, 1, 1), u["transform"]["localRotation"] = new Laya["Quaternion"](0, 0, 0, 0), P["addChild"](u), S["touming"]) {
                            var y = this["desktop3D"]["getChildByName"]("all")["getChildByName"]("touming")["clone"]();
                            y.name = "touming",
                                P["addChild"](y),
                                y["transform"]["localPosition"] = new Laya["Vector3"](0, 0, 0.00001),
                                y["transform"]["localScale"] = new Laya["Vector3"](1, 1, 1),
                                y["transform"]["localRotation"] = new Laya["Quaternion"](0, 0, 0, 0);
                            var e = new caps["Material_TwoSided"](caps["TwoSided"]["filename"]),
                                x = 0;
                            switch (S.type) {
                                case mjcore["E_MJPai"].m:
                                    x = 0;
                                    break;
                                case mjcore["E_MJPai"].p:
                                    x = 10;
                                    break;
                                case mjcore["E_MJPai"].s:
                                    x = 20;
                                    break;
                                default:
                                    x = 29;
                            }
                            S.dora || (x += S["index"]);
                            var C = (6 + x % 7 * 104) / 1024,
                                g = (6 + 144 * Math["floor"](x / 7)) / 1024,
                                J = "scene/Assets/Resource/mjpai/";
                            ('en' == GameMgr["client_language"] || 'kr' == GameMgr["client_language"]) && (J += "en_kr/"),
                                J += L["en_mjp"] ? "toumingpai_0/mjp.png" : "toumingpai/mjp.png",
                                e["setTexture"](caps["TwoSided"]["TEXTURE"], Laya["loader"]["getRes"](J)),
                                e["setColor"](caps["TwoSided"]["COLOR"], new Laya["Vector3"](1, 1, 1)),
                                e["setNumber"](caps["TwoSided"]["OFFSET_X"], C),
                                e["setNumber"](caps["TwoSided"]["OFFSET_Y"], g),
                                e["renderQueue"] = 3000,
                                y["getChildByName"]("twosided")["meshRender"]["sharedMaterial"] = e,
                                y["getChildByName"]("touying")["getChildByName"]("pai")["meshRender"]["sharedMaterial"] = e,
                                y["getChildByName"]("touying")["getChildByName"]('bg')["meshRender"]["sharedMaterial"]["renderQueue"] = 2998;
                        }
                        return P;
                    },
                    L["prototype"]["RefreshPlayerIndicator"] = function () {
                        for (var S = 0; 4 > S; S++)
                            this["players"][S]["trans_ind"]["active"] = S == this["seat2LocalPosition"](this["index_player"]), this["players"][S]["RefreshScore"](this["mainrole"]["score"]);
                    },
                    L["prototype"]["setAutoHule"] = function (S) {
                        this["auto_hule"] = S,
                            this["_PendingAuto"](!0);
                    },
                    L["prototype"]["setAutoNoFulu"] = function (S) {
                        this["auto_nofulu"] = S,
                            this["_PendingAuto"](!0);
                    },
                    L["prototype"]["setAutoMoQie"] = function (S) {
                        this["auto_moqie"] = S,
                            this["_PendingAuto"](!0);
                    },
                    L["prototype"]["setAutoLiPai"] = function (S) {
                        this["auto_liqi"] = S,
                            S && this["gameing"] && this["mainrole"] && this["mainrole"]["LiPai"](!1, !1, !0);
                    },
                    L["prototype"]["setScoreDelta"] = function (S) {
                        for (var P = 1; 4 > P; P++)
                            this["players"][P]["duringShowDetla"] = S, this["players"][P]["RefreshScore"](this["mainrole"]["score"]);
                    },
                    L["prototype"]["SetChangJuShow"] = function (S, P, m) {
                        if (this["is_chuanma_mode"]()) {
                            var B = new Laya["Vector4"]("0.1666", 1, 0, 0);
                            'en' == GameMgr["client_language"] && (B = new Laya["Vector4"](1, 0.2, 0, -0.8)),
                                this["plane_chang"]["meshRender"]["material"]["tilingOffset"] = B;
                            var J = new Laya["Vector4"](0.1, 1, 0.1 * m, 0);
                            this["plane_ju"]["meshRender"]["material"]["tilingOffset"] = J;
                        } else {
                            var B = new Laya["Vector4"](0.166, 1, 0.166 + S % 4 * 0.166, 0);
                            'en' == GameMgr["client_language"] && (B = new Laya["Vector4"](1, 0.2, 0, 0.2 * (S % 4 - 3))),
                                this["plane_chang"]["meshRender"]["material"]["tilingOffset"] = B,
                                this["plane_chang_reveal"]["meshRender"]["material"]["tilingOffset"] = B;
                            var J = new Laya["Vector4"](0.1, 1, 0.1 * P, 0);
                            this["plane_ju"]["meshRender"]["material"]["tilingOffset"] = J,
                                this["plane_ju_reveal"]["meshRender"]["material"]["tilingOffset"] = J;
                        }
                    },
                    L["prototype"]["SetLeftPaiShow"] = function (S) {
                        S >= 100 ? S = 99 : 0 > S && (S = 0);
                        for (var P = [S % 10, Math["floor"](S / 10)], m = 0; m < P["length"]; m++) {
                            var B = new Laya["Vector4"](0.1, 1, 0.1 * P[m], 0);
                            this["num_left_show"][m]["meshRender"]["material"]["tilingOffset"] = B,
                                this["num_left_show_reveal"][m]["meshRender"]["material"]["tilingOffset"] = B;
                        }
                    },
                    L["prototype"]["RefreshPaiLeft"] = function () {
                        this["SetLeftPaiShow"](this["left_tile_count"]);
                    },
                    L["prototype"]["Reset"] = function () {
                        app.Log.log("DesktopMgr.Reset"),
                            this["operation_showing"] = !1,
                            this["oplist"] = [],
                            Laya["timer"]["clearAll"](S["ActionAnGangAddGang"]),
                            Laya["timer"]["clearAll"](S["ActionChiPengGang"]),
                            Laya["timer"]["clearAll"](S["ActionDealTile"]),
                            Laya["timer"]["clearAll"](S["ActionDiscardTile"]),
                            Laya["timer"]["clearAll"](S["ActionHule"]),
                            Laya["timer"]["clearAll"](S["ActionHuleXueZhanEnd"]),
                            Laya["timer"]["clearAll"](S["ActionHuleXueZhanMid"]),
                            Laya["timer"]["clearAll"](S["ActionLiqi"]),
                            Laya["timer"]["clearAll"](S["ActionLiuJu"]),
                            Laya["timer"]["clearAll"](S["ActionNewRound"]),
                            Laya["timer"]["clearAll"](S["ActionNoTile"]),
                            Laya["timer"]["clearAll"](S["ActionOperation"]),
                            Laya["timer"]["clearAll"](S["ActionChangeTile"]),
                            Laya["timer"]["clearAll"](S["ActionSelectGap"]),
                            Laya["timer"]["clearAll"](S["ActionGangResult"]),
                            Laya["timer"]["clearAll"](S["ActionGangResultEnd"]),
                            Laya["timer"]["clearAll"](S["ActionRevealTile"]),
                            Laya["timer"]["clearAll"](S["ActionUnveilTile"]),
                            Laya["timer"]["clearAll"](S["ActionLockTile"]),
                            Laya["timer"]["clearAll"](S["ActionNewCard"]),
                            Laya["timer"]["clearAll"](S["ActionFillAwaitingTiles"]),
                            Laya["timer"]["clearAll"](this),
                            uiscript["UI_DesktopInfo"].Inst["reset_rounds"](),
                            uiscript["UI_Replay"].Inst["reset"](),
                            this["effect_pai_canchi"] && (this["effect_pai_canchi"]["destroy"](), this["effect_pai_canchi"] = null);
                        for (var P = 0; 4 > P; P++)
                            this["players"][P]["Reset"]();
                        this["tingpais"] = [[], [], [], []],
                            this.md5 = '',
                            this["current_step"] = -1,
                            this["muyu_info"] = null,
                            this["muyu_effect"] && (this["muyu_effect"].root["active"] = !1, Laya["timer"]["clearAll"](this["muyu_effect"])),
                            this["mind_voice_seat"] = -1,
                            this["mind_voice_type"] = '',
                            this["during_playing_mind_voice"] = !1;
                    },
                    L["prototype"]["setScores"] = function (P) {
                        for (var m = 0; m < P["length"]; m++)
                            this["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["SetScore"](P[m], P[this.seat]);
                    },
                    L["prototype"]["_PendingAuto"] = function (P) {
                        if (void 0 === P && (P = !1), null == this["oplist"] || 0 == this["oplist"]["length"])
                            return !1;
                        try {
                            var m = !1,
                                B = !1,
                                J = !1,
                                L = !1,
                                w = !1,
                                h = !1,
                                s = !1,
                                R = !1,
                                v = this["operation_showing"];
                            this["operation_showing"] = !0;
                            var f = null,
                                A = 0;
                            this["liqi_select"] = [];
                            for (var u = !0, y = 0; y < this["oplist"]["length"]; y++) {
                                var e = this["oplist"][y],
                                    x = e.type;
                                switch (x) {
                                    case mjcore["E_PlayOperation"].eat:
                                    case mjcore["E_PlayOperation"].peng:
                                    case mjcore["E_PlayOperation"]["ming_gang"]:
                                    case mjcore["E_PlayOperation"].rong:
                                    case mjcore["E_PlayOperation"]["unveil"]:
                                        m = !0;
                                        break;
                                    case mjcore["E_PlayOperation"]["an_gang"]:
                                    case mjcore["E_PlayOperation"]["add_gang"]:
                                    case mjcore["E_PlayOperation"].liqi:
                                    case mjcore["E_PlayOperation"].zimo:
                                    case mjcore["E_PlayOperation"]["babei"]:
                                    case mjcore["E_PlayOperation"]["revealliqi"]:
                                    case mjcore["E_PlayOperation"]["reveal"]:
                                    case mjcore["E_PlayOperation"]["locktile"]:
                                        B = !0;
                                    case mjcore["E_PlayOperation"]["jiuzhongjiupai"]:
                                        B = !0;
                                        break;
                                    case mjcore["E_PlayOperation"]["huansanzhang"]:
                                        J = !0;
                                        break;
                                    case mjcore["E_PlayOperation"]["dingque"]:
                                        L = !0,
                                            A = e["gap_type"];
                                        break;
                                    case mjcore["E_PlayOperation"]["selecttile"]:
                                        w = !0;
                                }
                                if (x == mjcore["E_PlayOperation"]["dapai"])
                                    R = !0, f = this["oplist"][y]["combination"];
                                else if (x == mjcore["E_PlayOperation"].liqi) {
                                    R = !0,
                                        this["liqi_select"] = [];
                                    for (var C = 0; C < this["oplist"][y]["combination"]["length"]; C++)
                                        this["liqi_select"].push(mjcore["MJPai"]["Create"](this["oplist"][y]["combination"][C]));
                                } else
                                    x == mjcore["E_PlayOperation"].rong ? h = !0 : x == mjcore["E_PlayOperation"].zimo ? s = !0 : x == mjcore["E_PlayOperation"]["huansanzhang"] && (P || S["DesktopMgr"].Inst["mainrole"]["setHuanSanZhangDefaultTile"](e["change_tiles"], e["change_tile_states"]));
                                x != mjcore["E_PlayOperation"]["dapai"] && x != mjcore["E_PlayOperation"]["reveal"] && (u = !1);
                            }
                            var g = this["auto_hule"],
                                H = this["auto_nofulu"],
                                I = this["auto_moqie"];
                            if (this["anpai"] && u && I) {
                                if (this["mainrole"]["trans_liqi"]["active"])
                                    return app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                        cancel_operation: !0
                                    }, function () { }), void 0;
                                if (null != this["mainrole"]["last_tile"])
                                    return this["Action_QiPai"](this["mainrole"]["last_tile"].val, !0, !0, this["mainrole"]["last_tile"]["is_open"]), !1;
                            }
                            if (g && (h || s))
                                return Laya["timer"].once(800, this, function () {
                                    h ? app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                        type: mjcore["E_PlayOperation"].rong,
                                        index: 0
                                    }, function () { }) : s && app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                        type: mjcore["E_PlayOperation"].zimo,
                                        index: 0
                                    }, function () { });
                                }), this["ClearOperationShow"](), !1;
                            if (L)
                                uiscript["UI_Dingque"].Inst.show(A);
                            else if (J)
                                P || uiscript["UI_HuanSanZhange"].Inst.show();
                            else if (m) {
                                if (H && !h && !s)
                                    return app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                        cancel_operation: !0
                                    }, function () { }), this["ClearOperationShow"](), !1;
                                v || uiscript["UIMgr"].Inst["ShowChipenghu"](this["oplist"]);
                            } else if (B && (v || uiscript["UIMgr"].Inst["ShowLiqiZimo"](this["oplist"])), R) {
                                if (I && !uiscript["UI_LiQiZiMo"].Inst["enable"] && null != this["mainrole"]["last_tile"])
                                    return this["Action_QiPai"](this["mainrole"]["last_tile"].val, !0, !0, this["mainrole"]["last_tile"]["is_open"]), !1;
                                if (!v && (this["mainrole"]["can_discard"] = !0, f && f["length"] > 0)) {
                                    for (var Q = [], y = 0; y < f["length"]; y++)
                                        Q.push(mjcore["MJPai"]["Create"](f[y]));
                                    this["mainrole"]["ChiTiSelect"](Q);
                                }
                            } else
                                this["mainrole"]["can_discard"] = !1;
                            if (w) {
                                if (I)
                                    return uiscript["UI_Astrology"].Inst["selectTile"](0), !1;
                                v || uiscript["UI_Astrology"].Inst["showSelections"]();
                            }
                        } catch (i) {
                            var c = {};
                            c["error"] = i["message"],
                                c["stack"] = i["stack"],
                                c["method"] = "_PendingAuto",
                                c.name = "DesktopMgr",
                                GameMgr.Inst["onFatalError"](c);
                        }
                        return !0;
                    },
                    L["prototype"]["OperationTimeOut"] = function () {
                        if (null != this["oplist"] && 0 != this["oplist"]["length"]) {
                            {
                                var S = !1,
                                    P = !1,
                                    m = !1,
                                    B = !1,
                                    J = !1;
                                this["operation_showing"];
                            }
                            this["operation_showing"] = !0;
                            for (var L = null, w = 0; w < this["oplist"]["length"]; w++) {
                                switch (this["oplist"][w].type) {
                                    case mjcore["E_PlayOperation"].eat:
                                    case mjcore["E_PlayOperation"].peng:
                                    case mjcore["E_PlayOperation"]["ming_gang"]:
                                    case mjcore["E_PlayOperation"].rong:
                                        S = !0;
                                        break;
                                    case mjcore["E_PlayOperation"]["an_gang"]:
                                    case mjcore["E_PlayOperation"]["add_gang"]:
                                    case mjcore["E_PlayOperation"].liqi:
                                    case mjcore["E_PlayOperation"].zimo:
                                    case mjcore["E_PlayOperation"]["babei"]:
                                        P = !0;
                                }
                                (this["oplist"][w].type == mjcore["E_PlayOperation"]["dapai"] || this["oplist"][w].type == mjcore["E_PlayOperation"].liqi) && (J = !0, this["oplist"][w].type == mjcore["E_PlayOperation"]["dapai"] && (L = this["oplist"][w]["combination"])),
                                    this["oplist"][w].type == mjcore["E_PlayOperation"].rong && (m = !0),
                                    this["oplist"][w].type == mjcore["E_PlayOperation"].zimo && (B = !0);
                            }
                            if (S)
                                m ? app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                    type: mjcore["E_PlayOperation"].rong,
                                    index: 0,
                                    timeuse: 1000000
                                }, function () { }) : app["NetAgent"]["sendReq2MJ"]("FastTest", "inputChiPengGang", {
                                    cancel_operation: !0,
                                    timeuse: 1000000
                                }, function () { }), this["ClearOperationShow"]();
                            else if (B)
                                app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                    type: mjcore["E_PlayOperation"].zimo,
                                    index: 0,
                                    timeuse: 1000000
                                }, function () { });
                            else if (J)
                                if (this["mainrole"]["during_liqi"]) {
                                    for (var h = -1, w = 0; w < this["mainrole"].hand["length"]; w++)
                                        if (this["mainrole"].hand[w]["valid"]) {
                                            h = w;
                                            break;
                                        }
                                    this["Action_LiQi"](this["mainrole"].hand[h].val, this["mainrole"].hand[h] === this["mainrole"]["last_tile"], this["mainrole"].hand[h]["is_open"]);
                                } else {
                                    var s = null,
                                        R = !1,
                                        v = !1;
                                    if (null == s && this["mainrole"]["last_tile"] && this["mainrole"]["last_tile"]["valid"] && (s = this["mainrole"]["last_tile"].val, R = !0, v = this["mainrole"]["last_tile"]["is_open"]), null == s)
                                        for (var w = this["mainrole"].hand["length"] - 1; w >= 0; w--)
                                            if (this["mainrole"].hand[w]["valid"]) {
                                                s = this["mainrole"].hand[w].val,
                                                    R = !1,
                                                    v = this["mainrole"].hand[w]["is_open"];
                                                break;
                                            }
                                    this["Action_QiPai"](s, R, !0, v);
                                }
                            else
                                P && (app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                                    cancel_operation: !0,
                                    timeuse: 1000000
                                }, function () { }), this["ClearOperationShow"]());
                        }
                    },
                    L["prototype"]["WhenDoOperation"] = function () {
                        this["hangupCount"] = 0,
                            this["ClearOperationShow"]();
                    },
                    L["prototype"]["ClearOperationShow"] = function () {
                        this["operation_showing"] = !1,
                            this["oplist"] = [],
                            uiscript["UI_Huleshow"].Inst["enable"] = !1,
                            uiscript["UIMgr"].Inst["CloseLiuJu"](),
                            uiscript["UIMgr"].Inst["CloseWin"](),
                            uiscript["UIMgr"].Inst["CloseChipenghu"](),
                            uiscript["UIMgr"].Inst["CloseLiqiZimo"](),
                            uiscript["UI_Hu_Xuezhan"].Inst["enable"] = !1,
                            Laya["timer"]["clearAll"](S["ActionOperation"]),
                            uiscript["UI_ScoreChange"].Inst["enable"] = !1,
                            this["mainrole"]["can_discard"] = !1,
                            uiscript["UI_DesktopInfo"].Inst["closeCountDown"]();
                    },
                    L["prototype"]["WhenLiqiInfo"] = function (S) {
                        var P = this;
                        S && Laya["timer"].once(300, this, function () {
                            var m = S.seat,
                                B = S["score"];
                            P["players"][P["seat2LocalPosition"](m)]["ShowLiqi"](),
                                P["players"][P["seat2LocalPosition"](m)]["SetScore"](B, P["mainrole"]["score"]),
                                uiscript["UI_DesktopInfo"].Inst["setLiqibang"](S["liqibang"]);
                        });
                    },
                    L["prototype"]["WhenDoras"] = function (P, m) {
                        var B = this;
                        if (!(null == P || void 0 == P || 0 == P["length"] || P["length"] <= this.dora["length"]) && P) {
                            for (var J = 0; J < P["length"]; J++)
                                this.dora["length"] > J ? this.dora[J] = mjcore["MJPai"]["Create"](P[J]) : this.dora.push(mjcore["MJPai"]["Create"](P[J])), uiscript["UI_DesktopInfo"].Inst["setDora"](J, this.dora[J]);
                            Laya["timer"]["frameOnce"](1, this, function () {
                                for (var S = 0; 4 > S; S++)
                                    B["players"][S]["OnDoraRefresh"]();
                            }),
                                m || S["AudioMgr"]["PlayAudio"](215);
                        }
                    },
                    L["prototype"]["Action_QiPai"] = function (S, P, m, B) {
                        app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                            type: mjcore["E_PlayOperation"]["dapai"],
                            tile: S["toString"](),
                            moqie: P,
                            timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                            tile_state: B ? 1 : 0
                        }, function (S) {
                            S ? app.Log["Error"]("Action_QiPai 失败") : app.Log.info("Action_QiPai 成功");
                        }),
                            m ? this["ClearOperationShow"]() : this["WhenDoOperation"]();
                    },
                    L["prototype"]["Action_AnPai"] = function (S, P, m, B) {
                        app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                            type: mjcore["E_PlayOperation"]["reveal"],
                            tile: S["toString"](),
                            moqie: P,
                            timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                            tile_state: B ? 1 : 0
                        }, function (S) {
                            S ? app.Log["Error"]("Action_AnPai 失败") : app.Log.info("Action_AnPai 成功");
                        }),
                            m ? this["ClearOperationShow"]() : this["WhenDoOperation"]();
                    },
                    L["prototype"]["Action_LiQi"] = function (S, P, m) {
                        if (!this["liqi_select"] || 0 == this["liqi_select"]["length"])
                            return !1;
                        for (var B = !1, J = 0; J < this["liqi_select"]["length"]; J++)
                            if (0 == mjcore["MJPai"]["Distance"](this["liqi_select"][J], S)) {
                                B = !0;
                                break;
                            }
                        return B ? (app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                            type: mjcore["E_PlayOperation"].liqi,
                            tile: S["toString"](),
                            moqie: P,
                            timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                            tile_state: m ? 1 : 0
                        }, function (S) {
                            S ? app.Log["Error"]("Action_LiQi 失败") : app.Log.info("Action_LiQi 成功");
                        }), this["WhenDoOperation"](), !0) : !1;
                    },
                    L["prototype"]["Action_AnPaiLiQi"] = function (S, P, m) {
                        if (!this["liqi_select"] || 0 == this["liqi_select"]["length"])
                            return !1;
                        for (var B = !1, J = 0; J < this["liqi_select"]["length"]; J++)
                            if (0 == mjcore["MJPai"]["Distance"](this["liqi_select"][J], S)) {
                                B = !0;
                                break;
                            }
                        return B ? (app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                            type: mjcore["E_PlayOperation"]["revealliqi"],
                            tile: S["toString"](),
                            moqie: P,
                            timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                            tile_state: m ? 1 : 0
                        }, function (S) {
                            S ? app.Log["Error"]("Action_LiQi 失败") : app.Log.info("Action_LiQi 成功");
                        }), this["WhenDoOperation"](), !0) : !1;
                    },
                    L["prototype"]["Action_HuanSanZhange"] = function (S, P) {
                        app["NetAgent"]["sendReq2MJ"]("FastTest", "inputOperation", {
                            type: mjcore["E_PlayOperation"]["huansanzhang"],
                            timeuse: uiscript["UI_DesktopInfo"].Inst["_timecd"]["timeuse"],
                            tile_states: P,
                            change_tiles: S
                        }, function (S) {
                            S ? app.Log["Error"]("Action_HuanSanZhange 失败") : app.Log.info("Action_HuanSanZhange 成功");
                        }),
                            this["WhenDoOperation"]();
                    },
                    L["prototype"]["SetLastQiPai"] = function (S, P) {
                        this["lastqipai"] = P,
                            this["lastpai_seat"] = S,
                            this["effect_pai_canchi"] && (this["effect_pai_canchi"]["destroy"](), this["effect_pai_canchi"] = null);
                    },
                    L["prototype"]["ShowHuleEffect"] = function (P, m, B, J, L) {
                        var w = this;
                        if (void 0 === L && (L = 0), null != P) {
                            m.y = 0;
                            var h = "scene/effect_hupai_default.lh",
                                s = 213;
                            if (B) {
                                var R = cfg["item_definition"].view.get(B);
                                R && (h = "scene/" + R["res_name"] + ".lh", s = R["audio_id"]);
                            }
                            var v = new game["EffectBase"](h);
                            if (this["trans_container_effect"]["addChild"](v.root), v.root["transform"]["position"] = m, v.root["active"] = !0, "scene/ron_hl.lh" == h) {
                                var f = this["seat2LocalPosition"](J);
                                v.root["transform"]["localRotationEuler"] = 0 == f ? new Laya["Vector3"](0, 0, 0) : 1 == f ? new Laya["Vector3"](0, 90, 0) : 2 == f ? new Laya["Vector3"](0, 180, 0) : new Laya["Vector3"](0, 270, 0);
                            } else if ("scene/effect_hupai_yanhua.lh" == h)
                                Laya["timer"].once(600, this, function () {
                                    var S = new game["EffectBase"]("scene/effect_hupai_yanhua_bang.lh");
                                    w["desktop3D"]["addChild"](S.root),
                                        S.root["transform"]["position"] = new Laya["Vector3"](0, 0, 0),
                                        S.root["active"] = !0,
                                        Laya["timer"].once(2000, w, function () {
                                            S["destroy"]();
                                        });
                                });
                            else if ("scene/ron_22chunjie.lh" == h) {
                                var A = new game["EffectBase"]("scene/ron_22chunjie_hongdi.lh");
                                this["desktop3D"]["addChild"](A.root),
                                    A["addLoadedListener"](Laya["Handler"]["create"](this, function () {
                                        for (var S = game["Tools"]["GetNodeByNameInChildren"](A.root, "hongdi"), P = 0, m = S["_childs"]; P < m["length"]; P++) {
                                            var B = m[P];
                                            B["particleRender"]["material"]["renderQueue"] = 3001;
                                        }
                                    })),
                                    A.root["transform"]["position"] = new Laya["Vector3"](0, 0, 0),
                                    A.root["active"] = !0,
                                    Laya["timer"].once(3000, this, function () {
                                        A["destroy"]();
                                    });
                            }
                            var u = !1,
                                y = P["model"]["parent"],
                                e = P["model"]["transform"]["rotation"]["clone"](),
                                x = P["model"]["transform"]["worldMatrix"]["clone"]();
                            v["addLoadedListener"](Laya["Handler"]["create"](this, function () {
                                if (!u) {
                                    S["AudioMgr"]["PlayAudio"](s);
                                    var m = game["Tools"]["GetNodeByNameInChildren"](v.root, "pai");
                                    m && 1 == L && (m["destroyChildren"](), m["addChild"](P["model"]), P["ResetAllTimer"] && P["ResetAllTimer"](), P["model"]["transform"]["rotation"] = e["clone"](), P["model"]["transform"]["worldMatrix"] = x["clone"](), Laya["timer"].once(1800, w, function () {
                                        u || (y["addChild"](P["model"]), P["model"]["transform"]["rotation"] = e["clone"](), P["model"]["transform"]["worldMatrix"] = x["clone"]());
                                    }));
                                    var B = game["Tools"]["GetNodeByNameInChildren"](v.root, "pai_anim");
                                    !B || 1 != L && 0 != L || (B["destroyChildren"](), B["addChild"](P["model"]), P["ResetAllTimer"] && P["ResetAllTimer"](), P["model"]["transform"]["rotation"] = e["clone"](), P["model"]["transform"]["worldMatrix"] = x["clone"](), Laya["timer"].once(1800, w, function () {
                                        u || (y["addChild"](P["model"]), P["model"]["transform"]["rotation"] = e["clone"](), P["model"]["transform"]["worldMatrix"] = x["clone"]());
                                    })),
                                        w["setSpecialHuleEffect"](h, v, P);
                                }
                            }));
                            var C = 2000;
                            "scene/ron_xiyuansi.lh" == h || "scene/ron_beiyuan.lh" == h ? C = 4600 : "scene/ron_22chunjie.lh" == h ? C = 3000 : "scene/ron_2211saki.lh" == h && (C = 3000),
                                Laya["timer"].once(C, this, function () {
                                    u = !0,
                                        P && P["model"] && P["model"]["transform"] && ("scene/ron_xiyuansi.lh" == h && (P["model"]["getChildAt"](0)["getChildAt"](0) ? (P["model"]["getChildAt"](0)["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 2000, P["model"]["getChildAt"](0)["getChildAt"](0)["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3001) : P["model"]["meshRender"] && (P["model"]["meshRender"]["sharedMaterial"]["renderQueue"] = 2000, P["model"]["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3001)), y["addChild"](P["model"]), P["model"]["transform"]["rotation"] = e["clone"](), P["model"]["transform"]["worldMatrix"] = x["clone"]()),
                                        v["destroy"]();
                                });
                        }
                    },
                    L["prototype"]["setSpecialHuleEffect"] = function (S, P, m) {
                        if ("scene/ron_akagi.lh" == S) {
                            var B = game["Tools"]["GetNodeByNameInChildren"](P.root, "heidi");
                            B["transform"]["position"] = new Laya["Vector3"](0, 0.101, 0.718);
                        }
                        if ("scene/ron_22summer.lh" == S) {
                            var J = game["Tools"]["GetNodeByNameInChildren"](P.root, "ya02");
                            J["meshRender"]["material"]["depthWrite"] = !0,
                                J["meshRender"]["material"]["depthTest"] = 0,
                                J["meshRender"]["material"]["renderQueue"] = 3005,
                                J["meshRender"]["material"]["disableLight"]();
                        }
                        if ("scene/ron_beiyuan.lh" == S) {
                            var L = game["Tools"]["GetNodeByNameInChildren"](P.root, "global");
                            L["transform"]["rotation"] = new Laya["Quaternion"](0, 0, 0, 1),
                                L["transform"]["position"] = new Laya["Vector3"](0, 0, 0);
                            var w = game["Tools"]["GetNodeByNameInChildren"](P.root, "plane1X1");
                            w["meshRender"]["material"]["disableLight"](),
                                w["meshRender"]["material"]["renderQueue"] = 3002;
                            var h = game["Tools"]["GetNodeByNameInChildren"](P.root, "shiziguang02");
                            h["particleRender"]["material"]["depthTest"] = 0,
                                h["particleRender"]["material"]["renderQueue"] = 3003;
                            for (var s = 0; s < h["_childs"]["length"]; s++)
                                h["getChildAt"](s)["particleRender"]["material"]["depthTest"] = 0, h["getChildAt"](s)["particleRender"]["material"]["renderQueue"] = 3003;
                            var R = game["Tools"]["GetNodeByNameInChildren"](P.root, "suipian");
                            R["particleRender"]["material"]["depthTest"] = 0,
                                R["particleRender"]["material"]["renderQueue"] = 3003,
                                R = game["Tools"]["GetNodeByNameInChildren"](P.root, "xuehua01"),
                                R["particleRender"]["material"]["depthTest"] = 0,
                                R["particleRender"]["material"]["renderQueue"] = 3003,
                                R = game["Tools"]["GetNodeByNameInChildren"](P.root, "xuehua02"),
                                R["particleRender"]["material"]["depthTest"] = 0,
                                R["particleRender"]["material"]["renderQueue"] = 3003,
                                R = game["Tools"]["GetNodeByNameInChildren"](P.root, "suipian01"),
                                R["particleRender"]["material"]["depthTest"] = 0,
                                R["particleRender"]["material"]["renderQueue"] = 3003;
                        }
                        if ("scene/ron_xiyuansi.lh" == S) {
                            Laya["timer"].once(1800, this, function () {
                                m["model"]["getChildAt"](0)["getChildAt"](0) ? (m["model"]["getChildAt"](0)["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3003, m["model"]["getChildAt"](0)["getChildAt"](0)["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3004) : m["model"]["meshRender"] && (m["model"]["meshRender"]["sharedMaterial"]["renderQueue"] = 3003, m["model"]["getChildAt"](0)["meshRender"]["sharedMaterial"]["renderQueue"] = 3004);
                            });
                            var w = game["Tools"]["GetNodeByNameInChildren"](P.root, "plane1X1");
                            w["meshRender"]["material"]["disableLight"](),
                                w["meshRender"]["material"]["renderQueue"] = 3002;
                            var v = game["LoadMgr"]["getResImage"]("extendRes/charactor/xiyuansiyiyu_0/full.png");
                            v && v["active"](),
                                w["meshRender"]["material"]["diffuseTexture"] = Laya["Texture2D"].load(game["LoadMgr"]["getResImageSkin"]("extendRes/charactor/xiyuansiyiyu_0/full.png"));
                            for (var f = game["Tools"]["GetNodeByNameInChildren"](P.root, "lizi"), s = 0; s < f["numChildren"]; s++)
                                f["getChildAt"](s)["particleRender"]["material"]["renderQueue"] = 3002, f["getChildAt"](s)["particleRender"]["material"]["depthTest"] = 0;
                            var L = game["Tools"]["GetNodeByNameInChildren"](P.root, "global");
                            L["transform"]["rotation"] = new Laya["Quaternion"](0, 0, 0, 1),
                                L["transform"]["position"] = new Laya["Vector3"](0, 0, 0);
                            for (var s = 0; 3 > s; s++)
                                L["getChildByName"]("heidi01")["getChildAt"](s)["particleRender"]["material"]["renderQueue"] = 3002;
                            for (var s = 0; 3 > s; s++)
                                L["getChildByName"]("daoguang")["getChildByName"]("lizi")["getChildAt"](s)["particleRender"]["material"]["renderQueue"] = 3002;
                            L["getChildByName"]("baodian")["getChildByName"]("shiziguang02")["particleRender"]["material"]["renderQueue"] = 3002;
                            for (var s = 0; 4 > s; s++)
                                L["getChildByName"]("baodian")["getChildByName"]("shiziguang02")["getChildAt"](s)["particleRender"]["material"]["renderQueue"] = 3002;
                            for (var s = 4; 8 > s; s++) {
                                var A = L["getChildByName"]("quxian_amin01")["getChildAt"](s)["meshRender"]["material"];
                                A["renderQueue"] = 3002,
                                    A["disableLight"]();
                            }
                        }
                    },
                    L["prototype"]["ShowChiPengEffect"] = function () {
                        var P = this;
                        if (this["lastqipai"]["model"] && this["lastqipai"]["model"]["transform"]) {
                            this["effect_pai_canchi"] || (this["effect_pai_canchi"] = new game["EffectBase"]("scene/" + game["GameUtility"]["get_view_res_name"](game["EView"]["mingpai_zhishi"]) + ".lh"), this["trans_container_effect"]["addChild"](this["effect_pai_canchi"].root), this["effect_pai_canchi"].root["active"] = !0),
                                this["effect_pai_canchi"].root["transform"]["worldMatrix"] = this["lastqipai"]["model"]["transform"]["worldMatrix"]["clone"]();
                            var m = this["effect_pai_canchi"],
                                B = this["lastqipai"];
                            if (this["lastqipai"]["revealState"] == S["ERevealState"]["reveal"]) {
                                var J = this["effect_pai_canchi"].root["transform"]["localPosition"]["clone"]();
                                J.y -= S["PAIMODEL_THICKNESS"],
                                    this["effect_pai_canchi"].root["transform"]["localPosition"] = J;
                            }
                            Laya["timer"]["frameLoop"](1, this["effect_pai_canchi"], function () {
                                if (B["model"]["activeInHierarchy"] && B["model"]["active"] && B["model"]["parent"]["active"]) {
                                    if (m.root["transform"]["worldMatrix"] = B["model"]["transform"]["worldMatrix"]["clone"](), B["revealState"] == S["ERevealState"]["reveal"]) {
                                        var J = m.root["transform"]["localPosition"]["clone"]();
                                        J.y -= S["PAIMODEL_THICKNESS"],
                                            m.root["transform"]["localPosition"] = J;
                                    }
                                    P["effect_pai_canchi"].root["active"] = !0;
                                } else
                                    P["effect_pai_canchi"].root["active"] = !1;
                            });
                        }
                    },
                    L["prototype"]["CloseChiPngEffect"] = function () {
                        this["effect_pai_canchi"] && (Laya["timer"]["clearAll"](this["effect_pai_canchi"]), this["effect_pai_canchi"]["destroy"](), this["effect_pai_canchi"] = null);
                    },
                    L["prototype"]["setChoosedPai"] = function (S) {
                        var P = !1;
                        if (P || !S || this["choosed_pai"] || (P = !0), P || S || !this["choosed_pai"] || (P = !0), !P && S && this["choosed_pai"] && 0 != mjcore["MJPai"]["Distance"](this["choosed_pai"], S) && (P = !0), P && (this["choosed_pai"] = S ? S["Clone"]() : null, L["bianjietishi"])) {
                            for (var m = 0; 4 > m; m++)
                                this["players"][m]["OnChoosePai"]();
                            uiscript["UI_TingPai"].Inst["onChooseTile"](S);
                        }
                    },
                    L["prototype"]["setTingpai"] = function (P, m) {
                        for (var B = !1, J = [], L = 0; L < m["length"]; L++)
                            J.push(mjcore["MJPai"]["Create"](m[L].tile));
                        this["tingpais"][P]["length"] != J["length"] && (B = !0);
                        for (var L = 0; L < J["length"] && !B; L++)
                            0 != mjcore["MJPai"]["Distance"](J[L], this["tingpais"][P][L]) && (B = !0);
                        if (B) {
                            this["tingpais"][P] = J;
                            for (var L = 0; L < S["DesktopMgr"].Inst["players"]["length"]; L++) {
                                var w = this["localPosition2Seat"](L);
                                if (!(0 > w)) {
                                    for (var h = 0; h < S["DesktopMgr"].Inst["players"][L]["container_qipai"].pais["length"]; h++) {
                                        var s = S["DesktopMgr"].Inst["players"][L]["container_qipai"].pais[h];
                                        s["ispaopai"] = this["isPaoPai"](s.val),
                                            s["OnChoosedPai"]();
                                    }
                                    for (var h = 0; h < S["DesktopMgr"].Inst["players"][L]["container_ming"].pais["length"]; h++) {
                                        var s = S["DesktopMgr"].Inst["players"][L]["container_ming"].pais[h];
                                        s["ispaopai"] = this["isPaoPai"](s.val),
                                            s["OnChoosedPai"]();
                                    }
                                    for (var h = 0; h < S["DesktopMgr"].Inst["players"][L]["container_babei"].pais["length"]; h++) {
                                        var s = S["DesktopMgr"].Inst["players"][L]["container_babei"].pais[h];
                                        s["ispaopai"] = this["isPaoPai"](s.val),
                                            s["OnChoosedPai"]();
                                    }
                                    var s = S["DesktopMgr"].Inst["players"][L]["container_qipai"]["last_pai"];
                                    if (s && (s["ispaopai"] = this["isPaoPai"](s.val), s["OnChoosedPai"]()), 0 == L)
                                        for (var R = S["DesktopMgr"].Inst["players"][L], h = 0; h < R.hand["length"]; h++) {
                                            var s = R.hand[h];
                                            s["ispaopai"] = this["isPaoPai"](s.val),
                                                s["OnChoosedPai"]();
                                        }
                                    else
                                        for (var R = S["DesktopMgr"].Inst["players"][L], h = 0; h < R.hand["length"]; h++) {
                                            var s = R.hand[h]["pai3D"];
                                            s["ispaopai"] = this["record_show_hand"] || s["is_open"] ? this["isPaoPai"](s.val) : !1,
                                                s["OnChoosedPai"]();
                                        }
                                }
                            }
                        }
                    },
                    L["prototype"]["isPaoPai"] = function (S) {
                        if (!this["record_show_paopai"])
                            return !1;
                        for (var P = 0; P < this["tingpais"]["length"]; P++)
                            for (var m = 0; m < this["tingpais"][P]["length"]; m++)
                                if (0 == mjcore["MJPai"]["Distance"](this["tingpais"][P][m], S))
                                    return !0;
                        return !1;
                    },
                    L["prototype"]["getPaiLeft"] = function (P) {
                        for (var m = 0, B = 0; 4 > B; B++) {
                            for (var J = this["players"][B], L = 0; L < J["container_babei"].pais["length"]; L++)
                                0 == mjcore["MJPai"]["Distance"](J["container_babei"].pais[L].val, P) && m++;
                            for (var L = 0; L < J["container_ming"].pais["length"]; L++)
                                0 == mjcore["MJPai"]["Distance"](J["container_ming"].pais[L].val, P) && m++;
                            for (var L = 0; L < J["container_qipai"].pais["length"]; L++)
                                J["container_qipai"].pais[L]["revealState"] != S["ERevealState"]["reveal"] && 0 == mjcore["MJPai"]["Distance"](J["container_qipai"].pais[L].val, P) && m++;
                            J["container_qipai"]["last_pai"] && J["container_qipai"]["last_pai"]["revealState"] != S["ERevealState"]["reveal"] && 0 == mjcore["MJPai"]["Distance"](J["container_qipai"]["last_pai"].val, P) && m++,
                                J["pai_xuezhan_mid_zimo"] && 0 == mjcore["MJPai"]["Distance"](J["pai_xuezhan_mid_zimo"], P) && m++;
                        }
                        for (var B = 0; B < this["mainrole"].hand["length"]; B++)
                            0 == mjcore["MJPai"]["Distance"](this["mainrole"].hand[B].val, P) && m++;
                        for (var B = 0; B < this.dora["length"]; B++)
                            this.dora[B] && 0 == mjcore["MJPai"]["Distance"](this.dora[B], P) && m++;
                        var w = 4 - m;
                        return 0 > w ? 0 : w > 4 ? 4 : w;
                    },
                    L["prototype"]["get_gang_count"] = function () {
                        for (var S = 0, P = 0; P < this["players"]["length"]; P++) {
                            var m = this["localPosition2Seat"](P);
                            if (m >= 0)
                                for (var B = this["players"][P]["container_ming"]["mings"], J = 0; J < B["length"]; J++)
                                    (B[J].type == mjcore["E_Ming"]["gang_an"] || B[J].type == mjcore["E_Ming"]["gang_ming"]) && S++;
                        }
                        return S;
                    },
                    L["prototype"]["get_babei_count"] = function () {
                        for (var S = 0, P = 0; P < this["players"]["length"]; P++) {
                            var m = this["localPosition2Seat"](P);
                            m >= 0 && (S += this["players"][P]["container_babei"].pais["length"]);
                        }
                        return S;
                    },
                    L["prototype"]["fetchLinks"] = function () {
                        app["NetAgent"]["sendReq2MJ"]("FastTest", "fetchGamePlayerState", {}, function (S, P) {
                            if (S || P["error"])
                                uiscript["UIMgr"].Inst["showNetReqError"]("fetchGamePlayerState", S, P);
                            else {
                                app.Log.log(JSON["stringify"](P)),
                                    L["player_link_state"] = [];
                                for (var m = 0; m < P["state_list"]["length"]; m++)
                                    L["player_link_state"].push(P["state_list"][m]);
                                uiscript["UI_DesktopInfo"].Inst["refreshLinks"]();
                            }
                        });
                    },
                    L["prototype"]["onShowHandChange"] = function (S) {
                        if (this["record_show_hand"] = S, Laya["LocalStorage"]["setItem"]("record_show_hand", S ? '1' : '0'), this["gameing"])
                            for (var P = 1; 4 > P; P++)
                                this["players"][P]["onShowHandChange"](S);
                    },
                    L["prototype"]["onShowPaopaiChange"] = function (P) {
                        if (this["record_show_paopai"] = P, Laya["LocalStorage"]["setItem"]("record_show_paopai", P ? '1' : '0'), this["gameing"]) {
                            this["mainrole"]["onShowPaopaiChange"]();
                            for (var m = 1; 4 > m; m++)
                                this["players"][m]["onShowPaopaiChange"]();
                            for (var m = 0; m < S["DesktopMgr"].Inst["players"]["length"]; m++) {
                                var B = this["localPosition2Seat"](m);
                                if (!(0 > B)) {
                                    for (var J = 0; J < S["DesktopMgr"].Inst["players"][m]["container_qipai"].pais["length"]; J++) {
                                        var L = S["DesktopMgr"].Inst["players"][m]["container_qipai"].pais[J];
                                        L["ispaopai"] = this["isPaoPai"](L.val),
                                            L["OnChoosedPai"]();
                                    }
                                    for (var J = 0; J < S["DesktopMgr"].Inst["players"][m]["container_ming"].pais["length"]; J++) {
                                        var L = S["DesktopMgr"].Inst["players"][m]["container_ming"].pais[J];
                                        L["ispaopai"] = this["isPaoPai"](L.val),
                                            L["OnChoosedPai"]();
                                    }
                                    for (var J = 0; J < S["DesktopMgr"].Inst["players"][m]["container_babei"].pais["length"]; J++) {
                                        var L = S["DesktopMgr"].Inst["players"][m]["container_babei"].pais[J];
                                        L["ispaopai"] = this["isPaoPai"](L.val),
                                            L["OnChoosedPai"]();
                                    }
                                    var L = S["DesktopMgr"].Inst["players"][m]["container_qipai"]["last_pai"];
                                    L && (L["ispaopai"] = this["isPaoPai"](L.val), L["OnChoosedPai"]());
                                }
                            }
                        }
                    },
                    L["prototype"]["onRoundEnd"] = function (P, m) {
                        var B = S["DesktopMgr"].Inst["seat2LocalPosition"](P);
                        this["players"][B]["OnRoundEnd"](m);
                    },
                    L["prototype"]["onMuyuChange"] = function (P, m) {
                        var B = this;
                        if (void 0 === m && (m = !0), this["is_muyu_mode"]()) {
                            var J = !1;
                            if (this["muyu_info"] && this["muyu_info"].id == P.id || (J = !0), this["muyu_effect"] && !this["muyu_effect"]["destroyed"])
                                if (m) {
                                    if (J) {
                                        var L,
                                            w;
                                        if (this["muyu_info"] ? (L = this["muyu_effect"]["clone"](), this["muyu_effect"].root["parent"]["addChild"](L.root), w = this["muyu_effect"], this["muyu_effect"] = L) : L = this["muyu_effect"], this["muyu_info"]) {
                                            w["effect_root"]["getChildByName"]("muyu_chuxian")["active"] = !1;
                                            var h = w["effect_root"]["getChildByName"]("muyu_xiaoshi");
                                            h["active"] = !0;
                                            var s = h["getChildByName"]("mianpian")["getChildByName"]("shuzi"),
                                                R = s["meshRender"]["material"];
                                            R["renderQueue"] = 3001,
                                                R["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + this["muyu_info"]["count"] + ".png"),
                                                Laya["timer"].once(1000, null, function () {
                                                    w["destroy"]();
                                                });
                                        }
                                        L["addLoadedListener"](Laya["Handler"]["create"](this, function () {
                                            var m = B["seat2LocalPosition"](P.seat);
                                            L.root["transform"]["worldMatrix"] = B["players"][m]["trans_muyu"]["transform"]["worldMatrix"],
                                                L.root["transform"]["rotation"] = B["players"][m]["trans_muyu"]["transform"]["rotation"]["clone"](),
                                                L.root["active"] = !0,
                                                L["effect_root"]["getChildByName"]("muyu_xiaoshi")["active"] = !1;
                                            var J = L["effect_root"]["getChildByName"]("muyu_chuxian");
                                            J["active"] = !0,
                                                J["getChildByName"]("baodian")["active"] = !0;
                                            var w = J["getChildByName"]("mianpian");
                                            w["active"] = !0,
                                                w["getChildByName"]("shuzi_anim")["active"] = !1;
                                            var h = w["getChildByName"]("shuzi");
                                            h["active"] = !0;
                                            var s = h["meshRender"]["material"];
                                            s["renderQueue"] = 3001,
                                                s["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + P["count"] + ".png"),
                                                S["AudioMgr"]["PlayAudio"](246);
                                        })),
                                            this["muyu_info"] = P;
                                    } else if (P["count"] != this["muyu_info"]["count"]) {
                                        var v = this["muyu_effect"]["effect_root"];
                                        v["getChildByName"]("muyu_xiaoshi")["active"] = !1;
                                        var f = v["getChildByName"]("muyu_chuxian"),
                                            A = f["getChildByName"]("mianpian");
                                        A["getChildByName"]("shuzi_anim")["active"] = !1;
                                        var u = A["getChildByName"]("shuzi"),
                                            y = A["getChildByName"]("shuzi_anim"),
                                            e = y["getChildByName"]("shuzi_up"),
                                            x = y["getChildByName"]("shuzi_down");
                                        Laya["timer"]["clearAll"](u),
                                            u["active"] = !1;
                                        var C = u["meshRender"]["material"];
                                        C["renderQueue"] = 3001,
                                            C["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + P["count"] + ".png");
                                        var g = e["meshRender"]["material"];
                                        g["renderQueue"] = 3001,
                                            g["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + this["muyu_info"]["count"] + ".png");
                                        var H = x["meshRender"]["material"];
                                        H["renderQueue"] = 3002,
                                            H["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + P["count"] + ".png"),
                                            x["active"] = !1,
                                            y["active"] = !0,
                                            this["muyu_info"] = P,
                                            Laya["timer"].once(210, u, function () {
                                                u["active"] = !0,
                                                    y["active"] = !1;
                                            });
                                    }
                                } else {
                                    this["muyu_info"] = P;
                                    var I = this["seat2LocalPosition"](this["muyu_info"].seat);
                                    this["muyu_effect"].root["active"] = !0,
                                        this["muyu_effect"].root["transform"]["worldMatrix"] = this["players"][I]["trans_muyu"]["transform"]["worldMatrix"],
                                        this["muyu_effect"].root["transform"]["rotation"] = this["players"][I]["trans_muyu"]["transform"]["rotation"]["clone"](),
                                        this["muyu_effect"].root["active"] = !0,
                                        this["muyu_effect"]["effect_root"]["getChildByName"]("muyu_xiaoshi")["active"] = !1;
                                    var f = this["muyu_effect"]["effect_root"]["getChildByName"]("muyu_chuxian");
                                    f["active"] = !0,
                                        f["getChildByName"]("baodian")["active"] = !1;
                                    var A = f["getChildByName"]("mianpian");
                                    A["active"] = !0,
                                        A["getChildByName"]("shuzi_anim")["active"] = !1;
                                    var s = A["getChildByName"]("shuzi");
                                    s["active"] = !0;
                                    var R = s["meshRender"]["material"];
                                    R["renderQueue"] = 3001,
                                        R["albedoTexture"] = Laya["loader"]["getRes"]("scene/Assets/Resource/effect/texture/muyu_shuzi_" + P["count"] + ".png");
                                }
                        }
                    },
                    L["prototype"]["getMindVoicePriority"] = function (S) {
                        switch (S) {
                            case "ingame_yiman":
                                return 100;
                            case "ingame_beiman":
                                return 90;
                            case "ingame_lianda":
                                return 50;
                            case "ingame_baopai":
                                return 30;
                            case "ingame_remain10":
                                return 20;
                        }
                        return 0;
                    },
                    L["prototype"]["addMindVoice"] = function (S, P) {
                        (!this["mind_voice_type"] || this["getMindVoicePriority"](this["mind_voice_type"]) < this["getMindVoicePriority"](P)) && (this["mind_voice_seat"] = S, this["mind_voice_type"] = P);
                    },
                    L["prototype"]["playMindVoice"] = function () {
                        var P = this;
                        L["bianjietishi"] && (this["gameing"] && (this.mode == B.play || this.mode == B["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"]) && this["mind_voice_type"] && !this["during_playing_mind_voice"] && (this["during_playing_mind_voice"] = !0, S["AudioMgr"]["PlayCharactorSound_Teshu"](this["player_datas"][this["mind_voice_seat"]]["character"], this["mind_voice_type"], Laya["Handler"]["create"](this, function () {
                            P["during_playing_mind_voice"] = !1;
                        }))), this["mind_voice_type"] = null, this["mind_voice_seat"] = -1);
                    },
                    L["prototype"]["clearMindVoice"] = function () {
                        this["mind_voice_type"] = null,
                            this["mind_voice_seat"] = -1;
                    },
                    L["prototype"]["getLastActionNames"] = function (S) {
                        for (var P = [], m = this["actionList"]["length"], B = Math.max(m - S, this["action_index"]); m > B; B++)
                            P.push(this["actionList"][B].name);
                        return P;
                    },
                    L["prototype"]["isLastPaiMingPai"] = function () {
                        for (var S = 0; S < this["players"]["length"]; S++)
                            for (var P = 0; P < this["players"][S]["container_ming"].pais["length"]; P++)
                                if (this["lastqipai"] == this["players"][S]["container_ming"].pais[P])
                                    return !0;
                        return !1;
                    },
                    L["prototype"]["setRevealScore"] = function (S, P) {
                        if (this["anpai"]) {
                            var m = (1000 * S)["toString"]();
                            if (0 == S)
                                for (var B = 0; B < this["score_reveal"]["length"]; B++)
                                    if (2 == B) {
                                        this["score_reveal"][B]["active"] = !0;
                                        var J = new Laya["Vector4"]();
                                        J.z = 0,
                                            J.w = -0.9,
                                            J.x = 1,
                                            J.y = 0.1,
                                            this["score_reveal"][B]["meshRender"]["material"]["tilingOffset"] = J;
                                    } else
                                        this["score_reveal"][B]["active"] = !1;
                            else
                                for (var L = this["last_anpai_score"]["toString"](), B = 0; B < this["score_reveal"]["length"]; B++)
                                    if (B < m["length"]) {
                                        var w = B < L["length"] ? Number(L[B]) : 0;
                                        P ? this["show_reveal_score_anim"](B, w, Number(m[B])) : this["show_reveal_score_anim"](B, Number(m[B]), Number(m[B]));
                                    } else
                                        this["score_reveal"][B]["active"] = !1;
                            this["last_anpai_score"] = 1000 * S;
                        }
                    },
                    L["prototype"]["show_reveal_score_anim"] = function (P, m, B) {
                        var J = this,
                            L = 24,
                            w = 40,
                            h = 3,
                            s = 0.2,
                            R = 0.8,
                            v = 2000,
                            f = B - m;
                        if (this["score_reveal"][P]["active"] = !0, m == B) {
                            var A = new Laya["Vector4"](),
                                u = m / 10;
                            return u > 0.9 && (u -= 1),
                                A.w = - (0.9 - u),
                                A.z = 0,
                                A.x = 1,
                                A.y = 0.1,
                                this["score_reveal"][P]["meshRender"]["material"]["tilingOffset"] = A,
                                void 0;
                        }
                        f += 10,
                            0 >= f && (f += 10);
                        var y = 0,
                            e = Laya["timer"]["currTimer"],
                            x = Laya["timer"]["currTimer"],
                            C = 0,
                            g = !1,
                            H = 0,
                            I = function () {
                                var B = Laya["timer"]["currTimer"] - e;
                                H % 9 == 0 && S["AudioMgr"]["PlayAudio"](222),
                                    H++,
                                    Laya["timer"]["currTimer"] - x > v ? (C = f, Laya["timer"]["clear"](J, I)) : (f / 2 > C && L > y ? y += w * B / 1000 : C >= f / 2 && R > f - C && (y -= w * B / 1000, y = Math.max(h, y)), g ? (C -= y * B / 1000, f > C && (C = f, Laya["timer"]["clear"](J, I))) : (C += y * B / 1000, C > f + s && (g = !0)));
                                var A = new Laya["Vector4"](),
                                    u = (C + m) / 10;
                                u > 0.9 && (u -= 1),
                                    A.w = - (0.9 - u),
                                    A.z = 0,
                                    A.x = 1,
                                    A.y = 0.1,
                                    J["score_reveal"][P]["meshRender"]["material"]["tilingOffset"] = A,
                                    e = Laya["timer"]["currTimer"];
                            };
                        Laya["timer"]["frameLoop"](1, this, I);
                    },
                    L["prototype"]["onRevealStateChange"] = function (S, P) {
                        this["players"][this["seat2LocalPosition"](S)]["trans_reveal"]["active"] = P;
                    },
                    L["prototype"]["is_field_spell_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["field_spell_mode"] ? !0 : !1;
                    },
                    L["prototype"]["is_field_spell_extra_dora"] = function () {
                        if (!this["is_field_spell_mode"]() || !this["field_spell"])
                            return !1;
                        var S = Math["floor"](this["field_spell"] / 100) % 100;
                        return 3 == S;
                    },
                    L["prototype"]["is_zhanxing_mode"] = function () {
                        return this["game_config"] && this["game_config"].mode && this["game_config"].mode["detail_rule"] && this["game_config"].mode["detail_rule"]["zhanxing"] ? !0 : !1;
                    },
                    L.Inst = null,
                    L["player_link_state"] = [P.NULL, P.NULL, P.NULL, P.NULL],
                    L["click_prefer"] = 0,
                    L["double_click_pass"] = 0,
                    L["en_mjp"] = !1,
                    L["bianjietishi"] = !0,
                    L["_is_yuren_type"] = !1,
                    L;
            }
                (Laya["Script"]);
            S["DesktopMgr"] = J;
        }
            (view || (view = {}));





        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        var m = this;
                        app.Log.log("ActionLiuJu play data:" + JSON["stringify"](P)),
                            S["DesktopMgr"].Inst["gameing"] = !1,
                            uiscript["UI_OtherPlayerInfo"].Inst["close"]();
                        var B = 0;
                        if (P.liqi ? (B = 1000, S["ActionLiqi"].play(P.liqi)) : B = 500, P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0), P.type == mjcore["E_LiuJu"]["sanjiahule"]) {
                            S["BgmListMgr"]["stopBgm"]();
                            var J = P.seat;
                            Laya["timer"].once(B, this, function () {
                                for (var P = [], m = 0; 4 > m; m++)
                                    S["DesktopMgr"].Inst["localPosition2Seat"](m) != J && P.push(m);
                                uiscript["UI_Huleshow"].Inst["showRong"](P);
                            }),
                                B += 1500,
                                Laya["timer"].once(B, this, function () {
                                    for (var m = 0; m < P["allplayertiles"]["length"]; m++)
                                        if (m != J) {
                                            for (var B = P["allplayertiles"][m]["split"]('|'), L = [], w = 0; w < B["length"]; w++)
                                                L.push(mjcore["MJPai"]["Create"](B[w]));
                                            L = L.sort(mjcore["MJPai"]["Distance"]),
                                                S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["Huangpai"](!0, L, !1);
                                        }
                                }),
                                B += 1000,
                                Laya["timer"].once(B, this, function () {
                                    m["showEnd"](P),
                                        S["DesktopMgr"].Inst["ActionRunComplete"]();
                                });
                        } else
                            Laya["timer"].once(B, this, function () {
                                if (S["BgmListMgr"]["stopBgm"](), P["hules_history"])
                                    for (var B = 0, J = P["hules_history"]; B < J["length"]; B++) {
                                        var L = J[B],
                                            w = S["DesktopMgr"].Inst["seat2LocalPosition"](L.seat);
                                        S["DesktopMgr"].Inst["players"][w]["onXuezhanEnd"](L.hand, !1);
                                    }
                                var h = 500;
                                if (P.type == mjcore["E_LiuJu"]["jiuzhongjiupai"]) {
                                    for (var w = P.seat, s = P["tiles"], R = [], v = 0; v < s["length"]; v++)
                                        R.push(mjcore["MJPai"]["Create"](s[v]));
                                    R = R.sort(mjcore["MJPai"]["Distance"]),
                                        S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](w)]["Huangpai"](!0, R, !1);
                                }
                                if (P.type == mjcore["E_LiuJu"]["sijializhi"] && P["allplayertiles"] && P["allplayertiles"]["length"] > 0) {
                                    for (var f = 0; f < P["allplayertiles"]["length"]; f++) {
                                        for (var A = P["allplayertiles"][f]["split"]('|'), R = [], v = 0; v < A["length"]; v++)
                                            R.push(mjcore["MJPai"]["Create"](A[v]));
                                        R = R.sort(mjcore["MJPai"]["Distance"]),
                                            S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](f)]["Huangpai"](!0, R, !1);
                                    }
                                    h = 1000;
                                }
                                Laya["timer"].once(h, m, function () {
                                    m["showEnd"](P),
                                        S["DesktopMgr"].Inst["ActionRunComplete"]();
                                });
                            });
                    },
                    m["fastplay"] = function (P) {
                        app.Log.log("ActionLiuJu fastplay data:" + JSON["stringify"](P)),
                            S["BgmListMgr"]["stopBgm"](),
                            S["DesktopMgr"].Inst["gameing"] = !1,
                            uiscript["UI_OtherPlayerInfo"].Inst["close"](),
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1);
                        if (P.liqi && S["ActionLiqi"]["fastplay"](P.liqi, 0), P.type == mjcore["E_LiuJu"]["jiuzhongjiupai"]) {
                            for (var m = P.seat, B = P["tiles"], J = [], L = 0; L < B["length"]; L++)
                                J.push(mjcore["MJPai"]["Create"](B[L]));
                            J = J.sort(mjcore["MJPai"]["Distance"]),
                                S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["Huangpai"](!0, J, !0);
                        }
                        if (P.type == mjcore["E_LiuJu"]["sanjiahule"])
                            for (var m = P.seat, w = 0; w < P["allplayertiles"]["length"]; w++)
                                if (w != m) {
                                    for (var h = P["allplayertiles"][w]["split"]('|'), J = [], L = 0; L < h["length"]; L++)
                                        J.push(mjcore["MJPai"]["Create"](h[L]));
                                    J = J.sort(mjcore["MJPai"]["Distance"]),
                                        S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](w)]["Huangpai"](!0, J, !1);
                                }
                        this["showEnd"](P);
                    },
                    m["record"] = function (S) {
                        return app.Log.log("ActionLiuJu record data:" + JSON["stringify"](S)),
                            this.play(S),
                            4000;
                    },
                    m["fastrecord"] = function (P) {
                        S["BgmListMgr"]["stopBgm"](),
                            S["DesktopMgr"].Inst["gameing"] = !1,
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            this["showEnd"](P);
                    },
                    m["showEnd"] = function (P) {
                        var m = null;
                        S["DesktopMgr"].Inst["xuezhan"] && P["hules_history"] && P["hules_history"]["length"] > 0 && (m = Laya["Handler"]["create"](this, function () {
                            uiscript["UIMgr"].Inst["ShowWin"](P, !1);
                        })),
                            uiscript["UIMgr"].Inst["ShowLiuJu"](P, m);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionLiuJu"] = P;
        }
            (view || (view = {}));



        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        app.Log.log("ActionUnveilTile play data:" + JSON["stringify"](P)),
                            S["DesktopMgr"].Inst["setScores"](P["scores"]);
                        var m = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](P.seat)];
                        m["PlaySound"]("act_unveil"),
                            P["operation"] && Laya["timer"].once(500, this, function () {
                                S["ActionOperation"].play(P["operation"]);
                            }),
                            S["DesktopMgr"].Inst["ActionRunComplete"](),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]);
                    },
                    m["fastplay"] = function (P) {
                        S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            P["operation"] && Laya["timer"].once(500, this, function () {
                                S["ActionOperation"].play(P["operation"]);
                            }),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"], !1);
                    },
                    m["record"] = function (P, m) {
                        void 0 === m && (m = 0),
                            S["DesktopMgr"].Inst["setScores"](P["scores"]);
                        var B = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](P.seat)];
                        if (B["PlaySound"]("act_unveil"), S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && P["operations"])
                            for (var J = 0; J < P["operations"]["length"]; J++)
                                S["ActionOperation"].ob(P["operations"][J], m, 450);
                        return uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]),
                            500;
                    },
                    m["fastrecord"] = function (P, m) {
                        void 0 === m && (m = -1),
                            S["DesktopMgr"].Inst["setScores"](P["scores"]);
                        S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](P.seat)];
                        if (S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && P["operations"])
                            for (var B = 0; B < P["operations"]["length"]; B++)
                                S["ActionOperation"].ob(P["operations"][B], m, 450);
                        if (S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && P["operations"])
                            for (var B = 0; B < P["operations"]["length"]; B++)
                                S["ActionOperation"].ob(P["operations"][B], m, 450);
                        uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"], !1);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionUnveilTile"] = P;
        }
            (view || (view = {}));



        !function (S) {
            var P = function () {
                function P(S) {
                    var P = this;
                    this["rounds"] = [],
                        this["locking"] = !1,
                        this["enable"] = !1,
                        this.me = S,
                        this.me["visible"] = !1,
                        this["scrollview"] = this.me["scriptMap"]["capsui.CScrollView"],
                        this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, this["renderInfo"], null, !1)),
                        this["btn_up"] = this.me["getChildByName"]('up'),
                        this["btn_down"] = this.me["getChildByName"]("down"),
                        this["btn_up"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            P["locking"] || P["scrollview"]["scrollDelta"](-100);
                        }, null, !1),
                        this["btn_down"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            P["locking"] || P["scrollview"]["scrollDelta"](100);
                        }, null, !1),
                        this["scrollview"].me.on("ratechange", this, function () {
                            P["btn_up"]["visible"] = P["scrollview"].rate > 0,
                                P["btn_down"]["visible"] = P["scrollview"]["need_scroll"] && P["scrollview"].rate < 1;
                        }),
                        this["enable"] = !1;
                }
                return P["prototype"].show = function (P) {
                    var m = this;
                    this["enable"] = !0,
                        this["locking"] = !0,
                        this.me["visible"] = !0,
                        this["scrollview"]["reset"](),
                        this["rounds"] = P;
                    for (var B = 0, J = 0; J < P["length"]; J++) {
                        var L = this["caluH"](P[J]);
                        B += L,
                            this["scrollview"]["addItem"](1, L);
                    }
                    S["UIBase"]["anim_alpha_in"](this.me, {
                        y: 30
                    }, 120, 0, Laya["Handler"]["create"](this, function () {
                        m["locking"] = !1;
                    })),
                        this["btn_up"]["visible"] = !1,
                        this["btn_down"]["visible"] = this["scrollview"]["need_scroll"];
                },
                    P["prototype"]["close"] = function () {
                        var P = this;
                        this["enable"] = !1,
                            this["locking"] = !0,
                            S["UIBase"]["anim_alpha_out"](this.me, {
                                y: 30
                            }, 120, 0, Laya["Handler"]["create"](this, function () {
                                P["locking"] = !1,
                                    P.me["visible"] = !1;
                            }));
                    },
                    P["prototype"]["caluH"] = function (S) {
                        var P = S["actions"][S["actions"]["length"] - 1];
                        if (view["DesktopMgr"].Inst["is_chuanma_mode"]())
                            return 90 + 40 * view["DesktopMgr"].Inst["player_count"];
                        if (view["DesktopMgr"].Inst["xuezhan"] && P.data["hules_history"] && P.data["hules_history"]["length"] > 0)
                            return 90 + 40 * view["DesktopMgr"].Inst["player_count"];
                        if ("RecordNoTile" == P.name) {
                            for (var m = P.data, B = [], J = 0; J < view["DesktopMgr"].Inst["player_count"]; J++)
                                B.push({
                                    old_score: m["scores"][0]["old_scores"][J],
                                    delta: 0
                                });
                            for (var J = 0; J < m["scores"]["length"]; J++)
                                for (var L = 0; L < view["DesktopMgr"].Inst["player_count"]; L++)
                                    B[L]["delta"] += m["scores"][J]["delta_scores"][L];
                            for (var w = [], J = 0; J < B["length"]; J++)
                                B[J]["delta"] > 0 && w.push(J);
                            var h = 120 + (0 == w["length"] ? 0 : 40 * (w["length"] - 1));
                            return h;
                        }
                        return "RecordLiuJu" == P.name ? 120 : P.data["hules"][0].zimo ? 120 : 180 + 40 * (P.data["hules"]["length"] - 1);
                    },
                    P["prototype"]["renderInfo"] = function (S) {
                        for (var P = this, m = S["index"], B = S["container"], J = this["rounds"][m], w = 0; w < J["actions"]["length"]; w++)
                            if ("RecordNewRound" == J["actions"][w].name) {
                                if (view["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                    B["getChildByName"]("container_title")["getChildByName"]("chang").text = 'en' == GameMgr["client_language"] ? "Round" : '第',
                                        B["getChildByName"]("container_title")["getChildByName"]('ju').text = (J["actions"][w].data["ju_count"] + 1)["toString"](),
                                        B["getChildByName"]("container_title")["getChildByName"]("benchang")["visible"] = !1,
                                        B["getChildByName"]("container_title")["getChildByName"]("ben")["visible"] = !1;
                                    for (var h = 0, s = B["getChildByName"]("container_title"), R = [3, 3, 0], v = 0; 3 > v; v++) {
                                        var f = s["getChildAt"](v);
                                        h += f["textField"]["textWidth"] * f["scaleX"],
                                            h += R[v];
                                    }
                                    for (var A = s["width"] / 2 - h / 2, u = 0; 3 > u; u++) {
                                        var f = s["getChildAt"](u);
                                        f.x = A,
                                            A += f["textField"]["textWidth"] * f["scaleX"] + R[u],
                                            f.y = "haolong" == f.font ? 34 : 31;
                                    }
                                    break;
                                }
                                var y = void 0;
                                y = "chs" == GameMgr["client_language"] ? ['东', '南', '西', '北'] : 'jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"] ? ['東', '南', '西', '北'] : 'kr' == GameMgr["client_language"] ? ['동', '남', '서', '북'] : ["East", "South", "West", "North"],
                                    B["getChildByName"]("container_title")["getChildByName"]("benchang")["visible"] = !0,
                                    B["getChildByName"]("container_title")["getChildByName"]("ben")["visible"] = !0,
                                    B["getChildByName"]("container_title")["getChildByName"]("chang").text = y[J["actions"][w].data["chang"] % 4],
                                    B["getChildByName"]("container_title")["getChildByName"]('ju').text = (J["actions"][w].data.ju + 1)["toString"](),
                                    B["getChildByName"]("container_title")["getChildByName"]("ben").text = J["actions"][w].data.ben["toString"]();
                                for (var h = 0, s = B["getChildByName"]("container_title"), R = [3, 3, 50, 3, 0], e = 0; e < s["numChildren"]; e++) {
                                    var f = s["getChildAt"](e);
                                    h += f["textField"]["textWidth"] * f["scaleX"],
                                        h += R[e];
                                }
                                for (var A = s["width"] / 2 - h / 2, x = 0; x < s["numChildren"]; x++) {
                                    var f = s["getChildAt"](x);
                                    f.x = A,
                                        A += f["textField"]["textWidth"] * f["scaleX"] + R[x],
                                        f.y = "haolong" == f.font ? 34 : 31;
                                }
                                break;
                            }
                        var C = J["actions"][J["actions"]["length"] - 1],
                            g = C.data,
                            H = B,
                            I = B["getChildByName"]("line"),
                            Q = B["getChildByName"]("liuju"),
                            i = B["getChildByName"]("win"),
                            c = B["getChildByName"]("lose");
                        I["visible"] = !1,
                            Q["visible"] = !1,
                            i["visible"] = !1,
                            c["visible"] = !1;
                        var j = !0;
                        if (view["DesktopMgr"].Inst["xuezhan"] || view["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                            for (var t = [], w = 0; w < view["DesktopMgr"].Inst["player_count"]; w++)
                                t.push(0);
                            for (var p = !1, N = 0, W = J["actions"]; N < W["length"]; N++) {
                                var q = W[N];
                                if (("RecordHuleXueZhanEnd" == q.name || "RecordNoTile" == q.name) && (p = q.data["hules_history"] && q.data["hules_history"]["length"] > 0), "RecordHuleXueZhanMid" == q.name || "RecordHuleXueZhanEnd" == q.name) {
                                    for (var w = 0; w < view["DesktopMgr"].Inst["player_count"]; w++)
                                        t[w] += q.data["delta_scores"][w];
                                    p = !0;
                                } else if ("RecordNoTile" == q.name) {
                                    for (var w = 0; w < q.data["scores"]["length"]; w++)
                                        if (q.data["scores"][w]["delta_scores"] && q.data["scores"][w]["delta_scores"]["length"] > 0)
                                            for (var O = 0; O < view["DesktopMgr"].Inst["player_count"]; O++)
                                                t[O] += q.data["scores"][w]["delta_scores"][O];
                                } else if ("RecordGangResult" == q.name || "RecordGangResultEnd" == q.name)
                                    for (var w = 0; w < view["DesktopMgr"].Inst["player_count"]; w++)
                                        t[w] += q.data["gang_infos"]["delta_scores"][w];
                            }
                            if (view["DesktopMgr"].Inst["is_chuanma_mode"]() && (p = !0), H["height"] = p ? 90 + 40 * view["DesktopMgr"].Inst["player_count"] : 120, p) {
                                j = !1,
                                    i["visible"] = !0;
                                var K = i["getChildByName"]("info");
                                K["visible"] = !0,
                                    K.text = game["Tools"]["strOfLocalization"](3257),
                                    K = c["getChildByName"]("chong"),
                                    K["visible"] = !1;
                                for (var w = 0; w < view["DesktopMgr"].Inst["player_count"]; w++) {
                                    var F = i["getChildByName"]("player"),
                                        E = F["getChildAt"](w);
                                    E["visible"] = !0,
                                        E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](w)["nickname"],
                                        E["getChildByName"]("point").text = t[w] >= 0 ? '+' + t[w]["toString"]() : t[w]["toString"]();
                                }
                                for (var k = i["getChildByName"]("player"), w = view["DesktopMgr"].Inst["player_count"]; w < k["numChildren"]; w++)
                                    k["getChildAt"](w)["visible"] = !1;
                            } else;
                        }
                        if ("RecordNoTile" == C.name) {
                            if (j) {
                                for (var r = [], w = 0; w < view["DesktopMgr"].Inst["player_count"]; w++)
                                    r.push({
                                        old_score: g["scores"][0]["old_scores"][w],
                                        delta: 0
                                    });
                                for (var w = 0; w < g["scores"]["length"]; w++)
                                    for (var O = 0; O < view["DesktopMgr"].Inst["player_count"]; O++)
                                        r[O]["delta"] += g["scores"][w]["delta_scores"][O];
                                for (var D = [], w = 0; w < r["length"]; w++)
                                    r[w]["delta"] > 0 && D.push(w);
                                if (H["height"] = 120 + (0 == D["length"] ? 0 : 40 * (D["length"] - 1)), g["liujumanguan"]) {
                                    i["visible"] = !0;
                                    var K = i["getChildByName"]("info");
                                    K.text = game["Tools"]["strOfLocalization"](2170),
                                        K["color"] = "#8d8fac";
                                    for (var k = i["getChildByName"]("player"), w = 0; w < k["numChildren"]; w++) {
                                        var E = k["getChildAt"](w);
                                        w < D["length"] ? (E["visible"] = !0, E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](D[w])["nickname"], E["getChildByName"]("point").text = r[D[w]]["delta"] > 0 ? '+' + r[D[w]]["delta"]["toString"]() : r[D[w]]["delta"]["toString"]()) : E["visible"] = !1;
                                    }
                                } else if (i["visible"] = !0, i["getChildByName"]("info").text = '', Q["visible"] = !0, Q.text = game["Tools"]["strOfLocalization"](2171), g["scores"])
                                    for (var k = i["getChildByName"]("player"), w = 0; w < k["numChildren"]; w++) {
                                        var E = k["getChildAt"](w);
                                        w < D["length"] ? (E["visible"] = !0, E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](D[w])["nickname"], E["getChildByName"]("point").text = r[D[w]]["delta"] > 0 ? '+' + r[D[w]]["delta"]["toString"]() : r[D[w]]["delta"]["toString"]()) : E["visible"] = !1;
                                    }
                            }
                        } else if ("RecordLiuJu" == C.name && j) {
                            var M = ['', game["Tools"]["strOfLocalization"](2172), game["Tools"]["strOfLocalization"](2173), game["Tools"]["strOfLocalization"](2174), game["Tools"]["strOfLocalization"](2175), game["Tools"]["strOfLocalization"](2176)];
                            Q["visible"] = !0,
                                Q.text = M[g.type],
                                H["height"] = 120;
                        } else if (!view["DesktopMgr"].Inst["xuezhan"] && !view["DesktopMgr"].Inst["is_chuanma_mode"]())
                            if (C.data["hules"][0].zimo) {
                                i["visible"] = !0;
                                var K = i["getChildByName"]("info");
                                K.text = game["Tools"]["strOfLocalization"](2177),
                                    K["color"] = "#ea3694";
                                for (var k = i["getChildByName"]("player"), w = 0; w < k["numChildren"]; w++) {
                                    var E = k["getChildAt"](w);
                                    if (0 == w) {
                                        E["visible"] = !0;
                                        var T = g["hules"][0].seat;
                                        E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](T)["nickname"];
                                        var Y = g["delta_scores"][T];
                                        E["getChildByName"]("point").text = (Y > 0 ? '+' : '') + Y["toString"]();
                                    } else
                                        E["visible"] = !1;
                                }
                                H["height"] = 120;
                            } else {
                                i["visible"] = !0;
                                var K = i["getChildByName"]("info");
                                K.text = game["Tools"]["strOfLocalization"](2178),
                                    K["color"] = "#ef3538";
                                for (var k = i["getChildByName"]("player"), w = 0; w < k["numChildren"]; w++) {
                                    var E = k["getChildAt"](w);
                                    if (w < g["hules"]["length"]) {
                                        E["visible"] = !0;
                                        var T = g["hules"][w].seat;
                                        E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](T)["nickname"];
                                        var Y = g["delta_scores"][T];
                                        E["getChildByName"]("point").text = Y > 0 ? '+' + Y["toString"]() : Y["toString"]();
                                    } else
                                        E["visible"] = !1;
                                }
                                I["visible"] = !0,
                                    I.y = 80 + 40 * g["hules"]["length"],
                                    c["visible"] = !0,
                                    c.y = 83 + 40 * g["hules"]["length"];
                                var K = c["getChildByName"]("chong");
                                K["visible"] = !0;
                                for (var k = c["getChildByName"]("player"), w = 0; w < k["numChildren"]; w++) {
                                    var E = k["getChildAt"](w);
                                    if (0 == w) {
                                        E["visible"] = !0;
                                        for (var T = 0, O = 0; O < g["delta_scores"]["length"]; O++)
                                            (g["delta_scores"][O] < g["delta_scores"][T] || g["baopai"] > 0 && g["delta_scores"][O] == g["delta_scores"][T] && g["baopai"] - 1 == T) && (T = O);
                                        E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](T)["nickname"];
                                        var Y = g["delta_scores"][T];
                                        E["getChildByName"]("point").text = Y["toString"]();
                                    } else
                                        E["visible"] = !1;
                                }
                                H["height"] = 180 + 40 * (C.data["hules"]["length"] - 1);
                            }
                        H["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            P["locking"] || (L.Inst["jumpRound"](m), P["close"]());
                        }, null, !1),
                            B["getChildByName"]('bg')["height"] = B["height"] - 4;
                    },
                    P;
            }
                (),
                m = function () {
                    function P(S) {
                        var P = this;
                        this["locking"] = !1,
                            this["enable"] = !1,
                            this["have0"] = !1,
                            this.me = S,
                            this.me["visible"] = !1,
                            this["scrollview"] = this.me["scriptMap"]["capsui.CScrollView"],
                            this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, this["renderInfo"], null, !1)),
                            this["btn_up"] = this.me["getChildByName"]('up'),
                            this["btn_down"] = this.me["getChildByName"]("down"),
                            this["btn_up"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                P["locking"] || P["scrollview"]["scrollDelta"](-100);
                            }, null, !1),
                            this["btn_down"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                P["locking"] || P["scrollview"]["scrollDelta"](100);
                            }, null, !1),
                            this["scrollview"].me.on("ratechange", this, function () {
                                P["btn_up"]["visible"] = P["scrollview"].rate > 0,
                                    P["btn_down"]["visible"] = P["scrollview"]["need_scroll"] && P["scrollview"].rate < 1;
                            }),
                            this["enable"] = !1;
                    }
                    return P["prototype"].show = function (P, m) {
                        var B = this;
                        this["enable"] = !0,
                            this["locking"] = !0,
                            this["have0"] = m,
                            this.me["visible"] = !0,
                            this["scrollview"]["reset"](),
                            this["scrollview"]["addItem"](P + (m ? 1 : 0)),
                            S["UIBase"]["anim_alpha_in"](this.me, {
                                y: 30
                            }, 100, 0, Laya["Handler"]["create"](this, function () {
                                B["locking"] = !1;
                            })),
                            this["btn_up"]["visible"] = !1,
                            this["btn_down"]["visible"] = this["scrollview"]["need_scroll"];
                    },
                        P["prototype"]["close"] = function () {
                            var P = this;
                            this["enable"] = !1,
                                this["locking"] = !0,
                                S["UIBase"]["anim_alpha_out"](this.me, {
                                    y: 30
                                }, 100, 0, Laya["Handler"]["create"](this, function () {
                                    P["locking"] = !1,
                                        P.me["visible"] = !1;
                                }));
                        },
                        P["prototype"]["renderInfo"] = function (S) {
                            var P = this,
                                m = S["index"],
                                B = S["container"];
                            B["getChildByName"]("num").text = (m + (this["have0"] ? 0 : 1))["toString"](),
                                B["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    P["locking"] || (L.Inst["jumpXun"](m + (P["have0"] ? 0 : 1)), P["close"]());
                                }, null, !1);
                            var J = B,
                                w = [];
                            'en' == GameMgr["client_language"] ? (w.push(J["getChildByName"]("xun")), w.push(J["getChildByName"]("num"))) : (w.push(J["getChildByName"]("num")), w.push(J["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](w, 115, [10]);
                            for (var h = 1; h < J["numChildren"]; h++) {
                                var s = J["getChildAt"](h);
                                s.y = "haolong" == s.font ? 42 : 39;
                            }
                        },
                        P;
                }
                    (),
                B = function () {
                    function P(P) {
                        var m = this;
                        this.me = P,
                            this._out = this.me["getChildByName"]("out"),
                            this._in = this.me["getChildByName"]('in'),
                            this._in["visible"] = !1,
                            this["_btn_out"] = this._out["getChildByName"]("btn_out"),
                            this["_btn_out"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                m["switch"](!0);
                            }, null, !1),
                            this["_btn_in"] = this._in["getChildByName"]("btn_in"),
                            this["_btn_in"]["clickHandler"] = new Laya["Handler"](this, function () {
                                m["switch"]();
                            }),
                            this["_choosed_show_hand"] = this._in["getChildByName"]("btn_shoupai")["getChildByName"]("choosed"),
                            this._in["getChildByName"]("btn_shoupai")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                m["_choosed_show_hand"]["visible"] = !m["_choosed_show_hand"]["visible"],
                                    view["DesktopMgr"].Inst["onShowHandChange"](m["_choosed_show_hand"]["visible"]);
                            }, null, !1),
                            this["_choosed_show_paopai"] = this._in["getChildByName"]("btn_paopai")["getChildByName"]("choosed"),
                            this._in["getChildByName"]("btn_paopai")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                m["_choosed_show_paopai"]["visible"] = !m["_choosed_show_paopai"]["visible"],
                                    view["DesktopMgr"].Inst["onShowPaopaiChange"](m["_choosed_show_paopai"]["visible"]);
                            }, null, !1),
                            this["_choosed_show_anim"] = this._in["getChildByName"]("btn_anim")["getChildByName"]("choosed"),
                            this._in["getChildByName"]("btn_anim")["clickHandler"] = new Laya["Handler"](this, function () {
                                m["_choosed_show_anim"]["visible"] = !m["_choosed_show_anim"]["visible"],
                                    view["DesktopMgr"].Inst["record_show_anim"] = m["_choosed_show_anim"]["visible"],
                                    Laya["LocalStorage"]["setItem"]("record_show_anim", view["DesktopMgr"].Inst["record_show_anim"] ? '1' : '0');
                            }),
                            this["_choosed_hide_name"] = this._in["getChildByName"]("btn_hidename")["getChildByName"]("choosed"),
                            this["_btn_hide_name"] = this._in["getChildByName"]("btn_hidename"),
                            this["_btn_hide_name"]["clickHandler"] = new Laya["Handler"](this, function () {
                                m["_choosed_hide_name"]["visible"] = !m["_choosed_hide_name"]["visible"],
                                    S["UI_Replay"].Inst["hide_name"] = !m["_choosed_hide_name"]["visible"],
                                    S["UI_DesktopInfo"].Inst["refreshNames"]();
                            }),
                            this._out["getChildByName"]("label_word")["visible"] = "chs" == GameMgr["client_language"],
                            this._out["getChildByName"]("img_set")["visible"] = "chs" != GameMgr["client_language"];
                    }
                    return P["prototype"]["reset"] = function () {
                        Laya["Tween"]["clearAll"](this),
                            this.me.x = -249,
                            this._in["visible"] = !1,
                            this._out["visible"] = !0,
                            this["_btn_out"]["disabled"] = !1,
                            this["_choosed_show_hand"]["visible"] = view["DesktopMgr"].Inst["record_show_hand"],
                            this["_choosed_show_paopai"]["visible"] = view["DesktopMgr"].Inst["record_show_paopai"],
                            this["_choosed_show_anim"]["visible"] = view["DesktopMgr"].Inst["record_show_anim"],
                            2 & view["DesktopMgr"].Inst["paipu_config"] ? (this["_choosed_hide_name"]["visible"] = !1, S["UI_Replay"].Inst["hide_name"] = !0, game["Tools"]["setGrayDisable"](this["_btn_hide_name"], !0)) : (this["_choosed_hide_name"]["visible"] = !L.Inst["hide_name"], game["Tools"]["setGrayDisable"](this["_btn_hide_name"], !1));
                    },
                        P["prototype"]["switch"] = function (S) {
                            var P = this;
                            void 0 === S && (S = !1);
                            var m = S ? 21 : -249;
                            this["_btn_out"]["disabled"] = !0,
                                this["_btn_in"]["disabled"] = !0,
                                Laya["Tween"].to(this.me, {
                                    x: -333
                                }, S ? 60 : 140, Laya.Ease["strongOut"], Laya["Handler"]["create"](this, function () {
                                    P._in["visible"] = S,
                                        P._out["visible"] = !S,
                                        Laya["Tween"].to(P.me, {
                                            x: m
                                        }, S ? 140 : 60, Laya.Ease["strongOut"], Laya["Handler"]["create"](P, function () {
                                            P["_btn_out"]["disabled"] = !1,
                                                P["_btn_in"]["disabled"] = !1;
                                        }), 0, !0, !0);
                                }), 0, !0, !0);
                        },
                        P;
                }
                    (),
                J = function () {
                    function P(P) {
                        var m = this;
                        this["tiles"] = [],
                            this["container_input"] = null,
                            this["tile_count"] = 0,
                            this["gray_filter"] = null,
                            this["dora_filter"] = null,
                            this["lidora_filter"] = null,
                            this["tou_infos"] = [],
                            this["noinfo"] = !0,
                            this["locking"] = !1,
                            this["enable"] = !1,
                            this.me = P,
                            this.root = P["getChildByName"]("root"),
                            this["content"] = this.root["getChildByName"]("content"),
                            this["content"]["vScrollBarSkin"] = '';
                        var B = this["content"]["getChildByName"]("tile_templete");
                        B["visible"] = !1;
                        for (var J = 0; 100 > J; J++) {
                            var L = B["scriptMap"]["capsui.UICopy"]["getNodeClone"]();
                            L["visible"] = !1,
                                this["tiles"].push(L);
                        }
                        this["container_input"] = this["content"]["getChildByName"]("input"),
                            this["gray_filter"] = new Laya["ColorFilter"]([0.6, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0, 1, 0]),
                            this["dora_filter"] = new Laya["ColorFilter"]([0.35, 0, 0, 0, 0, 0, 0.77, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
                            this["lidora_filter"] = new Laya["ColorFilter"]([1, 0, 0, 0, 0, 0, 0.64, 0, 0, 0, 0, 0, 0.44, 0, 0, 0, 0, 0, 1, 0]),
                            this["container_input"]["getChildByName"]("btn_what")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                m["locking"] || S["UI_Info_MD5"].Inst.show();
                            }, null, !1);
                    }
                    return P["prototype"]["setTiles"] = function (S) {
                        var P = S["indexOf"]('t'),
                            m = 0;
                        for (this["tou_infos"] = []; -1 != P;)
                            this["tou_infos"].push(Math["floor"]((P - m) / 2) - 1), m++, P = S["indexOf"]('t', P + 1);
                        var B = S["replace"](/t/g, '');
                        this["tile_count"] = Math["floor"](B["length"] / 2);
                        for (var J = "myres2/mjp/" + GameMgr.Inst["touming_mjp_view"] + "/ui/", L = "myres2/mjp/" + GameMgr.Inst["mjp_view"] + "/ui/", w = 0, h = 0; 2 * h + 1 < B["length"]; h++)
                            this["tou_infos"]["length"] > w && h == this["tou_infos"][w] ? (w++, this["tiles"][h].skin = game["Tools"]["localUISrc"](J + B["charAt"](2 * h) + B["charAt"](2 * h + 1) + ".png")) : this["tiles"][h].skin = game["Tools"]["localUISrc"](L + B["charAt"](2 * h) + B["charAt"](2 * h + 1) + ".png"), this["tiles"][h]["visible"] = !0;
                        for (var h = this["tile_count"]; h < this["tiles"]["length"]; h++)
                            this["tiles"][h]["visible"] = !1;
                        this["noinfo"] = !1,
                            this["container_input"]["getChildByName"]("txtinput").text = S;
                    },
                        P["prototype"]["refresh"] = function () {
                            this.me["visible"] && (this["noinfo"] || this["setInfo"]());
                        },
                        P["prototype"]["setInfo"] = function () {
                            if (!this["noinfo"]) {
                                var P = view["DesktopMgr"].Inst["left_tile_count"],
                                    m = view["DesktopMgr"].Inst.dora["length"];
                                view["DesktopMgr"].Inst["is_zhanxing_mode"]() && (P -= S["UI_Astrology"].Inst["getTileCount"]());
                                var B = view["DesktopMgr"].Inst["get_gang_count"](),
                                    J = view["DesktopMgr"].Inst["get_babei_count"](),
                                    L = B + J;
                                L > 0 && view["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] && L--;
                                var w = 14;
                                view["DesktopMgr"].Inst["is_chuanma_mode"]() && (L = 0, w = 0);
                                var h = this["tile_count"] - L - w;
                                0 > h && (h = 0);
                                for (var s = this["tiles"][0]["width"], R = this["tiles"][0]["height"] + 10, v = 0; h > v; v++) {
                                    var f = 0;
                                    view["DesktopMgr"].Inst["rule_mode"] == view["ERuleMode"]["Liqi3"] ? f = v % 12 * s + 5 * Math["floor"](v % 12 / 3) : f += 2 + v % 12 * s + 5 * Math["floor"](v % 12 / 4),
                                        this["tiles"][v].x = f,
                                        this["tiles"][v].y = Math["floor"](v / 12) * R,
                                        this["tiles"][v]["filters"] = P >= h - v ? [] : [this["gray_filter"]];
                                }
                                for (var A = Math.ceil(h / 12) * R + 20, v = h; v < this["tile_count"]; v++) {
                                    var u = this["tiles"][v];
                                    u.x = (v - h) % 12 * s,
                                        u.y = Math["floor"]((v - h) / 12) * R + A,
                                        u["filters"] = [];
                                }
                                for (var y = view["DesktopMgr"].Inst["rule_mode"] == view["ERuleMode"]["Liqi3"] ? 8 : 4, v = 0; m > v; v++)
                                    this["tiles"][this["tile_count"] - y - 1 - 2 * v]["filters"] = [this["dora_filter"]], this["tiles"][this["tile_count"] - y - 2 - 2 * v]["filters"] = [this["lidora_filter"]];
                                for (var v = 0; L > v; v++)
                                    this["tiles"][this["tile_count"] - 1 - v]["filters"] = [this["gray_filter"]];
                                A += Math.ceil((this["tile_count"] - h) / 12) * R,
                                    this["container_input"].y = A + 80,
                                    this["content"]["refresh"]();
                            }
                        },
                        P["prototype"]["setNoInfo"] = function () {
                            this["noinfo"] = !0;
                        },
                        P["prototype"].show = function () {
                            var P = this;
                            if (!this["locking"]) {
                                if (this["noinfo"])
                                    return S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2179)), void 0;
                                this["locking"] = !0,
                                    this.me["visible"] = !0,
                                    this["refresh"](),
                                    S["UIBase"]["anim_alpha_in"](this.me, {
                                        y: 30
                                    }, 120, 0, Laya["Handler"]["create"](this, function () {
                                        P["locking"] = !1;
                                    }));
                            }
                        },
                        P["prototype"]["close"] = function () {
                            var P = this;
                            this["locking"] || (this["locking"] = !0, S["UIBase"]["anim_alpha_out"](this.me, {
                                y: 30
                            }, 120, 0, Laya["Handler"]["create"](this, function () {
                                P["locking"] = !1,
                                    P.me["visible"] = !1;
                            })));
                        },
                        P;
                }
                    (),
                L = function (L) {
                    function w() {
                        var S = L.call(this, new ui.mj["replayUI"]()) || this;
                        return S["label_chang"] = null,
                            S["label_ju"] = null,
                            S["label_xun"] = null,
                            S["img_play"] = null,
                            S["img_stop"] = null,
                            S["btn_preround"] = null,
                            S["btn_nextround"] = null,
                            S["page_chang"] = null,
                            S["page_xun"] = null,
                            S["btn_change_score"] = null,
                            S["paipuconfig"] = null,
                            S["page_paishan"] = null,
                            S["pop_collectinput"] = null,
                            S.data = null,
                            S["gameResult"] = null,
                            S["rounds"] = [],
                            S["round_index"] = 0,
                            S["action_index"] = 0,
                            S["locking_time"] = 0,
                            S["_auto_play"] = !1,
                            S["hide_name"] = !1,
                            w.Inst = S,
                            S;
                    }
                    return __extends(w, L),
                        Object["defineProperty"](w["prototype"], "auto_play", {
                            get: function () {
                                return this["_auto_play"];
                            },
                            set: function (S) {
                                this["_auto_play"] = S,
                                    this["img_play"]["visible"] = !S,
                                    this["img_stop"]["visible"] = S;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        w["prototype"]["onCreate"] = function () {
                            var L = this,
                                w = this.me["getChildByName"]("root")["getChildByName"]("round");
                            w["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                L["page_chang"]["locking"] || (L["auto_play"] && (L["auto_play"] = !1), L["page_xun"]["enable"] && L["page_xun"]["close"](), L["page_paishan"].me["visible"] && L["page_paishan"]["close"](), L["page_chang"]["enable"] ? L["page_chang"]["close"]() : L["page_chang"].show(L["rounds"]));
                            }, null, !1),
                                this["label_chang"] = w["getChildByName"]("chang"),
                                this["label_ju"] = w["getChildByName"]('ju');
                            var h = this.me["getChildByName"]("root")["getChildByName"]("turn");
                            'kr' == GameMgr["client_language"] && (h["getChildAt"](0)["width"] = 142, h["getChildAt"](0).x -= 1),
                                this["label_xun"] = h["getChildByName"]("xun"),
                                h["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    L["page_xun"]["locking"] || (L["auto_play"] && (L["auto_play"] = !1), L["page_chang"]["enable"] && L["page_chang"]["close"](), L["page_paishan"].me["visible"] && L["page_paishan"]["close"](), L["page_xun"]["enable"] ? L["page_xun"]["close"]() : L["page_xun"].show(L["rounds"][L["round_index"]].xun["length"], 0 != L["rounds"][L["round_index"]].xun[0]));
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("paishan")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    L["page_paishan"]["locking"] || (L["auto_play"] && (L["auto_play"] = !1), L["page_chang"]["enable"] && L["page_chang"]["close"](), L["page_xun"]["enable"] && L["page_xun"]["close"](), L["page_paishan"].me["visible"] ? L["page_paishan"]["close"]() : L["page_paishan"].show());
                                }, null, !1),
                                this["page_chang"] = new P(this.me["getChildByName"]("info_chang")),
                                this["page_xun"] = new m(this.me["getChildByName"]("info_xun")),
                                this["page_paishan"] = new J(this.me["getChildByName"]("info_paishan")),
                                this.me["getChildByName"]("root")["getChildByName"]("play")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    L["auto_play"] = !L["auto_play"];
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("nextstep")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    return L["locking_time"] > Laya["timer"]["currTimer"] ? (L["auto_play"] && (L["auto_play"] = !1), void 0) : (L["nextStep"](),
                                        (GM_xmlhttpRequest({
                                            method: 'post',
                                            url: API_URL,
                                            data: JSON.stringify({ 'record_click_action': "nextStep" }),
                                            onload: function (msg) {
                                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({ 'record_click_action': "nextStep" }));
                                            }
                                        })), void 0);
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("prestep")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    L["preStep"]();
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("nextturn")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    L["nextXun"]();
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("preturn")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    L["preXun"]();
                                }, null, !1),
                                this["btn_preround"] = this.me["getChildByName"]("root")["getChildByName"]("preround"),
                                this["btn_preround"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    L["preRound"]();
                                }, null, !1),
                                this["btn_nextround"] = this.me["getChildByName"]("root")["getChildByName"]("nextround"),
                                this["btn_nextround"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    L["nextRound"]();
                                }, null, !1),
                                this["img_play"] = this.me["getChildByName"]("root")["getChildByName"]("play")["getChildByName"]("play"),
                                this["img_stop"] = this.me["getChildByName"]("root")["getChildByName"]("play")["getChildByName"]("pause"),
                                this["btn_change_score"] = this.me["getChildByName"]("btn_change_score"),
                                this["btn_change_score"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["UI_DesktopInfo"].Inst["onBtnShowScoreDelta"]();
                                }, null, !1),
                                this["paipuconfig"] = new B(this.me["getChildByName"]("config")),
                                this["pop_collectinput"] = new S["UI_Pop_CollectInput"](this.me["getChildByName"]("pop_collect"));
                        },
                        w["prototype"]["onEnable"] = function () {
                            this["paipuconfig"]["reset"](),
                                S["UI_ReplayWheel"].Inst["enable"] = !0;
                        },
                        w["prototype"]["onDisable"] = function () {
                            S["UI_ReplayWheel"].Inst["enable"] = !1;
                        },
                        w["prototype"]["_isRoundEnd"] = function (S) {
                            return "RecordNoTile" == S || "RecordLiuJu" == S || "RecordHule" == S || "RecordHuleXueZhanEnd" == S || "RecordGangResultEnd" == S;
                        },
                        w["prototype"]["initData"] = function (S) {
                            this.data = S;
                            var P = S.game,
                                m = S["record"],
                                B = null,
                                J = 0;
                            if (this["rounds"] = [], P["actions"] && P["actions"]["length"] > 0) {
                                var actions = [];
                                for (var L = 0; L < P["actions"]["length"]; L++) {
                                    var w = P["actions"][L];
                                    if (1 == w.type) {
                                        J += w["result"]["length"];
                                        var h = net["MessageWrapper"]["decodeMessage"](w["result"]),
                                            s = h["$type"].name,
                                            R = {
                                                name: s,
                                                data: h
                                            };
                                        actions.push(R);
                                        null == B && (B = {
                                            xun: [],
                                            actions: []
                                        }),
                                            B["actions"].push(R),
                                            this["_isRoundEnd"](s) && (this["pengding_xun"](B), this["rounds"].push(B), B = null);
                                    }
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_actions': actions
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_actions': actions
                                        }));
                                    }
                                }));
                            } else
                                for (var L = 0; L < P["records"]["length"]; L++) {
                                    J += P["records"][L]["length"];
                                    var h = net["MessageWrapper"]["decodeMessage"](P["records"][L]),
                                        s = h["$type"].name,
                                        R = {
                                            name: s,
                                            data: h
                                        };
                                    null == B && (B = {
                                        xun: [],
                                        actions: []
                                    }),
                                        B["actions"].push(R),
                                        this["_isRoundEnd"](s) && (this["pengding_xun"](B), this["rounds"].push(B), B = null);
                                }
                            null != B && app.Log["Error"]("最后一份牌谱没有结束"),
                                this["gameResult"] = m,
                                this["action_index"] = -1,
                                this["round_index"] = -1,
                                this["label_chang"].text = '东',
                                this["label_ju"].text = '1',
                                this["label_xun"].text = '0',
                                this["auto_play"] = !1;
                            var v = [];
                            'en' != GameMgr["client_language"] ? (v.push(this["label_xun"]["parent"]["getChildByName"]("xun")), v.push(this["label_xun"]["parent"]["getChildByName"]("turn"))) : (v.push(this["label_xun"]["parent"]["getChildByName"]("turn")), v.push(this["label_xun"]["parent"]["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](v, 80, [5]),
                                app.Log.log("牌谱大小：" + J + 'B');
                        },
                        w["prototype"]["reset"] = function () {
                            this["auto_play"] = !1,
                                this["page_chang"]["enable"] && this["page_chang"]["close"](),
                                this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["page_paishan"].me["visible"] && (this["page_paishan"].me["visible"] = !1);
                        },
                        w["prototype"]["onBack"] = function () {
                            this["locking_time"] = 0,
                                this["enable"] = !0,
                                this["_jumpStep"](this["round_index"], this["rounds"][this["round_index"]]["actions"]["length"] - 2);
                        },
                        w["prototype"]["pengding_xun"] = function (S) {
                            S.xun = [];
                            for (var P = view["DesktopMgr"].Inst.seat, m = !1, B = 0; B < S["actions"]["length"]; B++) {
                                var J = S["actions"][B];
                                "RecordNewRound" == J.name ? J.data.ju == P && (m = !0, S.xun.push(B)) : "RecordDealTile" == J.name || "RecordChiPengGang" == J.name || "RecordHuleXueZhanMid" == J.name ? J.data.seat == P && (m || (m = !0, S.xun.push(B))) : ("RecordDiscardTile" == J.name || "RecordRevealTile" == J.name || "RecordAnGangAddGang" == J.name || "RecordBaBei" == J.name) && (m = !1);
                            }
                        },
                        w["prototype"]["get_currentxun"] = function () {
                            var S = this["rounds"][this["round_index"]];
                            if (0 == S.xun["length"])
                                return 1;
                            for (var P = S.xun["length"], m = 0; m < S.xun["length"]; m++)
                                if (this["action_index"] < S.xun[m]) {
                                    P = m;
                                    break;
                                }
                            return 0 > P && (P = 0),
                                P;
                        },
                        w["prototype"]["nextStep"] = function (P, m) {
                            if (void 0 === P && (P = !1), void 0 === m && (m = !1), !(!P && this["locking_time"] > Laya["timer"]["currTimer"] || this["round_index"] > this["rounds"]["length"])) {
                                if (this["round_index"] == this["rounds"]["length"] && (this["round_index"] = -1), this["round_index"] < 0 || this["rounds"][this["round_index"]]["actions"]["length"] <= this["action_index"] + 1) {
                                    if (this["round_index"] + 1 >= this["rounds"]["length"])
                                        return view["DesktopMgr"].Inst["gameEndResult"] = this["gameResult"]["result"], this["enable"] = !1, S["UIMgr"].Inst["ShowGameEnd"](), this["action_index"]--, void 0;
                                    this["round_index"]++,
                                        this["action_index"] = 0;
                                } else
                                    this["action_index"]++;
                                if (this["btn_nextround"]["visible"] = this["rounds"]["length"] > 1, this["btn_preround"]["visible"] = this["rounds"]["length"] > 1, this["action_index"] > 0 && ("RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].name || "RecordRevealTile" == this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].name)) {
                                    var B = this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].data.seat;
                                    B != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](B)]["RecordLiPai"](0, !P && view["DesktopMgr"].Inst["record_show_anim"] && !(view["DesktopMgr"].Inst["is_jiuchao_mode"]() || view["DesktopMgr"].Inst["is_open_hand"]() || view["DesktopMgr"].Inst["record_show_hand"]));
                                }
                                var J = this["rounds"][this["round_index"]]["actions"][this["action_index"]];
                                view["DesktopMgr"].Inst["record_show_anim"] || this["_isRoundEnd"](J.name) ? this["locking_time"] = Laya["timer"]["currTimer"] + this["doRecord"](J) : (this["doFastRecord"](J), this["locking_time"] = Laya["timer"]["currTimer"] + (m ? 200 : 0)),
                                    "RecordNewCard" == J.name && this["nextStep"](!0),
                                    this["_refreshBarshow"]();
                            }
                        },
                        w["prototype"]["_refreshBarshow"] = function () {
                            var S = '';
                            if (view["DesktopMgr"].Inst["is_chuanma_mode"]())
                                'en' == GameMgr["client_language"] ? S = "Round" : S += '第', this["label_chang"].text = S, this["label_ju"].text = (view["DesktopMgr"].Inst["index_chuanma_ju"] + 1)["toString"]();
                            else {
                                if ("chs" == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            S += '东';
                                            break;
                                        case 1:
                                            S += '南';
                                            break;
                                        case 2:
                                            S += '西';
                                            break;
                                        case 3:
                                            S += '北';
                                    }
                                else if ('jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            S += '東';
                                            break;
                                        case 1:
                                            S += '南';
                                            break;
                                        case 2:
                                            S += '西';
                                            break;
                                        case 3:
                                            S += '北';
                                    }
                                else if ('kr' == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            S += '동';
                                            break;
                                        case 1:
                                            S += '남';
                                            break;
                                        case 2:
                                            S += '서';
                                            break;
                                        case 3:
                                            S += '북';
                                    }
                                else
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            S += "East";
                                            break;
                                        case 1:
                                            S += "South";
                                            break;
                                        case 2:
                                            S += "West";
                                            break;
                                        case 3:
                                            S += "North";
                                    }
                                this["label_chang"].text = S,
                                    this["label_ju"].text = (view["DesktopMgr"].Inst["index_ju"] + 1)["toString"]();
                            }
                            var P = function (S, P) {
                                for (var m = 0, B = 1; B < S["numChildren"]; B++) {
                                    1 != B && (m += 3);
                                    var J = S["getChildAt"](B);
                                    m += J["textField"]["textWidth"] * J["scaleX"];
                                }
                                for (var L = S["width"] / 2 - m / 2, B = 1; B < S["numChildren"]; B++) {
                                    var J = S["getChildAt"](B);
                                    J.x = L,
                                        L += J["textField"]["textWidth"] * J["scaleX"] + 3,
                                        J.y = "haolong" == J.font ? P + 3 : P;
                                }
                            };
                            this["label_xun"].text = this["get_currentxun"]()["toString"]();
                            var m = [];
                            'en' != GameMgr["client_language"] ? (m.push(this["label_xun"]["parent"]["getChildByName"]("xun")), m.push(this["label_xun"]["parent"]["getChildByName"]("turn"))) : (m.push(this["label_xun"]["parent"]["getChildByName"]("turn")), m.push(this["label_xun"]["parent"]["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](m, 80, [5]),
                                P(this["label_chang"]["parent"], 40);
                        },
                        w["prototype"]["_get_autoplay_delay"] = function (S) {
                            switch (S.name) {
                                case "RecordNewCard":
                                    return 0;
                                case "RecordNewRound":
                                    return 0;
                                case "RecordChangeTile":
                                    return 500;
                                case "RecordDiscardTile":
                                    return 500;
                                case "RecordDealTile":
                                    return 500;
                                case "RecordChiPengGang":
                                    return 500;
                                case "RecordAnGangAddGang":
                                    return 200;
                                case "RecordBaBei":
                                    return 200;
                                case "RecordHuleXueZhanMid":
                                    return 500;
                                case "RecordRevealTile":
                                    return 500;
                                case "RecordUnveilTile":
                                    return 500;
                                case "RecordLockTile":
                                    return 1000;
                            }
                            return 0;
                        },
                        w["prototype"]["doRecord"] = function (S) {
                            try {
                                var P = 0;
                                switch (S.name) {
                                    case "RecordNewRound":
                                        P = view["ActionNewRound"]["record"](S.data);
                                        break;
                                    case "RecordChangeTile":
                                        P = view["ActionChangeTile"]["record"](S.data);
                                        break;
                                    case "RecordSelectGap":
                                        P = view["ActionSelectGap"]["record"](S.data);
                                        break;
                                    case "RecordDiscardTile":
                                        P = view["ActionDiscardTile"]["record"](S.data);
                                        break;
                                    case "RecordDealTile":
                                        P = view["ActionDealTile"]["record"](S.data);
                                        break;
                                    case "RecordChiPengGang":
                                        P = view["ActionChiPengGang"]["record"](S.data);
                                        break;
                                    case "RecordAnGangAddGang":
                                        P = view["ActionAnGangAddGang"]["record"](S.data);
                                        break;
                                    case "RecordBaBei":
                                        P = view["ActionBabei"]["record"](S.data);
                                        break;
                                    case "RecordHule":
                                        P = view["ActionHule"]["record"](S.data);
                                        break;
                                    case "RecordLiuJu":
                                        P = view["ActionLiuJu"]["record"](S.data);
                                        break;
                                    case "RecordNoTile":
                                        P = view["ActionNoTile"]["record"](S.data);
                                        break;
                                    case "RecordHuleXueZhanMid":
                                        P = view["ActionHuleXueZhanMid"]["record"](S.data);
                                        break;
                                    case "RecordHuleXueZhanEnd":
                                        P = view["ActionHuleXueZhanEnd"]["record"](S.data);
                                        break;
                                    case "RecordGangResult":
                                        P = view["ActionGangResult"]["record"](S.data);
                                        break;
                                    case "RecordGangResultEnd":
                                        P = view["ActionGangResultEnd"]["record"](S.data);
                                        break;
                                    case "RecordRevealTile":
                                        P = view["ActionRevealTile"]["record"](S.data);
                                        break;
                                    case "RecordLockTile":
                                        P = view["ActionLockTile"]["record"](S.data);
                                        break;
                                    case "RecordUnveilTile":
                                        P = view["ActionUnveilTile"]["record"](S.data);
                                        break;
                                    case "RecordNewCard":
                                        P = view["ActionNewCard"]["record"](S.data);
                                        break;
                                    case "RecordFillAwaitingTiles":
                                        P = view["ActionFillAwaitingTiles"]["record"](S.data);
                                }
                                return this["auto_play"] && (P += this["_get_autoplay_delay"](S)),
                                    ("RecordNewRound" == S.name || "RecordDealTile" == S.name || view["DesktopMgr"].Inst["is_zhanxing_mode"]() && "RecordDiscardTile" == S.name || "RecordFillAwaitingTiles" == S.name) && this["page_paishan"]["refresh"](),
                                    P;
                            } catch (m) {
                                var B = {};
                                return B["error"] = m["message"],
                                    B["stack"] = m["stack"],
                                    B["method"] = "ui_replay doRecord",
                                    B.name = S.name,
                                    B.data = S.data,
                                    GameMgr.Inst["onFatalError"](B),
                                    1000000;
                            }
                        },
                        w["prototype"]["doFastRecord"] = function (S) {
                            try {
                                switch (S.name) {
                                    case "RecordNewRound":
                                        view["ActionNewRound"]["fastrecord"](S.data);
                                        break;
                                    case "RecordChangeTile":
                                        view["ActionChangeTile"]["fastrecord"](S.data);
                                        break;
                                    case "RecordSelectGap":
                                        view["ActionSelectGap"]["fastrecord"](S.data);
                                        break;
                                    case "RecordDiscardTile":
                                        view["ActionDiscardTile"]["fastrecord"](S.data);
                                        break;
                                    case "RecordDealTile":
                                        view["ActionDealTile"]["fastrecord"](S.data);
                                        break;
                                    case "RecordChiPengGang":
                                        view["ActionChiPengGang"]["fastrecord"](S.data);
                                        break;
                                    case "RecordAnGangAddGang":
                                        view["ActionAnGangAddGang"]["fastrecord"](S.data);
                                        break;
                                    case "RecordHule":
                                        view["ActionHule"]["fastrecord"](S.data);
                                        break;
                                    case "RecordLiuJu":
                                        view["ActionLiuJu"]["fastrecord"](S.data);
                                        break;
                                    case "RecordNoTile":
                                        view["ActionNoTile"]["fastrecord"](S.data);
                                        break;
                                    case "RecordBaBei":
                                        view["ActionBabei"]["fastrecord"](S.data);
                                        break;
                                    case "RecordHuleXueZhanMid":
                                        view["ActionHuleXueZhanMid"]["fastrecord"](S.data);
                                        break;
                                    case "RecordHuleXueZhanEnd":
                                        view["ActionHuleXueZhanEnd"]["fastrecord"](S.data);
                                        break;
                                    case "RecordRevealTile":
                                        view["ActionRevealTile"]["fastrecord"](S.data);
                                        break;
                                    case "RecordLockTile":
                                        view["ActionLockTile"]["fastrecord"](S.data);
                                        break;
                                    case "RecordUnveilTile":
                                        view["ActionUnveilTile"]["fastrecord"](S.data);
                                        break;
                                    case "RecordGangResult":
                                        view["ActionGangResult"]["fastrecord"](S.data);
                                        break;
                                    case "RecordGangResultEnd":
                                        view["ActionGangResultEnd"]["fastrecord"](S.data);
                                        break;
                                    case "RecordNewCard":
                                        view["ActionNewCard"]["fastrecord"](S.data);
                                        break;
                                    case "RecordFillAwaitingTiles":
                                        view["ActionFillAwaitingTiles"]["fastrecord"](S.data);
                                }
                                ("RecordNewRound" == S.name || "RecordDealTile" == S.name || view["DesktopMgr"].Inst["is_zhanxing_mode"]() && "RecordDiscardTile" == S.name || "RecordFillAwaitingTiles" == S.name) && this["page_paishan"]["refresh"]();
                            } catch (P) {
                                var m = {};
                                return m["error"] = P["message"],
                                    m["stack"] = P["stack"],
                                    m["method"] = "ui_replay doRecord",
                                    m.name = S.name,
                                    m.data = S.data,
                                    GameMgr.Inst["onFatalError"](m),
                                    1000000;
                            }
                            return 0;
                        },
                        w["prototype"]["update"] = function () {
                            !this["auto_play"] || this["locking_time"] > Laya["timer"]["currTimer"] || this["round_index"] >= 0 && this["round_index"] < this["rounds"]["length"] && this["action_index"] + 1 < this["rounds"][this["round_index"]]["actions"]["length"] && (this["nextStep"](!1, !0),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "update"
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "update"
                                        }));
                                    }
                                }))
                            );
                        },
                        w["prototype"]["jumpToLastRoundXun"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            this["round_index"] = (this["round_index"] - 1 + this["rounds"]["length"]) % this["rounds"]["length"];
                            var S = this["rounds"][this["round_index"]],
                                P = S["actions"]["length"] - 3;
                            1 > P && (P = 1),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpToLastRoundXun",
                                        'fast_record_to': P - 1
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpToLastRoundXun",
                                            'fast_record_to': P - 1
                                        }));
                                    }
                                }));
                            this["_jumpStep"](this["round_index"], P);
                        },
                        w["prototype"]["nextXun"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var S = this["rounds"][this["round_index"]];
                                if (this["action_index"] == S["actions"]["length"] - 1)
                                    return this["nextStep"](), void 0;
                                var P = 0;
                                if (0 == S.xun["length"])
                                    P = S["actions"]["length"] - 1;
                                else if (S.xun[0] > this["action_index"])
                                    P = S.xun[0];
                                else {
                                    var m = this["get_currentxun"]();
                                    P = m == S.xun["length"] ? S["actions"]["length"] - 1 : S.xun[m];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextXun",
                                        'fast_record_to': P - 1
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextXun",
                                            'fast_record_to': P - 1
                                        }));
                                    }
                                }));
                                this["_jumpStep"](this["round_index"], P);
                            }
                        },
                        w["prototype"]["preXun"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var S = this["rounds"][this["round_index"]];
                                if (0 == this["action_index"] || "RecordNewRound" == S["actions"][this["action_index"]].name)
                                    return this["jumpToLastRoundXun"](), void 0;
                                var P = 0;
                                if (0 == S.xun["length"])
                                    P = 0;
                                else if (S.xun[0] > this["action_index"])
                                    P = 0;
                                else {
                                    var m = this["get_currentxun"]() - 1;
                                    P = 0 == m ? 0 : S.xun[m - 1];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preXun",
                                        'fast_record_to': P - 1
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preXun",
                                            'fast_record_to': P - 1
                                        }));
                                    }
                                }));
                                this["_jumpStep"](this["round_index"], P);
                            }
                        },
                        w["prototype"]["preStep"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var S = this["rounds"][this["round_index"]];
                                return 0 == this["action_index"] || "RecordNewRound" == S["actions"][this["action_index"]].name ? (this["jumpToLastRoundXun"](), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preStep",
                                            'fast_record_to': this.action_index - 2
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preStep",
                                                'fast_record_to': this.action_index - 2
                                            }));
                                        }
                                    })), this['_jumpStep'](this['round_index'], this['action_index'] - 1), void 0)
                            }
                        },
                        w["prototype"]["nextRound"] = function () {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextRound"
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextRound"
                                            }));
                                        }
                                    })), this['_jumpStep']((this['round_index'] + 1) % this['rounds']['length'], 0), void 0);
                        },
                        w["prototype"]["preRound"] = function () {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preRound"
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preRound"
                                            }));
                                        }
                                    })), this['_jumpStep']((this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'], 0), void 0);
                        },
                        w["prototype"]["jumpRound"] = function (S) {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (0 > S || S >= this["rounds"]["length"] ||
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpRound",
                                            'record_click_action_index': S
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpRound",
                                                'record_click_action_index': S
                                            }));
                                        }
                                    })) ||
                                    this['_jumpStep'](S, 0), void 0);
                        },
                        w["prototype"]["jumpXun"] = function (S) {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var P = this["rounds"][this["round_index"]],
                                    m = 0;
                                m = 0 == P.xun["length"] ? 0 : 0 == S ? 0 : P.xun[S - 1],
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpXun",
                                            'fast_record_to': m - 1
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpXun",
                                                'fast_record_to': m - 1
                                            }));
                                        }
                                    })),
                                    this["_jumpStep"](this["round_index"], m);
                            }
                        },
                        w["prototype"]["onWheelClick"] = function () {
                            return this["page_chang"]["locking"] || this["page_xun"]["locking"] ? void 0 : this["page_chang"]["enable"] || this["page_xun"]["enable"] ? (this["page_chang"]["enable"] && this["page_chang"]["close"](), this["page_xun"]["enable"] && this["page_xun"]["close"](), void 0) : (
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextStep"
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextStep"
                                        }));
                                    }
                                })), this["nextStep"](), void 0);
                        },
                        w["prototype"]["onChangeMainBody"] = function () {
                            var S = this["round_index"],
                                P = this["action_index"];
                            this["initData"](this.data),
                                this["reset"](),
                                S >= this["rounds"]["length"] || 0 > S || this["_jumpStep"](S, P);
                        },
                        w["prototype"]["_jumpStep"] = function (S, P) {
                            var m = this["rounds"][S];
                            this["round_index"] = S,
                                m["actions"][P] && m["actions"][P + 1] && "RecordNewCard" == m["actions"][P].name && P++;
                            for (var B = 0; P > B; B++) {
                                if (B > 0 && ("RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][B - 1].name || "RecordRevealTile" == this["rounds"][this["round_index"]]["actions"][B - 1].name)) {
                                    var J = this["rounds"][this["round_index"]]["actions"][B - 1].data.seat;
                                    J != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](J)]["RecordLiPai"](0);
                                }
                                this["doFastRecord"](m["actions"][B]);
                            }
                            if (P == m["actions"]["length"] - 1)
                                this["action_index"] = P - 1, this["nextStep"]();
                            else {
                                if (P > 0 && ("RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][P - 1].name || "RecordRevealTile" == this["rounds"][this["round_index"]]["actions"][P - 1].name)) {
                                    var J = this["rounds"][this["round_index"]]["actions"][P - 1].data.seat;
                                    J != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](J)]["RecordLiPai"](0);
                                }
                                this["doFastRecord"](m["actions"][P]),
                                    this["action_index"] = P,
                                    this["_refreshBarshow"]();
                            }
                        },
                        w["prototype"]["_lipai_all"] = function () {
                            for (var S = 1; S < view["DesktopMgr"].Inst["players"]["length"]; S++)
                                view["DesktopMgr"].Inst["players"][S]["RecordLiPai"](0);
                        },
                        w.Inst = null,
                        w;
                }
                    (S["UIBase"]);
            S["UI_Replay"] = L;
        }
            (uiscript || (uiscript = {}));




        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        var m = this,
                            B = S["DesktopMgr"].Inst.mode == S["EMJMode"].play || S["DesktopMgr"].Inst["record_show_anim"];
                        P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1),
                            void 0 != P["zhenting"] && uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"]),
                            Laya["timer"].once(100, this, function () {
                                var J = P["hules"],
                                    L = 0;
                                if (J[0].zimo) {
                                    var w = J[0].seat;
                                    S["DesktopMgr"].Inst["setTingpai"](w, []),
                                        B && uiscript["UI_Huleshow"].Inst["showZimo"]([S["DesktopMgr"].Inst["seat2LocalPosition"](w)]),
                                        P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0),
                                        L += B ? 1200 : 200,
                                        Laya["timer"].once(L, m, function () {
                                            var P = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](w)];
                                            P["onXuezhanMidHule"](!0, mjcore["MJPai"]["Create"](J[0]["hu_tile"]), !1);
                                        });
                                } else {
                                    for (var h = 0, s = -1, R = [], v = 0; v < J["length"]; v++) {
                                        var f = J[v].seat;
                                        S["DesktopMgr"].Inst["setTingpai"](f, []),
                                            R.push(S["DesktopMgr"].Inst["seat2LocalPosition"](f)),
                                            -1 == s && (s = f);
                                    }
                                    s >= 0 && (h = S["DesktopMgr"].Inst["player_effects"][s][game["EView"]["hupai_effect"]]),
                                        B && uiscript["UI_Huleshow"].Inst["showRong"](R),
                                        L += B ? 1200 : 200,
                                        Laya["timer"].once(L, m, function () {
                                            for (var P = 0; P < J["length"]; P++) {
                                                var m = J[P].seat;
                                                S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["onXuezhanMidHule"](!1, mjcore["MJPai"]["Create"](J[P]["hu_tile"]), !1);
                                            }
                                            S["DesktopMgr"].Inst["lastqipai"]["isxuezhanhu"] = !0,
                                                S["DesktopMgr"].Inst["lastqipai"]["OnChoosedPai"](),
                                                S["DesktopMgr"].Inst["ShowHuleEffect"](S["DesktopMgr"].Inst["lastqipai"], S["DesktopMgr"].Inst["lastqipai"]["model"]["transform"]["position"], h, S["DesktopMgr"].Inst["lastpai_seat"], S["DesktopMgr"].Inst["isLastPaiMingPai"]() ? 2 : 0);
                                        });
                                }
                                L += 2000,
                                    Laya["timer"].once(L, m, function () {
                                        for (var B = 0, L = S["DesktopMgr"].Inst["players"]; B < L["length"]; B++) {
                                            var w = L[B];
                                            w["hideLiqi"]();
                                        }
                                        P.liqi ? Laya["timer"].once(2500, m, function () {
                                            S["ActionLiqi"].play(P.liqi);
                                        }) : uiscript["UI_DesktopInfo"].Inst["setLiqibang"](0);
                                        for (var h = [], s = 0; s < P["delta_scores"]["length"]; s++) {
                                            var R = {
                                                title_id: 0,
                                                score: 0,
                                                delta: 0
                                            };
                                            if (P["delta_scores"][s] > 0) {
                                                s == S["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1)),
                                                    uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](s, "emoji_7", -1),
                                                    R["delta"] = P["delta_scores"][s];
                                                for (var v = 0, f = J; v < f["length"]; v++) {
                                                    var A = f[v];
                                                    if (A.seat == s) {
                                                        R["title_id"] = A["title_id"];
                                                        break;
                                                    }
                                                }
                                            } else
                                                P["delta_scores"][s] < 0 && (R["delta"] = P["delta_scores"][s], uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](s, "emoji_8", -1));
                                            R["score"] = P["old_scores"][s],
                                                h.push(R);
                                        }
                                        Laya["timer"].once(200, m, function () {
                                            S["DesktopMgr"].Inst["setScores"](P["scores"]);
                                        }),
                                            uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](h);
                                    }),
                                    L += 3000,
                                    Laya["timer"].once(L, m, function () {
                                        S["DesktopMgr"].Inst["ActionRunComplete"]();
                                    });
                            });
                    },
                    m["fastplay"] = function (P) {
                        app.Log.log("ActionHule fastplay data:" + JSON["stringify"](P)),
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1);
                        var m = P["hules"];
                        if (void 0 != P["zhenting"] && uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"]), m[0].zimo) {
                            var B = m[0].seat;
                            S["DesktopMgr"].Inst["setTingpai"](B, []);
                            var J = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)];
                            J["onXuezhanMidHule"](!0, mjcore["MJPai"]["Create"](m[0]["hu_tile"]), !0),
                                B == S["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                        } else {
                            for (var B = -1, L = [], w = 0; w < m["length"]; w++) {
                                var h = m[w].seat;
                                B == S["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1)),
                                    S["DesktopMgr"].Inst["setTingpai"](h, []),
                                    L.push(S["DesktopMgr"].Inst["seat2LocalPosition"](h)),
                                    -1 == B && (B = h);
                            }
                            for (var w = 0; w < m["length"]; w++) {
                                var h = m[w].seat;
                                S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](h)]["onXuezhanMidHule"](!1, mjcore["MJPai"]["Create"](m[w]["hu_tile"]), !0);
                            }
                            S["DesktopMgr"].Inst["lastqipai"]["isxuezhanhu"] = !0,
                                S["DesktopMgr"].Inst["lastqipai"]["OnChoosedPai"]();
                        }
                        for (var s = 0, R = S["DesktopMgr"].Inst["players"]; s < R["length"]; s++) {
                            var J = R[s];
                            J["hideLiqi"]();
                        }
                        P.liqi ? S["ActionLiqi"]["fastplay"](P.liqi, 0) : uiscript["UI_DesktopInfo"].Inst["setLiqibang"](0),
                            S["DesktopMgr"].Inst["setScores"](P["scores"]);
                    },
                    m["record"] = function (S) {
                        return this.play(S),
                            6000;
                    },
                    m["fastrecord"] = function (P) {
                        P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            this["fastplay"](P, 1000);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionHuleXueZhanMid"] = P;
        }
            (view || (view = {}));





        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        for (var m = 0, B = P["gang_infos"], J = !1, L = [], w = 0; w < B["delta_scores"]["length"]; w++) {
                            var h = {
                                title_id: 0,
                                score: 0,
                                delta: 0
                            };
                            B["delta_scores"][w] > 0 ? (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](w, "emoji_7", -1), h["delta"] = B["delta_scores"][w], J = !0) : B["delta_scores"][w] < 0 && (h["delta"] = B["delta_scores"][w], uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](w, "emoji_8", -1), J = !0),
                                h["score"] = B["old_scores"][w],
                                L.push(h);
                        }
                        J && (Laya["timer"].once(200, this, function () {
                            S["DesktopMgr"].Inst["setScores"](B["scores"]);
                        }), uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](L), m += 2000),
                            S["DesktopMgr"].Inst["mainrole"]["revertAllPais"](),
                            Laya["timer"].once(m, this, function () {
                                S["DesktopMgr"].Inst["ActionRunComplete"]();
                            });
                    },
                    m["fastplay"] = function (P) {
                        app.Log.log("ActionHule fastplay data:" + JSON["stringify"](P));
                        var m = P["gang_infos"];
                        S["DesktopMgr"].Inst["setScores"](m["scores"]);
                    },
                    m["record"] = function (S) {
                        return this.play(S),
                            2000;
                    },
                    m["fastrecord"] = function (S) {
                        this["fastplay"](S, 1000);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionGangResult"] = P;
        }
            (view || (view = {}));





        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        app.Log.log("ActionRevealTile play data:" + JSON["stringify"](P));
                        var m = P.seat,
                            B = mjcore["MJPai"]["Create"](P.tile ? P.tile : '5z'),
                            J = !(null == P["is_liqi"] || void 0 == P["is_liqi"] || !P["is_liqi"]);
                        if (S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["AddQiPai"](B, J, P["moqie"], !0, m == S["DesktopMgr"].Inst.seat ? S["ERevealState"].self : S["ERevealState"]["reveal"]), J) {
                            P["is_wliqi"] ? S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["PlaySound"]("act_drich_anpai") : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["PlaySound"]("act_rich_anpai");
                            var L = S["DesktopMgr"].Inst["player_effects"][m][game["EView"]["lizhi_bgm"]];
                            if (L && 0 != L) {
                                var w = cfg["item_definition"].item.get(L)["sargs"][0];
                                S["AudioMgr"]["lizhiMuted"] ? S["AudioMgr"]["PlayLiqiBgm"](w, 300, !0) : (S["BgmListMgr"]["stopBgm"](), Laya["timer"].once(1000, this, function () {
                                    S["DesktopMgr"].Inst["gameing"] && (S["BgmListMgr"]["PlayMJBgm"]('', !0), S["AudioMgr"]["PlayLiqiBgm"](w, 300, !0));
                                }));
                            }
                        }
                        m == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](B, !1, !1, P["moqie"]) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["onDiscardTile"](P["moqie"], P.tile, !1, !1),
                            P["operation"] && Laya["timer"].once(500, this, function () {
                                S["ActionOperation"].play(P["operation"]);
                            }),
                            void 0 != P["zhenting"] && void 0 == P["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](P["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"])),
                            m == S["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](P, !1),
                            Laya["timer"].once(500, this, function () {
                                J ? S["DesktopMgr"].Inst["clearMindVoice"]() : S["DesktopMgr"].Inst["playMindVoice"]();
                            }),
                            S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]),
                            S["DesktopMgr"].Inst["onRevealStateChange"](m, !0);
                    },
                    m["fastplay"] = function (P, m) {
                        app.Log.log("ActionRevealTile fastplay data:" + JSON["stringify"](P) + " usetime:" + m);
                        var B = P.seat,
                            J = mjcore["MJPai"]["Create"](P.tile ? P.tile : '5z'),
                            L = !(null == P["is_liqi"] || void 0 == P["is_liqi"] || !P["is_liqi"]);
                        S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["AddQiPai"](J, L, P["moqie"], !1, B == S["DesktopMgr"].Inst.seat ? S["ERevealState"].self : S["ERevealState"]["reveal"]),
                            B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](J, !1, !0, P["moqie"]) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["onDiscardTile"](P["moqie"], P.tile, !1, !0),
                            P["operation"] && -1 != m && Laya["timer"].once(500, this, function () {
                                S["ActionOperation"].play(P["operation"], m);
                            }),
                            void 0 != P["zhenting"] && void 0 == P["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](P["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"])),
                            B == S["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](P, !0),
                            S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"], !1),
                            S["DesktopMgr"].Inst["onRevealStateChange"](B, !0);
                    },
                    m["record"] = function (P, m) {
                        void 0 === m && (m = 0),
                            app.Log.log("ActionRevealTile record data:" + JSON["stringify"](P));
                        var B = P.seat,
                            J = mjcore["MJPai"]["Create"](P.tile),
                            L = !(null == P["is_liqi"] || void 0 == P["is_liqi"] || !P["is_liqi"]),
                            w = S["DesktopMgr"].Inst["record_show_hand"] || B == S["DesktopMgr"].Inst.seat ? S["ERevealState"].self : S["ERevealState"]["reveal"];
                        if (S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["AddQiPai"](J, L, P["moqie"], !0, w), L && (P["is_wliqi"] ? S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["PlaySound"]("act_drich_anpai") : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["PlaySound"]("act_rich_anpai"), uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](B, "emoji_9", 2000)), B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](J, !1, !1, P["moqie"]) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["recordDiscardTile"](J, P["moqie"], !1, !1), P["tingpais"] && S["DesktopMgr"].Inst["setTingpai"](P.seat, P["tingpais"]), S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && P["operations"])
                            for (var h = 0; h < P["operations"]["length"]; h++)
                                S["ActionOperation"].ob(P["operations"][h], m, 450);
                        return S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]),
                            S["DesktopMgr"].Inst["onRevealStateChange"](B, !0),
                            1000;
                    },
                    m["fastrecord"] = function (P, m) {
                        void 0 === m && (m = -1),
                            app.Log.log("ActionRevealTile fastrecord data:" + JSON["stringify"](P));
                        var B = P.seat,
                            J = mjcore["MJPai"]["Create"](P.tile ? P.tile : '5z'),
                            L = !(null == P["is_liqi"] || void 0 == P["is_liqi"] || !P["is_liqi"]),
                            w = S["DesktopMgr"].Inst["record_show_hand"] || B == S["DesktopMgr"].Inst.seat ? S["ERevealState"].self : S["ERevealState"]["reveal"];
                        if (S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["AddQiPai"](J, L, P["moqie"], !1, w), B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](J, !1, !0, P["moqie"]) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["recordDiscardTile"](J, P["moqie"], !1, !0), P["tingpais"] && S["DesktopMgr"].Inst["setTingpai"](P.seat, P["tingpais"]), S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && P["operations"])
                            for (var h = 0; h < P["operations"]["length"]; h++)
                                S["ActionOperation"].ob(P["operations"][h], m, 450);
                        S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"], !1),
                            S["DesktopMgr"].Inst["onRevealStateChange"](B, !0);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionRevealTile"] = P;
        }
            (view || (view = {}));




        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        var m = this;
                        app.Log.log("ActionChangeTile play data:" + JSON["stringify"](P));
                        for (var B = function (m) {
                            var B = S["DesktopMgr"].Inst["players"][m],
                                L = [];
                            if (0 == m) {
                                B["onHuanSanZhang_Remove"](P["out_tiles"], P["out_tile_states"], !1);
                                for (var w = 0; 3 > w; w++)
                                    L.push(mjcore["MJPai"]["Create"](P["out_tiles"][w]));
                            } else {
                                B["onHuanSanZhang_Remove"]();
                                for (var w = 0; 3 > w; w++)
                                    L.push(mjcore["MJPai"]["Create"]('5z'));
                            }
                            B["ShowHuanSanZhang"](L, P["change_type"]),
                                Laya["timer"].once(2500, J, function () {
                                    0 == m ? B["onHuanSanZhang_Add"](P["in_tiles"], P["in_tile_states"], !1) : B["onHuanSanZhang_Add"]();
                                });
                        }, J = this, L = 0; L < S["DesktopMgr"].Inst["players"]["length"]; L++)B(L);
                        uiscript["UI_HuanSanZhange"].Inst["enable"] && uiscript["UI_HuanSanZhange"].Inst["close"](),
                            uiscript["UI_HuanSanZhange_ChangeType"].Inst.show(P["change_type"]),
                            Laya["timer"].once(2500, this, function () {
                                S["DesktopMgr"].Inst["is_dora3_mode"]() && uiscript["UI_DesktopInfo"].Inst["openDora3BeginShine"](),
                                    Laya["timer"].once(200, m, function () {
                                        if (P["doras"] && P["doras"]["length"] > 0)
                                            for (var m = 0; m < P["doras"]["length"]; m++)
                                                S["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](P["doras"][m])), uiscript["UI_DesktopInfo"].Inst["setDora"](m, S["DesktopMgr"].Inst.dora[m]);
                                        for (var m = 0; 4 > m; m++)
                                            S["DesktopMgr"].Inst["players"][m]["OnDoraRefresh"]();
                                        if (S["DesktopMgr"].Inst["index_ju"] == S["DesktopMgr"].Inst.seat) {
                                            var B = {
                                                tingpais: P["tingpais0"],
                                                operation: P["operation"]
                                            };
                                            uiscript["UI_TingPai"].Inst["setData0"](B);
                                        } else {
                                            var B = {
                                                tingpais: P["tingpais1"]
                                            };
                                            uiscript["UI_TingPai"].Inst["setData1"](B, !1);
                                        }
                                        S["DesktopMgr"].Inst["ActionRunComplete"]();
                                    }),
                                    void 0 != P["operation"] && S["ActionOperation"].play(P["operation"]);
                            });
                    },
                    m["fastplay"] = function (P, m) {
                        app.Log.log("ActionChangeTile fastplay data:" + JSON["stringify"](P));
                        for (var B = 0; B < S["DesktopMgr"].Inst["players"]["length"]; B++) {
                            var J = S["DesktopMgr"].Inst["players"][B];
                            0 == B ? (J["onHuanSanZhang_Remove"](P["out_tiles"], P["out_tile_states"], !0), J["onHuanSanZhang_Add"](P["in_tiles"], P["in_tile_states"], !0)) : (J["onHuanSanZhang_Add"](), J["onHuanSanZhang_Remove"]());
                        }
                        if (uiscript["UI_HuanSanZhange"].Inst["enable"] && uiscript["UI_HuanSanZhange"].Inst["close"](), P["doras"] && P["doras"]["length"] > 0)
                            for (var B = 0; B < P["doras"]["length"]; B++)
                                S["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](P["doras"][B])), uiscript["UI_DesktopInfo"].Inst["setDora"](B, S["DesktopMgr"].Inst.dora[B]);
                        for (var B = 0; 4 > B; B++)
                            S["DesktopMgr"].Inst["players"][B]["OnDoraRefresh"]();
                        if (S["DesktopMgr"].Inst["index_ju"] == S["DesktopMgr"].Inst.seat) {
                            var L = {
                                tingpais: P["tingpais0"],
                                operation: P["operation"]
                            };
                            uiscript["UI_TingPai"].Inst["setData0"](L);
                        } else {
                            var L = {
                                tingpais: P["tingpais1"]
                            };
                            uiscript["UI_TingPai"].Inst["setData1"](L, !1);
                        }
                        P["operation"] && -1 != m && Laya["timer"].once(100, this, function () {
                            S["ActionOperation"].play(P["operation"], m + 100);
                        });
                    },
                    m["record"] = function (P, m) {
                        void 0 === m && (m = 0),
                            app.Log.log("ActionChangeTile record data:" + JSON["stringify"](P));
                        for (var B = function (m) {
                            var B = S["DesktopMgr"].Inst["players"][m],
                                L = P["change_tile_infos"][S["DesktopMgr"].Inst["localPosition2Seat"](m)];
                            0 == m ? B["onHuanSanZhang_Remove"](L["out_tiles"], L["out_tile_states"], !1) : B["recordHuanSanZhang_Remove"](L["out_tiles"], L["out_tile_states"]);
                            for (var w = [], h = 0; 3 > h; h++)
                                w.push(mjcore["MJPai"]["Create"](L["out_tiles"][h]));
                            B["ShowHuanSanZhang"](w, P["change_type"]),
                                Laya["timer"].once(2500, J, function () {
                                    0 == m ? B["onHuanSanZhang_Add"](L["in_tiles"], L["in_tile_states"], !1) : B["recordHuanSanZhang_Add"](L["in_tiles"], L["in_tile_states"]);
                                });
                        }, J = this, L = 0; L < S["DesktopMgr"].Inst["players"]["length"]; L++)B(L);
                        return uiscript["UI_HuanSanZhange"].Inst["enable"] && uiscript["UI_HuanSanZhange"].Inst["close"](),
                            uiscript["UI_HuanSanZhange_ChangeType"].Inst.show(P["change_type"]),
                            Laya["timer"].once(2500, this, function () {
                                if (S["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                    var B = P["operations"][S["DesktopMgr"].Inst["localPosition2Seat"](S["DesktopMgr"].Inst.seat)];
                                    S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && B && S["ActionOperation"].ob(B, m, 1000);
                                } else {
                                    if (P["doras"] && P["doras"]["length"] > 0)
                                        for (var J = 0; J < P["doras"]["length"]; J++)
                                            S["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](P["doras"][J])), uiscript["UI_DesktopInfo"].Inst["setDora"](J, S["DesktopMgr"].Inst.dora[J]);
                                    else
                                        P.dora && '' != P.dora && (S["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](P.dora)), uiscript["UI_DesktopInfo"].Inst["setDora"](0, S["DesktopMgr"].Inst.dora[0]));
                                    for (var J = 0; 4 > J; J++)
                                        S["DesktopMgr"].Inst["players"][J]["OnDoraRefresh"]();
                                    if (P["tingpai"])
                                        for (var J = 0; J < P["tingpai"]["length"]; J++)
                                            P["tingpai"][J].seat != S["DesktopMgr"].Inst["index_ju"] && S["DesktopMgr"].Inst["setTingpai"](P["tingpai"][J].seat, P["tingpai"][J]["tingpais1"]);
                                    S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && P["operation"] && S["ActionOperation"].ob(P["operation"], m, 1000);
                                }
                            }),
                            3000;
                    },
                    m["fastrecord"] = function (P, m) {
                        void 0 === m && (m = -1);
                        for (var B = 0; B < S["DesktopMgr"].Inst["players"]["length"]; B++) {
                            var J = S["DesktopMgr"].Inst["players"][B],
                                L = P["change_tile_infos"][S["DesktopMgr"].Inst["localPosition2Seat"](B)];
                            0 == B ? (J["onHuanSanZhang_Remove"](L["out_tiles"], L["out_tile_states"], !0), J["onHuanSanZhang_Add"](L["in_tiles"], L["in_tile_states"], !0)) : (J["recordHuanSanZhang_Remove"](L["out_tiles"], L["out_tile_states"]), J["recordHuanSanZhang_Add"](L["in_tiles"], L["in_tile_states"]));
                        }
                        if (uiscript["UI_HuanSanZhange"].Inst["enable"] && uiscript["UI_HuanSanZhange"].Inst["close"](), P["doras"] && P["doras"]["length"] > 0)
                            for (var B = 0; B < P["doras"]["length"]; B++)
                                S["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](P["doras"][B])), uiscript["UI_DesktopInfo"].Inst["setDora"](B, S["DesktopMgr"].Inst.dora[B]);
                        else
                            P.dora && '' != P.dora && (S["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](P.dora)), uiscript["UI_DesktopInfo"].Inst["setDora"](0, S["DesktopMgr"].Inst.dora[0]));
                        for (var B = 0; 4 > B; B++)
                            S["DesktopMgr"].Inst["players"][B]["OnDoraRefresh"]();
                        if (P["tingpai"])
                            for (var B = 0; B < P["tingpai"]["length"]; B++)
                                P["tingpai"][B].seat != S["DesktopMgr"].Inst["index_ju"] && S["DesktopMgr"].Inst["setTingpai"](P["tingpai"][B].seat, P["tingpai"][B]["tingpais1"]);
                        S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && P["operation"] && S["ActionOperation"].ob(P["operation"], m, 1000);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionChangeTile"] = P;
        }
            (view || (view = {}));





        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        var m = this;
                        app.Log.log("ActionSelectGap play data:" + JSON["stringify"](P));
                        for (var B = 0; B < P["gap_types"]["length"]; B++) {
                            var J = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)];
                            J["SetGapType"](P["gap_types"][B]);
                        }
                        uiscript["UI_DesktopInfo"].Inst["setGapType"](P["gap_types"], !0),
                            uiscript["UI_Dingque"].Inst["enable"] && uiscript["UI_Dingque"].Inst["close"](),
                            Laya["timer"].once(500, this, function () {
                                S["DesktopMgr"].Inst["is_dora3_mode"]() && uiscript["UI_DesktopInfo"].Inst["openDora3BeginShine"](),
                                    Laya["timer"].once(200, m, function () {
                                        if (S["DesktopMgr"].Inst["index_ju"] == S["DesktopMgr"].Inst.seat) {
                                            var m = {
                                                tingpais: P["tingpais0"],
                                                operation: P["operation"]
                                            };
                                            uiscript["UI_TingPai"].Inst["setData0"](m);
                                        } else {
                                            var m = {
                                                tingpais: P["tingpais1"]
                                            };
                                            uiscript["UI_TingPai"].Inst["setData1"](m, !1);
                                        }
                                        S["DesktopMgr"].Inst["ActionRunComplete"]();
                                    }),
                                    void 0 != P["operation"] && S["ActionOperation"].play(P["operation"]);
                            });
                    },
                    m["fastplay"] = function (P, m) {
                        app.Log.log("ActionChangeTile fastplay data:" + JSON["stringify"](P));
                        for (var B = 0; B < P["gap_types"]["length"]; B++) {
                            var J = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)];
                            J["SetGapType"](P["gap_types"][B]);
                        }
                        if (uiscript["UI_DesktopInfo"].Inst["setGapType"](P["gap_types"]), uiscript["UI_Dingque"].Inst["enable"] && uiscript["UI_Dingque"].Inst["close"](), S["DesktopMgr"].Inst["index_ju"] == S["DesktopMgr"].Inst.seat) {
                            var L = {
                                tingpais: P["tingpais0"],
                                operation: P["operation"]
                            };
                            uiscript["UI_TingPai"].Inst["setData0"](L);
                        } else {
                            var L = {
                                tingpais: P["tingpais1"]
                            };
                            uiscript["UI_TingPai"].Inst["setData1"](L, !1);
                        }
                        P["operation"] && -1 != m && Laya["timer"].once(100, this, function () {
                            S["ActionOperation"].play(P["operation"], m + 100);
                        });
                    },
                    m["record"] = function (P, m) {
                        void 0 === m && (m = 0),
                            app.Log.log("ActionChangeTile record data:" + JSON["stringify"](P));
                        for (var B = 0; B < P["gap_types"]["length"]; B++) {
                            var J = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)];
                            J["SetGapType"](P["gap_types"][B]);
                        }
                        return uiscript["UI_DesktopInfo"].Inst["setGapType"](P["gap_types"], !0),
                            uiscript["UI_Dingque"].Inst["enable"] && uiscript["UI_Dingque"].Inst["close"](),
                            Laya["timer"].once(500, this, function () {
                                if (P["tingpai"])
                                    for (var B = 0; B < P["tingpai"]["length"]; B++)
                                        P["tingpai"][B].seat != S["DesktopMgr"].Inst["index_ju"] && S["DesktopMgr"].Inst["setTingpai"](P["tingpai"][B].seat, P["tingpai"][B]["tingpais1"]);
                                S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && P["operation"] && S["ActionOperation"].ob(P["operation"], m, 1000);
                            }),
                            1300;
                    },
                    m["fastrecord"] = function (P, m) {
                        void 0 === m && (m = -1);
                        for (var B = 0; B < P["gap_types"]["length"]; B++) {
                            var J = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)];
                            J["SetGapType"](P["gap_types"][B]);
                        }
                        if (uiscript["UI_DesktopInfo"].Inst["setGapType"](P["gap_types"]), uiscript["UI_Dingque"].Inst["enable"] && uiscript["UI_Dingque"].Inst["close"](), P["tingpai"])
                            for (var B = 0; B < P["tingpai"]["length"]; B++)
                                P["tingpai"][B].seat != S["DesktopMgr"].Inst["index_ju"] && S["DesktopMgr"].Inst["setTingpai"](P["tingpai"][B].seat, P["tingpai"][B]["tingpais1"]);
                        S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && P["operation"] && S["ActionOperation"].ob(P["operation"], m, 1000);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionSelectGap"] = P;
        }
            (view || (view = {}));





        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        app.Log.log("ActionLiqi play data:" + JSON["stringify"](P)),
                            Laya["timer"].once(300, this, function () {
                                var m = P.seat,
                                    B = P["score"],
                                    J = S["DesktopMgr"].Inst["seat2LocalPosition"](m);
                                P["failed"] ? S["DesktopMgr"].Inst["players"][J]["ShowLiqiFailed"]() : S["DesktopMgr"].Inst["players"][J]["ShowLiqi"](),
                                    S["DesktopMgr"].Inst["players"][J]["SetScore"](B, S["DesktopMgr"].Inst["mainrole"]["score"]),
                                    uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]);
                            });
                    },
                    m["fastplay"] = function (P) {
                        app.Log.log("ActionLiqi fastplay data:" + JSON["stringify"](P));
                        var m = P.seat,
                            B = P["score"],
                            J = S["DesktopMgr"].Inst["seat2LocalPosition"](m);
                        P["failed"] ? S["DesktopMgr"].Inst["players"][J]["ShowLiqiFailed"](!1) : S["DesktopMgr"].Inst["players"][J]["ShowLiqi"](!1),
                            S["DesktopMgr"].Inst["players"][J]["SetScore"](B, S["DesktopMgr"].Inst["mainrole"]["score"]),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"], !1);
                    },
                    m["record"] = function (S) {
                        return app.Log.log("ActionLiqi record data:" + JSON["stringify"](S)),
                            this.play(S),
                            0;
                    },
                    m["fastrecord"] = function (S) {
                        app.Log.log("ActionLiqi fastrecord data:" + JSON["stringify"](S)),
                            this["fastplay"](S, 0);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionLiqi"] = P;
        }
            (view || (view = {}));





        !function (S) {
            var P = function () {
                function S(P) {
                    this.me = P,
                        S["scene_entrance"] = "chs" != GameMgr["client_language"] ? "scene/entrance_" + GameMgr["client_language"] + ".ls" : "scene/entrance.ls";
                }
                return S["prototype"].show = function () {
                    this["scene"] = Laya["loader"]["getRes"](S["scene_entrance"]),
                        this.me["addChild"](this["scene"]),
                        this["scene"]["visible"] = !0;
                },
                    S["prototype"]["close"] = function () {
                        Laya["timer"]["clearAll"](this),
                            this["scene"]["visible"] = !1,
                            this["scene"]["destroy"](!0);
                    },
                    S["scene_entrance"] = '',
                    S;
            }
                (),
                m = function () {
                    function S(S) {
                        this.me = S,
                            this["round"] = this.me["getChildByName"]("round"),
                            this.word = this.me["getChildByName"]("word"),
                            this.icon = this.me["getChildByName"]("icon"),
                            this.me["visible"] = !1;
                    }
                    return S["prototype"].show = function (S) {
                        var P = this;
                        if (!this.me["visible"]) {
                            this.me["visible"] = !0;
                            var m = Laya["timer"]["currTimer"];
                            if (Laya["timer"]["frameLoop"](1, this, function () {
                                P["round"]["rotation"] = (Laya["timer"]["currTimer"] - m) / 2000 * 360;
                            }), this.word.text = game["Tools"]["strOfLocalization"](2053), 0 == S)
                                this.icon["visible"] = !1, this.word.y = 150;
                            else
                                switch (this.icon["visible"] = !0, this.word.y = 195, S) {
                                    case 1:
                                    case 4:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/weixin.png");
                                        break;
                                    case 2:
                                    case 5:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/weibo.png");
                                        break;
                                    case 3:
                                    case 6:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/QQ.png");
                                        break;
                                    case 7:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/yostar.png");
                                        break;
                                    case 8:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/google.png");
                                        break;
                                    case 9:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/facebook.png");
                                        break;
                                    case 10:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/tiwtter.png");
                                        break;
                                    case 13:
                                        this.icon.skin = game["Tools"]["localUISrc"]("myres/entrance/facebook.png");
                                        break;
                                    default:
                                        this.icon["visible"] = !1,
                                            this.word.y = 150;
                                }
                        }
                    },
                        S["prototype"]["close"] = function () {
                            Laya["timer"]["clearAll"](this),
                                this.me["visible"] = !1;
                        },
                        S;
                }
                    (),
                B = function () {
                    function P(P) {
                        var m = this;
                        this["saveflag"] = !0,
                            this["locking"] = !1,
                            this["last_mail_time"] = -1,
                            this.me = P,
                            this.me["visible"] = !1,
                            this.root = this.me["getChildByName"]("jpenroot"),
                            this.root["getChildByName"]("btn_close")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                m["locking"] || m["close"]();
                            }, null, !1),
                            this["input_account"] = this.root["getChildByName"]("container_mail")["getChildByName"]("txtinput"),
                            this["label_account_no"] = this.root["getChildByName"]("container_mail")["getChildByName"]('no'),
                            this["input_account"].on("input", this, function () {
                                m["label_account_no"]["visible"] && (m["label_account_no"]["visible"] = !1),
                                    '' != m["input_code"].text && '' != m["input_account"].text && game["Tools"]["setGrayDisable"](m["btn_regist"], !1);
                            }),
                            this["input_code"] = this.root["getChildByName"]("container_yanzhengma")["getChildByName"]("txtinput"),
                            this["input_code"].on("input", this, function () {
                                '' != m["input_code"].text && '' != m["input_account"].text && game["Tools"]["setGrayDisable"](m["btn_regist"], !1);
                            }),
                            this["btn_getcode"] = this.root["getChildByName"]("sendbutton")["getChildByName"]("btn"),
                            this["btn_getcode"]["clickHandler"] = new Laya["Handler"](this, function () {
                                var S = m["input_account"].text,
                                    P = "/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/";
                                P.test(S) ? (Yo["request"]({
                                    account: S,
                                    lang: 'jp' == GameMgr["client_type"] ? 'ja' : 'kr' == GameMgr["client_type"] || 'kr' == GameMgr["client_language"] ? 'kr' : 'en'
                                }).then(function (S) {
                                    S ? 0 === S["result"] ? L.Inst["showInfo"](game["Tools"]["strOfLocalization"](2688)) : "50003" === S["result"] ? L.Inst["showError"](game["Tools"]["strOfLocalization"](2684)) : "50004" === S["result"] ? L.Inst["showError"](game["Tools"]["strOfLocalization"](2685)) : L.Inst["showError"](game["Tools"]["strOfLocalization"](2683)) : L.Inst["showError"](game["Tools"]["strOfLocalization"](2683));
                                }), m["last_mail_time"] = Laya["timer"]["currTimer"], m["refresh_code_state"]()) : m["label_account_no"]["visible"] = !0;
                            }),
                            this["btn_regist"] = this.root["getChildByName"]("btn_enter"),
                            this["btn_regist"]["clickHandler"] = new Laya["Handler"](this, function () {
                                if (!m["locking"]) {
                                    app.Log.log("btn mail login");
                                    var S = L.Inst["login_index"],
                                        P = m["input_account"].text;
                                    Yo["submit"]({
                                        account: m["input_account"].text,
                                        code: m["input_code"].text
                                    }).then(function (m) {
                                        S == L.Inst["login_index"] && (m ? (app.Log.log("mail login submit result:" + m["result"]), 0 === m["result"] ? (game["LocalStorage"]["setItem"]("mail_account", P), L["onSocioBack"](7, m["token"], m.uid)) : "50016" === m["result"] ? (L.Inst["showError"](game["Tools"]["strOfLocalization"](2686)), L.Inst["showContainerLogin"]()) : "50009" === m["result"] ? (L.Inst["showError"](game["Tools"]["strOfLocalization"](2687)), L.Inst["showContainerLogin"]()) : (L.Inst["showError"](game["Tools"]["strOfLocalization"](2689)), L.Inst["showContainerLogin"]())) : (app.Log.log("mail login submit result: no"), L.Inst["showError"](game["Tools"]["strOfLocalization"](2689)), L.Inst["showContainerLogin"]()));
                                    }),
                                        1 == m["saveflag"] ? (game["LocalStorage"]["setItem"]("useremail", m["input_account"].text), game["LocalStorage"]["setItem"]("saveflag", "true")) : (game["LocalStorage"]["setItem"]("useremail", ''), game["LocalStorage"]["setItem"]("saveflag", "false")),
                                        m["close"](),
                                        L.Inst["showLoginLoading"](7);
                                }
                            }),
                            this["label_info"] = this.root["getChildByName"]("sendbutton")["getChildByName"]("label");
                        var B = this.root["getChildByName"]("checkxieyi");
                        this["checkbox"] = B["getChildByName"]("checkbox"),
                            B["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function () {
                                m["checkbox"]["visible"] = !m["checkbox"]["visible"],
                                    m["btn_regist"]["visible"] = m["checkbox"]["visible"] && m["age_checkbox"]["visible"];
                            });
                        var J;
                        if ('jp' == GameMgr["client_type"] ? (B["getChildByName"]('en')["visible"] = !1, B["getChildByName"]('kr')["visible"] = !1, J = B["getChildByName"]('jp')) : 'kr' == GameMgr["client_language"] ? (B["getChildByName"]('jp')["visible"] = !1, B["getChildByName"]('en')["visible"] = !1, J = B["getChildByName"]('kr')) : (B["getChildByName"]('jp')["visible"] = !1, B["getChildByName"]('kr')["visible"] = !1, J = B["getChildByName"]('en')), B["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function () {
                            m["checkbox"]["visible"] = !m["checkbox"]["visible"],
                                m["btn_regist"]["visible"] = 'kr' == GameMgr["client_type"] ? m["checkbox"]["visible"] && m["age_checkbox"]["visible"] : m["checkbox"]["visible"];
                        }), J["getChildByName"]("guize")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            'jp' == GameMgr["client_type"] ? S["UI_User_Xieyi_enjp"].Inst.show("docs/jp_liyongguiyue.txt") : 'en' == GameMgr["client_type"] ? S["UI_User_Xieyi_enjp"].Inst.show("docs/term_of_service.txt") : 'kr' == GameMgr["client_type"] && S["UI_User_Xieyi_enjp"].Inst.show("docs/kr_liyongguiyue.txt");
                        }, null, !1), J["getChildByName"]("yinsi")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            'jp' == GameMgr["client_type"] ? S["UI_User_Xieyi_enjp"].Inst.show("docs/jp_yinsixieyi.txt") : 'en' == GameMgr["client_type"] ? S["UI_User_Xieyi_enjp"].Inst.show("docs/privacy_policy.txt") : 'kr' == GameMgr["client_type"] && S["UI_User_Xieyi_enjp"].Inst.show("docs/kr_yinsixieyi.txt");
                        }, null, !1), this.age = this.root["getChildByName"]("age"), this["age_checkbox"] = this.age["getChildByName"]("checkbox"), this.age["visible"] = 'kr' == GameMgr["client_type"], 'kr' == GameMgr["client_type"]) {
                            this.age["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function () {
                                m["age_checkbox"]["visible"] = !m["age_checkbox"]["visible"],
                                    m["btn_regist"]["visible"] = m["checkbox"]["visible"] && m["age_checkbox"]["visible"];
                            });
                            var w = this.root["getChildByName"]('bg');
                            w["getChildAt"](0)["height"] += 30,
                                w["getChildAt"](1)["height"] += 30,
                                this["btn_regist"].y += 30;
                        }
                    }
                    return P["prototype"]["onchangecheck"] = function (S) {
                        this["checkbox"]["visible"] = S,
                            this["btn_regist"]["visible"] = S,
                            this.root["getChildByName"]("checkxieyi")["visible"] = S;
                    },
                        P["prototype"].show = function () {
                            var P = this;
                            this["locking"] = !0,
                                this.me["visible"] = !0,
                                S["UIBase"]["anim_pop_out"](this.root, Laya["Handler"]["create"](this, function () {
                                    P["locking"] = !1;
                                })),
                                this["input_account"].text = '',
                                this["label_account_no"]["visible"] = !1,
                                this["input_code"].text = '',
                                this["checkbox"]["visible"] = !0,
                                this["age_checkbox"]["visible"] = !0,
                                this["btn_regist"]["visible"] = !0;
                            var m = game["LocalStorage"]["getItem"]("saveflag"),
                                B = game["LocalStorage"]["getItem"]("useremail");
                            "true" == m && (this["input_account"].text = B, app.Log.log(B)),
                                game["Tools"]["setGrayDisable"](this["btn_regist"], !0),
                                Laya["timer"]["clearAll"](this),
                                this["refresh_code_state"](),
                                Laya["timer"].loop(100, this, function () {
                                    P["refresh_code_state"]();
                                });
                        },
                        P["prototype"]["refresh_code_state"] = function () {
                            var S = 100000000;
                            game["Tools"]["setGrayDisable"](this["btn_getcode"], !0),
                                this["last_mail_time"] > 0 && (S = Laya["timer"]["currTimer"] - this["last_mail_time"]),
                                60000 > S ? (this["label_info"]["underline"] = !1, S = Math.ceil((60000 - S) / 1000), this["label_info"].text = game["Tools"]["strOfLocalization"](2682, [S["toString"]()]), this["label_info"]["underline"] = !1, game["Tools"]["setGrayDisable"](this["btn_getcode"], !0)) : (this["label_info"].text = game["Tools"]["strOfLocalization"](2720), this["label_info"]["underline"] = !0, game["Tools"]["setGrayDisable"](this["btn_getcode"], !1));
                        },
                        P["prototype"]["close"] = function () {
                            var P = this;
                            this["locking"] = !0,
                                S["UIBase"]["anim_pop_hide"](this.root, Laya["Handler"]["create"](this, function () {
                                    P["locking"] = !1,
                                        P.me["visible"] = !1,
                                        Laya["timer"]["clearAll"](P);
                                }));
                        },
                        P;
                }
                    (),
                J = function () {
                    function P(P) {
                        this["start_time"] = Laya["timer"]["currTimer"],
                            this.data = null,
                            this.me = P,
                            this.info = this.me["getChildByName"]("info"),
                            this["label_time"] = this.me["getChildByName"]("time"),
                            this.img = this.me["getChildByName"]("img"),
                            this.me["getChildByName"]("btn")["clickHandler"] = new Laya["Handler"](this, function () {
                                S["UI_Entrance_Choose_Route"].Inst.show();
                            });
                    }
                    return P["prototype"]["onEnable"] = function () {
                        var S = this;
                        Laya["timer"]["clearAll"](this),
                            this["update_data"](),
                            Laya["timer"].loop(100, this, function () {
                                S["update_data"]();
                            }),
                            Laya["timer"]["frameLoop"](1, this, function () {
                                S["refresh"]();
                            });
                    },
                        P["prototype"]["update"] = function () {
                            this["update_data"]();
                        },
                        P["prototype"]["update_data"] = function () {
                            var S = game["LobbyNetMgr"].Inst["GetLinkInfos"](),
                                P = game["LobbyNetMgr"].Inst["choosed_index"];
                            this.data = S[P],
                                this.info.text = game["Tools"]["strOfLocalization"](3150) + (P + 1)["toString"]();
                        },
                        P["prototype"]["refresh"] = function () {
                            var S = this.data,
                                P = S["delay"];
                            S["connect"] == game["EConnectState"]["connecting"] ? (this.img["visible"] = !1, this["label_time"]["visible"] = !0, this["label_time"].text = 1 > P ? '--' : Math["floor"](P / 2) + 'ms', this["label_time"]["fontSize"] = 30, this["label_time"]["color"] = S["delay"] < 300 ? "#32dd5b" : S["delay"] < 800 ? "#ffe154" : "#e03737") : S["connect"] == game["EConnectState"]["tryconnect"] ? (this.img["visible"] = !0, this["label_time"]["visible"] = !1, this.img.skin = S["fetch"] == game["EFetchState"]["success"] ? game["Tools"]["localUISrc"]("myres/entrance/connecting.png") : game["Tools"]["localUISrc"]("myres/entrance/fetching.png"), this.img["rotation"] = 0.5 * (Laya["timer"]["currTimer"] - this["start_time"])) : (this.img["visible"] = !1, this["label_time"]["visible"] = !0, this["label_time"]["fontSize"] = 25, this["label_time"]["color"] = "#7e818b", this["label_time"].text = S["in_maintenance"] ? game["Tools"]["strOfLocalization"](3149) : S["fetch"] == game["EFetchState"]["error"] ? game["Tools"]["strOfLocalization"](3147) : game["Tools"]["strOfLocalization"](3148));
                        },
                        P["prototype"]["onClose"] = function () {
                            Laya["timer"]["clearAll"](this);
                        },
                        P;
                }
                    (),
                L = function (L) {
                    function w() {
                        var S = L.call(this, new ui["entrance"]["entranceUI"]()) || this;
                        return S["scene"] = null,
                            S["login_type_tabs"] = [],
                            S["txt_account"] = null,
                            S["txt_password"] = null,
                            S["btn_login_cd"] = 0,
                            S["login_loading"] = null,
                            S["route_info"] = null,
                            S["btn_add2desktop"] = null,
                            S["container_language"] = null,
                            S["label_language"] = null,
                            S["page_maillogin"] = null,
                            S["container_extendInfo"] = null,
                            S["xieyiflag"] = 0,
                            S["login_index"] = 0,
                            S["login_type_tab_index"] = -1,
                            S["login_account_input_info"] = {},
                            w.Inst = S,
                            S;
                    }
                    return __extends(w, L),
                        w["trySocio"] = function (P) {
                            var m = Laya["LocalStorage"]["getItem"]("_pre_sociotype"),
                                B = -1;
                            m && '' != m && (B = parseInt(m));
                            var J = !0;
                            if (B === P)
                                if (P >= 1 && 6 >= P) {
                                    var L = Laya["LocalStorage"]["getItem"]("_pre_code");
                                    L && '' != L && (J = !1, this["onSocioBack"](P, L, null));
                                } else if (7 == P);
                                else if (P >= 8 && 10 >= P) {
                                    var w = game["LocalStorage"]["getItem"]("yostar_token");
                                    w || (w = '');
                                    var h = game["LocalStorage"]["getItem"]("yostar_uid");
                                    h || (h = ''),
                                        '' != w && '' != h && (J = !1, this["onSocioBack"](P, w, h));
                                }
                            if (J)
                                if (GameMgr["inConch"]) {
                                    var s = Laya["PlatformClass"]["createClass"]("layaair.majsoul.mjmgr");
                                    1 == P ? s.call("wxLogin") : 2 == P ? s.call("weiboLogin") : 3 == P && s.call("qqLogin");
                                } else if (GameMgr["iniOSWebview"]) {
                                    var R = '';
                                    switch (P) {
                                        case 1:
                                            R = "wxLogin";
                                            break;
                                        case 2:
                                            R = "wbLogin";
                                            break;
                                        case 3:
                                            R = "qqLogin";
                                    }
                                    if (R) {
                                        var v = this,
                                            f = function (S) {
                                                v["onSocioBack"](P + 3, S, null);
                                            };
                                        Laya["Browser"]["window"]["wkbridge"]["callNative"](R, '', f);
                                    }
                                } else {
                                    var A = window["location"].href;
                                    if (-1 != A["indexOf"]('?') && (A = A["split"]('?')[0]), 1 == P) {
                                        var u = "https://open.weixin.qq.com/connect/qrconnect?";
                                        u += "appid=wx2a0c2449cab74448",
                                            u += "&response_type=code",
                                            u += "&redirect_uri=" + encodeURI("https://www.majsoul.com/0?xdsfdl=1-" + A),
                                            u += "&scope=snsapi_login",
                                            Laya["Browser"]["window"]["location"].href = u;
                                    } else if (2 == P) {
                                        var u = "https://api.weibo.com/oauth2/authorize?";
                                        u += "client_id=399644784",
                                            u += "&redirect_uri=https://www.majsoul.com/0?xdsfdl=2-" + A,
                                            Laya["Browser"]["window"]["location"].href = u;
                                    } else if (3 == P) {
                                        var u = "https://graph.qq.com/oauth2.0/authorize?";
                                        u += "response_type=code",
                                            u += "&client_id=101480027",
                                            u += "&redirect_uri=" + encodeURI("https://www.majsoul.com/0"),
                                            u += GameMgr.Inst["link_url"]["indexOf"]("majsoul.com/1") >= 0 ? "&state=xdsfdl4" : "&state=xdsfdl3",
                                            Laya["Browser"]["window"]["location"].href = u;
                                    } else if (7 == P)
                                        this.Inst && this.Inst["showMailLogin"]();
                                    else if (8 == P) {
                                        var y = GameMgr.Inst["link_url"]["replace"]("index.html", '') + "redirect/";
                                        y += GameMgr["inRelease"] ? GameMgr["client_type"] : 'tt',
                                            y += "/yo_google.html",
                                            'kr' == GameMgr["client_type"] ? Yo["googleKrAuth"]({
                                                redirect_uri: y,
                                                openNewWindow: !1
                                            }) : 'jp' == GameMgr["client_type"] ? Yo["googleJaAuth"]({
                                                redirect_uri: y,
                                                openNewWindow: !1
                                            }) : Yo["googleAuth"]({
                                                redirect_uri: y,
                                                openNewWindow: !1
                                            });
                                    } else if (9 == P) {
                                        var y = GameMgr.Inst["link_url"]["replace"]("index.html", '') + "redirect/";
                                        y += GameMgr["inRelease"] ? GameMgr["client_type"] : 'tt',
                                            y += "/yo_facebook.html",
                                            'kr' == GameMgr["client_type"] ? Yo["facebookKrAuth"]({
                                                redirect_uri: y,
                                                openNewWindow: !1
                                            }) : Yo["facebookAuth"]({
                                                redirect_uri: y,
                                                openNewWindow: !1
                                            });
                                    } else if (10 == P) {
                                        var y = GameMgr.Inst["link_url"]["replace"]("index.html", '') + "redirect/";
                                        y += GameMgr["inRelease"] ? GameMgr["client_type"] : 'tt',
                                            y += "/yo_tiwtter.html",
                                            'jp' == GameMgr["client_type"] ? Yo["twitterJaAuth"]({
                                                redirect_uri: y,
                                                openNewWindow: !1
                                            }) : 'kr' == GameMgr["client_type"] ? Yo["twitterKrAuth"]({
                                                redirect_uri: y,
                                                openNewWindow: !1
                                            }) : Yo["twitterAuth"]({
                                                redirect_uri: y,
                                                openNewWindow: !1
                                            });
                                    } else if (13 == P) {
                                        var e = function () {
                                            Laya["LocalStorage"]["setItem"]("fblogin", '1');
                                            var S = "https://www.facebook.com/dialog/oauth?";
                                            S += "client_id=511764882872601",
                                                S += "&redirect_uri=" + encodeURI(GameMgr.Inst["link_url"]),
                                                S += "&response_type=token",
                                                Laya["Browser"]["window"]["location"].href = S;
                                        };
                                        void 0 != window.FB && null != window.FB ? window.FB["getLoginStatus"](function (P) {
                                            P && "connected" == P["status"] ? S["UI_Entrance"]["onSocioBack"](13, P["authResponse"]["accessToken"], null) : e();
                                        }) : e();
                                    } else
                                        14 == P && game["DmmSDK"]["login"]();
                                }
                        },
                        w["onSocioBack"] = function (S, P, m) {
                            app.Log.log("!!!!!!!!!!!!!!! " + S + ' ' + P),
                                this.Inst && this.Inst["_onSocioBack"](S, P, m);
                        },
                        w["prototype"]["onCreate"] = function () {
                            var L = this,
                                h = this.me["getChildByName"]("root");
                            this["container_login"] = this.me["getChildByName"]("root")["getChildByName"]("container_login");
                            var s = function (S) {
                                var P = {
                                    container: S,
                                    input: S["getChildByName"]("txtinput"),
                                    lb: S["getChildByName"]('lb')
                                };
                                return P["input"].text = '',
                                    P.lb["visible"] = !0,
                                    P["input"].on("focus", L, function () {
                                        P.lb["visible"] = !1;
                                    }),
                                    P["input"].on("blur", L, function () {
                                        P.lb["visible"] = !P["input"].text || '' == P["input"].text;
                                    }),
                                    P["input"].on("input", L, function () { }),
                                    P;
                            },
                                R = this["container_login"]["getChildByName"]("chs");
                            this["route_info"] = new J(R["getChildByName"]("img_lb")),
                                this["txt_account"] = s(R["getChildByName"]("container_account")),
                                this["txt_password"] = s(R["getChildByName"]("container_mima")),
                                this["txt_account"]["input"].on(laya["events"]["Event"]["KEY_DOWN"], this["txt_account"]["input"], function (S) {
                                    S["keyCode"] === Laya["Keyboard"]["ENTER"] && L["_btn_login"]();
                                }),
                                this["txt_password"]["input"].on(laya["events"]["Event"]["KEY_DOWN"], this["txt_account"]["input"], function (S) {
                                    S["keyCode"] === Laya["Keyboard"]["ENTER"] && L["_btn_login"]();
                                }),
                                this["login_type_tabs"] = [];
                            for (var v = function (S) {
                                var P = R["getChildByName"]("container_tabs")["getChildByName"]("tab" + S);
                                f["login_type_tabs"].push({
                                    btn: P,
                                    word: P["getChildByName"]("word"),
                                    choosen: P["getChildByName"]("chosen")
                                }),
                                    f["login_type_tabs"][S].btn["clickHandler"] = new Laya["Handler"](f, function () {
                                        L["login_type_tab_index"] != S && L["change_chs_login_tab"](S);
                                    });
                            }, f = this, A = 0; 2 > A; A++)
                                v(A);
                            this["container_extendInfo"] = h["getChildByName"]("extendinfo"),
                                this["container_extendInfo"]["visible"] = !1,
                                R["getChildByName"]("btn_regist")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["UI_Entrance_Mail_Regist"].Inst.show();
                                }, null, !1),
                                R["getChildByName"]("btn_forgetpassword")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["UI_Entrance_Reset_Password"].Inst.show();
                                }, null, !1),
                                R["getChildByName"]("btn_find_account")["clickHandler"] = new Laya["Handler"](this, function () {
                                    Laya["Browser"]["window"]["location"].href = game["Tools"]["getFinalUrl"]("https://www.maj-soul.com/find-account/");
                                }),
                                R["getChildByName"]("btn_find_account")["visible"] = "chs" == GameMgr["client_type"],
                                this["btn_add2desktop"] = this.me["getChildByName"]("root")["getChildByName"]("btn_add2desktop"),
                                this["btn_add2desktop"]["visible"] = (Laya["Browser"]["onAndriod"] || Laya["Browser"]["onAndroid"] || Laya["Browser"]["onIOS"]) && !GameMgr["inConch"] && !GameMgr["inConch"],
                                this["btn_add2desktop"]["clickHandler"] = new Laya["Handler"](this, function () {
                                    S["UI_Add2Desktop"].Inst && S["UI_Add2Desktop"].Inst.show();
                                }),
                                R["getChildByName"]("btn_enter")["clickHandler"] = Laya["Handler"]["create"](this, this["_btn_login"], null, !1),
                                this["login_loading"] = new m(h["getChildByName"]("loading_login")),
                                this["page_maillogin"] = new B(this.me["getChildByName"]("mail_login")),
                                this["scene"] = new P(this.me["getChildByName"]("scene")),
                                this["container_social"] = this["container_login"]["getChildByName"]("social"),
                                this["social_btns"] = [];
                            for (var A = 0; 4 > A; A++)
                                this["social_btns"].push(this["container_social"]["getChildByName"]("btn" + A)), this["social_btns"][A]["visible"] = !1;
                            var u = 55,
                                y = 395,
                                e = [];
                            "chs" == GameMgr["client_type"] && (e = [{
                                img: "myres/entrance/weibo.png",
                                type: 2
                            }, {
                                img: "myres/entrance/QQ.png",
                                type: 3
                            }, {
                                img: "myres/entrance/weixin.png",
                                type: 1
                            }
                            ]),
                                "chs_t" == GameMgr["client_type"] && (e = [{
                                    img: "myres/entrance/facebook.png",
                                    type: 13
                                }
                                ]),
                                'jp' == GameMgr["client_type"] && (e = [{
                                    img: "myres/entrance/google.png",
                                    type: 8
                                }, {
                                    img: "myres/entrance/tiwtter.png",
                                    type: 10
                                }
                                ]),
                                ('en' == GameMgr["client_type"] || 'kr' == GameMgr["client_type"]) && (e = [{
                                    img: "myres/entrance/google.png",
                                    type: 8
                                }, {
                                    img: "myres/entrance/facebook.png",
                                    type: 9
                                }, {
                                    img: "myres/entrance/tiwtter.png",
                                    type: 10
                                }
                                ]);
                            for (var x = function (S) {
                                var P = C["social_btns"][S];
                                S < e["length"] ? (P["visible"] = !0, P["getChildAt"](0).skin = game["Tools"]["localUISrc"](e[S].img), P["clickHandler"] = new Laya["Handler"](C, function () {
                                    w["trySocio"](e[S].type);
                                }), P.x = 1 == e["length"] ? (y - u) / 2 + 50 : (y - u) * S / (e["length"] - 1) + u) : P["visible"] = !1;
                            }, C = this, A = 0; A < this["social_btns"]["length"]; A++)
                                x(A);
                            2 == e["length"] && (this["social_btns"][0].x = 1 * (y - u) / 3 + u, this["social_btns"][1].x = 2 * (y - u) / 3 + u),
                                this.me["getChildByName"]("infos")["visible"] = "chs" == GameMgr["client_type"],
                                this.me["getChildByName"]("root")["getChildByName"]("loading_login")["getChildByName"]("btn_cancel")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    L["login_loading"].me["visible"] && (game["LobbyNetMgr"].Inst["Close"](), Laya["LocalStorage"]["setItem"]("_pre_sociotype", ''), L["showContainerLogin"](), L["btn_login_cd"] = Laya["timer"]["currTimer"] + 500, Laya["timer"].once(500, L, function () {
                                        game["LobbyNetMgr"].Inst["OpenConnect"](null);
                                    }));
                                }, null, !1);
                            var g = this.me["getChildByName"]("root")["getChildByName"]("container_login")["getChildByName"]("dmm");
                            g["getChildByName"]("btn_enter")["clickHandler"] = new Laya["Handler"](this, function () {
                                w["trySocio"](14);
                            });
                            var H = g["getChildByName"]("checksave"),
                                I = H["getChildByName"]("checkbox");
                            I["visible"] = "false" != Laya["LocalStorage"]["getItem"]("autologin"),
                                H["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function () {
                                    I["visible"] = !I["visible"],
                                        Laya["LocalStorage"]["setItem"]("autologin", I["visible"] ? "true" : "false");
                                });
                            var Q = h["getChildByName"]("btn_kefu");
                            Q["visible"] = "chs_t" == GameMgr["client_type"] || 'kr' == GameMgr["client_type"],
                                Q["clickHandler"] = new Laya["Handler"](this, function () {
                                    if ('kr' == GameMgr["client_type"])
                                        return S["UI_User_Xieyi_enjp"].Inst.show("docs/contact_us_kr_1.txt"), void 0;
                                    game["Tools"]["setGrayDisable"](Q, !0),
                                        Laya["timer"].once(1000, null, function () {
                                            game["Tools"]["setGrayDisable"](Q, !1);
                                        });
                                    var P = "https://ykf-webchat.7moor.com/wapchat.html?";
                                    P += "fromUrl=" + game["Tools"]["getFinalUrl"]("https://www.maj-soul.com"),
                                        P += "&urlTitle=网页",
                                        "chs" == GameMgr["client_language"] ? (P += "&accessId=4eb5a8b0-aafc-11ea-b418-397d5a9a3f68", P += "&language=ZHCN") : (P += "&accessId=4184be70-95b1-11ea-b027-616616b0ded6", P += "&language=EN");
                                    var m = {};
                                    m["登陆状态"] = "未登录",
                                        P += "&customField=" + JSON["stringify"](m),
                                        game["Tools"]["open_new_window"](P);
                                }),
                                this["container_language"] = this.me["getChildByName"]("container_language");
                            var i = this["container_language"]["getChildByName"]("btn");
                            this["label_language"] = i["getChildByName"]("info"),
                                i["clickHandler"] = new Laya["Handler"](this, function () {
                                    S["UI_Entrance_Change_Language"].Inst.show();
                                });
                        },
                        w["prototype"]["ModelJpEn"] = function () {
                            function S(S) {
                                1 == S && w["trySocio"](7);
                            }
                            var P = this["container_login"]["getChildByName"]("jpen"),
                                m = P["getChildByName"]("btn_enter");
                            m["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                S(!0);
                            }, null, !1);
                            var B = P["getChildByName"]("checksave"),
                                J = B["getChildByName"]("checkbox");
                            J["visible"] = "false" != Laya["LocalStorage"]["getItem"]("autologin"),
                                B["getChildByName"]("btn_check")["clickHandler"] = new Laya["Handler"](this, function () {
                                    J["visible"] = !J["visible"],
                                        Laya["LocalStorage"]["setItem"]("autologin", J["visible"] ? "true" : "false");
                                });
                        },
                        w["prototype"].show = function () {
                            var S = this;
                            GameMgr.Inst["postNewInfo2Server"]("enter_entrance", {
                                load_time: Date.now() - GameMgr.Inst["last_load_start_time"]
                            }),
                                GameMgr["inDmm"] ? (this["container_social"]["visible"] = !1, this["container_login"]["getChildByName"]("dmm")["visible"] = !0, this["container_login"]["getChildByName"]("chs")["visible"] = !1, this["container_login"]["getChildByName"]("jpen")["visible"] = !1) : (this["container_social"]["visible"] = !0, this["container_login"]["getChildByName"]("dmm")["visible"] = !1, "chs" == GameMgr["client_type"] || "chs_t" == GameMgr["client_type"] ? (this["container_social"].x = 40, this["container_social"].y = 475, this["container_login"]["getChildByName"]("chs")["visible"] = !0, this["container_login"]["getChildByName"]("jpen")["visible"] = !1, this["route_info"]["onEnable"]()) : (this["container_login"]["getChildByName"]("chs")["visible"] = !1, this["container_login"]["getChildByName"]("jpen")["visible"] = !0, this["ModelJpEn"]())),
                                -1 != GameMgr.Inst["beinvited_roomid"] ? (this["container_extendInfo"]["visible"] = !0, this["container_extendInfo"]["getChildAt"](0).text = game["Tools"]["strOfLocalization"](2054) + ':' + GameMgr.Inst["beinvited_roomid"]) : '' != GameMgr.Inst["outsee_paipuid"] ? (this["container_extendInfo"]["visible"] = !0, this["container_extendInfo"]["getChildAt"](0).text = game["Tools"]["strOfLocalization"](2055)) : this["container_extendInfo"]["visible"] = !1;
                            var P = this["login_index"],
                                m = Laya["LocalStorage"]["getItem"]("_pre_sociotype"),
                                B = -1;
                            if (m && '' != m && (B = parseInt(m)), !GameMgr.Inst["in_emergence"] && Laya["LocalStorage"]["getItem"]("_pre_access_token") && 13 == B)
                                this["showLoginLoading"](13), Laya["timer"].once(500, this, function () {
                                    P == S["login_index"] && S["_loginby_sociocode"](P, 13, Laya["LocalStorage"]["getItem"]("_pre_access_token"));
                                });
                            else if (!GameMgr.Inst["in_emergence"] && GameMgr.Inst["fb_login_info"] && "connected" == GameMgr.Inst["fb_login_info"]["status"])
                                this["showLoginLoading"](13), Laya["timer"].once(500, this, function () {
                                    if (P == S["login_index"]) {
                                        var m = GameMgr.Inst["fb_login_info"]["authResponse"];
                                        S["_loginby_sociocode"](P, 13, m["accessToken"]);
                                    }
                                });
                            else if (GameMgr.Inst["in_emergence"] || '1' != Laya["LocalStorage"]["getItem"]("fblogin")) {
                                this.me["getChildByName"]("root")["getChildByName"]("version").text = game["ResourceVersion"]["version"];
                                var J = Laya["LocalStorage"]["getItem"]("_pre_sociotype"),
                                    L = Laya["LocalStorage"]["getItem"]("ssssoooodd");
                                L || (L = '');
                                var w = -1;
                                if (J && '' != J && (w = parseInt(J)), GameMgr.Inst["in_emergence"] && (w = -1), app.Log.log("sociotype:" + w), 0 > w || w > 14)
                                    this["showContainerLogin"]();
                                else if (0 == w)
                                    '' != L ? (this["showLoginLoading"](0), Laya["timer"].once(600, this, function () {
                                        P == S["login_index"] && S["_try_socio_check"](P, w, L);
                                    })) : this["showContainerLogin"]();
                                else if (w >= 1 && 6 >= w) {
                                    var h = Laya["LocalStorage"]["getItem"]("_pre_code");
                                    h || (h = ''),
                                        '' != h || '' != L ? (this["showLoginLoading"](w), Laya["timer"].once(500, this, function () {
                                            P == S["login_index"] && (h && '' != h ? S["_loginby_sociocode"](P, w, h) : S["_try_socio_check"](P, w, L));
                                        })) : this["showContainerLogin"]();
                                } else if (w >= 7 && 10 >= w && "chs" != GameMgr["client_type"] && "chs_t" != GameMgr["client_type"] && Yo && Yo["login"]) {
                                    var s = game["LocalStorage"]["getItem"]("yostar_token");
                                    s || (s = '');
                                    var R = game["LocalStorage"]["getItem"]("yostar_uid");
                                    R || (R = ''),
                                        '' != R && '' != s ? (this["showLoginLoading"](w), Laya["timer"].once(500, this, function () {
                                            P == S["login_index"] && S["_login_2_yostar"](P, w, s, R);
                                        })) : this["showContainerLogin"]();
                                } else if (13 == w || 14 == w) {
                                    var v = Laya["LocalStorage"]["getItem"]("_pre_code");
                                    v || (v = ''),
                                        '' != v || '' != L ? (this["showLoginLoading"](w), Laya["timer"].once(500, this, function () {
                                            P == S["login_index"] && (v && '' != v ? S["_loginby_sociocode"](P, w, v) : S["_try_socio_check"](P, w, L));
                                        })) : this["showContainerLogin"]();
                                } else
                                    this["showContainerLogin"]();
                            } else {
                                if (this["showLoginLoading"](13), Laya["LocalStorage"]["getItem"]("_pre_access_token"))
                                    this["showLoginLoading"](13), Laya["timer"].once(500, this, function () {
                                        P == S["login_index"] && S["_loginby_sociocode"](P, 13, Laya["LocalStorage"]["getItem"]("_pre_access_token"));
                                    });
                                else {
                                    var f = Laya["timer"]["currTimer"],
                                        A = this,
                                        u = function () {
                                            if (null != window.FB && void 0 != window.FB) {
                                                if (FB["getLoginStatus"](function (S) {
                                                    GameMgr.Inst["fb_login_info"] = S;
                                                }), P != A["login_index"])
                                                    return;
                                                var S = GameMgr.Inst["fb_login_info"]["authResponse"];
                                                A["_loginby_sociocode"](P, 13, S["accessToken"]),
                                                    Laya["timer"]["clear"](A, u);
                                            } else
                                                Laya["timer"]["currTimer"] > f + 5000 && Laya["timer"]["clear"](A, u);
                                        };
                                    Laya["timer"]["frameLoop"](1, A, u);
                                }
                                Laya["LocalStorage"]["setItem"]("fblogin", '0');
                            }
                            if ("chs_t" == GameMgr["client_type"] || 'en' == GameMgr["client_type"])
                                switch (this["container_language"]["visible"] = !0, GameMgr["client_language"]) {
                                    case "chs":
                                        this["label_language"].text = "中文(简体)";
                                        break;
                                    case "chs_t":
                                        this["label_language"].text = "中文(繁體)";
                                        break;
                                    case 'jp':
                                        this["label_language"].text = "日本語";
                                        break;
                                    case 'en':
                                        this["label_language"].text = "English";
                                        break;
                                    case 'kr':
                                        this["label_language"].text = game["Tools"]["strOfLocalization"](3615);
                                        break;
                                    default:
                                        this["label_language"].text = '';
                                }
                            else
                                this["container_language"]["visible"] = !1;
                            this["scene"].show(),
                                this["enable"] = !0;
                        },
                        w["prototype"]["_onSocioBack"] = function (S, P, m) {
                            var B = this,
                                J = this["login_index"];
                            this["showLoginLoading"](S),
                                Laya["timer"].once(500, this, function () {
                                    J == B["login_index"] && (P && '' != P ? (Laya["LocalStorage"]["setItem"]("_pre_sociotype", "false" == Laya["LocalStorage"]["getItem"]("autologin") ? '' : S["toString"]()), m ? B["_login_2_yostar"](J, S, P, m) : (Laya["LocalStorage"]["setItem"]("_pre_code", P), B["_loginby_sociocode"](J, S, P))) : B["showContainerLogin"]());
                                });
                        },
                        w["prototype"]["showContainerLogin"] = function () {
                            if (-1 == this["login_type_tab_index"]) {
                                var S = game["LocalStorage"]["getItem"]("login_type_tab"),
                                    P = game["LocalStorage"]["getItem"]("account"),
                                    m = game["LocalStorage"]["getItem"]("password");
                                if (this["login_account_input_info"] = {}, P && m && '' != P && '' != m) {
                                    var B = 0;
                                    S && '' != S && (B = parseInt(S)),
                                        this["login_account_input_info"][B] = {
                                            account: P,
                                            password: m
                                        },
                                        this["change_chs_login_tab"](B);
                                } else
                                    this["change_chs_login_tab"](0);
                            } else
                                this["change_chs_login_tab"](this["login_type_tab_index"]);
                            this["container_login"]["visible"] = !0,
                                this["login_loading"]["close"](),
                                this["login_index"]++;
                        },
                        w["prototype"]["showLoginLoading"] = function (S) {
                            this["container_login"]["visible"] = !1,
                                this["login_loading"].show(S);
                        },
                        w["prototype"]["change_chs_login_tab"] = function (S) {
                            this["login_type_tab_index"] >= 0 && (this["login_account_input_info"][this["login_type_tab_index"]] = {
                                account: this["txt_account"]["input"].text,
                                password: this["txt_password"]["input"].text
                            }),
                                S || (S = 0),
                                this["login_type_tab_index"] = S;
                            for (var P = 0; P < this["login_type_tabs"]["length"]; P++)
                                this["login_type_tabs"][P].word["color"] = P == S ? "#446fdb" : "#84827b", this["login_type_tabs"][P]["choosen"]["visible"] = P == S;
                            switch (S) {
                                case 0:
                                    this["txt_account"].lb.text = game["Tools"]["strOfLocalization"](3138),
                                        this["txt_account"]["input"]["restrict"] = '',
                                        this["txt_account"]["input"]["maxChars"] = 50;
                                    break;
                                case 1:
                                    this["txt_account"].lb.text = game["Tools"]["strOfLocalization"](3132),
                                        this["txt_account"]["input"]["restrict"] = "0-9",
                                        this["txt_account"]["input"]["maxChars"] = 11;
                                    break;
                                default:
                                case 0:
                                    this["txt_account"].lb.text = '',
                                        this["txt_account"]["input"]["restrict"] = '',
                                        this["txt_account"]["input"]["maxChars"] = 50;
                            }
                            var m = this["login_account_input_info"][S],
                                B = '',
                                J = '';
                            m && (B = m["account"], J = m["password"]),
                                B && '' != B ? (this["txt_account"]["input"].text = B, this["txt_account"].lb["visible"] = !1) : (this["txt_account"]["input"].text = '', this["txt_account"].lb["visible"] = !0),
                                J && '' != J ? (this["txt_password"]["input"].text = J, this["txt_password"].lb["visible"] = !1) : (this["txt_password"]["input"].text = '', this["txt_password"].lb["visible"] = !0);
                        },
                        w["prototype"]["_btn_login"] = function () {
                            var P = this;
                            if (!this["showEmergency"]()) {
                                var m = this["txt_account"]["input"].text,
                                    B = this["txt_password"]["input"].text;
                                if (!m || '' == m)
                                    return this["showInfo"](game["Tools"]["strOfLocalization"](2056)), void 0;
                                if (!B || '' == B)
                                    return this["showInfo"](game["Tools"]["strOfLocalization"](2057)), void 0;
                                if (!(Laya["timer"]["currTimer"] < this["btn_login_cd"])) {
                                    if (this["multiLogin"]())
                                        return this["showInfo"](game["Tools"]["strOfLocalization"](2058)), void 0;
                                    this["btn_login_cd"] = Laya["timer"]["currTimer"] + 1000,
                                        this["showLoginLoading"](0);
                                    var J = this["login_index"];
                                    game["LobbyNetMgr"].Inst["OpenConnect"](Laya["Handler"]["create"](this, function (L) {
                                        Laya["timer"].once(800, P, function () {
                                            J == P["login_index"] && (L.open ? w.Inst["_try_login_account"](J, m, B) : (L["maintenance"] ? S["UI_Entrance_Maintenance"].Inst.show(L["maintenance"]) : P["showInfo"](L.info), P["showContainerLogin"](), P["btn_login_cd"] = 0));
                                        });
                                    }));
                                }
                            }
                        },
                        w["prototype"]["_try_regist_account"] = function (S, P, m, B) {
                            var J = this;
                            this["showEmergency"]() || app["NetAgent"]["sendReq2Lobby"]("Lobby", "signup", {
                                account: S,
                                password: GameMgr["encodeP"](m),
                                code: P,
                                type: B,
                                device: GameMgr.Inst["get_device_info"](),
                                client_version_string: GameMgr.Inst["getClientVersion"](),
                                tag: GameMgr.Inst["getReportClientType"]()
                            }, function (P, L) {
                                if (P)
                                    J["showError"](game["Tools"]["strOfLocalization"](2059), P), app.Log["Error"](P["message"]);
                                else if (L["error"])
                                    J["showError"](game["Tools"]["strOfLocalization"](2060), L["error"].code), app.Log["Error"](game["Tools"]["strOfLocalization"](2219, [JSON["stringify"](L)]));
                                else {
                                    var w = B - 1;
                                    J["login_account_input_info"][w] = {
                                        account: S,
                                        password: m
                                    },
                                        J["change_chs_login_tab"](w),
                                        J["_try_login_account"](J["login_index"], S, m);
                                }
                            });
                        },
                        w["prototype"]["_try_login_account"] = function (P, m, B) {
                            var J = this;
                            if (P == this["login_index"]) {
                                if (this["multiLogin"]())
                                    return this["showInfo"](game["Tools"]["strOfLocalization"](2058)), this["showContainerLogin"](), void 0;
                                var L = GameMgr.Inst["get_device_info"](),
                                    w = game["Tools"]["get_platform_currency"]();
                                game["LocalStorage"]["setItem"]("account", m),
                                    game["LocalStorage"]["setItem"]("password", B),
                                    game["LocalStorage"]["setItem"]("login_type_tab", this["login_type_tab_index"]["toString"]()),
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "login", {
                                        account: m,
                                        password: GameMgr["encodeP"](B),
                                        reconnect: !1,
                                        device: L,
                                        random_key: GameMgr["device_id"],
                                        client_version: {
                                            resource: game["ResourceVersion"]["version"]
                                        },
                                        gen_access_token: !0,
                                        currency_platforms: w,
                                        type: this["login_type_tab_index"],
                                        client_version_string: GameMgr.Inst["getClientVersion"](),
                                        tag: GameMgr.Inst["getReportClientType"]()
                                    }, function (L, w) {
                                        if (P == J["login_index"])
                                            if (J["btn_login_cd"] = 0, L)
                                                J["showError"](game["Tools"]["strOfLocalization"](2061), L), J["showContainerLogin"]();
                                            else if (w["error"]) {
                                                if (156 == w["error"].code)
                                                    return S["UI_Entrance_Mail_Regist"].Inst["enable"] && (S["UI_Entrance_Mail_Regist"].Inst["close"](), J["showLoginLoading"](0)), J["onLoginQueueError"](Laya["Handler"]["create"](J, function () {
                                                        J["_try_login_account"](J["login_index"], m, B);
                                                    })), void 0;
                                                503 == w["error"].code ? J["onLoginErrorProhibition"](w["error"]) : J["showError"]('', w["error"].code),
                                                    J["showContainerLogin"]();
                                            } else
                                                Laya["LocalStorage"]["setItem"]("_pre_sociotype", '0'), game["LocalStorage"]["setItem"]("account", m), game["LocalStorage"]["setItem"]("password", B), game["LocalStorage"]["setItem"]("login_type_tab", J["login_type_tab_index"]["toString"]()), GameMgr.Inst["account"] = m, GameMgr.Inst["password"] = B, GameMgr.Inst["sociotype"] = 0, GameMgr["country"] = w["country"], GameMgr.Inst["account_id"] = w["account_id"], GameMgr.Inst["account_data"] = w["account"], S["UI_User_Xieyi_enjp"].init(Laya["Handler"]["create"](J, function () {
                                                    S["UI_User_Xieyi_enjp"]["needCheckVersion"] ? S["UI_User_Xieyi_Update"].Inst.show(Laya["Handler"]["create"](J, function () {
                                                        J["_onLoginSuccess"](0, w);
                                                    })) : J["_onLoginSuccess"](0, w);
                                                }));
                                    });
                            }
                        },
                        w["prototype"]["_login_2_yostar"] = function (P, m, B, J) {
                            var L = this;
                            if (!this["showEmergency"]() && P == this["login_index"]) {
                                app.Log.log("login_2_yostar sociotype:" + m + " token:" + B + " uid:" + J);
                                var w = this,
                                    h = function (P, m) {
                                        switch (void 0 === m && (m = 0), m = Math["floor"](m / 1000), P) {
                                            case 1:
                                                w["showError"](game["Tools"]["strOfLocalization"](2677));
                                                break;
                                            case 2:
                                                w["showError"](game["Tools"]["strOfLocalization"](2678));
                                                break;
                                            case 3:
                                                w["showError"](game["Tools"]["strOfLocalization"](2679));
                                                break;
                                            case 4:
                                                w["showError"](game["Tools"]["strOfLocalization"](2680));
                                                break;
                                            case 5:
                                                'kr' == GameMgr["client_type"] ? (S["UI_Entrance_Account_Deleted"].Inst["setYoInfo"](J, B), S["UI_Entrance_Account_Deleted"].Inst.show(game["Tools"]["strOfLocalization"](8026, [game["Tools"]["time2YearMounthDate"](m, '-') + ' ' + game["Tools"]["time2HourMinute"](m)]))) : w["showError"](game["Tools"]["strOfLocalization"](8031, [game["Tools"]["time2YearMounthDate"](m, '-') + ' ' + game["Tools"]["time2HourMinute"](m)]));
                                                break;
                                            default:
                                                w["showError"](game["Tools"]["strOfLocalization"](2676));
                                        }
                                        Laya["LocalStorage"]["setItem"]("_pre_sociotype", ''),
                                            w["showContainerLogin"]();
                                    };
                                Yo["login"] && Yo["login"]({
                                    uid: J,
                                    token: B
                                }).then(function (s) {
                                    P == L["login_index"] && (s ? (app.Log.log("yo login data.result:" + s["result"]), 0 == s["result"] ? 'kr' == GameMgr["client_type"] && 1 != s["kr_kmc_status"] ? (Laya["LocalStorage"]["setItem"]("_pre_sociotype", ''), w["showContainerLogin"](), S["UI_ShiMingRenZheng_KR"].Inst.show(game["Tools"]["strOfLocalization"](2 == s["kr_kmc_status"] ? 8043 : 8044), Laya["Handler"]["create"](L, function () {
                                        Yo["kmcStart"]({
                                            accessToken: s["accessToken"]
                                        }).then(function () { });
                                    }))) : (game["LocalStorage"]["setItem"]("yostar_token", B), game["LocalStorage"]["setItem"]("yostar_uid", J), GameMgr.Inst["yostar_accessToken"] = s["accessToken"], GameMgr.Inst["yostar_uid"] = J, GameMgr.Inst["yostar_login_info"] = s, w["_loginby_sociocode"](P, m, s["accessToken"], J)) : h(s["result"], s["reborn_before_ms"])) : (app.Log.log("yo login data.result: no"), h(-1)));
                                });
                            }
                        },
                        w["prototype"]["_loginby_sociocode"] = function (P, m, B, J) {
                            var L = this;
                            if (void 0 === J && (J = ''), !this["showEmergency"]() && P == this["login_index"]) {
                                if (app.Log.log("_loginby_sociocode0 sociotype:" + m + ", code:" + B + ", uid:" + J), !game["LobbyNetMgr"].Inst.isOK)
                                    return game["LobbyNetMgr"].Inst["OpenConnect"](Laya["Handler"]["create"](this, function (w) {
                                        P == L["login_index"] && (w.open ? L["_loginby_sociocode"](P, m, B, J) : (w["maintenance"] ? S["UI_Entrance_Maintenance"].Inst.show(w["maintenance"]) : L["showInfo"](w.info), L["showContainerLogin"]()));
                                    })), void 0;
                                Laya["LocalStorage"]["setItem"]("_pre_code", ''),
                                    Laya["LocalStorage"]["setItem"]("_pre_sociotype", ''),
                                    app.Log.log("_loginby_sociocode1 sociotype" + m + " code:" + B + " uid:" + J);
                                var w = {
                                    type: m,
                                    code: B
                                };
                                J && (w.uid = J),
                                    w["client_version_string"] = GameMgr.Inst["getClientVersion"](),
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "oauth2Auth", w, function (S, B) {
                                        P == L["login_index"] && (S ? (app.Log.log("oauth2Auth err:" + S), L["showError"](game["Tools"]["strOfLocalization"](2059), S), app.Log["Error"](S["message"]), L["showContainerLogin"](), 13 == m && Laya["LocalStorage"]["removeItem"]("_pre_access_token")) : (app.Log.log("oauth2Auth res: " + JSON["stringify"](B)), B["error"] ? (L["showError"](game["Tools"]["strOfLocalization"](2062), B["error"].code), L["showContainerLogin"]()) : L["_try_socio_check"](P, m, B["access_token"])));
                                    });
                            }
                        },
                        w["prototype"]["_try_socio_check"] = function (P, m, B) {
                            var J = this;
                            if (!this["showEmergency"]() && P == this["login_index"])
                                return this["multiLogin"]() ? (this["showInfo"](game["Tools"]["strOfLocalization"](2058)), this["showContainerLogin"](), void 0) : game["LobbyNetMgr"].Inst.isOK ? (Laya["timer"].once(800, this, function () {
                                    P == J["login_index"] && (app.Log.log("_try_socio_check sociotype" + m + " access_token:" + B), app["NetAgent"]["sendReq2Lobby"]("Lobby", "oauth2Check", {
                                        type: m,
                                        access_token: B
                                    }, function (S, L) {
                                        P == J["login_index"] && (S ? (J["showError"](game["Tools"]["strOfLocalization"](2059), S), app.Log["Error"](S["message"]), J["showContainerLogin"]()) : (app.Log.log("oauth2Check res: " + JSON["stringify"](L)), L["error"] ? (J["showError"](game["Tools"]["strOfLocalization"](2062), L["error"].code), J["showContainerLogin"]()) : L["has_account"] ? J["_try_login_socio"](P, m, B) : J["_try_regist_socio"](P, m, B)));
                                    }));
                                }), void 0) : (game["LobbyNetMgr"].Inst["OpenConnect"](Laya["Handler"]["create"](this, function (L) {
                                    P == J["login_index"] && (L.open ? J["_try_socio_check"](P, m, B) : (L["maintenance"] ? S["UI_Entrance_Maintenance"].Inst.show(L["maintenance"]) : J["showInfo"](L.info), J["showContainerLogin"]()));
                                })), void 0);
                        },
                        w["prototype"]["_try_regist_socio"] = function (S, P, m) {
                            var B = this;
                            if (!this["showEmergency"]() && S == this["login_index"]) {
                                app.Log.log("_try_regist_socio sociotype" + P + " access_token:" + m);
                                var J = Laya["LocalStorage"]["getItem"]("__ad_s");
                                J && (GameMgr.Inst["_ad_str"] = J);
                                var L = {};
                                L.type = P,
                                    L["access_token"] = m,
                                    L["device"] = GameMgr.Inst["get_device_info"](),
                                    GameMgr.Inst["_ad_str"] && (L["advertise_str"] = GameMgr.Inst["_ad_str"]),
                                    7 == P && (L["email"] = game["LocalStorage"]["getItem"]("mail_account")),
                                    L["client_version_string"] = GameMgr.Inst["getClientVersion"](),
                                    L.tag = GameMgr.Inst["getReportClientType"](),
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "oauth2Signup", L, function (J, L) {
                                        S == B["login_index"] && (J ? (app.Log.log("oauth2Signup err:" + J), B["showError"](game["Tools"]["strOfLocalization"](2059), J), app.Log["Error"](J["message"]), B["showContainerLogin"]()) : (app.Log.log("oauth2Signup res: " + JSON["stringify"](L)), L["error"] ? (B["showError"](game["Tools"]["strOfLocalization"](2060), L["error"].code), app.Log["Error"](game["Tools"]["strOfLocalization"](2219, [JSON["stringify"](L)])), B["showContainerLogin"]()) : (app["PlayerBehaviorStatistic"]["fb_trace_force"](app["EBehaviorType"]["CompleteRegistration"]), app["PlayerBehaviorStatistic"]["google_trace_force"](app["EBehaviorType"]["G_Role_create"]), app["PlayerBehaviorStatistic"]["tw_trace_force"](app["EBehaviorType"]["TW_Signup"]), B["_try_login_socio"](S, P, m))));
                                    });
                            }
                        },
                        w["prototype"]["_try_login_socio"] = function (P, m, B) {
                            var J = this;
                            if (P == this["login_index"]) {
                                if (this["multiLogin"]())
                                    return this["showError"](game["Tools"]["strOfLocalization"](2058)), this["showContainerLogin"](), void 0;
                                app.Log.log("_try_login_socio sociotype" + m + " access_token:" + B);
                                var L = GameMgr.Inst["get_device_info"](),
                                    w = game["Tools"]["get_platform_currency"]();
                                app["NetAgent"]["sendReq2Lobby"]("Lobby", "oauth2Login", {
                                    type: m,
                                    access_token: B,
                                    reconnect: !1,
                                    device: L,
                                    random_key: GameMgr["device_id"],
                                    client_version: {
                                        resource: game["ResourceVersion"]["version"]
                                    },
                                    currency_platforms: w,
                                    client_version_string: GameMgr.Inst["getClientVersion"](),
                                    tag: GameMgr.Inst["getReportClientType"]()
                                }, function (L, w) {
                                    P == J["login_index"] && (J["btn_login_cd"] = 0, L ? (app.Log.log("oauth2Login err:" + L), J["showError"](game["Tools"]["strOfLocalization"](2061), L), J["showContainerLogin"]()) : (app.Log.log("oauth2Login res: " + JSON["stringify"](w)), w["error"] ? (156 == w["error"].code ? J["onLoginQueueError"](Laya["Handler"]["create"](J, function () {
                                        J["_try_login_socio"](J["login_index"], m, B);
                                    })) : 503 == w["error"].code ? J["onLoginErrorProhibition"](w["error"]) : J["showError"]('', w["error"].code), J["showContainerLogin"]()) : (Laya["LocalStorage"]["setItem"]("_pre_sociotype", "false" == Laya["LocalStorage"]["getItem"]("autologin") ? '' : m["toString"]()), Laya["LocalStorage"]["setItem"]("ssssoooodd", B), GameMgr.Inst["sociotype"] = m, GameMgr.Inst["access_token"] = B, GameMgr["country"] = w["country"], GameMgr.Inst["account_id"] = w["account_id"], GameMgr.Inst["account_data"] = w["account"], S["UI_User_Xieyi_enjp"].init(Laya["Handler"]["create"](J, function () {
                                        S["UI_User_Xieyi_enjp"]["needCheckVersion"] ? S["UI_User_Xieyi_Update"].Inst.show(Laya["Handler"]["create"](J, function () {
                                            J["_onLoginSuccess"](m, w);
                                        })) : J["_onLoginSuccess"](m, w);
                                    })))));
                                });
                            }
                        },
                        w["prototype"]["_onLoginPengdingPhone"] = function () { },
                        w["prototype"]["_onLoginSuccess"] = function (P, m, B) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(m),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(m));
                                }
                            }));
                            var J = this;
                            if (void 0 === B && (B = !1), app.Log.log("登陆：" + JSON["stringify"](m)), GameMgr.Inst["account_id"] = m["account_id"], GameMgr.Inst["account_data"] = m["account"], S["UI_ShiMingRenZheng"]["renzhenged"] = m["is_id_card_authed"], GameMgr.Inst["account_numerical_resource"] = {}, m["account"]["platform_diamond"])
                                for (var L = m["account"]["platform_diamond"], w = 0; w < L["length"]; w++)
                                    GameMgr.Inst["account_numerical_resource"][L[w].id] = L[w]["count"];
                            if (m["account"]["skin_ticket"] && (GameMgr.Inst["account_numerical_resource"]["100004"] = m["account"]["skin_ticket"]), m["account"]["platform_skin_ticket"])
                                for (var h = m["account"]["platform_skin_ticket"], w = 0; w < h["length"]; w++)
                                    GameMgr.Inst["account_numerical_resource"][h[w].id] = h[w]["count"];
                            GameMgr.Inst["account_refresh_time"] = Laya["timer"]["currTimer"],
                                m["game_info"] && (GameMgr.Inst["ingame"] = !0, GameMgr.Inst["mj_server_location"] = m["game_info"]["location"], GameMgr.Inst["mj_game_token"] = m["game_info"]["connect_token"], GameMgr.Inst["mj_game_uuid"] = m["game_info"]["game_uuid"]),
                                m["access_token"] && (Laya["LocalStorage"]["setItem"]("_pre_sociotype", "false" == Laya["LocalStorage"]["getItem"]("autologin") ? '' : P["toString"]()), Laya["LocalStorage"]["setItem"]("ssssoooodd", m["access_token"]), GameMgr.Inst["sociotype"] = P, GameMgr.Inst["access_token"] = m["access_token"]);
                            var s = this,
                                R = function () {
                                    GameMgr.Inst["onLoadStart"]("login"),
                                        Laya["LocalStorage"]["removeItem"]("__ad_s"),
                                        S["UI_Loading"].Inst.show("load_lobby"),
                                        s["enable"] = !1,
                                        s["scene"]["close"](),
                                        S["UI_Entrance_Mail_Regist"].Inst["close"](),
                                        s["login_loading"]["close"](),
                                        S["UIMgr"].Inst["openLobbyUI"](Laya["Handler"]["create"](s, function () {
                                            GameMgr.Inst["afterLogin"](),
                                                s["route_info"]["onClose"](),
                                                GameMgr.Inst["account_data"]["anti_addiction"] && S["UIMgr"].Inst["ShowPreventAddiction"](),
                                                s["destroy"](),
                                                s["disposeRes"](),
                                                S["UI_Add2Desktop"].Inst && (S["UI_Add2Desktop"].Inst["destroy"](), S["UI_Add2Desktop"].Inst = null);
                                        }), Laya["Handler"]["create"](s, function (P) {
                                            return S["UI_Loading"].Inst["setProgressVal"](0.2 * P);
                                        }, null, !1));
                                },
                                v = Laya["Handler"]["create"](this, function () {
                                    0 != GameMgr.Inst["account_data"]["frozen_state"] ? app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchRefundOrder", {}, function (P, m) {
                                        P ? (app.Log.log("fetchRefundOrder err:" + P), J["showError"](game["Tools"]["strOfLocalization"](2061), P), J["showContainerLogin"]()) : (S["UI_Refund"]["orders"] = m["orders"], S["UI_Refund"]["clear_deadline"] = m["clear_deadline"], S["UI_Refund"]["message"] = m["message"], R());
                                    }) : R();
                                });
                            if (S["UI_Loading"]["Loading_Images"] = [], GameMgr.Inst["account_data"]["loading_image"])
                                for (var f = 0, A = GameMgr.Inst["account_data"]["loading_image"]; f < A["length"]; f++) {
                                    var u = A[f];
                                    S["UI_Loading"]["Loading_Images"].push(u);
                                }
                            S["UI_Loading"]["loadNextCG"](),
                                "chs" != GameMgr["client_type"] || m["account"]["phone_verify"] ? v.run() : (S["UI_Entrance_Mail_Regist"].Inst["close"](), this["login_loading"]["close"](), this["container_login"]["visible"] = !1, S["UI_Bind_Phone1"].Inst.show(!0, Laya["Handler"]["create"](this, function () {
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchPhoneLoginBind", {}, function (P, m) {
                                        P || m["error"] ? J["showError"](P, m["error"]) : 0 == m["phone_login"] ? S["UI_Create_Phone_Account"].Inst.show(v) : S["UI_Canot_Create_Phone_Account"].Inst.show(v);
                                    });
                                })));
                        },
                        w["prototype"]["showMailLogin"] = function () {
                            this["page_maillogin"].show();
                        },
                        w["prototype"]["showInfo"] = function (P) {
                            var m = '';
                            P && (m += P),
                                S["UI_Entrance_Error"].Inst.show(m, 0, !1);
                        },
                        w["prototype"]["showError"] = function (P, m, B) {
                            void 0 === m && (m = -1),
                                void 0 === B && (B = '');
                            var J = '';
                            P && (J += P),
                                -1 != m && (J["length"] > 0 && (J += ','), J += cfg.info["error"].get(m) ? cfg.info["error"].get(m)[GameMgr["client_language"]] : game["Tools"]["strOfLocalization"](2063)),
                                B && (J += ", info:" + B),
                                S["UI_Entrance_Error"].Inst.show(J, m, !1);
                        },
                        w["prototype"]["updateServer"] = function () {
                            this["route_info"]["update"]();
                        },
                        w["prototype"]["multiLogin"] = function () {
                            var S = Laya["LocalStorage"]["getItem"]("dolllt");
                            return S && '' != S ? game["Tools"]["currentTime"] < parseFloat(S) + 1.5 && parseFloat(S) < game["Tools"]["currentTime"] + 1800 : !1;
                        },
                        w["prototype"]["disposeRes"] = function () {
                            Laya["Loader"]["clearTextureRes"]("res/atlas/" + game["Tools"]["localUISrc"]("myres/entrance.atlas"));
                            var S = '';
                            S = "chs" != GameMgr["client_language"] ? "scene/Assets/Resource/entrance/icon_color_" + GameMgr["client_language"] + ".png" : "scene/Assets/Resource/entrance/icon_color.png";
                            var P = [];
                            P.push(S),
                                P.push("scene/Assets/Resource/entrance/Materials/icon_color.lmat"),
                                P.push("scene/Assets/Resource/entrance/Materials/blackmask.lmat");
                            for (var m = 0; m < P["length"]; m++) {
                                var B = Laya["loader"]["getRes"](P[m]);
                                B && B["dispose"](!0);
                            }
                        },
                        w["prototype"]["showEmergency"] = function () {
                            return GameMgr.Inst["in_emergence"] && this["showInfo"](GameMgr.Inst["emergence_notice"]),
                                GameMgr.Inst["in_emergence"];
                        },
                        w["prototype"]["onLoginErrorProhibition"] = function (P) {
                            var m = 0;
                            P["u32_params"] && P["u32_params"]["length"] >= 1 && (m = P["u32_params"][0]),
                                6 == m ? 'kr' == GameMgr["client_type"] || "chs_t" == GameMgr["client_type"] ? S["UI_Entrance_Account_Deleted"].Inst.show(game["Tools"]["strOfLocalization"]('kr' == GameMgr["client_type"] ? 8026 : 8035, [game["Tools"]["time2YearMounthDate"](P["u32_params"][1]) + ' ' + game["Tools"]["time2HourMinute"](P["u32_params"][1], "chs_t" == GameMgr["client_type"])])) : this["showError"](game["Tools"]["strOfLocalization"](8031, [game["Tools"]["time2YearMounthDate"](P["u32_params"][1]) + ' ' + game["Tools"]["time2HourMinute"](P["u32_params"][1])])) : S["UI_Entrance_Prohibition"].Inst.show(P);
                        },
                        w["prototype"]["onLoginQueueError"] = function (P) {
                            var m = this;
                            this["queue_finish_handler"] = Laya["Handler"]["create"](this, this["onLoginQueueFinished"]),
                                app["NetAgent"]["AddListener2Lobby"]("NotifyLoginQueueFinished", this["queue_finish_handler"]),
                                this["retry_handler"] = P,
                                this["page_maillogin"]["locking"] = !0,
                                app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchQueueInfo", {}, function (P, B) {
                                    m["page_maillogin"]["locking"] = !1,
                                        P || B["error"] ? (m["onCancelQueue"](), P ? S["UI_Entrance_Error"].Inst.show(game["Tools"]["strOfLocalization"](3766), 0, !1) : m["showError"](P, B["error"])) : m["retry_handler"] && S["UI_Entrance_Queue"].Inst.show(B["remain"], B.rank);
                                });
                        },
                        w["prototype"]["onCancelQueue"] = function () {
                            this["retry_handler"] = null,
                                game["LobbyNetMgr"].Inst["Close"](),
                                this["btn_login_cd"] = Laya["timer"]["currTimer"] + 500,
                                Laya["timer"].once(500, this, function () {
                                    game["LobbyNetMgr"].Inst["OpenConnect"](null);
                                }),
                                this["onLoginQueueFinished"]();
                        },
                        w["prototype"]["onLoginQueueFinished"] = function () {
                            var P = this;
                            this["showContainerLogin"](),
                                app["NetAgent"]["RemoveListener2Lobby"]("NotifyLoginQueueFinished", this["queue_finish_handler"]),
                                S["UI_Entrance_Queue"].Inst["enable"] && S["UI_Entrance_Queue"].Inst["close"](),
                                this["retry_handler"] && Laya["timer"].once(200, this, function () {
                                    P["retry_handler"] && (P["retry_handler"].run(), P["retry_handler"] = null);
                                });
                        },
                        w.Inst = null,
                        w;
                }
                    (S["UIBase"]);
            S["UI_Entrance"] = L;
        }
            (uiscript || (uiscript = {}));




        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        app.Log.log("ActionBabei play data:" + JSON["stringify"](P)),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1);
                        var m = P.seat,
                            B = mjcore["MJPai"]["Create"]('4z');
                        S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["AddBabei"](B, P["moqie"], !0),
                            S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["PlaySound"]("act_babei");
                        var J = !1;
                        P["tile_state"] && P["tile_state"] > 0 && (J = !0),
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0),
                            m == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["onBabei"](B, J, !1) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["onBabei"](P["moqie"], J, !1),
                            P["operation"] && Laya["timer"].once(500, this, function () {
                                S["ActionOperation"].play(P["operation"]);
                            }),
                            void 0 != P["zhenting"] && void 0 == P["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](P["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"])),
                            m == S["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](P, !1),
                            S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                    },
                    m["fastplay"] = function (P, m) {
                        app.Log.log("ActionBabei fastplay data:" + JSON["stringify"](P) + " usetime:" + m),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !0);
                        var B = P.seat,
                            J = mjcore["MJPai"]["Create"]('4z');
                        S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["AddBabei"](J, P["moqie"], !1);
                        var L = !1;
                        P["tile_state"] && P["tile_state"] > 0 && (L = !0),
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["onBabei"](J, L, !0) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["onBabei"](P["moqie"], L, !0),
                            P["operation"] && -1 != m && Laya["timer"].once(500, this, function () {
                                S["ActionOperation"].play(P["operation"], m);
                            }),
                            void 0 != P["zhenting"] && void 0 == P["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](P["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"])),
                            B == S["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](P, !0),
                            S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                    },
                    m["record"] = function (P, m) {
                        void 0 === m && (m = 0),
                            app.Log.log("ActionBabei record data:" + JSON["stringify"](P)),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !0);
                        var B = P.seat,
                            J = mjcore["MJPai"]["Create"]('4z');
                        S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["AddBabei"](J, P["moqie"], !0),
                            S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["PlaySound"]("act_babei");
                        var L = !1;
                        if (P["tile_state"] && P["tile_state"] > 0 && (L = !0), P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0), B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["onBabei"](J, L, !1) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["recordBabei"](J, P["moqie"], L, !1), P["tingpais"] && S["DesktopMgr"].Inst["setTingpai"](P.seat, P["tingpais"]), S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && P["operations"])
                            for (var w = 0; w < P["operations"]["length"]; w++)
                                S["ActionOperation"].ob(P["operations"][w], m, 450);
                        return S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0,
                            1000;
                    },
                    m["fastrecord"] = function (P, m) {
                        void 0 === m && (m = -1),
                            app.Log.log("ActionBabei fastrecord data:" + JSON["stringify"](P)),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !0);
                        var B = P.seat,
                            J = mjcore["MJPai"]["Create"]('4z');
                        S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["AddBabei"](J, P["moqie"], !1);
                        var L = !1;
                        if (P["tile_state"] && P["tile_state"] > 0 && (L = !0), P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1), B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["onBabei"](J, L, !0) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["recordBabei"](J, P["moqie"], L, !0), P["tingpais"] && S["DesktopMgr"].Inst["setTingpai"](P.seat, P["tingpais"]), S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && P["operations"])
                            for (var w = 0; w < P["operations"]["length"]; w++)
                                S["ActionOperation"].ob(P["operations"][w], m, 450);
                        S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionBabei"] = P;
        }
            (view || (view = {}));





        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        var m = this,
                            B = S["DesktopMgr"].Inst.mode == S["EMJMode"].play || S["DesktopMgr"].Inst["record_show_anim"];
                        P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1),
                            S["DesktopMgr"].Inst["gameing"] = !1,
                            uiscript["UI_OtherPlayerInfo"].Inst["close"](),
                            S["BgmListMgr"]["stopBgm"]();
                        var J = !1;
                        Laya["timer"].once(100, this, function () {
                            var L = P["hules"],
                                w = 0;
                            if (L[0].zimo) {
                                for (var h = L[0].seat, s = [], R = 0; R < L[0].hand["length"]; R++)
                                    s.push(mjcore["MJPai"]["Create"](L[0].hand[R]));
                                if (s = s.sort(mjcore["MJPai"]["Distance"]), uiscript["UI_Huleshow"].Inst["showZimo"]([S["DesktopMgr"].Inst["seat2LocalPosition"](h)]), P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0), w += 1400, B && (L[0]["title"] && '' != L[0]["title"] || L[0]["title_id"]) && (Laya["timer"].once(w, m, function () {
                                    uiscript["UI_HuCutIn"].show(S["DesktopMgr"].Inst["player_datas"][h]["avatar_id"]),
                                        J = !0;
                                }), w += 2000), Laya["timer"].once(w, m, function () {
                                    h == S["DesktopMgr"].Inst.seat && S["DesktopMgr"].Inst["mainrole"]["HulePrepare"](s, L[0]["hu_tile"], L[0].zimo),
                                        S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](h)].Hule(s, mjcore["MJPai"]["Create"](L[0]["hu_tile"]), L[0].zimo);
                                }), B) {
                                    var v = 0,
                                        f = L[0].seat;
                                    f >= 0 && (v = S["DesktopMgr"].Inst["player_effects"][f][game["EView"]["hupai_effect"]]),
                                        w += "305215" == v || "305219" == v ? 5000 : "308021" == v ? 3800 : "305217" == v ? 3800 : 2800;
                                } else
                                    w += 500;
                                h == S["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                            } else {
                                if (Laya["timer"].once(w, m, function () {
                                    for (var P = [], m = 0; m < L["length"]; m++)
                                        P.push(S["DesktopMgr"].Inst["seat2LocalPosition"](L[m].seat));
                                    uiscript["UI_Huleshow"].Inst["showRong"](P);
                                }), w += 1500, B) for (var A = function (P) {
                                    var B = L[P].seat;
                                    (L[P]["title"] && '' != L[P]["title"] || L[P]["title_id"]) && (Laya["timer"].once(w, m, function () {
                                        uiscript["UI_HuCutIn"].show(S["DesktopMgr"].Inst["player_datas"][B]["avatar_id"]),
                                            J = !0;
                                    }), w += 2000);
                                }, R = 0; R < L["length"]; R++)
                                        A(R);
                                for (var R = 0; R < L["length"]; R++) {
                                    var u = L[R].seat;
                                    if (u == S["DesktopMgr"].Inst.seat) {
                                        for (var y = [], e = 0; e < L[R].hand["length"]; e++)
                                            y.push(mjcore["MJPai"]["Create"](L[R].hand[e]));
                                        y = y.sort(mjcore["MJPai"]["Distance"]),
                                            S["DesktopMgr"].Inst["mainrole"]["HulePrepare"](y, L[R]["hu_tile"], L[R].zimo);
                                    }
                                }
                                if (Laya["timer"].once(w, m, function () {
                                    if (B) {
                                        var P = 0,
                                            m = L[0].seat;
                                        m >= 0 && (P = S["DesktopMgr"].Inst["player_effects"][m][game["EView"]["hupai_effect"]]),
                                            S["DesktopMgr"].Inst["ShowHuleEffect"](S["DesktopMgr"].Inst["lastqipai"], S["DesktopMgr"].Inst["lastqipai"]["model"]["transform"]["position"], P, S["DesktopMgr"].Inst["lastpai_seat"], S["DesktopMgr"].Inst["isLastPaiMingPai"]() ? 2 : 0);
                                    }
                                    for (var J = 0; J < L["length"]; J++) {
                                        for (var w = [], h = 0; h < L[J].hand["length"]; h++)
                                            w.push(mjcore["MJPai"]["Create"](L[J].hand[h]));
                                        w = w.sort(mjcore["MJPai"]["Distance"]),
                                            S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](L[J].seat)].Hule(w, mjcore["MJPai"]["Create"](L[J]["hu_tile"]), L[J].zimo),
                                            L[J].seat == S["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                                    }
                                }), B) {
                                    var v = 0,
                                        u = L[0].seat;
                                    u >= 0 && (v = S["DesktopMgr"].Inst["player_effects"][u][game["EView"]["hupai_effect"]]),
                                        w += "305215" == v || "305219" == v ? 4200 : "308021" == v ? 3000 : "305217" == v ? 3000 : 2000;
                                }
                                else
                                    w += 600;
                            }
                            for (var R = 0; R < P["delta_scores"]["length"]; R++)
                                P["delta_scores"][R] > 0 ? (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](R, "emoji_7", -1), S["DesktopMgr"].Inst["onRoundEnd"](R, 1)) : P["delta_scores"][R] < 0 && (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](R, "emoji_8", -1), S["DesktopMgr"].Inst["onRoundEnd"](R, 0));
                            Laya["timer"].once(w, m, function () {
                                uiscript["UIMgr"].Inst["ShowWin"](P, !1),
                                    S["DesktopMgr"].Inst["ActionRunComplete"]();
                            });
                        });
                    },
                    m["fastplay"] = function (P) {
                        app.Log.log("ActionHule fastplay data:" + JSON["stringify"](P)),
                            S["BgmListMgr"]["stopBgm"](),
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1),
                            S["DesktopMgr"].Inst["gameing"] = !1,
                            uiscript["UIMgr"].Inst["ShowWin"](P, !1);
                    },
                    m["record"] = function (S) {
                        return this.play(S),
                            100000;
                    },
                    m["fastrecord"] = function (P) {
                        S["BgmListMgr"]["stopBgm"](),
                            S["DesktopMgr"].Inst["gameing"] = !1,
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            uiscript["UIMgr"].Inst["ShowWin"](P, !1);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionHule"] = P;
        }
            (view || (view = {}));




        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        var m = this;
                        app.Log.log("ActionNewRound play data:" + JSON["stringify"](P)),
                            S["BgmListMgr"]["PlayMJBgm"](),
                            S["DesktopMgr"].Inst["index_change"] = P["chang"],
                            S["DesktopMgr"].Inst["index_chuanma_ju"] = P["ju_count"],
                            S["DesktopMgr"].Inst["index_ju"] = P.ju,
                            S["DesktopMgr"].Inst["index_ben"] = P.ben,
                            S["DesktopMgr"].Inst["index_player"] = P.ju,
                            S["DesktopMgr"].Inst["gameing"] = !0,
                            S["DesktopMgr"].Inst["left_tile_count"] = 69,
                            S["DesktopMgr"].Inst["rule_mode"] == S["ERuleMode"]["Liqi4"] ? S["DesktopMgr"].Inst["left_tile_count"] = 69 : S["DesktopMgr"].Inst["rule_mode"] == S["ERuleMode"]["Liqi3"] && (S["DesktopMgr"].Inst["left_tile_count"] = 50),
                            P["left_tile_count"] && (S["DesktopMgr"].Inst["left_tile_count"] = P["left_tile_count"]),
                            S["DesktopMgr"].Inst["is_field_spell_mode"]() && (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](null, !1), uiscript["UI_FieldSpell"].Inst["closeCardDetail"](), uiscript["UI_FieldSpell"].Inst["setZhuangState"](S["DesktopMgr"].Inst["index_ju"] == S["DesktopMgr"].Inst.seat), uiscript["UI_FieldSpell"].Inst["resetCounter"]()),
                            S["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["Reset"](),
                            uiscript["UI_DesktopInfo"].Inst["logUpEmoInfo"](),
                            S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                            S["DesktopMgr"].Inst["setAutoHule"](!1),
                            S["DesktopMgr"].Inst["setAutoMoQie"](!1),
                            S["DesktopMgr"].Inst["setAutoNoFulu"](!1),
                            uiscript["UI_DesktopInfo"].Inst["resetFunc"](),
                            uiscript["UI_TingPai"].Inst["reset"](),
                            S["DesktopMgr"].Inst["SetChangJuShow"](S["DesktopMgr"].Inst["index_change"], S["DesktopMgr"].Inst["index_ju"], S["DesktopMgr"].Inst["index_chuanma_ju"]),
                            uiscript["UI_DesktopInfo"].Inst["setBen"](S["DesktopMgr"].Inst["index_ben"]),
                            uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1),
                            uiscript["UI_DesktopInfo"].Inst["reset_rounds"](),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]);
                        for (var B = 0; 4 > B; B++)
                            S["DesktopMgr"].Inst["players"][B]["Reset"](), S["DesktopMgr"].Inst["players"][B]["setSeat"](S["DesktopMgr"].Inst["localPosition2Seat"](B));
                        S["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            S["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            S["DesktopMgr"].Inst.md5 = P.md5,
                            S["DesktopMgr"].Inst["choosed_pai"] = null,
                            S["DesktopMgr"].Inst.dora = [];
                        var J = 0;
                        0 == S["DesktopMgr"].Inst["index_change"] && 0 == S["DesktopMgr"].Inst["index_ju"] && 0 == S["DesktopMgr"].Inst["index_ben"] && (S["DesktopMgr"].Inst["is_dora3_mode"]() && !S["DesktopMgr"].Inst["is_muyu_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openDora3BeginEffect"](), J = 1300), S["DesktopMgr"].Inst["is_peipai_open_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openPeipaiOpenBeginEffect"](), J = 1300), S["DesktopMgr"].Inst["is_muyu_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openMuyuOpenBeginEffect"](), J = 1300), S["DesktopMgr"].Inst["is_shilian_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openShilianOpenBeginEffect"](), J = 1300), S["DesktopMgr"].Inst["is_xiuluo_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openXiuluoOpenBeginEffect"](), J = 1300), S["DesktopMgr"].Inst["is_top_match"]() && (uiscript["UI_DesktopInfo"].Inst["openTopMatchOpenBeginEffect"](), J = 1300), S["DesktopMgr"].Inst["is_jiuchao_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openJiuChaoBeginEffect"](), J = 1300), S["DesktopMgr"].Inst["is_reveal_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openAnPaiBeginEffect"](), J = 1300), S["DesktopMgr"].Inst["is_zhanxing_mode"]() && (uiscript["UI_DesktopInfo"].Inst["openZhanxingBeginEffect"](), J = 1300)),
                            S["DesktopMgr"].Inst["is_chuanma_mode"]() && 0 == S["DesktopMgr"].Inst["index_chuanma_ju"] && (uiscript["UI_DesktopInfo"].Inst["openChuanmaBeginEffect"](), J = 1300);
                        var L = !1;
                        void 0 != P.al && null != P.al && (L = P.al),
                            L && (uiscript["UI_AL"].Show(), J = 1300),
                            Laya["timer"].once(J, this, function () {
                                for (var B = [], J = 0; J < P["tiles"]["length"]; J++)
                                    B.push(mjcore["MJPai"]["Create"](P["tiles"][J]));
                                var L = [],
                                    w = [];
                                if (P["opens"])
                                    for (var J = 0; J < P["opens"]["length"]; J++)
                                        if (P["opens"][J].seat == S["DesktopMgr"].Inst.seat) {
                                            L = P["opens"][J]["tiles"],
                                                w = P["opens"][J]["count"];
                                            break;
                                        }
                                S["DesktopMgr"].Inst["mainrole"]["NewGame"](B, L, w, !1),
                                    P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0);
                                for (var J = 1; 4 > J; J++) {
                                    var h = S["DesktopMgr"].Inst["localPosition2Seat"](J);
                                    if (-1 != h) {
                                        var s = [],
                                            R = [];
                                        if (P["opens"])
                                            for (var v = 0; v < P["opens"]["length"]; v++)
                                                if (P["opens"][v].seat == h) {
                                                    s = P["opens"][v]["tiles"],
                                                        R = P["opens"][v]["count"];
                                                    break;
                                                }
                                        S["DesktopMgr"].Inst["players"][J]["NewGame"](13 + (h == S["DesktopMgr"].Inst["index_ju"] ? 1 : 0), s, R, !1, '');
                                    }
                                }
                                S["DesktopMgr"].Inst["is_huansanzhang_mode"]() ? Laya["timer"].once(1500, m, function () {
                                    S["DesktopMgr"].Inst["ActionRunComplete"](),
                                        S["ActionOperation"].play(P["operation"]);
                                }) : (S["DesktopMgr"].Inst["is_dora3_mode"]() && Laya["timer"].once(1000, m, function () {
                                    uiscript["UI_DesktopInfo"].Inst["openDora3BeginShine"]();
                                }), Laya["timer"].once(1200, m, function () {
                                    if (P["doras"] && P["doras"]["length"] > 0)
                                        for (var m = 0; m < P["doras"]["length"]; m++)
                                            S["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](P["doras"][m])), uiscript["UI_DesktopInfo"].Inst["setDora"](m, S["DesktopMgr"].Inst.dora[m]);
                                    for (var m = 0; 4 > m; m++)
                                        S["DesktopMgr"].Inst["players"][m]["OnDoraRefresh"]();
                                    if (S["DesktopMgr"].Inst["index_ju"] == S["DesktopMgr"].Inst.seat) {
                                        var B = {
                                            tingpais: P["tingpais0"],
                                            operation: P["operation"]
                                        };
                                        uiscript["UI_TingPai"].Inst["setData0"](B);
                                    } else {
                                        var B = {
                                            tingpais: P["tingpais1"]
                                        };
                                        uiscript["UI_TingPai"].Inst["setData1"](B, !1);
                                    }
                                    S["DesktopMgr"].Inst["ActionRunComplete"]();
                                }), void 0 != P["operation"] && Laya["timer"].once(1000, m, function () {
                                    S["ActionOperation"].play(P["operation"]);
                                }));
                            }),
                            S["DesktopMgr"].Inst["fetchLinks"]();
                    },
                    m["fastplay"] = function (P, m) {
                        app.Log.log("ActionNewRound fastplay data:" + JSON["stringify"](P) + " usetime:" + m),
                            S["DesktopMgr"].Inst["index_change"] = P["chang"],
                            S["DesktopMgr"].Inst["index_ju"] = P.ju,
                            S["DesktopMgr"].Inst["index_ben"] = P.ben,
                            S["DesktopMgr"].Inst["index_player"] = P.ju,
                            S["DesktopMgr"].Inst["index_chuanma_ju"] = P["ju_count"],
                            S["DesktopMgr"].Inst["gameing"] = !0,
                            S["DesktopMgr"].Inst["left_tile_count"] = 69,
                            S["DesktopMgr"].Inst["rule_mode"] == S["ERuleMode"]["Liqi4"] ? S["DesktopMgr"].Inst["left_tile_count"] = 69 : S["DesktopMgr"].Inst["rule_mode"] == S["ERuleMode"]["Liqi3"] && (S["DesktopMgr"].Inst["left_tile_count"] = 50),
                            P["left_tile_count"] && (S["DesktopMgr"].Inst["left_tile_count"] = P["left_tile_count"]),
                            S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                            S["DesktopMgr"].Inst["setAutoHule"](!1),
                            S["DesktopMgr"].Inst["setAutoMoQie"](!1),
                            S["DesktopMgr"].Inst["setAutoNoFulu"](!1),
                            uiscript["UI_DesktopInfo"].Inst["resetFunc"](),
                            uiscript["UI_TingPai"].Inst["reset"](),
                            S["DesktopMgr"].Inst["is_field_spell_mode"]() && (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](null, !1), uiscript["UI_FieldSpell"].Inst["setZhuangState"](S["DesktopMgr"].Inst["index_ju"] == S["DesktopMgr"].Inst.seat), uiscript["UI_FieldSpell"].Inst["resetCounter"]()),
                            S["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["Reset"](),
                            uiscript["UI_DesktopInfo"].Inst["logUpEmoInfo"](),
                            S["DesktopMgr"].Inst["SetChangJuShow"](S["DesktopMgr"].Inst["index_change"], S["DesktopMgr"].Inst["index_ju"], S["DesktopMgr"].Inst["index_chuanma_ju"]),
                            uiscript["UI_DesktopInfo"].Inst["setBen"](S["DesktopMgr"].Inst["index_ben"]),
                            uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1),
                            uiscript["UI_DesktopInfo"].Inst["reset_rounds"](),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]),
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1);
                        for (var B = 0; 4 > B; B++)
                            S["DesktopMgr"].Inst["players"][B]["Reset"](), S["DesktopMgr"].Inst["players"][B]["setSeat"](S["DesktopMgr"].Inst["localPosition2Seat"](B));
                        S["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            S["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            S["DesktopMgr"].Inst.md5 = P.md5,
                            S["DesktopMgr"].Inst["choosed_pai"] = null,
                            S["DesktopMgr"].Inst.dora = [];
                        for (var J = [], B = 0; B < P["tiles"]["length"]; B++)
                            J.push(mjcore["MJPai"]["Create"](P["tiles"][B]));
                        var L = [],
                            w = [];
                        if (P["opens"])
                            for (var B = 0; B < P["opens"]["length"]; B++)
                                if (P["opens"][B].seat == S["DesktopMgr"].Inst.seat) {
                                    L = P["opens"][B]["tiles"],
                                        w = P["opens"][B]["count"];
                                    break;
                                }
                        S["DesktopMgr"].Inst["mainrole"]["NewGame"](J, L, w, !0);
                        for (var B = 1; 4 > B; B++) {
                            var h = S["DesktopMgr"].Inst["localPosition2Seat"](B);
                            if (-1 != h) {
                                var s = [],
                                    R = [];
                                if (P["opens"])
                                    for (var v = 0; v < P["opens"]["length"]; v++)
                                        if (P["opens"][v].seat == h) {
                                            s = P["opens"][v]["tiles"],
                                                R = P["opens"][v]["count"];
                                            break;
                                        }
                                S["DesktopMgr"].Inst["players"][B]["NewGame"](13 + (h == S["DesktopMgr"].Inst["index_ju"] ? 1 : 0), s, R, !0, '');
                            }
                        }
                        if (S["DesktopMgr"].Inst["is_chuanma_mode"]())
                            P["operation"] && -1 != m && Laya["timer"].once(100, this, function () {
                                S["ActionOperation"].play(P["operation"], m + 100);
                            });
                        else if (S["DesktopMgr"].Inst["is_huansanzhang_mode"]())
                            P["operation"] && -1 != m && Laya["timer"].once(100, this, function () {
                                S["ActionOperation"].play(P["operation"], m + 100);
                            });
                        else {
                            if (P["doras"] && P["doras"]["length"] > 0)
                                for (var B = 0; B < P["doras"]["length"]; B++)
                                    S["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](P["doras"][B])), uiscript["UI_DesktopInfo"].Inst["setDora"](B, S["DesktopMgr"].Inst.dora[B]);
                            for (var B = 0; 4 > B; B++)
                                S["DesktopMgr"].Inst["players"][B]["OnDoraRefresh"]();
                            if (S["DesktopMgr"].Inst["index_ju"] == S["DesktopMgr"].Inst.seat) {
                                var f = {
                                    tingpais: P["tingpais0"],
                                    operation: P["operation"]
                                };
                                uiscript["UI_TingPai"].Inst["setData0"](f);
                            } else {
                                var f = {
                                    tingpais: P["tingpais1"]
                                };
                                uiscript["UI_TingPai"].Inst["setData1"](f, !0);
                            }
                            P["operation"] && -1 != m && Laya["timer"].once(100, this, function () {
                                S["ActionOperation"].play(P["operation"], m + 100);
                            });
                        }
                    },
                    m["record"] = function (P, m) {
                        void 0 === m && (m = 0),
                            app.Log.log("ActionNewRound record data:" + JSON["stringify"](P)),
                            S["DesktopMgr"].Inst["ClearOperationShow"](),
                            S["BgmListMgr"]["PlayMJBgm"](),
                            S["DesktopMgr"].Inst["index_change"] = P["chang"],
                            S["DesktopMgr"].Inst["index_ju"] = P.ju,
                            S["DesktopMgr"].Inst["index_ben"] = P.ben,
                            S["DesktopMgr"].Inst["index_player"] = P.ju,
                            S["DesktopMgr"].Inst["index_chuanma_ju"] = P["ju_count"],
                            S["DesktopMgr"].Inst["gameing"] = !0,
                            S["DesktopMgr"].Inst["left_tile_count"] = 69,
                            S["DesktopMgr"].Inst["rule_mode"] == S["ERuleMode"]["Liqi4"] ? S["DesktopMgr"].Inst["left_tile_count"] = 69 : S["DesktopMgr"].Inst["rule_mode"] == S["ERuleMode"]["Liqi3"] && (S["DesktopMgr"].Inst["left_tile_count"] = 50),
                            P["left_tile_count"] && (S["DesktopMgr"].Inst["left_tile_count"] = P["left_tile_count"]),
                            S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                            S["DesktopMgr"].Inst["tingpais"] = [[], [], [], []],
                            uiscript["UI_TingPai"].Inst["reset"](),
                            uiscript["UI_Replay"].Inst["reset"](),
                            S["DesktopMgr"].Inst["SetChangJuShow"](S["DesktopMgr"].Inst["index_change"], S["DesktopMgr"].Inst["index_ju"], S["DesktopMgr"].Inst["index_chuanma_ju"]),
                            uiscript["UI_DesktopInfo"].Inst["setBen"](S["DesktopMgr"].Inst["index_ben"]),
                            uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]);
                        for (var B = 0; 4 > B; B++)
                            S["DesktopMgr"].Inst["players"][B]["setSeat"](S["DesktopMgr"].Inst["localPosition2Seat"](B));
                        S["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            S["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            S["DesktopMgr"].Inst["is_field_spell_mode"]() && (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](null, !1), uiscript["UI_FieldSpell"].Inst["closeCardDetail"](), uiscript["UI_FieldSpell"].Inst["setZhuangState"](S["DesktopMgr"].Inst["index_ju"] == S["DesktopMgr"].Inst.seat), uiscript["UI_FieldSpell"].Inst["resetCounter"]()),
                            S["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["Reset"](),
                            S["DesktopMgr"].Inst["choosed_pai"] = null,
                            S["DesktopMgr"].Inst.dora = [],
                            S["AudioMgr"]["PlayAudio"](216);
                        for (var B = 0; 4 > B; B++) {
                            var J = [],
                                L = "tiles" + B["toString"]();
                            if (P[L] && P[L]["length"] > 0) {
                                for (var w = 0; w < P[L]["length"]; w++)
                                    J.push(mjcore["MJPai"]["Create"](P[L][w]));
                                var h = [],
                                    s = [];
                                if (P["opens"])
                                    for (var w = 0; w < P["opens"]["length"]; w++)
                                        if (P["opens"][w].seat == B) {
                                            h = P["opens"][w]["tiles"],
                                                s = P["opens"][w]["count"];
                                            break;
                                        }
                                B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["RecordNewGame"](J, h, s) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["RecordNewGame"](J, h, s);
                            }
                        }
                        if (S["DesktopMgr"].Inst["setScores"](P["scores"]), S["DesktopMgr"].Inst.md5 = P.md5, uiscript["UI_DesktopInfo"].Inst["reset_rounds"](), S["DesktopMgr"].Inst["is_huansanzhang_mode"]()) {
                            var R = P["operations"][S["DesktopMgr"].Inst["localPosition2Seat"](S["DesktopMgr"].Inst.seat)];
                            S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && R && S["ActionOperation"].ob(R, m, 1000);
                        } else {
                            if (P["doras"] && P["doras"]["length"] > 0)
                                for (var B = 0; B < P["doras"]["length"]; B++)
                                    S["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](P["doras"][B])), uiscript["UI_DesktopInfo"].Inst["setDora"](B, S["DesktopMgr"].Inst.dora[B]);
                            else
                                P.dora && '' != P.dora && (S["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](P.dora)), uiscript["UI_DesktopInfo"].Inst["setDora"](0, S["DesktopMgr"].Inst.dora[0]));
                            for (var B = 0; 4 > B; B++)
                                S["DesktopMgr"].Inst["players"][B]["OnDoraRefresh"]();
                            if (P["tingpai"])
                                for (var B = 0; B < P["tingpai"]["length"]; B++)
                                    P["tingpai"][B].seat != S["DesktopMgr"].Inst["index_ju"] && S["DesktopMgr"].Inst["setTingpai"](P["tingpai"][B].seat, P["tingpai"][B]["tingpais1"]);
                            S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && P["operation"] && S["ActionOperation"].ob(P["operation"], m, 1000);
                        }
                        return P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0),
                            S["DesktopMgr"].Inst.mode == S["EMJMode"]["paipu"] && (P["paishan"] ? (uiscript["UI_Replay"].Inst["page_paishan"]["setTiles"](P["paishan"]), uiscript["UI_Replay"].Inst["page_paishan"]["refresh"]()) : uiscript["UI_Replay"].Inst["page_paishan"]["setNoInfo"]()),
                            300;
                    },
                    m["fastrecord"] = function (P, m) {
                        void 0 === m && (m = -1),
                            app.Log.log("ActionNewRound fastrecord data:" + JSON["stringify"](P)),
                            S["BgmListMgr"]["PlayMJBgm"](),
                            S["DesktopMgr"].Inst["ClearOperationShow"](),
                            S["DesktopMgr"].Inst["index_change"] = P["chang"],
                            S["DesktopMgr"].Inst["index_ju"] = P.ju,
                            S["DesktopMgr"].Inst["index_ben"] = P.ben,
                            S["DesktopMgr"].Inst["index_player"] = P.ju,
                            S["DesktopMgr"].Inst["index_chuanma_ju"] = P["ju_count"],
                            S["DesktopMgr"].Inst["gameing"] = !0,
                            S["DesktopMgr"].Inst["left_tile_count"] = 69,
                            S["DesktopMgr"].Inst["rule_mode"] == S["ERuleMode"]["Liqi4"] ? S["DesktopMgr"].Inst["left_tile_count"] = 69 : S["DesktopMgr"].Inst["rule_mode"] == S["ERuleMode"]["Liqi3"] && (S["DesktopMgr"].Inst["left_tile_count"] = 50),
                            P["left_tile_count"] && (S["DesktopMgr"].Inst["left_tile_count"] = P["left_tile_count"]),
                            S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                            S["DesktopMgr"].Inst["tingpais"] = [[], [], [], []],
                            uiscript["UI_TingPai"].Inst["reset"](),
                            uiscript["UI_Replay"].Inst["reset"](),
                            S["DesktopMgr"].Inst["SetChangJuShow"](S["DesktopMgr"].Inst["index_change"], S["DesktopMgr"].Inst["index_ju"], S["DesktopMgr"].Inst["index_chuanma_ju"]),
                            uiscript["UI_DesktopInfo"].Inst["setBen"](S["DesktopMgr"].Inst["index_ben"]),
                            uiscript["UI_DesktopInfo"].Inst["setZhenting"](!1),
                            uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]);
                        for (var B = 0; 4 > B; B++)
                            S["DesktopMgr"].Inst["players"][B]["setSeat"](S["DesktopMgr"].Inst["localPosition2Seat"](B));
                        S["DesktopMgr"].Inst["is_field_spell_mode"]() && (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](null, !1), uiscript["UI_FieldSpell"].Inst["setZhuangState"](S["DesktopMgr"].Inst["index_ju"] == S["DesktopMgr"].Inst.seat), uiscript["UI_FieldSpell"].Inst["resetCounter"]()),
                            S["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["Reset"](),
                            S["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            S["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            S["DesktopMgr"].Inst["choosed_pai"] = null,
                            S["DesktopMgr"].Inst.dora = [];
                        for (var B = 0; 4 > B; B++) {
                            var J = [],
                                L = "tiles" + B["toString"]();
                            if (P[L] && P[L]["length"] > 0) {
                                for (var w = 0; w < P[L]["length"]; w++)
                                    J.push(mjcore["MJPai"]["Create"](P[L][w]));
                                var h = [],
                                    s = [];
                                if (P["opens"])
                                    for (var w = 0; w < P["opens"]["length"]; w++)
                                        if (P["opens"][w].seat == B) {
                                            h = P["opens"][w]["tiles"],
                                                s = P["opens"][w]["count"];
                                            break;
                                        }
                                B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["RecordNewGame"](J, h, s) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["RecordNewGame"](J, h, s);
                            }
                        }
                        if (S["DesktopMgr"].Inst["setScores"](P["scores"]), S["DesktopMgr"].Inst.md5 = P.md5, uiscript["UI_DesktopInfo"].Inst["reset_rounds"](), S["DesktopMgr"].Inst["is_huansanzhang_mode"]()) {
                            var R = P["operations"][S["DesktopMgr"].Inst["localPosition2Seat"](S["DesktopMgr"].Inst.seat)];
                            S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && R && S["ActionOperation"].ob(R, m, 1000);
                        } else {
                            if (P["doras"] && P["doras"]["length"] > 0)
                                for (var B = 0; B < P["doras"]["length"]; B++)
                                    S["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](P["doras"][B])), uiscript["UI_DesktopInfo"].Inst["setDora"](B, S["DesktopMgr"].Inst.dora[B]);
                            else
                                P.dora && '' != P.dora && (S["DesktopMgr"].Inst.dora.push(mjcore["MJPai"]["Create"](P.dora)), uiscript["UI_DesktopInfo"].Inst["setDora"](0, S["DesktopMgr"].Inst.dora[0]));
                            for (var B = 0; 4 > B; B++)
                                S["DesktopMgr"].Inst["players"][B]["OnDoraRefresh"]();
                            if (P["tingpai"])
                                for (var B = 0; B < P["tingpai"]["length"]; B++)
                                    P["tingpai"][B].seat != S["DesktopMgr"].Inst["index_ju"] && S["DesktopMgr"].Inst["setTingpai"](P["tingpai"][B].seat, P["tingpai"][B]["tingpais1"]);
                            S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && P["operation"] && S["ActionOperation"].ob(P["operation"], m, 1000);
                        }
                        S["DesktopMgr"].Inst.mode == S["EMJMode"]["paipu"] && (P["paishan"] ? (uiscript["UI_Replay"].Inst["page_paishan"]["setTiles"](P["paishan"]), uiscript["UI_Replay"].Inst["page_paishan"]["refresh"]()) : uiscript["UI_Replay"].Inst["page_paishan"]["setNoInfo"]()),
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionNewRound"] = P;
        }
            (view || (view = {}));





        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        app.Log.log("ActionChiPengGang play data:" + JSON["stringify"](P));
                        var m = P.seat,
                            B = new mjcore["MJMing"]();
                        B.type = P.type,
                            B.from = P["froms"],
                            B.pais = [];
                        for (var J = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)], L = 0; L < P["tiles"]["length"]; L++)
                            B.pais.push(mjcore["MJPai"]["Create"](P["tiles"][L]));
                        for (var w = [], L = 0; L < B.pais["length"]; L++)
                            !P["tile_states"] || P["tile_states"]["length"] <= L ? w.push(0) : w.push(P["tile_states"][L]);
                        Laya["timer"].once(600, this, function () {
                            try {
                                P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0),
                                    S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](S["DesktopMgr"].Inst["lastpai_seat"])]["QiPaiNoPass"](),
                                    J["AddMing"](B, w),
                                    B.type == mjcore["E_Ming"]["gang_ming"] && (S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0);
                            } catch (m) {
                                var L = {};
                                L["error"] = m["message"],
                                    L["stack"] = m["stack"],
                                    L["method"] = "addming600",
                                    L.name = "ActionChiPengGang",
                                    GameMgr.Inst["onFatalError"](L);
                            }
                        }),
                            m != S["DesktopMgr"].Inst.seat || B.type != mjcore["E_Ming"]["gang_an"] && B.type != mjcore["E_Ming"]["gang_ming"] || (S["DesktopMgr"].Inst["last_gang"] = Laya["timer"]["currTimer"]);
                        var h = '',
                            s = '';
                        switch (B.type) {
                            case mjcore["E_Ming"].kezi:
                                h = "emoji_4",
                                    s = "emoji_3";
                                break;
                            case mjcore["E_Ming"]["shunzi"]:
                                h = "emoji_2",
                                    s = "emoji_1";
                                break;
                            case mjcore["E_Ming"]["gang_ming"]:
                                h = "emoji_6",
                                    s = "emoji_5";
                        }
                        uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](S["DesktopMgr"].Inst["index_player"], h, 2000),
                            S["DesktopMgr"].Inst["index_player"] = m,
                            uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](S["DesktopMgr"].Inst["index_player"], s, 2000),
                            S["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            P.liqi && S["ActionLiqi"].play(P.liqi),
                            P["operation"] && Laya["timer"].once(600, this, function () {
                                S["ActionOperation"].play(P["operation"]);
                            }),
                            void 0 != P["zhenting"] && void 0 == P["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](P["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"])),
                            P["liqibang"] && uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]);
                        var R = '';
                        switch (B.type) {
                            case mjcore["E_Ming"]["shunzi"]:
                                R = "act_chi";
                                break;
                            case mjcore["E_Ming"]["gang_ming"]:
                            case mjcore["E_Ming"]["gang_an"]:
                                R = "act_kan";
                                break;
                            case mjcore["E_Ming"].kezi:
                                R = "act_pon";
                        }
                        var v = J["score"];
                        P["scores"] && P["scores"]["length"] > 0 && S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            J["PlaySound"](R, J["score"] - v),
                            m == S["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData0"](P);
                    },
                    m["fastplay"] = function (P, m) {
                        app.Log.log("ActionChiPengGang fastplay data:" + JSON["stringify"](P) + " usetime:" + m);
                        var B = P.seat,
                            J = new mjcore["MJMing"]();
                        J.type = P.type,
                            J.from = P["froms"],
                            J.pais = [];
                        for (var L = 0; L < P["tiles"]["length"]; L++)
                            J.pais.push(mjcore["MJPai"]["Create"](P["tiles"][L]));
                        for (var w = [], L = 0; L < J.pais["length"]; L++)
                            !P["tile_states"] || P["tile_states"]["length"] <= L ? w.push(0) : w.push(P["tile_states"][L]);
                        P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](S["DesktopMgr"].Inst["lastpai_seat"])]["QiPaiNoPass"](),
                            S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["AddMing"](J, w, !1),
                            J.type == mjcore["E_Ming"]["gang_ming"] && (S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0),
                            B != S["DesktopMgr"].Inst.seat || J.type != mjcore["E_Ming"]["gang_an"] && J.type != mjcore["E_Ming"]["gang_ming"] || (S["DesktopMgr"].Inst["last_gang"] = Laya["timer"]["currTimer"]),
                            S["DesktopMgr"].Inst["index_player"] = B,
                            S["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            P.liqi && S["ActionLiqi"]["fastplay"](P.liqi, 0),
                            P["operation"] && -1 != m && Laya["timer"].once(600, this, function () {
                                S["ActionOperation"].play(P["operation"], m);
                            }),
                            P["scores"] && P["scores"]["length"] > 0 && S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            void 0 != P["zhenting"] && void 0 == P["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](P["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"])),
                            P["liqibang"] && uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]),
                            B == S["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData0"](P);
                    },
                    m["record"] = function (P, m) {
                        void 0 === m && (m = 0),
                            app.Log.log("ActionChiPengGang record data:" + JSON["stringify"](P));
                        var B = P.seat,
                            J = new mjcore["MJMing"]();
                        J.type = P.type,
                            J.from = P["froms"],
                            J.pais = [];
                        for (var L = 0; L < P["tiles"]["length"]; L++)
                            J.pais.push(mjcore["MJPai"]["Create"](P["tiles"][L]));
                        for (var w = [], L = 0; L < J.pais["length"]; L++)
                            !P["tile_states"] || P["tile_states"]["length"] <= L ? w.push(0) : w.push(P["tile_states"][L]);
                        Laya["timer"].once(600, this, function () {
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0),
                                S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](S["DesktopMgr"].Inst["lastpai_seat"])]["QiPaiNoPass"](),
                                S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["AddMing"](J, w),
                                J.type == mjcore["E_Ming"]["gang_ming"] && (S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0);
                        }),
                            B != S["DesktopMgr"].Inst.seat || J.type != mjcore["E_Ming"]["gang_an"] && J.type != mjcore["E_Ming"]["gang_ming"] || (S["DesktopMgr"].Inst["last_gang"] = Laya["timer"]["currTimer"]);
                        var h = '',
                            s = '';
                        switch (J.type) {
                            case mjcore["E_Ming"].kezi:
                                h = "emoji_4",
                                    s = "emoji_3";
                                break;
                            case mjcore["E_Ming"]["shunzi"]:
                                h = "emoji_2",
                                    s = "emoji_1";
                                break;
                            case mjcore["E_Ming"]["gang_ming"]:
                                h = "emoji_6",
                                    s = "emoji_5";
                        }
                        uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](S["DesktopMgr"].Inst["index_player"], h, 2000),
                            S["DesktopMgr"].Inst["index_player"] = B,
                            uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](S["DesktopMgr"].Inst["index_player"], s, 2000),
                            S["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            P.liqi && S["ActionLiqi"]["record"](P.liqi),
                            P["liqibang"] && uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]);
                        var R = '';
                        switch (J.type) {
                            case mjcore["E_Ming"]["shunzi"]:
                                R = "act_chi";
                                break;
                            case mjcore["E_Ming"]["gang_ming"]:
                            case mjcore["E_Ming"]["gang_an"]:
                                R = "act_kan";
                                break;
                            case mjcore["E_Ming"].kezi:
                                R = "act_pon";
                        }
                        var v = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)],
                            f = v["score"];
                        return P["scores"] && P["scores"]["length"] > 0 && S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            v["PlaySound"](R, v["score"] - f),
                            S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && P["operation"] && S["ActionOperation"].ob(P["operation"], m, 500),
                            1200;
                    },
                    m["fastrecord"] = function (P, m) {
                        void 0 === m && (m = -1),
                            app.Log.log("ActionChiPengGang fastrecord data:" + JSON["stringify"](P));
                        var B = P.seat,
                            J = new mjcore["MJMing"]();
                        J.type = P.type,
                            J.from = P["froms"],
                            J.pais = [];
                        for (var L = 0; L < P["tiles"]["length"]; L++)
                            J.pais.push(mjcore["MJPai"]["Create"](P["tiles"][L]));
                        for (var w = [], L = 0; L < J.pais["length"]; L++)
                            !P["tile_states"] || P["tile_states"]["length"] <= L ? w.push(0) : w.push(P["tile_states"][L]);
                        P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](S["DesktopMgr"].Inst["lastpai_seat"])]["QiPaiNoPass"](),
                            S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["AddMing"](J, w, !1),
                            J.type == mjcore["E_Ming"]["gang_ming"] && (S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0),
                            P["scores"] && P["scores"]["length"] > 0 && S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            P["liqibang"] && uiscript["UI_DesktopInfo"].Inst["setLiqibang"](P["liqibang"]),
                            S["DesktopMgr"].Inst["index_player"] = B,
                            S["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            P.liqi && S["ActionLiqi"]["fastrecord"](P.liqi),
                            S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && P["operation"] && S["ActionOperation"].ob(P["operation"], m, 500);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionChiPengGang"] = P;
        }
            (view || (view = {}));




        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        app.Log.log("ActionDealTile play data:" + JSON["stringify"](P));
                        var m = P.seat,
                            B = P.tile;
                        S["DesktopMgr"].Inst["is_zhanxing_mode"]() && (uiscript["UI_Astrology"].Inst["removeTile"](P["tile_index"], !0), uiscript["UI_Astrology"].Inst["onSelectionEnd"](P["tile_index"])),
                            S["DesktopMgr"].Inst["left_tile_count"] = P["left_tile_count"],
                            10 == S["DesktopMgr"].Inst["left_tile_count"] && (S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](S["DesktopMgr"].Inst.seat)]["already_xuezhan_hule_state"] || S["DesktopMgr"].Inst["addMindVoice"](S["DesktopMgr"].Inst.seat, "ingame_remain10"), Laya["timer"].once(1000, this, function () {
                                S["DesktopMgr"].Inst["playMindVoice"]();
                            }));
                        var J = !1;
                        if (P["tile_state"] && P["tile_state"] > 0 && (J = !0), m == S["DesktopMgr"].Inst.seat) {
                            var L = Laya["timer"]["currTimer"] - S["DesktopMgr"].Inst["last_gang"],
                                w = 0;
                            650 > L && (w = 650 - L),
                                Laya["timer"].once(w, this, function () {
                                    P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0),
                                        S["DesktopMgr"].Inst["mainrole"]["TakePai"](mjcore["MJPai"]["Create"](B), J),
                                        S["DesktopMgr"].Inst["ActionRunComplete"]();
                                });
                        } else
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0), J || B && -1 != B["indexOf"]('t') ? S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["TakePai"](mjcore["MJPai"]["Create"](B), J) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["TakePai"](mjcore["MJPai"]["Create"]('5z'), J), S["DesktopMgr"].Inst["ActionRunComplete"]();
                        S["DesktopMgr"].Inst["index_player"] = m,
                            S["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            S["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            P.liqi && S["ActionLiqi"].play(P.liqi),
                            P["operation"] && S["ActionOperation"].play(P["operation"]),
                            P["doras"] && P["doras"]["length"] > 0 && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1),
                            void 0 != P["zhenting"] && void 0 == P["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](P["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"])),
                            m == S["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData0"](P),
                            S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1;
                    },
                    m["fastplay"] = function (P, m) {
                        app.Log.log("ActionDealTile fastplay data:" + JSON["stringify"](P) + " usetime:" + m);
                        var B = P.seat,
                            J = P.tile;
                        S["DesktopMgr"].Inst["left_tile_count"] = P["left_tile_count"];
                        var L = !1;
                        P["tile_state"] && P["tile_state"] > 0 && (L = !0),
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["TakePai"](mjcore["MJPai"]["Create"](J), L, !1) : L || J && -1 != J["indexOf"]('t') ? S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["TakePai"](mjcore["MJPai"]["Create"](J), L) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["TakePai"](mjcore["MJPai"]["Create"]('5z'), L),
                            S["DesktopMgr"].Inst["is_zhanxing_mode"]() && (uiscript["UI_Astrology"].Inst["removeTile"](P["tile_index"], !1), uiscript["UI_Astrology"].Inst["onSelectionEnd"](P["tile_index"])),
                            S["DesktopMgr"].Inst["index_player"] = B,
                            S["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            S["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            P.liqi && S["ActionLiqi"]["fastplay"](P.liqi, 0),
                            P["operation"] && -1 != m && S["ActionOperation"].play(P["operation"], m),
                            P["doras"] && P["doras"]["length"] > 0 && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !0),
                            void 0 != P["zhenting"] && void 0 == P["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](P["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"])),
                            B == S["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData0"](P),
                            S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1;
                    },
                    m["record"] = function (P, m) {
                        void 0 === m && (m = 0),
                            app.Log.log("ActionDealTile record data:" + JSON["stringify"](P));
                        var B = P.seat,
                            J = P.tile;
                        S["DesktopMgr"].Inst["left_tile_count"] = P["left_tile_count"];
                        var L = !1;
                        return P["tile_state"] && P["tile_state"] > 0 && (L = !0),
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0),
                            B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["TakePai"](mjcore["MJPai"]["Create"](J), L) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["recordTakePai"](mjcore["MJPai"]["Create"](J), L, S["DesktopMgr"].Inst["record_show_anim"]),
                            S["DesktopMgr"].Inst["is_zhanxing_mode"]() && (uiscript["UI_Astrology"].Inst["removeTile"](P["tile_index"], !0), uiscript["UI_Astrology"].Inst["onSelectionEnd"](P["tile_index"])),
                            S["DesktopMgr"].Inst["index_player"] = B,
                            S["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            S["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            P.liqi && S["ActionLiqi"]["record"](P.liqi),
                            P["doras"] && P["doras"]["length"] > 0 && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !0),
                            S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && P["operation"] && S["ActionOperation"].ob(P["operation"], m),
                            S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1,
                            300;
                    },
                    m["fastrecord"] = function (P, m) {
                        void 0 === m && (m = -1),
                            app.Log.log("ActionDealTile fastrecord data:" + JSON["stringify"](P));
                        var B = P.seat,
                            J = P.tile;
                        S["DesktopMgr"].Inst["left_tile_count"] = P["left_tile_count"];
                        var L = !1;
                        P["tile_state"] && P["tile_state"] > 0 && (L = !0),
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["TakePai"](mjcore["MJPai"]["Create"](J), L, !1) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["recordTakePai"](mjcore["MJPai"]["Create"](J), L),
                            S["DesktopMgr"].Inst["is_zhanxing_mode"]() && (uiscript["UI_Astrology"].Inst["removeTile"](P["tile_index"], !1), uiscript["UI_Astrology"].Inst["onSelectionEnd"](P["tile_index"])),
                            S["DesktopMgr"].Inst["index_player"] = B,
                            S["DesktopMgr"].Inst["RefreshPaiLeft"](),
                            S["DesktopMgr"].Inst["RefreshPlayerIndicator"](),
                            P.liqi && S["ActionLiqi"]["fastrecord"](P.liqi),
                            P["doras"] && P["doras"]["length"] > 0 && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !0),
                            S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && P["operation"] && S["ActionOperation"].ob(P["operation"], m),
                            S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !1;
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionDealTile"] = P;
        }
            (view || (view = {}));



        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        app.Log.log("ActionDiscardTile play data:" + JSON["stringify"](P)),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1);
                        var m = P.seat,
                            B = mjcore["MJPai"]["Create"](P.tile),
                            J = !(null == P["is_liqi"] || void 0 == P["is_liqi"] || !P["is_liqi"]);
                        if (P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0), S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["AddQiPai"](B, J, P["moqie"]), S["DesktopMgr"].Inst["is_field_spell_mode"]() && uiscript["UI_FieldSpell"].Inst["onDiscard"](m, J), S["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["alignTile"](), J) {
                            P["is_wliqi"] ? S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["PlaySound"]("act_drich") : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["PlaySound"]("act_rich");
                            var L = S["DesktopMgr"].Inst["player_effects"][m][game["EView"]["lizhi_bgm"]];
                            if (L && 0 != L) {
                                var w = cfg["item_definition"].item.get(L)["sargs"][0];
                                S["AudioMgr"]["lizhiMuted"] ? S["AudioMgr"]["PlayLiqiBgm"](w, 300, !0) : (S["BgmListMgr"]["stopBgm"](), Laya["timer"].once(1000, this, function () {
                                    S["DesktopMgr"].Inst["gameing"] && (S["BgmListMgr"]["PlayMJBgm"]('', !0), S["AudioMgr"]["PlayLiqiBgm"](w, 300, !0));
                                }));
                            }
                        }
                        var h = !1;
                        !B["touming"] && P["tile_state"] && P["tile_state"] > 0 && (h = !0),
                            m == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](B, h, !1, P["moqie"]) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](m)]["onDiscardTile"](P["moqie"], P.tile, h, !1),
                            P["operation"] && Laya["timer"].once(500, this, function () {
                                S["ActionOperation"].play(P["operation"]);
                            }),
                            void 0 != P["zhenting"] && void 0 == P["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](P["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"])),
                            m == S["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](P, !1),
                            Laya["timer"].once(500, this, function () {
                                J ? S["DesktopMgr"].Inst["clearMindVoice"]() : S["DesktopMgr"].Inst["playMindVoice"]();
                            });
                    },
                    m["fastplay"] = function (P, m) {
                        app.Log.log("ActionDiscardTile fastplay data:" + JSON["stringify"](P) + " usetime:" + m),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !0);
                        var B = P.seat,
                            J = mjcore["MJPai"]["Create"](P.tile),
                            L = !(null == P["is_liqi"] || void 0 == P["is_liqi"] || !P["is_liqi"]),
                            w = !1;
                        !J["touming"] && P["tile_state"] && P["tile_state"] > 0 && (w = !0),
                            S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["AddQiPai"](J, L, P["moqie"], !1),
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](J, w, !0, P["moqie"]) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["onDiscardTile"](P["moqie"], P.tile, w, !0),
                            P["operation"] && -1 != m && Laya["timer"].once(500, this, function () {
                                S["ActionOperation"].play(P["operation"], m);
                            }),
                            void 0 != P["zhenting"] && void 0 == P["operation"] && (uiscript["UI_DesktopInfo"].Inst["setZhenting"](P["zhenting"]), uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"])),
                            B == S["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](P, !0),
                            S["DesktopMgr"].Inst["is_field_spell_mode"]() && uiscript["UI_FieldSpell"].Inst["onDiscard"](B, L),
                            S["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["alignTile"]();
                    },
                    m["record"] = function (P, m) {
                        void 0 === m && (m = 0),
                            app.Log.log("ActionDiscardTile record data:" + JSON["stringify"](P)),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !0);
                        var B = P.seat,
                            J = mjcore["MJPai"]["Create"](P.tile),
                            L = !(null == P["is_liqi"] || void 0 == P["is_liqi"] || !P["is_liqi"]),
                            w = !1;
                        if (!J["touming"] && P["tile_state"] && P["tile_state"] > 0 && (w = !0), P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0), S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["AddQiPai"](J, L, P["moqie"]), L && (P["is_wliqi"] ? S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["PlaySound"]("act_drich") : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["PlaySound"]("act_rich"), uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](B, "emoji_9", 2000)), B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](J, w, !1, P["moqie"]) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["recordDiscardTile"](J, P["moqie"], w, !1), P["tingpais"] && S["DesktopMgr"].Inst["setTingpai"](P.seat, P["tingpais"]), S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && P["operations"])
                            for (var h = 0; h < P["operations"]["length"]; h++)
                                S["ActionOperation"].ob(P["operations"][h], m, 450);
                        return S["DesktopMgr"].Inst["is_field_spell_mode"]() && uiscript["UI_FieldSpell"].Inst["onDiscard"](B, L),
                            S["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["alignTile"](),
                            500;
                    },
                    m["fastrecord"] = function (P, m) {
                        void 0 === m && (m = -1),
                            app.Log.log("ActionDiscardTile fastrecord data:" + JSON["stringify"](P)),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !0);
                        var B = P.seat,
                            J = mjcore["MJPai"]["Create"](P.tile),
                            L = !(null == P["is_liqi"] || void 0 == P["is_liqi"] || !P["is_liqi"]),
                            w = !1;
                        if (!J["touming"] && P["tile_state"] && P["tile_state"] > 0 && (w = !0), P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1), S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["AddQiPai"](J, L, P["moqie"], !1), B == S["DesktopMgr"].Inst.seat ? S["DesktopMgr"].Inst["mainrole"]["OnDiscardTile"](J, w, !0, P["moqie"]) : S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](B)]["recordDiscardTile"](J, P["moqie"], w, !0), P["tingpais"] && S["DesktopMgr"].Inst["setTingpai"](P.seat, P["tingpais"]), S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && P["operations"])
                            for (var h = 0; h < P["operations"]["length"]; h++)
                                S["ActionOperation"].ob(P["operations"][h], m, 450);
                        S["DesktopMgr"].Inst["is_field_spell_mode"]() && uiscript["UI_FieldSpell"].Inst["onDiscard"](B, L),
                            S["DesktopMgr"].Inst["is_zhanxing_mode"]() && uiscript["UI_Astrology"].Inst["alignTile"]();
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionDiscardTile"] = P;
        }
            (view || (view = {}));




        !function (S) {
            var P;
            !function (S) {
                S[S.none = 0] = "none",
                    S[S["room_invite"] = 1] = "room_invite";
            }
                (P = S["EFriendMsgType"] || (S["EFriendMsgType"] = {}));
            var m = function () {
                function P() { }
                return P.init = function () {
                    var S = this;
                    this["_friend_list"] = [],
                        app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchFriendList", {}, function (P, m) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(m),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(m));
                                }
                            }));
                            if (P)
                                app.Log.log("获取好友列表时发生错误:" + P);
                            else if (m["error"])
                                app.Log.log("获取好友列表时发生错误，错误码：" + m["error"].code);
                            else {
                                if (app.Log.log(JSON["stringify"](m)), m["friends"])
                                    for (var B = 0; B < m["friends"]["length"]; B++) {
                                        var J = m["friends"][B];
                                        S["_friend_list"].push(J);
                                    }
                                S["friend_count"] = m["friend_count"],
                                    S["friend_max_count"] = m["friend_max_count"];
                            }
                        }),
                        this["_friendapply_list"] = [],
                        app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchFriendApplyList", {}, function (P, m) {
                            if (P || m["error"])
                                app.Log.log("获取好友申请列表发生错误");
                            else if (app.Log.log(JSON["stringify"](m)), m["applies"])
                                for (var B = 0; B < m["applies"]["length"]; B++)
                                    S["_friendapply_list"].push(m["applies"][B]);
                        }),
                        this["fetchRecentPlayer"](),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyFriendViewChange", Laya["Handler"]["create"](this, this["_onFriendViewChange"], null, !1)),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyFriendStateChange", Laya["Handler"]["create"](this, this["_onFriendStateChange"], null, !1)),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyFriendChange", Laya["Handler"]["create"](this, this["_onFriendChange"], null, !1)),
                        app["NetAgent"]["AddListener2Lobby"]("NotifyNewFriendApply", Laya["Handler"]["create"](this, this["_onFriendApplyChange"], null, !1));
                },
                    Object["defineProperty"](P, "friend_list", {
                        get: function () {
                            return this["_friend_list"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](P, "friendapply_list", {
                        get: function () {
                            return this["_friendapply_list"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](P, "recentplayer_list", {
                        get: function () {
                            return this["_recentplayer_list"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    P.find = function (S) {
                        for (var P = 0; P < this["_friend_list"]["length"]; P++)
                            if (this["_friend_list"][P].base["account_id"] == S)
                                return this["_friend_list"][P];
                        return null;
                    },
                    P["_onFriendStateChange"] = function (S) {
                        app.Log.log(JSON["stringify"](S));
                        var P = this.find(S["target_id"]);
                        return null == P ? (app.Log["Error"]("收到并非好友的人的信息:" + JSON["stringify"](S)), void 0) : (S = S["active_state"], S && (null != S["login_time"] && void 0 != S["login_time"] && (P["state"]["login_time"] = S["login_time"]), null != S["logout_time"] && void 0 != S["logout_time"] && (P["state"]["logout_time"] = S["logout_time"]), P["state"]["playing"] = S["playing"], null != S["is_online"] && void 0 != S["is_online"] && (P["state"]["is_online"] = S["is_online"]), this["triggerMsg"]({
                            type: "singlechange",
                            account_id: P.base["account_id"]
                        })), void 0);
                    },
                    P["_onFriendViewChange"] = function (S) {
                        var P = this.find(S["target_id"]);
                        return null == P ? (app.Log["Error"]("收到并非好友的人的信息:" + JSON["stringify"](S)), void 0) : (null != S.base["avatar_id"] && void 0 != S.base["avatar_id"] && (P.base["avatar_id"] = S.base["avatar_id"]), null != S.base["title"] && void 0 != S.base["title"] && (P.base["title"] = S.base["title"]), null != S.base["nickname"] && void 0 != S.base["nickname"] && (P.base["nickname"] = S.base["nickname"]), null != S.base["verified"] && void 0 != S.base["verified"] && (P.base["verified"] = S.base["verified"]), null != S.base["level"] && void 0 != S.base["level"] && (P.base["level"] = S.base["level"]), null != S.base["level3"] && void 0 != S.base["level3"] && (P.base["level3"] = S.base["level3"]), null != S.base["avatar_frame"] && void 0 != S.base["avatar_frame"] && (P.base["avatar_frame"] = S.base["avatar_frame"]), this["triggerMsg"]({
                            type: "singlechange",
                            account_id: P.base["account_id"]
                        }), void 0);
                    },
                    P["addListener"] = function (S) {
                        this["removeListener"](S),
                            this["_listener"].push(S);
                    },
                    P["removeListener"] = function (S) {
                        for (var P = 0; P < this["_listener"]["length"]; P++)
                            if (this["_listener"][P] === S) {
                                this["_listener"][P] = this["_listener"][this["_listener"]["length"] - 1],
                                    this["_listener"].pop();
                                break;
                            }
                    },
                    P["triggerMsg"] = function (S) {
                        for (var P = 0; P < this["_listener"]["length"]; P++)
                            this["_listener"][P] && this["_listener"][P]["runWith"](S);
                    },
                    P["removeFriend"] = function (S) {
                        for (var P = 0; P < this["_friend_list"]["length"]; P++)
                            if (this["_friend_list"][P].base["account_id"] == S) {
                                for (var m = P; m < this["_friend_list"]["length"] - 1; m++)
                                    this["_friend_list"][m] = this["_friend_list"][m + 1];
                                this["_friend_list"].pop(),
                                    this["friend_count"]--;
                                break;
                            }
                    },
                    P["_onFriendChange"] = function (S) {
                        var P = S["account_id"];
                        1 == S.type ? this.find(P) || (this["friend_count"]++, this["friend_list"].push(S["friend"])) : 2 == S.type && this["removeFriend"](P),
                            this["triggerMsg"]({
                                type: "listchange"
                            });
                    },
                    P["_onFriendApplyChange"] = function (S) {
                        for (var P = 0; P < this["_friendapply_list"]["length"]; P++)
                            if (this["_friendapply_list"][P]["account_id"] == S["account_id"])
                                return this["_friendapply_list"][P]["apply_time"] = S["apply_time"], void 0;
                        if (this["_friendapply_list"].push({
                            account_id: S["account_id"],
                            apply_time: S["apply_time"]
                        }), S["removed_id"])
                            for (var P = 0; P < this["_friendapply_list"]["length"]; P++)
                                if (this["_friendapply_list"][P]["account_id"] == S["removed_id"]) {
                                    for (var m = 0; m < this["_friendapply_list"]["length"] - 1; m++)
                                        this["_friendapply_list"][m] = this["_friendapply_list"][m + 1];
                                    this["_friendapply_list"].pop();
                                    break;
                                }
                    },
                    P["delFriendApply"] = function (S) {
                        for (var P = 0; P < this["_friendapply_list"]["length"]; P++)
                            if (this["_friendapply_list"][P]["account_id"] == S) {
                                for (var m = P; m < this["_friendapply_list"]["length"] - 1; m++)
                                    this["_friendapply_list"][m] = this["_friendapply_list"][m + 1];
                                this["_friendapply_list"].pop();
                                break;
                            }
                    },
                    P["needShowRedpoint"] = function () {
                        var P = Laya["LocalStorage"]["getItem"]("friend_apply_" + GameMgr.Inst["account_id"]),
                            m = 0;
                        if (P && (m = Number(P) / 1000), S["FriendMgr"]["friendapply_list"])
                            for (var B = 0, J = S["FriendMgr"]["friendapply_list"]; B < J["length"]; B++) {
                                var L = J[B];
                                if (L["apply_time"] > m)
                                    return !0;
                            }
                        return !1;
                    },
                    P["fetchRecentPlayer"] = function (S) {
                        var P = this;
                        return this["recentplayer_changed"] ? (this["recentplayer_changed"] = !1, app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchRecentFriend", {}, function (m, B) {
                            if (m || B["error"])
                                app.Log.log("fetchRecentFriend");
                            else {
                                var J = P["_recentplayer_list"];
                                if (P["_recentplayer_list"] = [], B["account_list"])
                                    for (var L = 0; L < B["account_list"]["length"]; L++) {
                                        for (var w = !1, h = 0, s = J; h < s["length"]; h++) {
                                            var R = s[h];
                                            if (R["account_id"] == B["account_list"][L]) {
                                                P["_recentplayer_list"].push(R),
                                                    w = !0;
                                                break;
                                            }
                                        }
                                        w || P["_recentplayer_list"].push({
                                            account_id: B["account_list"][L],
                                            base: null
                                        });
                                    }
                            }
                            S && S["runWith"]({
                                err: m,
                                res: B
                            });
                        }), void 0) : (S && S.run(), void 0);
                    },
                    P["_friend_list"] = [],
                    P["_listener"] = [],
                    P["_friendapply_list"] = [],
                    P["_recentplayer_list"] = [],
                    P["friend_max_count"] = 0,
                    P["friend_count"] = 0,
                    P["recentplayer_changed"] = !0,
                    P;
            }
                ();
            S["FriendMgr"] = m;
        }
            (game || (game = {}));





        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        var m = this,
                            B = S["DesktopMgr"].Inst.mode == S["EMJMode"].play || S["DesktopMgr"].Inst["record_show_anim"];
                        P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1),
                            S["DesktopMgr"].Inst["gameing"] = !1,
                            uiscript["UI_OtherPlayerInfo"].Inst["close"](),
                            S["BgmListMgr"]["stopBgm"](),
                            Laya["timer"].once(100, this, function () {
                                var J = P["hules"],
                                    L = 0;
                                if (P["hules_history"] && Laya["timer"].once(3000, m, function () {
                                    for (var m = 0, J = P["hules_history"]; m < J["length"]; m++) {
                                        var L = J[m],
                                            w = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](L.seat)];
                                        if (w && w["already_xuezhan_hule_state"]) {
                                            for (var h = [], s = 0; s < L.hand["length"]; s++)
                                                h.push(mjcore["MJPai"]["Create"](L.hand[s]));
                                            h = h.sort(mjcore["MJPai"]["Distance"]),
                                                w["onXuezhanEnd"](h, !B);
                                        }
                                    }
                                }), J[0].zimo) {
                                    for (var w = J[0].seat, h = [], s = 0; s < J[0].hand["length"]; s++)
                                        h.push(mjcore["MJPai"]["Create"](J[0].hand[s]));
                                    h = h.sort(mjcore["MJPai"]["Distance"]),
                                        uiscript["UI_Huleshow"].Inst["showZimo"]([S["DesktopMgr"].Inst["seat2LocalPosition"](w)]),
                                        P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0),
                                        L += 1400,
                                        Laya["timer"].once(L, m, function () {
                                            w == S["DesktopMgr"].Inst.seat && S["DesktopMgr"].Inst["mainrole"]["HulePrepare"](h, J[0]["hu_tile"], J[0].zimo),
                                                S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](w)].Hule(h, mjcore["MJPai"]["Create"](J[0]["hu_tile"]), J[0].zimo);
                                        }),
                                        L += B ? 1500 : 500,
                                        w == S["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                                }
                                else {
                                    Laya["timer"].once(L, m, function () {
                                        for (var P = [], m = 0; m < J["length"]; m++)
                                            P.push(S["DesktopMgr"].Inst["seat2LocalPosition"](J[m].seat));
                                        uiscript["UI_Huleshow"].Inst["showRong"](P);
                                    }),
                                        L += 1500;
                                    for (var s = 0; s < J["length"]; s++) {
                                        var R = J[s].seat;
                                        if (R == S["DesktopMgr"].Inst.seat) {
                                            for (var v = [], f = 0; f < J[s].hand["length"]; f++)
                                                v.push(mjcore["MJPai"]["Create"](J[s].hand[f]));
                                            v = v.sort(mjcore["MJPai"]["Distance"]),
                                                S["DesktopMgr"].Inst["mainrole"]["HulePrepare"](v, J[s]["hu_tile"], J[s].zimo);
                                        }
                                    }
                                    Laya["timer"].once(L, m, function () {
                                        if (B) {
                                            for (var P = 0, m = -1, L = 0; L < J["length"]; L++) {
                                                var w = J[L].seat;
                                                if (-1 == m)
                                                    m = w;
                                                else {
                                                    var h = S["DesktopMgr"].Inst["seat2LocalPosition"](m),
                                                        s = S["DesktopMgr"].Inst["seat2LocalPosition"](w);
                                                    h > s && (m = w);
                                                }
                                            }
                                            m >= 0 && (P = S["DesktopMgr"].Inst["player_effects"][m][game["EView"]["hupai_effect"]]),
                                                S["DesktopMgr"].Inst["lastqipai"]["isxuezhanhu"] = !0,
                                                S["DesktopMgr"].Inst["lastqipai"]["OnChoosedPai"](),
                                                S["DesktopMgr"].Inst["ShowHuleEffect"](S["DesktopMgr"].Inst["lastqipai"], S["DesktopMgr"].Inst["lastqipai"]["model"]["transform"]["position"], P, S["DesktopMgr"].Inst["lastpai_seat"], S["DesktopMgr"].Inst["isLastPaiMingPai"]() ? 2 : 0);
                                        }
                                        for (var L = 0; L < J["length"]; L++) {
                                            for (var R = [], v = 0; v < J[L].hand["length"]; v++)
                                                R.push(mjcore["MJPai"]["Create"](J[L].hand[v]));
                                            R = R.sort(mjcore["MJPai"]["Distance"]),
                                                S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](J[L].seat)].Hule(R, mjcore["MJPai"]["Create"](J[L]["hu_tile"]), J[L].zimo),
                                                J[L].seat == S["DesktopMgr"].Inst.seat && (uiscript["UI_TingPai"].Inst["reset"](), uiscript["UI_TingPai"].Inst["setZhengting"](!1));
                                        }
                                    }),
                                        L += B ? 2000 : 300;
                                }
                                for (var A = [], s = 0; s < P["delta_scores"]["length"]; s++) {
                                    var u = {
                                        title_id: 0,
                                        score: 0,
                                        delta: 0
                                    };
                                    if (P["delta_scores"][s] > 0) {
                                        uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](s, "emoji_7", -1),
                                            S["DesktopMgr"].Inst["onRoundEnd"](s, 1),
                                            u["delta"] = P["delta_scores"][s];
                                        for (var y = 0, e = J; y < e["length"]; y++) {
                                            var x = e[y];
                                            if (x.seat == s) {
                                                u["title_id"] = x["title_id"];
                                                break;
                                            }
                                        }
                                    } else
                                        P["delta_scores"][s] < 0 && (u["delta"] = P["delta_scores"][s], uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](s, "emoji_8", -1), S["DesktopMgr"].Inst["onRoundEnd"](s, 0));
                                    u["score"] = P["old_scores"][s],
                                        A.push(u);
                                }
                                Laya["timer"].once(L, m, function () {
                                    Laya["timer"].once(200, m, function () {
                                        S["DesktopMgr"].Inst["setScores"](P["scores"]);
                                    }),
                                        uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](A);
                                }),
                                    L += 3000,
                                    Laya["timer"].once(L, m, function () {
                                        uiscript["UIMgr"].Inst["ShowWin"](P, !1),
                                            S["DesktopMgr"].Inst["ActionRunComplete"]();
                                    });
                            });
                    },
                    m["fastplay"] = function (P) {
                        app.Log.log("ActionHule fastplay data:" + JSON["stringify"](P)),
                            S["BgmListMgr"]["stopBgm"](),
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1),
                            S["DesktopMgr"].Inst["gameing"] = !1,
                            S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            uiscript["UIMgr"].Inst["ShowWin"](P, !1);
                    },
                    m["record"] = function (S) {
                        return this.play(S),
                            100000;
                    },
                    m["fastrecord"] = function (P) {
                        S["BgmListMgr"]["stopBgm"](),
                            S["DesktopMgr"].Inst["gameing"] = !1,
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1),
                            S["DesktopMgr"].Inst["setScores"](P["scores"]),
                            uiscript["UIMgr"].Inst["ShowWin"](P, !1);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionHuleXueZhanEnd"] = P;
        }
            (view || (view = {}));





        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        app.Log.log("ActionNewCard play data:" + JSON["stringify"](P));
                        var m = uiscript["UI_FightBegin"].hide();
                        return Laya["timer"].once(m + 200, this, function () {
                            uiscript["UI_DesktopInfo"].Inst["OnNewCard"](P, !0),
                                S["DesktopMgr"].Inst["ActionRunComplete"]();
                        }),
                            m + 1000;
                    },
                    m["fastplay"] = function (P) {
                        return app.Log.log("ActionNewCard fastplay data:" + JSON["stringify"](P)),
                            uiscript["UI_FightBegin"].hide(),
                            uiscript["UI_DesktopInfo"].Inst["OnNewCard"](P, !1),
                            S["DesktopMgr"].Inst["ActionRunComplete"](),
                            0;
                    },
                    m["record"] = function (P) {
                        app.Log.log("ActionNewCard record data:" + JSON["stringify"](P));
                        var m = uiscript["UI_FightBegin"].hide();
                        return S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] ? (uiscript["UI_DesktopInfo"].Inst["OnNewCard"](P, !0), m += 1000) : uiscript["UI_DesktopInfo"].Inst["OnNewCard"](P, !1),
                            S["DesktopMgr"].Inst["ActionRunComplete"](),
                            m;
                    },
                    m["fastrecord"] = function (P) {
                        app.Log.log("ActionNewCard fastrecord data:" + JSON["stringify"](P));
                        uiscript["UI_FightBegin"].hide();
                        return uiscript["UI_DesktopInfo"].Inst["OnNewCard"](P, !1),
                            S["DesktopMgr"].Inst["ActionRunComplete"](),
                            0;
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionNewCard"] = P;
        }
            (view || (view = {}));





        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        app.Log.log("ActionAnGangAddGang play data:" + JSON["stringify"](P));
                        var m = P.seat,
                            B = S["DesktopMgr"].Inst["seat2LocalPosition"](m);
                        if (P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !1), P.type == mjcore["E_Ming"]["gang_ming"])
                            S["DesktopMgr"].Inst["players"][B]["PlaySound"]("act_kan"), Laya["timer"].once(500, this, function () {
                                P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0),
                                    S["DesktopMgr"].Inst["players"][B]["AddGang"](mjcore["MJPai"]["Create"](P["tiles"])),
                                    S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                            });
                        else {
                            var J = new mjcore["MJMing"]();
                            J.type = mjcore["E_Ming"]["gang_an"],
                                J.from = [m, m, m, m],
                                J.pais = this["getAngangTile"](P["tiles"]);
                            for (var L = [], w = 0; w < J.pais["length"]; w++)
                                L.push(-1);
                            Laya["timer"].once(500, this, function () {
                                P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0),
                                    S["DesktopMgr"].Inst["players"][B]["AddMing"](J, L),
                                    S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                            }),
                                S["DesktopMgr"].Inst["players"][B]["PlaySound"]("act_kan");
                        }
                        P["operation"] && Laya["timer"].once(600, this, function () {
                            S["ActionOperation"].play(P["operation"]);
                        }),
                            void 0 != P["zhenting"] && uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"]),
                            m == S["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](P, !1),
                            uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](m, "emoji_5", 2000),
                            S["DesktopMgr"].Inst["mainrole"]["revertAllPais"]();
                    },
                    m["fastplay"] = function (P, m) {
                        app.Log.log("ActionAnGangAddGang fastplay data:" + JSON["stringify"](P) + " usetime:" + m);
                        var B = P.seat,
                            J = S["DesktopMgr"].Inst["seat2LocalPosition"](B);
                        if (P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !0), P.type == mjcore["E_Ming"]["gang_ming"])
                            S["DesktopMgr"].Inst["players"][J]["AddGang"](mjcore["MJPai"]["Create"](P["tiles"]), !1);
                        else {
                            var L = new mjcore["MJMing"]();
                            L.type = mjcore["E_Ming"]["gang_an"],
                                L.from = [B, B, B, B],
                                L.pais = this["getAngangTile"](P["tiles"]);
                            for (var w = [], h = 0; h < L.pais["length"]; h++)
                                w.push(-1);
                            S["DesktopMgr"].Inst["players"][J]["AddMing"](L, w, !1);
                        }
                        P["operation"] && -1 != m && Laya["timer"].once(500, this, function () {
                            S["ActionOperation"].play(P["operation"], m);
                        }),
                            void 0 != P["zhenting"] && uiscript["UI_TingPai"].Inst["setZhengting"](P["zhenting"]),
                            B == S["DesktopMgr"].Inst.seat && uiscript["UI_TingPai"].Inst["setData1"](P, !0),
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                    },
                    m["record"] = function (P, m) {
                        void 0 === m && (m = 0),
                            app.Log.log("ActionAnGangAddGang record data:" + JSON["stringify"](P)),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !0);
                        var B = P.seat,
                            J = S["DesktopMgr"].Inst["seat2LocalPosition"](B);
                        if (P.type == mjcore["E_Ming"]["gang_ming"])
                            S["DesktopMgr"].Inst["players"][J]["PlaySound"]("act_kan"), Laya["timer"].once(500, this, function () {
                                P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0),
                                    S["DesktopMgr"].Inst["players"][J]["AddGang"](mjcore["MJPai"]["Create"](P["tiles"])),
                                    S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                            });
                        else {
                            var L = new mjcore["MJMing"]();
                            L.type = mjcore["E_Ming"]["gang_an"],
                                L.from = [B, B, B, B],
                                L.pais = this["getAngangTile"](P["tiles"]);
                            for (var w = [], h = 0; h < L.pais["length"]; h++)
                                w.push(-1);
                            Laya["timer"].once(500, this, function () {
                                P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0),
                                    S["DesktopMgr"].Inst["players"][J]["AddMing"](L, w),
                                    S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0;
                            }),
                                S["DesktopMgr"].Inst["players"][J]["PlaySound"]("act_kan");
                        }
                        if (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](B, "emoji_5", 2000), S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && P["operations"])
                            for (var h = 0; h < P["operations"]["length"]; h++)
                                S["ActionOperation"].ob(P["operations"][h], m, 450);
                        return 1700;
                    },
                    m["fastrecord"] = function (P, m) {
                        void 0 === m && (m = -1),
                            app.Log.log("ActionAnGangAddGang fastrecord data:" + JSON["stringify"](P)),
                            P["doras"] && S["DesktopMgr"].Inst["WhenDoras"](P["doras"], !0);
                        var B = P.seat,
                            J = S["DesktopMgr"].Inst["seat2LocalPosition"](B);
                        if (P.type == mjcore["E_Ming"]["gang_ming"])
                            S["DesktopMgr"].Inst["players"][J]["AddGang"](mjcore["MJPai"]["Create"](P["tiles"]), !1);
                        else {
                            var L = new mjcore["MJMing"]();
                            L.type = mjcore["E_Ming"]["gang_an"],
                                L.from = [B, B, B, B],
                                L.pais = this["getAngangTile"](P["tiles"]);
                            for (var w = [], h = 0; h < L.pais["length"]; h++)
                                w.push(-1);
                            S["DesktopMgr"].Inst["players"][J]["AddMing"](L, w, !1);
                        }
                        if (S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"] && uiscript["UI_Live_Broadcast"].Inst["during_play"] && m >= 0 && P["operations"])
                            for (var h = 0; h < P["operations"]["length"]; h++)
                                S["ActionOperation"].ob(P["operations"][h], m, 450);
                        S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0,
                            P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1);
                    },
                    m["getAngangTile"] = function (P) {
                        var m = [];
                        if (S["DesktopMgr"].Inst["is_chuanma_mode"]() || '0' != P["charAt"](0) && '5' != P["charAt"](0) || 'z' == P["charAt"](1))
                            for (var B = 0; 4 > B; B++) {
                                var J = mjcore["MJPai"]["Create"](P);
                                S["DesktopMgr"].Inst["is_jiuchao_mode"]() && (J["touming"] = 3 != B),
                                    m.push(J);
                            }
                        else {
                            var L = 1;
                            if (S["DesktopMgr"].Inst["game_config"]) {
                                var w = S["DesktopMgr"].Inst["game_config"].mode;
                                if (w && w["extendinfo"]) {
                                    var h = JSON["parse"](w["extendinfo"]);
                                    if (h && null != h["dora_count"])
                                        switch (h["dora_count"]) {
                                            case 0:
                                                L = 0;
                                                break;
                                            case 2:
                                                L = 1;
                                                break;
                                            case 3:
                                                L = 1;
                                                break;
                                            case 4:
                                                L = 'p' == P["charAt"](1) ? 2 : 1;
                                        }
                                }
                                if (w && w["detail_rule"] && w["detail_rule"] && null != w["detail_rule"]["dora_count"])
                                    switch (w["detail_rule"]["dora_count"]) {
                                        case 0:
                                            L = 0;
                                            break;
                                        case 2:
                                            L = 1;
                                            break;
                                        case 3:
                                            L = 1;
                                            break;
                                        case 4:
                                            L = 'p' == P["charAt"](1) ? 2 : 1;
                                    }
                            }
                            for (var B = 0; 4 > B; B++) {
                                var J = mjcore["MJPai"]["Create"](P);
                                S["DesktopMgr"].Inst["is_jiuchao_mode"]() && (J["touming"] = 3 != B),
                                    J.dora = 0 == B ? !1 : L >= B,
                                    m.push(J);
                            }
                        }
                        return S["DesktopMgr"].Inst["waiting_lingshang_deal_tile"] = !0,
                            m;
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionAnGangAddGang"] = P;
        }
            (view || (view = {}));




        !function (S) {
            var P = function () {
                function P(S) {
                    var P = this;
                    this["rounds"] = [],
                        this["locking"] = !1,
                        this["enable"] = !1,
                        this.me = S,
                        this.me["visible"] = !1,
                        this["scrollview"] = this.me["scriptMap"]["capsui.CScrollView"],
                        this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, this["renderInfo"], null, !1)),
                        this["btn_up"] = this.me["getChildByName"]('up'),
                        this["btn_down"] = this.me["getChildByName"]("down"),
                        this["btn_up"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            P["locking"] || P["scrollview"]["scrollDelta"](-100);
                        }, null, !1),
                        this["btn_down"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            P["locking"] || P["scrollview"]["scrollDelta"](100);
                        }, null, !1),
                        this["scrollview"].me.on("ratechange", this, function () {
                            P["btn_up"]["visible"] = P["scrollview"].rate > 0,
                                P["btn_down"]["visible"] = P["scrollview"]["need_scroll"] && P["scrollview"].rate < 1;
                        }),
                        this["enable"] = !1;
                }
                return P["prototype"].show = function (P) {
                    var m = this;
                    this["enable"] = !0,
                        this["locking"] = !0,
                        this.me["visible"] = !0,
                        this["scrollview"]["reset"](),
                        this["rounds"] = P;
                    for (var B = 0, J = 0; J < P["length"]; J++) {
                        var L = this["caluH"](P[J]);
                        B += L,
                            this["scrollview"]["addItem"](1, L);
                    }
                    S["UIBase"]["anim_alpha_in"](this.me, {
                        y: 30
                    }, 120, 0, Laya["Handler"]["create"](this, function () {
                        m["locking"] = !1;
                    })),
                        this["btn_up"]["visible"] = !1,
                        this["btn_down"]["visible"] = this["scrollview"]["need_scroll"];
                },
                    P["prototype"]["close"] = function () {
                        var P = this;
                        this["enable"] = !1,
                            this["locking"] = !0,
                            S["UIBase"]["anim_alpha_out"](this.me, {
                                y: 30
                            }, 120, 0, Laya["Handler"]["create"](this, function () {
                                P["locking"] = !1,
                                    P.me["visible"] = !1;
                            }));
                    },
                    P["prototype"]["caluH"] = function (S) {
                        var P = S["actions"][S["actions"]["length"] - 1];
                        if (view["DesktopMgr"].Inst["is_chuanma_mode"]())
                            return B.Inst["isRoundEnd"](P.name) ? 90 + 40 * view["DesktopMgr"].Inst["player_count"] : 120;
                        if (view["DesktopMgr"].Inst["xuezhan"]) {
                            if (!B.Inst["isRoundEnd"](P.name))
                                return 120;
                            if (P.data["hules_history"] && P.data["hules_history"]["length"] > 0)
                                return 90 + 40 * view["DesktopMgr"].Inst["player_count"];
                        }
                        if ("RecordNoTile" == P.name) {
                            for (var m = P.data, J = [], L = 0; L < view["DesktopMgr"].Inst["player_count"]; L++)
                                J.push({
                                    old_score: m["scores"][0]["old_scores"][L],
                                    delta: 0
                                });
                            for (var L = 0; L < m["scores"]["length"]; L++)
                                for (var w = 0; w < view["DesktopMgr"].Inst["player_count"]; w++)
                                    J[w]["delta"] += m["scores"][L]["delta_scores"][w];
                            for (var h = [], L = 0; L < J["length"]; L++)
                                J[L]["delta"] > 0 && h.push(L);
                            var s = 0 == h["length"] ? 120 : 80 + 40 * h["length"];
                            return s;
                        }
                        if ("RecordLiuJu" == P.name) {
                            if (view["DesktopMgr"].Inst["xuezhan"]) {
                                for (var R = 0, v = 0, f = P.data["delta_scores"]; v < f["length"]; v++) {
                                    var A = f[v];
                                    A && R++;
                                }
                                return R ? 100 + 40 * R : 120;
                            }
                            return 120;
                        }
                        return "RecordHule" == P.name ? P.data["hules"][0].zimo ? 120 : 180 + 40 * (P.data["hules"]["length"] - 1) : 120;
                    },
                    P["prototype"]["renderInfo"] = function (S) {
                        for (var P = this, m = S["index"], J = S["container"], L = this["rounds"][m], w = 0; w < L["actions"]["length"]; w++)
                            if ("RecordNewRound" == L["actions"][w].name) {
                                if (view["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                    J["getChildByName"]("container_title")["getChildByName"]("chang").text = 'en' == GameMgr["client_language"] ? "Round" : '第',
                                        J["getChildByName"]("container_title")["getChildByName"]('ju').text = (L["actions"][w].data["ju_count"] + 1)["toString"](),
                                        J["getChildByName"]("container_title")["getChildByName"]("benchang")["visible"] = !1,
                                        J["getChildByName"]("container_title")["getChildByName"]("ben")["visible"] = !1;
                                    for (var h = 0, s = J["getChildByName"]("container_title"), R = [3, 3, 0], v = 0; 3 > v; v++) {
                                        var f = s["getChildAt"](v);
                                        h += f["textField"]["textWidth"] * f["scaleX"],
                                            h += R[v];
                                    }
                                    for (var A = s["width"] / 2 - h / 2, u = 0; 3 > u; u++) {
                                        var f = s["getChildAt"](u);
                                        f.x = A,
                                            A += f["textField"]["textWidth"] * f["scaleX"] + R[u],
                                            f.y = "haolong" == f.font ? 34 : 31;
                                    }
                                    break;
                                }
                                var y = void 0;
                                y = "chs" == GameMgr["client_language"] ? ['东', '南', '西', '北'] : 'jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"] ? ['東', '南', '西', '北'] : 'kr' == GameMgr["client_language"] ? ['동', '남', '서', '북'] : ["East", "South", "West", "North"],
                                    J["getChildByName"]("container_title")["getChildByName"]("chang").text = y[L["actions"][w].data["chang"] % 4],
                                    J["getChildByName"]("container_title")["getChildByName"]('ju').text = (L["actions"][w].data.ju + 1)["toString"](),
                                    J["getChildByName"]("container_title")["getChildByName"]("ben").text = L["actions"][w].data.ben["toString"]();
                                for (var h = 0, s = J["getChildByName"]("container_title"), R = [3, 3, 50, 3, 0], e = 0; e < s["numChildren"]; e++) {
                                    var f = s["getChildAt"](e);
                                    h += f["textField"]["textWidth"] * f["scaleX"],
                                        h += R[e];
                                }
                                for (var A = s["width"] / 2 - h / 2, x = 0; x < s["numChildren"]; x++) {
                                    var f = s["getChildAt"](x);
                                    f.x = A,
                                        A += f["textField"]["textWidth"] * f["scaleX"] + R[x],
                                        f.y = "haolong" == f.font ? 34 : 31;
                                }
                                break;
                            }
                        var C = L["actions"][L["actions"]["length"] - 1],
                            g = C.data,
                            H = J,
                            I = J["getChildByName"]("line"),
                            Q = J["getChildByName"]("liuju"),
                            i = J["getChildByName"]("win"),
                            c = J["getChildByName"]("lose");
                        I["visible"] = !1,
                            Q["visible"] = !1,
                            i["visible"] = !1,
                            c["visible"] = !1;
                        var j = !0;
                        if (view["DesktopMgr"].Inst["xuezhan"] || view["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                            for (var t = [], w = 0; w < view["DesktopMgr"].Inst["player_count"]; w++)
                                t.push(0);
                            for (var p = !1, N = 0, W = L["actions"]; N < W["length"]; N++) {
                                var q = W[N];
                                if (("RecordHuleXueZhanEnd" == q.name || "RecordNoTile" == q.name) && (p = q.data["hules_history"] && q.data["hules_history"]["length"] > 0), "RecordHuleXueZhanMid" == q.name || "RecordHuleXueZhanEnd" == q.name)
                                    for (var w = 0; w < view["DesktopMgr"].Inst["player_count"]; w++)
                                        t[w] += q.data["delta_scores"][w];
                                else if ("RecordNoTile" == q.name) {
                                    for (var w = 0; w < q.data["scores"]["length"]; w++)
                                        if (q.data["scores"][w]["delta_scores"] && q.data["scores"][w]["delta_scores"]["length"] > 0)
                                            for (var O = 0; O < view["DesktopMgr"].Inst["player_count"]; O++)
                                                t[O] += q.data["scores"][w]["delta_scores"][O];
                                } else if ("RecordGangResult" == q.name || "RecordGangResultEnd" == q.name)
                                    for (var w = 0; w < view["DesktopMgr"].Inst["player_count"]; w++)
                                        t[w] += q.data["gang_infos"]["delta_scores"][w];
                            }
                            if (view["DesktopMgr"].Inst["is_chuanma_mode"]() && (p = !0), B.Inst["isRoundEnd"](C.name) || (j = !1), H["height"] = j ? 90 + 40 * view["DesktopMgr"].Inst["player_count"] : 120, p) {
                                j = !1,
                                    i["visible"] = !0;
                                var K = i["getChildByName"]("info");
                                K["visible"] = "RecordLiuJu" != C.name,
                                    K.text = game["Tools"]["strOfLocalization"](3257),
                                    K = c["getChildByName"]("chong");
                                for (var w = 0; w < view["DesktopMgr"].Inst["player_count"]; w++) {
                                    var F = i["getChildByName"]("player"),
                                        E = F["getChildAt"](w);
                                    E["visible"] = !0,
                                        E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](w)["nickname"],
                                        E["getChildByName"]("point").text = t[w] > 0 ? '+' + t[w]["toString"]() : t[w]["toString"]();
                                }
                                for (var k = i["getChildByName"]("player"), w = view["DesktopMgr"].Inst["player_count"]; w < k["numChildren"]; w++)
                                    k["getChildAt"](w)["visible"] = !1;
                            } else;
                        }
                        if ("RecordNoTile" == C.name) {
                            if (j) {
                                for (var r = [], w = 0; w < view["DesktopMgr"].Inst["player_count"]; w++)
                                    r.push({
                                        old_score: g["scores"][0]["old_scores"][w],
                                        delta: 0
                                    });
                                for (var w = 0; w < g["scores"]["length"]; w++)
                                    for (var O = 0; O < view["DesktopMgr"].Inst["player_count"]; O++)
                                        r[O]["delta"] += g["scores"][w]["delta_scores"][O];
                                for (var D = [], w = 0; w < r["length"]; w++)
                                    r[w]["delta"] > 0 && D.push(w);
                                if (H["height"] = 120 + (0 == D["length"] ? 0 : 40 * (D["length"] - 1)), g["liujumanguan"]) {
                                    i["visible"] = !0;
                                    var K = i["getChildByName"]("info");
                                    K.text = game["Tools"]["strOfLocalization"](2170),
                                        K["color"] = "#8d8fac";
                                    for (var k = i["getChildByName"]("player"), w = 0; w < k["numChildren"]; w++) {
                                        var E = k["getChildAt"](w);
                                        w < D["length"] ? (E["visible"] = !0, E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](D[w])["nickname"], E["getChildByName"]("point").text = (r[D[w]]["delta"] > 0 ? '+' : '') + r[D[w]]["delta"]["toString"]()) : E["visible"] = !1;
                                    }
                                } else if (i["visible"] = !0, i["getChildByName"]("info").text = '', Q["visible"] = !0, Q.text = game["Tools"]["strOfLocalization"](2171), Q["color"] = "#8d8fac", g["scores"])
                                    for (var k = i["getChildByName"]("player"), w = 0; w < k["numChildren"]; w++) {
                                        var E = k["getChildAt"](w);
                                        w < D["length"] ? (E["visible"] = !0, E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](D[w])["nickname"], E["getChildByName"]("point").text = (r[D[w]]["delta"] > 0 ? '+' : '') + r[D[w]]["delta"]["toString"]()) : E["visible"] = !1;
                                    }
                            }
                        } else if ("RecordLiuJu" == C.name) {
                            var M = ['', game["Tools"]["strOfLocalization"](2172), game["Tools"]["strOfLocalization"](2173), game["Tools"]["strOfLocalization"](2174), game["Tools"]["strOfLocalization"](2175), game["Tools"]["strOfLocalization"](2176)];
                            Q["visible"] = !0,
                                Q.text = M[g.type],
                                Q["color"] = "#8d8fac",
                                j && (H["height"] = 120);
                        } else if ("RecordHule" == C.name) {
                            if (!view["DesktopMgr"].Inst["xuezhan"])
                                if (C.data["hules"][0].zimo) {
                                    i["visible"] = !0;
                                    var K = i["getChildByName"]("info");
                                    K.text = game["Tools"]["strOfLocalization"](2177),
                                        K["color"] = "#ea3694";
                                    for (var k = i["getChildByName"]("player"), w = 0; w < k["numChildren"]; w++) {
                                        var E = k["getChildAt"](w);
                                        if (0 == w) {
                                            E["visible"] = !0;
                                            var T = g["hules"][0].seat;
                                            E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](T)["nickname"];
                                            var Y = g["delta_scores"][T];
                                            E["getChildByName"]("point").text = (Y > 0 ? '+' : '') + Y["toString"]();
                                        } else
                                            E["visible"] = !1;
                                    }
                                    H["height"] = 120;
                                } else {
                                    i["visible"] = !0;
                                    var K = i["getChildByName"]("info");
                                    K.text = game["Tools"]["strOfLocalization"](2178),
                                        K["color"] = "#ef3538";
                                    for (var k = i["getChildByName"]("player"), w = 0; w < k["numChildren"]; w++) {
                                        var E = k["getChildAt"](w);
                                        if (w < g["hules"]["length"]) {
                                            E["visible"] = !0;
                                            var T = g["hules"][w].seat;
                                            E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](T)["nickname"];
                                            var Y = g["delta_scores"][T];
                                            E["getChildByName"]("point").text = (Y > 0 ? '+' : '') + Y["toString"]();
                                        } else
                                            E["visible"] = !1;
                                    }
                                    I["visible"] = !0,
                                        I.y = 80 + 40 * g["hules"]["length"],
                                        c["visible"] = !0,
                                        c.y = 83 + 40 * g["hules"]["length"];
                                    var K = c["getChildByName"]("chong");
                                    K["visible"] = !0;
                                    for (var k = c["getChildByName"]("player"), w = 0; w < k["numChildren"]; w++) {
                                        var E = k["getChildAt"](w);
                                        if (0 == w) {
                                            E["visible"] = !0;
                                            for (var T = 0, O = 0; O < g["delta_scores"]["length"]; O++)
                                                (g["delta_scores"][O] < g["delta_scores"][T] || g["baopai"] > 0 && g["delta_scores"][O] == g["delta_scores"][T] && g["baopai"] - 1 == T) && (T = O);
                                            E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](T)["nickname"];
                                            var Y = g["delta_scores"][T];
                                            E["getChildByName"]("point").text = Y["toString"]();
                                        } else
                                            E["visible"] = !1;
                                    }
                                    H["height"] = 180 + 40 * (C.data["hules"]["length"] - 1);
                                }
                        } else if (B.Inst["isRoundEnd"](C.name)) {
                            if (!view["DesktopMgr"].Inst["xuezhan"] && !view["DesktopMgr"].Inst["is_chuanma_mode"]())
                                if (C.data["hules"][0].zimo) {
                                    i["visible"] = !0;
                                    var K = i["getChildByName"]("info");
                                    K.text = game["Tools"]["strOfLocalization"](2177),
                                        K["color"] = "#ea3694";
                                    for (var k = i["getChildByName"]("player"), w = 0; w < k["numChildren"]; w++) {
                                        var E = k["getChildAt"](w);
                                        if (0 == w) {
                                            E["visible"] = !0;
                                            var T = g["hules"][0].seat;
                                            E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](T)["nickname"];
                                            var Y = g["delta_scores"][T];
                                            E["getChildByName"]("point").text = (Y > 0 ? '+' : '') + Y["toString"]();
                                        } else
                                            E["visible"] = !1;
                                    }
                                    H["height"] = 120;
                                } else {
                                    i["visible"] = !0;
                                    var K = i["getChildByName"]("info");
                                    K.text = game["Tools"]["strOfLocalization"](2178),
                                        K["color"] = "#ef3538";
                                    for (var k = i["getChildByName"]("player"), w = 0; w < k["numChildren"]; w++) {
                                        var E = k["getChildAt"](w);
                                        if (w < g["hules"]["length"]) {
                                            E["visible"] = !0;
                                            var T = g["hules"][w].seat;
                                            E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](T)["nickname"];
                                            var Y = g["delta_scores"][T];
                                            E["getChildByName"]("point").text = (Y > 0 ? '+' : '') + Y["toString"]();
                                        } else
                                            E["visible"] = !1;
                                    }
                                    I["visible"] = !0,
                                        I.y = 80 + 40 * g["hules"]["length"],
                                        c["visible"] = !0,
                                        c.y = 83 + 40 * g["hules"]["length"];
                                    var K = c["getChildByName"]("chong");
                                    K["visible"] = !0;
                                    for (var k = c["getChildByName"]("player"), w = 0; w < k["numChildren"]; w++) {
                                        var E = k["getChildAt"](w);
                                        if (0 == w) {
                                            E["visible"] = !0;
                                            for (var T = 0, O = 0; O < g["delta_scores"]["length"]; O++)
                                                (g["delta_scores"][O] < g["delta_scores"][T] || g["baopai"] > 0 && g["delta_scores"][O] == g["delta_scores"][T] && g["baopai"] - 1 == T) && (T = O);
                                            E["getChildByName"]("name").text = view["DesktopMgr"].Inst["getPlayerName"](T)["nickname"];
                                            var Y = g["delta_scores"][T];
                                            E["getChildByName"]("point").text = Y["toString"]();
                                        } else
                                            E["visible"] = !1;
                                    }
                                    H["height"] = 180 + 40 * (C.data["hules"]["length"] - 1);
                                }
                        } else
                            Q["visible"] = !0, Q.text = game["Tools"]["strOfLocalization"](3036), Q["color"] = "#8ADB97", H["height"] = 120;
                        H["clickHandler"] = Laya["Handler"]["create"](this, function () {
                            P["locking"] || (B.Inst["jumpRound"](m), P["close"]());
                        }, null, !1),
                            J["getChildByName"]('bg')["height"] = J["height"] - 4;
                    },
                    P;
            }
                (),
                m = function () {
                    function P(S) {
                        var P = this;
                        this["locking"] = !1,
                            this["enable"] = !1,
                            this["have0"] = !1,
                            this.me = S,
                            this.me["visible"] = !1,
                            this["scrollview"] = this.me["scriptMap"]["capsui.CScrollView"],
                            this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, this["renderInfo"], null, !1)),
                            this["btn_up"] = this.me["getChildByName"]('up'),
                            this["btn_down"] = this.me["getChildByName"]("down"),
                            this["btn_up"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                P["locking"] || P["scrollview"]["scrollDelta"](-100);
                            }, null, !1),
                            this["btn_down"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                P["locking"] || P["scrollview"]["scrollDelta"](100);
                            }, null, !1),
                            this["scrollview"].me.on("ratechange", this, function () {
                                P["btn_up"]["visible"] = P["scrollview"].rate > 0,
                                    P["btn_down"]["visible"] = P["scrollview"]["need_scroll"] && P["scrollview"].rate < 1;
                            }),
                            this["enable"] = !1;
                    }
                    return P["prototype"].show = function (P, m) {
                        var B = this;
                        this["enable"] = !0,
                            this["locking"] = !0,
                            this["have0"] = m,
                            this.me["visible"] = !0,
                            this["scrollview"]["reset"](),
                            this["scrollview"]["addItem"](P + (m ? 1 : 0)),
                            S["UIBase"]["anim_alpha_in"](this.me, {
                                y: 30
                            }, 100, 0, Laya["Handler"]["create"](this, function () {
                                B["locking"] = !1;
                            })),
                            this["btn_up"]["visible"] = !1,
                            this["btn_down"]["visible"] = this["scrollview"]["need_scroll"];
                    },
                        P["prototype"]["close"] = function () {
                            var P = this;
                            this["enable"] = !1,
                                this["locking"] = !0,
                                S["UIBase"]["anim_alpha_out"](this.me, {
                                    y: 30
                                }, 100, 0, Laya["Handler"]["create"](this, function () {
                                    P["locking"] = !1,
                                        P.me["visible"] = !1;
                                }));
                        },
                        P["prototype"]["renderInfo"] = function (S) {
                            var P = this,
                                m = S["index"],
                                J = S["container"];
                            J["getChildByName"]("num").text = (m + (this["have0"] ? 0 : 1))["toString"](),
                                J["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    P["locking"] || (B.Inst["jumpXun"](m + (P["have0"] ? 0 : 1)), P["close"]());
                                }, null, !1);
                            var L = J,
                                w = [];
                            'en' == GameMgr["client_language"] ? (w.push(L["getChildByName"]("xun")), w.push(L["getChildByName"]("num"))) : (w.push(L["getChildByName"]("num")), w.push(L["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](w, 115, [10]);
                            for (var h = 1; h < L["numChildren"]; h++) {
                                var s = L["getChildAt"](h);
                                s.y = "haolong" == s.font ? 42 : 39;
                            }
                        },
                        P;
                }
                    (),
                B = function (B) {
                    function J() {
                        var S = B.call(this, new ui.mj["ob_replayUI"]()) || this;
                        return S.root = null,
                            S["label_chang"] = null,
                            S["label_ju"] = null,
                            S["label_xun"] = null,
                            S["img_play"] = null,
                            S["img_stop"] = null,
                            S["btn_preround"] = null,
                            S["btn_nextround"] = null,
                            S["page_chang"] = null,
                            S["page_xun"] = null,
                            S["origin_actions"] = [],
                            S["rounds"] = [],
                            S["round_index"] = 0,
                            S["action_index"] = 0,
                            S["locking_time"] = 0,
                            S["anim_time"] = 0,
                            S["_auto_play"] = !1,
                            S["locking"] = !1,
                            J.Inst = S,
                            S;
                    }
                    return __extends(J, B),
                        Object["defineProperty"](J["prototype"], "auto_play", {
                            get: function () {
                                return this["_auto_play"];
                            },
                            set: function (S) {
                                this["_auto_play"] = S,
                                    this["img_play"]["visible"] = !S,
                                    this["img_stop"]["visible"] = S;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        J["prototype"]["onCreate"] = function () {
                            var S = this;
                            this.root = this.me["getChildByName"]("root");
                            var B = this.me["getChildByName"]("root")["getChildByName"]("round");
                            B["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                S["page_chang"]["locking"] || (S["locking"], S["auto_play"] && (S["auto_play"] = !1), S["page_xun"]["enable"] && S["page_xun"]["close"](), S["page_chang"]["enable"] ? S["page_chang"]["close"]() : S["page_chang"].show(S["rounds"]));
                            }, null, !1),
                                this["label_chang"] = B["getChildByName"]("chang"),
                                this["label_ju"] = B["getChildByName"]('ju');
                            var J = this.me["getChildByName"]("root")["getChildByName"]("turn");
                            this["label_xun"] = J["getChildByName"]("xun"),
                                J["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["locking"],
                                        S["page_xun"]["locking"] || (S["auto_play"] && (S["auto_play"] = !1), S["page_chang"]["enable"] && S["page_chang"]["close"](), S["page_xun"]["enable"] ? S["page_xun"]["close"]() : S["page_xun"].show(S["rounds"][S["round_index"]].xun["length"], 0 != S["rounds"][S["round_index"]].xun[0]));
                                }, null, !1),
                                this["page_chang"] = new P(this.me["getChildByName"]("info_chang")),
                                this["page_xun"] = new m(this.me["getChildByName"]("info_xun")),
                                this.me["getChildByName"]("root")["getChildByName"]("play")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["locking"],
                                        S["auto_play"] = !S["auto_play"];
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("nextstep")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    return S["locking"],
                                        S["locking_time"] > Laya["timer"]["currTimer"] ? (S["auto_play"] && (S["auto_play"] = !1), void 0) : (S["nextStep"](),
                                            (GM_xmlhttpRequest({
                                                method: 'post',
                                                url: API_URL,
                                                data: JSON.stringify({
                                                    'record_click_action': "nextStep"
                                                }),
                                                onload: function (msg) {
                                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                        'record_click_action': "nextStep"
                                                    }));
                                                }
                                            })), void 0);
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("prestep")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["locking"],
                                        S["preStep"]();
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("nextturn")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["locking"],
                                        S["nextXun"]();
                                }, null, !1),
                                this.me["getChildByName"]("root")["getChildByName"]("preturn")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["locking"],
                                        S["preXun"]();
                                }, null, !1),
                                this["btn_preround"] = this.me["getChildByName"]("root")["getChildByName"]("preround"),
                                this["btn_preround"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["locking"],
                                        S["preRound"]();
                                }, null, !1),
                                this["btn_nextround"] = this.me["getChildByName"]("root")["getChildByName"]("nextround"),
                                this["btn_nextround"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                    S["locking"],
                                        S["nextRound"]();
                                }, null, !1),
                                this["img_play"] = this.me["getChildByName"]("root")["getChildByName"]("play")["getChildByName"]("play"),
                                this["img_stop"] = this.me["getChildByName"]("root")["getChildByName"]("play")["getChildByName"]("pause");
                        },
                        J["prototype"]["isRoundEnd"] = function (S) {
                            return "RecordNoTile" == S || "RecordLiuJu" == S || "RecordHule" == S || "RecordHuleXueZhanEnd" == S || "RecordGangResultEnd" == S;
                        },
                        J["prototype"].show = function (P) {
                            var m = this;
                            this["enable"] = !0,
                                this["origin_actions"] = P,
                                this["auto_play"] = !1,
                                this["page_chang"]["enable"] = !1,
                                this["page_chang"].me["visible"] = !1,
                                this["page_xun"]["enable"] = !1,
                                this["page_xun"].me["visible"] = !1,
                                this["initData"](),
                                this["locking"] = !0,
                                S["UIBase"]["anim_alpha_in"](this.root, {
                                    x: 30
                                }, 150, 0, Laya["Handler"]["create"](this, function () {
                                    m["locking"] = !1,
                                        S["UI_ReplayWheel"].Inst["enable"] = !0;
                                })),
                                this["round_index"] = this["rounds"]["length"] - 1,
                                this["action_index"] = this["rounds"][this["round_index"]]["actions"]["length"] - 1,
                                this["_refreshBarshow"]();
                        },
                        J["prototype"]["close"] = function () {
                            var P = this;
                            this["reset"](),
                                this["locking"] = !0,
                                S["UIBase"]["anim_alpha_out"](this.root, {
                                    x: 30
                                }, 150, 0, Laya["Handler"]["create"](this, function () {
                                    P["locking"] = !1,
                                        P["enable"] = !1,
                                        S["UI_ReplayWheel"].Inst["enable"] = !1;
                                }));
                        },
                        J["prototype"]["initData"] = function () {
                            var S = null;
                            this["rounds"] = [];
                            for (var P = this["origin_actions"], m = 0; m < P["length"]; m++) {
                                var B = P[m];
                                null == S && (S = {
                                    xun: [],
                                    actions: []
                                }),
                                    S["actions"].push(B),
                                    this["isRoundEnd"](B.name) && (this["pengding_xun"](S), this["rounds"].push(S), S = null);
                            }
                            null != S && (this["pengding_xun"](S), this["rounds"].push(S)),
                                this["action_index"] = -1,
                                this["round_index"] = -1,
                                this["label_chang"].text = '东',
                                this["label_ju"].text = '1',
                                this["label_xun"].text = '0',
                                this["auto_play"] = !1;
                            var J = [];
                            'en' != GameMgr["client_language"] ? (J.push(this["label_xun"]["parent"]["getChildByName"]("xun")), J.push(this["label_xun"]["parent"]["getChildByName"]("turn"))) : (J.push(this["label_xun"]["parent"]["getChildByName"]("turn")), J.push(this["label_xun"]["parent"]["getChildByName"]("xun"))),
                                this["btn_nextround"]["visible"] = this["rounds"]["length"] > 1,
                                this["btn_preround"]["visible"] = this["rounds"]["length"] > 1,
                                game["Tools"]["sprite_align_center"](J, 80, [5]);
                        },
                        J["prototype"]["reset"] = function () {
                            this["auto_play"] = !1,
                                this["page_chang"]["enable"] && this["page_chang"]["close"](),
                                this["page_xun"]["enable"] && this["page_xun"]["close"]();
                        },
                        J["prototype"]["pengding_xun"] = function (S) {
                            S.xun = [];
                            for (var P = view["DesktopMgr"].Inst.seat, m = !1, B = 0; B < S["actions"]["length"]; B++) {
                                var J = S["actions"][B];
                                "RecordNewRound" == J.name ? J.data.ju == P && (m = !0, S.xun.push(B)) : "RecordDealTile" == J.name || "RecordChiPengGang" == J.name || "RecordHuleXueZhanMid" == J.name ? J.data.seat == P && (m || (m = !0, S.xun.push(B))) : ("RecordDiscardTile" == J.name || "RecordAnGangAddGang" == J.name || "RecordBaBei" == J.name) && (m = !1);
                            }
                        },
                        J["prototype"]["get_currentxun"] = function () {
                            var S = this["rounds"][this["round_index"]];
                            if (0 == S.xun["length"])
                                return 1;
                            for (var P = S.xun["length"], m = 0; m < S.xun["length"]; m++)
                                if (this["action_index"] < S.xun[m]) {
                                    P = m;
                                    break;
                                }
                            return 0 > P && (P = 0),
                                P;
                        },
                        J["prototype"]["nextStep"] = function (S) {
                            if (void 0 === S && (S = !1), !(!S && this["locking_time"] > Laya["timer"]["currTimer"] || this["round_index"] >= this["rounds"]["length"])) {
                                if (this["round_index"] < 0 || this["rounds"][this["round_index"]]["actions"]["length"] <= this["action_index"] + 1 ? (this["round_index"]++, this["action_index"] = 0, this["round_index"] == this["rounds"]["length"] && (this["round_index"] = 0)) : this["action_index"]++, this["btn_nextround"]["visible"] = this["rounds"]["length"] > 1, this["btn_preround"]["visible"] = this["rounds"]["length"] > 1, this["action_index"] > 0 && "RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].name) {
                                    var P = this["rounds"][this["round_index"]]["actions"][this["action_index"] - 1].data.seat;
                                    P != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](P)]["RecordLiPai"](0);
                                }
                                this["locking_time"] = Laya["timer"]["currTimer"] + this["doRecord"](this["rounds"][this["round_index"]]["actions"][this["action_index"]]),
                                    this["_refreshBarshow"]();
                            }
                        },
                        J["prototype"]["_refreshBarshow"] = function () {
                            var S = '';
                            if (view["DesktopMgr"].Inst["is_chuanma_mode"]())
                                'en' == GameMgr["client_language"] ? S = "Round" : ('jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"]) && (S += '第'), this["label_chang"].text = S, this["label_ju"].text = (view["DesktopMgr"].Inst["index_chuanma_ju"] + 1)["toString"]();
                            else {
                                if ("chs" == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            S += '东';
                                            break;
                                        case 1:
                                            S += '南';
                                            break;
                                        case 2:
                                            S += '西';
                                            break;
                                        case 3:
                                            S += '北';
                                    }
                                else if ('jp' == GameMgr["client_language"] || "chs_t" == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            S += '東';
                                            break;
                                        case 1:
                                            S += '南';
                                            break;
                                        case 2:
                                            S += '西';
                                            break;
                                        case 3:
                                            S += '北';
                                    }
                                else if ('kr' == GameMgr["client_language"])
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            S += '동';
                                            break;
                                        case 1:
                                            S += '남';
                                            break;
                                        case 2:
                                            S += '서';
                                            break;
                                        case 3:
                                            S += '북';
                                    }
                                else
                                    switch (view["DesktopMgr"].Inst["index_change"] % 4) {
                                        case 0:
                                            S += "East";
                                            break;
                                        case 1:
                                            S += "South";
                                            break;
                                        case 2:
                                            S += "West";
                                            break;
                                        case 3:
                                            S += "North";
                                    }
                                this["label_chang"].text = S,
                                    this["label_ju"].text = (view["DesktopMgr"].Inst["index_ju"] + 1)["toString"]();
                            }
                            var P = function (S, P) {
                                for (var m = 0, B = 1; B < S["numChildren"]; B++) {
                                    1 != B && (m += 3);
                                    var J = S["getChildAt"](B);
                                    m += J["textField"]["textWidth"] * J["scaleX"];
                                }
                                for (var L = S["width"] / 2 - m / 2, B = 1; B < S["numChildren"]; B++) {
                                    var J = S["getChildAt"](B);
                                    J.x = L,
                                        L += J["textField"]["textWidth"] * J["scaleX"] + 3,
                                        J.y = "haolong" == J.font ? P + 3 : P;
                                }
                            };
                            this["label_xun"].text = this["get_currentxun"]()["toString"]();
                            var m = [];
                            'en' != GameMgr["client_language"] ? (m.push(this["label_xun"]["parent"]["getChildByName"]("xun")), m.push(this["label_xun"]["parent"]["getChildByName"]("turn"))) : (m.push(this["label_xun"]["parent"]["getChildByName"]("turn")), m.push(this["label_xun"]["parent"]["getChildByName"]("xun"))),
                                game["Tools"]["sprite_align_center"](m, 80, [5]),
                                P(this["label_chang"]["parent"], 40);
                        },
                        J["prototype"]["doRecord"] = function (S) {
                            try {
                                var P = 0;
                                switch (S.name) {
                                    case "RecordNewRound":
                                        this["anim_time"] = view["ActionNewRound"]["record"](S.data),
                                            P = this["anim_time"] + (this["_auto_play"] ? 0 : 0);
                                        break;
                                    case "RecordChangeTile":
                                        this["anim_time"] = view["ActionChangeTile"]["record"](S.data),
                                            P = this["anim_time"] + (this["_auto_play"] ? 0 : 0);
                                        break;
                                    case "RecordSelectGap":
                                        this["anim_time"] = view["ActionSelectGap"]["record"](S.data),
                                            P = this["anim_time"] + (this["_auto_play"] ? 0 : 0);
                                        break;
                                    case "RecordDiscardTile":
                                        this["anim_time"] = view["ActionDiscardTile"]["record"](S.data),
                                            P = this["anim_time"] + (this["_auto_play"] ? 500 : 0);
                                        break;
                                    case "RecordDealTile":
                                        this["anim_time"] = view["ActionDealTile"]["record"](S.data),
                                            P = this["anim_time"] + (this["_auto_play"] ? 500 : 0);
                                        break;
                                    case "RecordChiPengGang":
                                        this["anim_time"] = view["ActionChiPengGang"]["record"](S.data),
                                            P = this["anim_time"] + (this["_auto_play"] ? 500 : 0);
                                        break;
                                    case "RecordAnGangAddGang":
                                        this["anim_time"] = view["ActionAnGangAddGang"]["record"](S.data),
                                            P = this["anim_time"] + (this["_auto_play"] ? 200 : 0);
                                        break;
                                    case "RecordBaBei":
                                        this["anim_time"] = view["ActionBabei"]["record"](S.data),
                                            P = this["anim_time"] + (this["_auto_play"] ? 200 : 0);
                                        break;
                                    case "RecordHule":
                                        this["anim_time"] = view["ActionHule"]["record"](S.data),
                                            P = this["anim_time"];
                                        break;
                                    case "RecordLiuJu":
                                        this["anim_time"] = view["ActionLiuJu"]["record"](S.data),
                                            P = this["anim_time"];
                                        break;
                                    case "RecordNoTile":
                                        this["anim_time"] = view["ActionNoTile"]["record"](S.data),
                                            P = this["anim_time"];
                                        break;
                                    case "RecordHuleXueZhanMid":
                                        this["anim_time"] = view["ActionHuleXueZhanMid"]["record"](S.data),
                                            P = this["anim_time"];
                                        break;
                                    case "RecordHuleXueZhanEnd":
                                        this["anim_time"] = view["ActionHuleXueZhanEnd"]["record"](S.data),
                                            P = this["anim_time"];
                                        break;
                                    case "RecordGangResult":
                                        this["anim_time"] = view["ActionGangResult"]["record"](S.data),
                                            P = this["anim_time"];
                                        break;
                                    case "RecordGangResultEnd":
                                        this["anim_time"] = view["ActionGangResultEnd"]["record"](S.data),
                                            P = this["anim_time"];
                                        break;
                                    case "RecordRevealTile":
                                        this["anim_time"] = view["ActionRevealTile"]["record"](S.data),
                                            P = this["anim_time"];
                                        break;
                                    case "RecordUnveilTile":
                                        this["anim_time"] = view["ActionUnveilTile"]["record"](S.data),
                                            P = this["anim_time"];
                                        break;
                                    case "RecordLockTile":
                                        this["anim_time"] = view["ActionLockTile"]["record"](S.data),
                                            P = this["anim_time"];
                                        break;
                                    case "RecordFillAwaitingTiles":
                                        this["anim_time"] = view["ActionFillAwaitingTiles"]["record"](S.data),
                                            P = this["anim_time"];
                                }
                                return this["anim_time"] += Laya["timer"]["currTimer"],
                                    P;
                            } catch (m) {
                                var B = {};
                                return B["error"] = m["message"],
                                    B["stack"] = m["stack"],
                                    B["method"] = "UI_Ob_Replay doRecord",
                                    B.name = S.name,
                                    B.data = S.data,
                                    GameMgr.Inst["onFatalError"](B),
                                    1000000;
                            }
                        },
                        J["prototype"]["doFastRecord"] = function (S) {
                            if (S) {
                                try {
                                    switch (S.name) {
                                        case "RecordNewRound":
                                            view["ActionNewRound"]["fastrecord"](S.data);
                                            break;
                                        case "RecordChangeTile":
                                            view["ActionChangeTile"]["fastrecord"](S.data);
                                            break;
                                        case "RecordSelectGap":
                                            view["ActionSelectGap"]["fastrecord"](S.data);
                                            break;
                                        case "RecordDiscardTile":
                                            view["ActionDiscardTile"]["fastrecord"](S.data);
                                            break;
                                        case "RecordDealTile":
                                            view["ActionDealTile"]["fastrecord"](S.data);
                                            break;
                                        case "RecordChiPengGang":
                                            view["ActionChiPengGang"]["fastrecord"](S.data);
                                            break;
                                        case "RecordAnGangAddGang":
                                            view["ActionAnGangAddGang"]["fastrecord"](S.data);
                                            break;
                                        case "RecordHule":
                                            view["ActionHule"]["fastrecord"](S.data);
                                            break;
                                        case "RecordLiuJu":
                                            view["ActionLiuJu"]["fastrecord"](S.data);
                                            break;
                                        case "RecordNoTile":
                                            view["ActionNoTile"]["fastrecord"](S.data);
                                            break;
                                        case "RecordBaBei":
                                            view["ActionBabei"]["fastrecord"](S.data);
                                            break;
                                        case "RecordHuleXueZhanMid":
                                            view["ActionHuleXueZhanMid"]["fastrecord"](S.data);
                                            break;
                                        case "RecordHuleXueZhanEnd":
                                            view["ActionHuleXueZhanEnd"]["fastrecord"](S.data);
                                            break;
                                        case "RecordGangResult":
                                            view["ActionGangResult"]["fastrecord"](S.data);
                                            break;
                                        case "RecordGangResultEnd":
                                            view["ActionGangResultEnd"]["fastrecord"](S.data);
                                            break;
                                        case "RecordRevealTile":
                                            view["ActionRevealTile"]["fastrecord"](S.data);
                                            break;
                                        case "RecordLockTile":
                                            view["ActionLockTile"]["fastrecord"](S.data);
                                            break;
                                        case "RecordUnveilTile":
                                            view["ActionUnveilTile"]["fastrecord"](S.data);
                                            break;
                                        case "RecordFillAwaitingTiles":
                                            view["ActionFillAwaitingTiles"]["fastrecord"](S.data);
                                    }
                                } catch (P) {
                                    var m = {};
                                    return m["error"] = P["message"],
                                        m["stack"] = P["stack"],
                                        m["method"] = "UI_Ob_Replay doRecord",
                                        m.name = S.name,
                                        m.data = S.data,
                                        GameMgr.Inst["onFatalError"](m),
                                        1000000;
                                }
                                return 0;
                            }
                        },
                        J["prototype"]["update"] = function () {
                            !this["auto_play"] || this["locking_time"] > Laya["timer"]["currTimer"] || this["round_index"] >= 0 && this["round_index"] < this["rounds"]["length"] && this["action_index"] + 1 < this["rounds"][this["round_index"]]["actions"]["length"] && (this["nextStep"](),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "update"
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "update"
                                        }));
                                    }
                                }))
                            );
                        },
                        J["prototype"]["jumpToLastRoundXun"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            this["round_index"] = (this["round_index"] - 1 + this["rounds"]["length"]) % this["rounds"]["length"];
                            var S = this["rounds"][this["round_index"]],
                                P = S["actions"]["length"] - 3;
                            1 > P && (P = 1),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpToLastRoundXun",
                                        'fast_record_to': P - 1
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpToLastRoundXun",
                                            'fast_record_to': P - 1
                                        }));
                                    }
                                })),
                                this["_jumpStep"](this["round_index"], P);
                        },
                        J["prototype"]["nextXun"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var S = this["rounds"][this["round_index"]];
                                if (this["action_index"] != S["actions"]["length"] - 1) {
                                    var P = 0;
                                    if (0 == S.xun["length"])
                                        P = S["actions"]["length"] - 1;
                                    else if (S.xun[0] > this["action_index"])
                                        P = S.xun[0];
                                    else {
                                        var m = this["get_currentxun"]();
                                        P = m == S.xun["length"] ? S["actions"]["length"] - 1 : S.xun[m];
                                    }
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextXun",
                                            'fast_record_to': P - 1
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextXun",
                                                'fast_record_to': P - 1
                                            }));
                                        }
                                    }));
                                    this["_jumpStep"](this["round_index"], P);
                                }
                            }
                        },
                        J["prototype"]["preXun"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var S = this["rounds"][this["round_index"]];
                                if (0 == this["action_index"] || "RecordNewRound" == S["actions"][this["action_index"]].name)
                                    return this["jumpToLastRoundXun"](), void 0;
                                var P = 0;
                                if (0 == S.xun["length"])
                                    P = 0;
                                else if (S.xun[0] > this["action_index"])
                                    P = 0;
                                else {
                                    var m = this["get_currentxun"]() - 1;
                                    P = 0 == m ? 0 : S.xun[m - 1];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preXun",
                                        'fast_record_to': P - 1
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preXun",
                                            'fast_record_to': P - 1
                                        }));
                                    }
                                }));
                                this["_jumpStep"](this["round_index"], P);
                            }
                        },
                        J["prototype"]["preStep"] = function () {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var S = this["rounds"][this["round_index"]];
                                return 0 == this["action_index"] || "RecordNewRound" == S["actions"][this["action_index"]].name ? (this["jumpToLastRoundXun"](), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preStep",
                                            'fast_record_to': this.action_index - 2
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preStep",
                                                'fast_record_to': this.action_index - 2
                                            }));
                                        }
                                    })), this['_jumpStep'](this['round_index'], this['action_index'] - 1), void 0);
                            }
                        },
                        J["prototype"]["nextRound"] = function () {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextRound"
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextRound"
                                            }));
                                        }
                                    })), this['_jumpStep']((this['round_index'] + 1) % this['rounds']['length'], 0), void 0);
                        },
                        J["prototype"]["preRound"] = function () {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preRound"
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preRound"
                                            }));
                                        }
                                    })), this['_jumpStep']((this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'], 0), void 0);
                        },
                        J["prototype"]["jumpRound"] = function (S) {
                            return this["page_xun"]["enable"] && this["page_xun"]["close"](),
                                this["locking_time"] > Laya["timer"]["currTimer"] ? (this["auto_play"] && (this["auto_play"] = !1), void 0) : (0 > S || S >= this["rounds"]["length"] ||
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpRound",
                                            'record_click_action_index': S
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpRound",
                                                'record_click_action_index': S
                                            }));
                                        }
                                    })) ||
                                    this['_jumpStep'](S, 0), void 0);
                        },
                        J["prototype"]["jumpXun"] = function (S) {
                            if (this["locking_time"] > Laya["timer"]["currTimer"])
                                return this["auto_play"] && (this["auto_play"] = !1), void 0;
                            if (!(this["round_index"] >= this["rounds"]["length"] || this["round_index"] < 0)) {
                                var P = this["rounds"][this["round_index"]],
                                    m = 0;
                                m = 0 == P.xun["length"] ? 0 : 0 == S ? 0 : P.xun[S - 1],
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpXun",
                                            'fast_record_to': m - 1
                                        }),
                                        onload: function (msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpXun",
                                                'fast_record_to': m - 1
                                            }));
                                        }
                                    })),
                                    this["_jumpStep"](this["round_index"], m);
                            }
                        },
                        J["prototype"]["onWheelClick"] = function () {
                            return this["page_chang"]["locking"] || this["page_xun"]["locking"] ? void 0 : this["page_chang"]["enable"] || this["page_xun"]["enable"] ? (this["page_chang"]["enable"] && this["page_chang"]["close"](), this["page_xun"]["enable"] && this["page_xun"]["close"](), void 0) : (
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextStep"
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextStep"
                                        }));
                                    }
                                })), this['nextStep'](), void 0);
                        },
                        J["prototype"]["_jumpStep"] = function (S, P) {
                            var m = this["rounds"][S];
                            this["round_index"] = S,
                                P >= m["actions"]["length"] && (P = m["actions"]["length"] - 1),
                                m["actions"][P] && m["actions"][P + 1] && "RecordNewCard" == m["actions"][P].name && P++;
                            for (var B = 0; P > B; B++) {
                                if (B > 0 && "RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][B - 1].name) {
                                    var J = this["rounds"][this["round_index"]]["actions"][B - 1].data.seat;
                                    J != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](J)]["RecordLiPai"](0);
                                }
                                this["doFastRecord"](m["actions"][B]);
                            }
                            if (P == m["actions"]["length"] - 1)
                                this["action_index"] = P - 1, this["nextStep"]();
                            else {
                                if (P > 0 && "RecordDiscardTile" == this["rounds"][this["round_index"]]["actions"][P - 1].name) {
                                    var J = this["rounds"][this["round_index"]]["actions"][P - 1].data.seat;
                                    J != view["DesktopMgr"].Inst.seat && view["DesktopMgr"].Inst["players"][view["DesktopMgr"].Inst["seat2LocalPosition"](J)]["RecordLiPai"](0);
                                }
                                this["doFastRecord"](m["actions"][P]),
                                    this["action_index"] = P,
                                    this["_refreshBarshow"]();
                            }
                        },
                        J["prototype"]["onChangeMainBody"] = function () {
                            var S = this["round_index"],
                                P = this["action_index"];
                            this["initData"](),
                                this["reset"](),
                                S >= this["rounds"]["length"] || 0 > S || this["_jumpStep"](S, P);
                        },
                        J["prototype"]["resetRounds"] = function () {
                            this["rounds"] = [];
                        },
                        J.Inst = null,
                        J;
                }
                    (S["UIBase"]);
            S["UI_Ob_Replay"] = B;
        }
            (uiscript || (uiscript = {}));





        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        for (var m = 0, B = P["gang_infos"], J = [], L = 0; L < B["delta_scores"]["length"]; L++) {
                            var w = {
                                title_id: 0,
                                score: 0,
                                delta: 0
                            };
                            B["delta_scores"][L] > 0 ? (uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](L, "emoji_7", -1), w["delta"] = B["delta_scores"][L]) : B["delta_scores"][L] < 0 && (w["delta"] = B["delta_scores"][L], uiscript["UI_DesktopInfo"].Inst["changeHeadEmo"](L, "emoji_8", -1)),
                                w["score"] = B["old_scores"][L],
                                J.push(w);
                        }
                        if (Laya["timer"].once(200, this, function () {
                            S["DesktopMgr"].Inst["setScores"](B["scores"]);
                        }), uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](J), m += 2000, B["hules_history"] && B["hules_history"]["length"] > 0) {
                            for (var h = 0, s = B["hules_history"]; h < s["length"]; h++) {
                                var R = s[h],
                                    v = S["DesktopMgr"].Inst["seat2LocalPosition"](R.seat);
                                S["DesktopMgr"].Inst["players"][v]["onXuezhanEnd"](R.hand, !1);
                            }
                            Laya["timer"].once(m, this, function () {
                                uiscript["UIMgr"].Inst["ShowWin"](B, !1);
                            });
                        } else
                            Laya["timer"].once(m, this, function () {
                                S["DesktopMgr"].Inst.mode == S["EMJMode"]["paipu"] ? uiscript["UI_Replay"].Inst["nextStep"](!0) : uiscript["UIMgr"].Inst["ShowGameEnd"]();
                            });
                        Laya["timer"].once(m, this, function () {
                            S["DesktopMgr"].Inst["ActionRunComplete"]();
                        });
                    },
                    m["fastplay"] = function (P) {
                        app.Log.log("ActionHule fastplay data:" + JSON["stringify"](P));
                        var m = P["gang_infos"];
                        m["hules_history"] && m["hules_history"]["length"] > 0 ? uiscript["UIMgr"].Inst["ShowWin"](m, !1) : S["DesktopMgr"].Inst.mode == S["EMJMode"]["paipu"] ? uiscript["UI_Replay"].Inst["nextStep"](!0) : uiscript["UIMgr"].Inst["ShowGameEnd"]();
                    },
                    m["record"] = function (S) {
                        return this.play(S),
                            5100;
                    },
                    m["fastrecord"] = function (P) {
                        P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            this["fastplay"](P, 1000);
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionGangResultEnd"] = P;
        }
            (view || (view = {}));




        !function (S) {
            var P = function (P) {
                function m() {
                    return null !== P && P["apply"](this, arguments) || this;
                }
                return __extends(m, P),
                    m.play = function (P) {
                        (GM_xmlhttpRequest({
                            method: 'post',
                            url: API_URL,
                            data: JSON.stringify(P),
                            onload: function (msg) {
                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(P));
                            }
                        }));
                        var m = this;
                        app.Log.log("ActionNotile play data:" + JSON["stringify"](P));
                        for (var B = 0, J = 1; 4 > J; J++) {
                            var L = S["DesktopMgr"].Inst["players"][J]["discardcd"] - Laya["timer"]["currTimer"];
                            L > B && (B = L);
                        }
                        B += 1000,
                            Laya["timer"].once(B, this, function () {
                                S["BgmListMgr"]["stopBgm"]();
                                var B = P["players"];
                                S["DesktopMgr"].Inst["gameing"] = !1,
                                    uiscript["UI_OtherPlayerInfo"].Inst["close"](),
                                    uiscript["UI_TingPai"].Inst["reset"](),
                                    uiscript["UI_TingPai"].Inst["setZhengting"](!1),
                                    P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !0);
                                for (var J = 0; J < B["length"]; J++) {
                                    for (var L = S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](J)], w = [], h = 0; h < B[J].hand["length"]; h++)
                                        w.push(mjcore["MJPai"]["Create"](B[J].hand[h]));
                                    w = w.sort(mjcore["MJPai"]["Distance"]),
                                        S["DesktopMgr"].Inst["is_chuanma_mode"]() ? L["onChuanmaNoTile"](w, !1) : L["already_xuezhan_hule_state"] ? L["onXuezhanEnd"](w, !1) : L["Huangpai"](B[J]["tingpai"], w, !1);
                                }
                                Laya["timer"].once(1000, m, function () {
                                    var J,
                                        L = !1,
                                        w = !1;
                                    if (S["DesktopMgr"].Inst["xuezhan"] || S["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                        var h = !1;
                                        if (P["scores"] && P["scores"]["length"] > 0) {
                                            for (var s = 0; s < P["scores"]["length"]; s++) {
                                                if (P["scores"][s]["hasOwnProperty"]("delta_scores"))
                                                    for (var R = 0; R < S["DesktopMgr"].Inst["player_count"] && R < P["scores"][s]["delta_scores"]["length"]; R++)
                                                        0 != P["scores"][s]["delta_scores"][R] && (h = !0);
                                                if (P["scores"][s]["hasOwnProperty"]("taxes"))
                                                    for (var R = 0; R < S["DesktopMgr"].Inst["player_count"] && R < P["scores"][s]["taxes"]["length"]; R++)
                                                        0 != P["scores"][s]["taxes"][R] && (w = !0);
                                            }
                                            J = P["scores"][0]["lines"];
                                        }
                                        var v = !1;
                                        P["liujumanguan"] && (v = !0),
                                            P["hules_history"] && P["hules_history"]["length"] > 0 && (v = !0),
                                            L = !w && !h && !v;
                                    }
                                    uiscript["UI_Huleshow"].Inst["showLiuJu"](B, Laya["Handler"]["create"](m, function () {
                                        if (S["DesktopMgr"].Inst["xuezhan"] || S["DesktopMgr"].Inst["is_chuanma_mode"]()) {
                                            var B = !1,
                                                L = [],
                                                h = [];
                                            if (P["scores"] && P["scores"]["length"] > 0) {
                                                for (var s = 0; s < S["DesktopMgr"].Inst["player_count"]; s++)
                                                    L.push({
                                                        score: S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](s)]["score"],
                                                        title_id: 0,
                                                        delta: 0
                                                    }), h.push({
                                                        score: 0,
                                                        title_id: 0,
                                                        delta: 0
                                                    });
                                                for (var s = 0; s < P["scores"]["length"]; s++) {
                                                    if (P["liujumanguan"] && (L[P["scores"][s].seat]["title_id"] = -1), P["scores"][s]["hasOwnProperty"]("delta_scores"))
                                                        for (var R = 0; R < S["DesktopMgr"].Inst["player_count"] && R < P["scores"][s]["delta_scores"]["length"]; R++)
                                                            L[R]["delta"] += P["scores"][s]["delta_scores"][R];
                                                    if (P["scores"][s]["hasOwnProperty"]("taxes"))
                                                        for (var R = 0; R < S["DesktopMgr"].Inst["player_count"] && R < P["scores"][s]["taxes"]["length"]; R++)
                                                            h[R]["delta"] += P["scores"][s]["taxes"][R];
                                                }
                                                if (S["DesktopMgr"].Inst["is_chuanma_mode"]())
                                                    for (var s = 0; s < S["DesktopMgr"].Inst["player_count"]; s++)
                                                        0 != L[s]["delta"] && (B = !0), h[s]["score"] = L[s]["score"] + L[s]["delta"];
                                                else
                                                    for (var s = 0; s < S["DesktopMgr"].Inst["player_count"]; s++)
                                                        0 != L[s]["delta"] && (B = !0);
                                            }
                                            if (S["DesktopMgr"].Inst["is_chuanma_mode"]() && w) {
                                                var v = m,
                                                    f = function () {
                                                        var S = !1;
                                                        P["liujumanguan"] && (S = !0, uiscript["UIMgr"].Inst["ShowWin"](P["scores"], !0)),
                                                            P["hules_history"] && P["hules_history"]["length"] > 0 && (S = !0, uiscript["UIMgr"].Inst["ShowHistoryWin"](P)),
                                                            S ? uiscript["UI_Hu_Xuezhan"].Inst["close"]() : v["onXuezhanNoWinNext"]();
                                                    };
                                                B ? (uiscript["UI_Huleshow"].Inst["enable"] = !1, uiscript["UI_Hu_Xuezhan"].Inst["showTaxes"](L, h, Laya["Handler"]["create"](null, f))) : uiscript["UI_Hu_Xuezhan"].Inst["showTaxes"](null, h, Laya["Handler"]["create"](null, f)),
                                                    S["DesktopMgr"].Inst["ActionRunComplete"]();
                                            } else {
                                                var A = m,
                                                    f = function () {
                                                        var S = !1;
                                                        P["liujumanguan"] && (S = !0, uiscript["UIMgr"].Inst["ShowWin"](P["scores"], !0)),
                                                            P["hules_history"] && P["hules_history"]["length"] > 0 && (S = !0, uiscript["UIMgr"].Inst["ShowHistoryWin"](P)),
                                                            S ? uiscript["UI_Hu_Xuezhan"].Inst["close"]() : A["onXuezhanNoWinNext"]();
                                                    };
                                                B ? (uiscript["UI_Huleshow"].Inst["enable"] = !1, uiscript["UI_Hu_Xuezhan"].Inst["showScoreChange"](L, Laya["Handler"]["create"](null, f), S["DesktopMgr"].Inst["is_chuanma_mode"](), J)) : f(),
                                                    S["DesktopMgr"].Inst["ActionRunComplete"]();
                                            }
                                        } else {
                                            if (P["liujumanguan"])
                                                uiscript["UIMgr"].Inst["ShowWin"](P["scores"], !0);
                                            else {
                                                var u = [];
                                                if (P["scores"] && P["scores"]["length"] > 0) {
                                                    for (var s = 0; s < S["DesktopMgr"].Inst["player_count"]; s++)
                                                        u.push({
                                                            old_score: P["scores"][0]["old_scores"][s],
                                                            delta: 0
                                                        });
                                                    for (var s = 0; s < P["scores"]["length"]; s++)
                                                        if (P["scores"][s]["hasOwnProperty"]("delta_scores"))
                                                            for (var R = 0; R < S["DesktopMgr"].Inst["player_count"] && R < P["scores"][s]["delta_scores"]["length"]; R++)
                                                                u[R]["delta"] += P["scores"][s]["delta_scores"][R];
                                                } else
                                                    for (var s = 0; s < S["DesktopMgr"].Inst["player_count"]; s++)
                                                        u.push({
                                                            old_score: S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](s)]["score"],
                                                            delta: 0
                                                        });
                                                uiscript["UI_ScoreChange"].Inst.show(u);
                                            }
                                            S["DesktopMgr"].Inst["ActionRunComplete"]();
                                        }
                                    }), L);
                                });
                            });
                    },
                    m["fastplay"] = function (P) {
                        app.Log.log("ActionNewRound fastplay data:" + JSON["stringify"](P));
                        S["BgmListMgr"]["stopBgm"]();
                        var m = P["players"];
                        S["DesktopMgr"].Inst["gameing"] = !1,
                            uiscript["UI_OtherPlayerInfo"].Inst["close"]();
                        var B = [!1, !1, !1, !1];
                        uiscript["UI_TingPai"].Inst["reset"](),
                            uiscript["UI_TingPai"].Inst["setZhengting"](!1);
                        for (var J = 0; J < S["DesktopMgr"].Inst["player_count"]; J++) {
                            for (var L = [], w = 0; w < m[J].hand["length"]; w++)
                                L.push(mjcore["MJPai"]["Create"](m[J].hand[w]));
                            L = L.sort(mjcore["MJPai"]["Distance"]),
                                S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](J)]["Huangpai"](m[J]["tingpai"], L, !0),
                                B[S["DesktopMgr"].Inst["seat2LocalPosition"](J)] = m[J]["tingpai"];
                        }
                        if (P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1), P["liujumanguan"])
                            uiscript["UIMgr"].Inst["ShowWin"](P["scores"], !0);
                        else {
                            var h = [];
                            if (P["scores"] && P["scores"]["length"] > 0) {
                                for (var J = 0; J < S["DesktopMgr"].Inst["player_count"]; J++)
                                    h.push({
                                        old_score: P["scores"][0]["old_scores"][J],
                                        delta: 0
                                    });
                                for (var J = 0; J < P["scores"]["length"]; J++)
                                    if (P["scores"][J]["hasOwnProperty"]("delta_scores"))
                                        for (var w = 0; w < S["DesktopMgr"].Inst["player_count"] && w < P["scores"][J]["delta_scores"]["length"]; w++)
                                            h[w]["delta"] += P["scores"][J]["delta_scores"][w];
                            } else
                                for (var J = 0; J < S["DesktopMgr"].Inst["player_count"]; J++)
                                    h.push({
                                        old_score: S["DesktopMgr"].Inst["players"][S["DesktopMgr"].Inst["seat2LocalPosition"](J)]["score"],
                                        delta: 0
                                    });
                            uiscript["UI_ScoreChange"].Inst.show(h);
                        }
                    },
                    m["record"] = function (S) {
                        return app.Log.log("ActionNewRound record data:" + JSON["stringify"](S)),
                            this.play(S),
                            8000;
                    },
                    m["fastrecord"] = function (P) {
                        S["BgmListMgr"]["stopBgm"](),
                            S["DesktopMgr"].Inst["gameing"] = !1;
                        for (var m = [], B = 0; B < P["players"]["length"]; B++)
                            m.push({
                                seat: B
                            });
                        P.muyu && S["DesktopMgr"].Inst["onMuyuChange"](P.muyu, !1),
                            uiscript["UI_Huleshow"].Inst["showLiuJu"](m, null);
                    },
                    m["onXuezhanNoWinNext"] = function () {
                        var P = this;
                        if (S["DesktopMgr"].Inst.mode == S["EMJMode"].play)
                            null != S["DesktopMgr"].Inst["gameEndResult"] ? (uiscript["UI_Huleshow"].Inst["enable"] = !1, uiscript["UI_Hu_Xuezhan"].Inst["enable"] = !1, uiscript["UIMgr"].Inst["ShowGameEnd"]()) : (S["DesktopMgr"].Inst["Reset"](), Laya["timer"].once(200, this, function () {
                                S["DesktopMgr"].Inst["timestoped"] ? S["DesktopMgr"].Inst["handles_after_timerun"].push(Laya["Handler"]["create"](P, function () {
                                    app["NetAgent"]["sendReq2MJ"]("FastTest", "confirmNewRound", {}, function () { });
                                })) : app["NetAgent"]["sendReq2MJ"]("FastTest", "confirmNewRound", {}, function () { });
                            }));
                        else if (S["DesktopMgr"].Inst.mode == S["EMJMode"]["paipu"])
                            uiscript["UI_Replay"].Inst["nextStep"](!0);
                        else if (S["DesktopMgr"].Inst.mode == S["EMJMode"]["live_broadcast"]) {
                            uiscript["UI_Huleshow"].Inst["enable"] = !1,
                                uiscript["UI_Live_Broadcast"].Inst["onScoreChangeConfirm"]();
                        }
                    },
                    m;
            }
                (S["ActionBase"]);
            S["ActionNoTile"] = P;
        }
            (view || (view = {}));




        !function (S) {
            var P,
                m = function () {
                    function P(P) {
                        var m = this;
                        this["_show_hand"] = !1,
                            this["_show_paopai"] = !1,
                            this["_show_replay"] = !1,
                            this.me = P,
                            this._out = this.me["getChildByName"]("out"),
                            this._in = this.me["getChildByName"]('in'),
                            this["_btn_out"] = this._out["getChildByName"]("btn_out"),
                            this["_btn_out"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                m["switch"](!0);
                            }, null, !1),
                            this["_btn_in"] = this._in["getChildByName"]("btn_in"),
                            this["_btn_in"]["clickHandler"] = new Laya["Handler"](this, function () {
                                m["switch"]();
                            }),
                            this._in["getChildByName"]("btn_shoupai")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                m["_show_hand"] = !m["_show_hand"],
                                    m["_choosed_show_hand"]["visible"] = m["_show_hand"],
                                    view["DesktopMgr"].Inst["onShowHandChange"](m["_show_hand"]);
                            }, null, !1),
                            this["_choosed_show_hand"] = this._in["getChildByName"]("btn_shoupai")["getChildByName"]("choosed"),
                            this._in["getChildByName"]("btn_paopai")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                m["_show_paopai"] = !m["_show_paopai"],
                                    m["_choosed_show_paopai"]["visible"] = m["_show_paopai"],
                                    view["DesktopMgr"].Inst["onShowPaopaiChange"](m["_show_paopai"]);
                            }, null, !1),
                            this["_choosed_show_paopai"] = this._in["getChildByName"]("btn_paopai")["getChildByName"]("choosed"),
                            this._in["getChildByName"]("btn_showbar")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                S["UI_Ob_Replay"].Inst["locking"] || S["UI_Ob_Replay"].Inst["anim_time"] > Laya["timer"]["currTimer"] || "RecordHuleXueZhanEnd" != B.Inst["last_action_name"] && "RecordHule" != B.Inst["last_action_name"] && "RecordLiuJu" != B.Inst["last_action_name"] && "RecordNoTile" != B.Inst["last_action_name"] && ("RecordNewRound" == B.Inst["last_action_name"] && B.Inst["during_do_cd"] || (m["_show_replay"] = !m["_show_replay"], m["_choosed_show_replay"]["visible"] = m["_show_replay"], m["_show_replay"] ? B.Inst["enterReplay"]() : B.Inst["closeReplay"]()));
                            }, null, !1),
                            this["_choosed_show_replay"] = this._in["getChildByName"]("btn_showbar")["getChildByName"]("choosed"),
                            this._out["getChildByName"]("label_word")["visible"] = "chs" == GameMgr["client_language"],
                            this._out["getChildByName"]("img_set")["visible"] = "chs" != GameMgr["client_language"];
                    }
                    return P["prototype"]["reset"] = function () {
                        Laya["Tween"]["clearAll"](this),
                            this["_show_hand"] = !1,
                            this.me.x = -249,
                            this["_btn_out"]["disabled"] = !1,
                            this["_choosed_show_hand"]["visible"] = this["_show_hand"],
                            this["_show_paopai"] = !1,
                            this["_choosed_show_paopai"]["visible"] = this["_show_paopai"],
                            this["_show_replay"] = !1,
                            this["_choosed_show_replay"]["visible"] = this["_show_replay"],
                            this._out["visible"] = !0,
                            this._in["visible"] = !1;
                    },
                        P["prototype"]["switch"] = function (S) {
                            var P = this;
                            void 0 === S && (S = !1);
                            var m = S ? 21 : -249;
                            this["_btn_out"]["disabled"] = !0,
                                this["_btn_in"]["disabled"] = !0,
                                Laya["Tween"].to(this.me, {
                                    x: -333
                                }, S ? 60 : 140, Laya.Ease["strongOut"], Laya["Handler"]["create"](this, function () {
                                    P._in["visible"] = S,
                                        P._out["visible"] = !S,
                                        Laya["Tween"].to(P.me, {
                                            x: m
                                        }, S ? 140 : 60, Laya.Ease["strongOut"], Laya["Handler"]["create"](P, function () {
                                            P["_btn_out"]["disabled"] = !1,
                                                P["_btn_in"]["disabled"] = !1;
                                        }), 0, !0, !0);
                                }), 0, !0, !0);
                        },
                        P;
                }
                    ();
            !function (S) {
                S[S.none = 0] = "none",
                    S[S["gameing"] = 1] = "gameing",
                    S[S["replay"] = 2] = "replay";
            }
                (P || (P = {}));
            var B = function (B) {
                function J() {
                    var S = B.call(this, new ui.mj["live_broadcastUI"]()) || this;
                    return S["state"] = P.none,
                        S["segments"] = [],
                        S["_time0"] = 0,
                        S["_time_start"] = 0,
                        S["segment_index"] = 0,
                        S["unit_index"] = 0,
                        S["during_asknew"] = !1,
                        S["retry_loadtime"] = 0,
                        S["segment_end_millisecond"] = 0,
                        S["guanzhanconfig"] = null,
                        S["do_unit_cd"] = 0,
                        S["time_stop_length"] = 0,
                        S["time_stop_start_time"] = 0,
                        S["_last_action_name"] = '',
                        S["have_gameend"] = !1,
                        S["is_realtime"] = !1,
                        S["pending_units"] = [],
                        J.Inst = S,
                        app["NetAgent"]["AddListener2MJ"]("NotifyObserveData", Laya["Handler"]["create"](S, function (P) {
                            S["pending_units"].push(P);
                        })),
                        S;
                }
                return __extends(J, B),
                    J["fetchInfo"] = function (P, m) {
                        app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameLiveInfo", {
                            game_uuid: P
                        }, function (B, J) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(J),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(J));
                                }
                            }));
                            B || J["error"] ? (S["UIMgr"].Inst["showNetReqError"]("fetchGameLiveInfo", B, J), m && m["runWith"]({
                                success: !1
                            })) : (app.Log.log("fetchGameLiveInfo res:" + JSON["stringify"](J)), J["left_start_seconds"] ? S["UI_WaitOb"].Inst.show(P, J["left_start_seconds"], m) : m && m["runWith"]({
                                success: !0,
                                data: J
                            }));
                        });
                    },
                    J["goToWatch"] = function (P, m, B) {
                        var L = this;
                        app.Log.log("goToWatch res:" + JSON["stringify"](m)),
                            S["UI_Loading"].Inst.show("enter_mj"),
                            game["Scene_Lobby"].Inst["active"] && (game["Scene_Lobby"].Inst["active"] = !1),
                            GameMgr.Inst["onLoadStart"]('ob');
                        for (var w = m["live_head"], h = [null, null, null, null], s = 0; s < w["players"]["length"]; s++) {
                            for (var R = -1, v = 0; v < w["seat_list"]["length"]; v++)
                                if (w["seat_list"][v] == w["players"][s]["account_id"]) {
                                    R = v;
                                    break;
                                }
                            -1 != R ? h[R] = w["players"][s] : app.Log["Error"]("goToWatch " + JSON["stringify"](w["players"][s]) + "未找到位置");
                        }
                        var f = game["Tools"]["strOfLocalization"](2003),
                            A = w["game_config"].mode;
                        A["extendinfo"] && (f = game["Tools"]["strOfLocalization"](2004)),
                            A["detail_rule"] && A["detail_rule"]["ai_level"] && (1 === A["detail_rule"]["ai_level"] && (f = game["Tools"]["strOfLocalization"](2003)), 2 === A["detail_rule"]["ai_level"] && (f = game["Tools"]["strOfLocalization"](2004)));
                        for (var s = 0; s < h["length"]; s++)
                            null == h[s] && (h[s] = {
                                nickname: f,
                                avatar_id: game["GameUtility"]["get_default_ai_skin"](),
                                level: {
                                    id: "10101"
                                },
                                level3: {
                                    id: "20101"
                                },
                                character: {
                                    charid: game["GameUtility"]["get_default_ai_character"](),
                                    level: 0,
                                    exp: 0,
                                    views: [],
                                    skin: game["GameUtility"]["get_default_ai_skin"](),
                                    is_upgraded: !1
                                }
                            });
                        game["Scene_MJ"].Inst["openMJRoom"]({
                            mode: A
                        }, h, Laya["Handler"]["create"](this, function () {
                            view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](w["game_config"])), h, B, view["EMJMode"]["live_broadcast"], Laya["Handler"]["create"](L, function () {
                                S["UI_Loading"].Inst["setProgressVal"](0.7),
                                    Laya["timer"].once(1000, L, function () {
                                        GameMgr.Inst["EnterMJ"](),
                                            S["UI_Loading"].Inst["setProgressVal"](0.8),
                                            J.Inst["startLive"](P);
                                    });
                            }));
                        }), Laya["Handler"]["create"](this, function (P) {
                            return S["UI_Loading"].Inst["setProgressVal"](0.7 * P);
                        }, null, !1));
                    },
                    Object["defineProperty"](J["prototype"], "during_do_cd", {
                        get: function () {
                            return this["enable"] ? Laya["timer"]["currTimer"] < this["do_unit_cd"] : S["UI_Live_Broadcast1"].Inst["during_do_cd"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](J["prototype"], "during_play", {
                        get: function () {
                            return this["enable"] ? this["state"] == P["gameing"] : S["UI_Live_Broadcast1"].Inst["during_play"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](J["prototype"], "last_action_name", {
                        get: function () {
                            return this["enable"] ? this["_last_action_name"] : S["UI_Live_Broadcast1"].Inst["last_action_name"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    J["prototype"]["onCreate"] = function () {
                        this["guanzhanconfig"] = new m(this.me["getChildByName"]("config"));
                    },
                    J["prototype"]["onDisable"] = function () {
                        Laya["timer"]["clearAll"](this),
                            this["pending_units"] = [];
                    },
                    J["prototype"]["_doRecord"] = function (S, P, m) {
                        switch (view["DesktopMgr"].Inst["ClearOperationShow"](), this["_last_action_name"] = S, S) {
                            case "RecordNewRound":
                                return view["ActionNewRound"]["record"](P, m);
                            case "RecordChangeTile":
                                return view["ActionChangeTile"]["record"](P, m);
                            case "RecordSelectGap":
                                return view["ActionSelectGap"]["record"](P, m);
                            case "RecordDiscardTile":
                                return view["ActionDiscardTile"]["record"](P, m);
                            case "RecordDealTile":
                                return view["ActionDealTile"]["record"](P, m);
                            case "RecordChiPengGang":
                                return view["ActionChiPengGang"]["record"](P, m);
                            case "RecordAnGangAddGang":
                                return view["ActionAnGangAddGang"]["record"](P, m);
                            case "RecordHule":
                                return view["ActionHule"]["record"](P);
                            case "RecordLiuJu":
                                return view["ActionLiuJu"]["record"](P);
                            case "RecordNoTile":
                                return view["ActionNoTile"]["record"](P);
                            case "RecordBaBei":
                                return view["ActionBabei"]["record"](P);
                            case "RecordHuleXueZhanMid":
                                return view["ActionHuleXueZhanMid"]["record"](P);
                            case "RecordHuleXueZhanEnd":
                                return view["ActionHuleXueZhanEnd"]["record"](P);
                            case "RecordGangResult":
                                return view["ActionGangResult"]["record"](P);
                            case "RecordGangResultEnd":
                                return view["ActionGangResultEnd"]["record"](P);
                            case "RecordRevealTile":
                                return view["ActionRevealTile"]["record"](P);
                            case "RecordLockTile":
                                return view["ActionLockTile"]["record"](P);
                            case "RecordUnveilTile":
                                return view["ActionUnveilTile"]["record"](P);
                            case "RecordNewCard":
                                return view["ActionNewCard"]["record"](P);
                            case "RecordFillAwaitingTiles":
                                return view["ActionFillAwaitingTiles"]["record"](P);
                        }
                        return 0;
                    },
                    J["prototype"]["_doFastRecord"] = function (S, P, m) {
                        try {
                            switch (this["_last_action_name"] = S, S) {
                                case "RecordNewRound":
                                    view["ActionNewRound"]["fastrecord"](P, m);
                                    break;
                                case "RecordChangeTile":
                                    view["ActionChangeTile"]["fastrecord"](P, m);
                                    break;
                                case "RecoreSelectGap":
                                    view["ActionSelectGap"]["fastrecord"](P, m);
                                    break;
                                case "RecordDiscardTile":
                                    view["ActionDiscardTile"]["fastrecord"](P, m);
                                    break;
                                case "RecordDealTile":
                                    view["ActionDealTile"]["fastrecord"](P, m);
                                    break;
                                case "RecordChiPengGang":
                                    view["ActionChiPengGang"]["fastrecord"](P, m);
                                    break;
                                case "RecordAnGangAddGang":
                                    view["ActionAnGangAddGang"]["fastrecord"](P, m);
                                    break;
                                case "RecordHule":
                                    view["ActionHule"]["fastrecord"](P);
                                    break;
                                case "RecordLiuJu":
                                    view["ActionLiuJu"]["fastrecord"](P);
                                    break;
                                case "RecordNoTile":
                                    view["ActionNoTile"]["fastrecord"](P);
                                    break;
                                case "RecordBaBei":
                                    view["ActionBabei"]["fastrecord"](P);
                                    break;
                                case "RecordHuleXueZhanMid":
                                    view["ActionHuleXueZhanMid"]["fastrecord"](P);
                                    break;
                                case "RecordHuleXueZhanEnd":
                                    view["ActionHuleXueZhanEnd"]["fastrecord"](P);
                                    break;
                                case "RecordRevealTile":
                                    view["ActionRevealTile"]["fastrecord"](P);
                                    break;
                                case "RecordLockTile":
                                    view["ActionLockTile"]["fastrecord"](P);
                                    break;
                                case "RecordUnveilTile":
                                    view["ActionUnveilTile"]["fastrecord"](P);
                                    break;
                                case "RecordNewCard":
                                    view["ActionNewCard"]["fastrecord"](P);
                                    break;
                                case "RecordFillAwaitingTiles":
                                    view["ActionFillAwaitingTiles"]["fastrecord"](P);
                            }
                        } catch (B) {
                            var J = {};
                            return J["error"] = B["message"],
                                J["stack"] = B["stack"],
                                J["method"] = "ui_live_broadcast doFastRecord",
                                J.name = S,
                                J.data = P,
                                GameMgr.Inst["onFatalError"](J),
                                1000000;
                        }
                    },
                    J["prototype"]["_doUnit"] = function (P, m, B) {
                        if (m) {
                            if (1 == P["category"])
                                return (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'live_fast_action': P
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'live_fast_action': P
                                        }));
                                    }
                                })), this["_doFastRecord"](P.name, P.data, B), view["DesktopMgr"].Inst["timestoped"] || (this["time_stop_length"] = 0), 0;
                            if ("GameNewRoundState" == P.name) {
                                for (var J = 0; J < P.data["seat_states"]["length"]; J++)
                                    view["DesktopMgr"]["player_link_state"][J] = P.data["seat_states"][J];
                                S["UI_DesktopInfo"].Inst["refreshLinks"]();
                            } else
                                "NotifyGameEndResult" == P.name ? (view["DesktopMgr"].Inst["gameEndResult"] = P.data["result"], this["enable"] = !1, S["UIMgr"].Inst["ShowGameEnd"]()) : "NotifyPlayerConnectionState" == P.name ? S["UI_DesktopInfo"].Inst["onPlayerConnectionState"](P.data) : "GameEndAction" == P.name ? 3 == P.data["state"] && S["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](16), Laya["Handler"]["create"](this, function () {
                                    game["Scene_MJ"].Inst["ForceOut"]();
                                })) : "NotifyGamePause" == P.name && (view["DesktopMgr"].Inst["setGameStop"](P.data["paused"]), this["time_stop_start_time"] > 0 && (this["time_stop_length"] += P["timestamp"] - this["time_stop_start_time"]), this["time_stop_start_time"] = view["DesktopMgr"].Inst["timestoped"] ? P["timestamp"] : -1);
                            return -1;
                        }
                        if (1 == P["category"]) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'live_action': B
                                }),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'live_action': B
                                    }));
                                }
                            }));
                            var L = this["_doRecord"](P.name, P.data, B);
                            return view["DesktopMgr"].Inst["timestoped"] || (this["time_stop_length"] = 0),
                                L;
                        }
                        if ("GameNewRoundState" == P.name) {
                            for (var J = 0; J < P.data["seat_states"]["length"]; J++)
                                view["DesktopMgr"]["player_link_state"][J] = P.data["seat_states"][J];
                            S["UI_DesktopInfo"].Inst["refreshLinks"]();
                        } else
                            "NotifyGameEndResult" == P.name ? (view["DesktopMgr"].Inst["gameEndResult"] = P.data["result"], this["enable"] = !1, S["UIMgr"].Inst["ShowGameEnd"]()) : "NotifyGameBroadcast" == P.name ? S["UI_DesktopInfo"].Inst["onGameBroadcast"](P.data) : "NotifyPlayerConnectionState" == P.name ? S["UI_DesktopInfo"].Inst["onPlayerConnectionState"](P.data) : "GameEndAction" == P.name ? 3 == P.data["state"] && S["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](16), Laya["Handler"]["create"](this, function () {
                                game["Scene_MJ"].Inst["ForceOut"]();
                            })) : "NotifyGamePause" == P.name && (view["DesktopMgr"].Inst["setGameStop"](P.data["paused"]), this["time_stop_start_time"] > 0 && (this["time_stop_length"] += P["timestamp"] - this["time_stop_start_time"]), this["time_stop_start_time"] = view["DesktopMgr"].Inst["timestoped"] ? P["timestamp"] : -1);
                        return -1;
                    },
                    J["prototype"]["_parseUnit"] = function (S) {
                        var P = net["MessageWrapper"]["decodeMessage"](S["action_data"]);
                        return {
                            timestamp: S["timestamp"],
                            category: S["action_category"],
                            name: P["$type"].name,
                            data: P
                        };
                    },
                    J["prototype"]["_loadUnit"] = function (S, P, m) {
                        var B = this,
                            J = new Laya["HttpRequest"]();
                        J.once(Laya["Event"]["COMPLETE"], this, function (J) {
                            if (m)
                                try {
                                    var L = new Laya.Byte();
                                    L["writeArrayBuffer"](J),
                                        B["last_success_segment_url"] = P;
                                    for (var w = net["MessageWrapper"]["decodeMessage"](L["getUint8Array"](0, L["length"])), h = [], s = 0; s < w["actions"]["length"]; s++)
                                        h.push(B["_parseUnit"](w["actions"][s]));
                                    m["runWith"]({
                                        success: !0,
                                        id: S,
                                        units: h,
                                        url: P
                                    });
                                } catch (R) {
                                    m["runWith"]({
                                        success: !1,
                                        id: S,
                                        type: "parse_error",
                                        url: P
                                    });
                                }
                        }),
                            J.once(Laya["Event"]["ERROR"], this, function () {
                                m && m["runWith"]({
                                    success: !1,
                                    id: S,
                                    url: P,
                                    type: "download_timeout"
                                });
                            });
                        var L = [];
                        J.send(P, '', "get", "arraybuffer", L);
                    },
                    J["prototype"]["startLive"] = function (P) {
                        var m = this;
                        app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameLiveInfo", {
                            game_uuid: P
                        }, function (B, J) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(J),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(J));
                                }
                            }));
                            if (B || J["error"] || J["left_start_seconds"])
                                GameMgr.Inst["postInfo2Server"]("ob_failure", {
                                    condition: "loading",
                                    uuid: P,
                                    segment_name: '',
                                    last_success_segment_name: '',
                                    error_info: "download_timeout",
                                    gametime_since_start: 0
                                }), S["UIMgr"].Inst["showNetReqError"]("fetchGameLiveInfo", B, J), m["_forceQuit"]();
                            else {
                                var L = J;
                                m["segment_index"] = 0,
                                    m["segments"] = [],
                                    m["last_success_segment_url"] = '',
                                    m["_time0"] = L["now_millisecond"],
                                    m["_time_start"] = Laya["timer"]["currTimer"];
                                var w = 0,
                                    h = !1;
                                m["game_uuid"] = P,
                                    m["enable"] = !0,
                                    m["guanzhanconfig"]["reset"](),
                                    S["UI_Ob_Replay"].Inst["enable"] = !1,
                                    m["do_unit_cd"] = 0,
                                    m["have_gameend"] = !1,
                                    m["is_realtime"] = !1,
                                    m.me["getChildByName"]("f_realtime")["visible"] = !1;
                                for (var s = function (B) {
                                    if (!h)
                                        if (app.Log.log("loadover0 " + JSON["stringify"](B)), B["success"]) {
                                            for (var J = 0; J < m["segments"]["length"]; J++)
                                                if (m["segments"][J]["segment_id"] == B.id) {
                                                    m["segments"][J]["units"] = B["units"],
                                                        m["segments"][J]["loaded"] = !0;
                                                    break;
                                                }
                                            app.Log.log("loadover1"),
                                                w++,
                                                S["UI_Loading"].Inst["setProgressVal"](0.8 + 0.2 * (w / m["segments"]["length"])),
                                                w == m["segments"]["length"] && m["_onFirstLoadOver"]();
                                        } else
                                            app.Log.log("loadover2"), h = !0, S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](15)), m["_forceQuit"](), GameMgr.Inst["postInfo2Server"]("ob_failure", {
                                                condition: "loading",
                                                uuid: P,
                                                segment_name: B.url,
                                                last_success_segment_name: m["last_success_segment_url"],
                                                error_info: B.type,
                                                gametime_since_start: 0
                                            });
                                }, R = 0; R < L["segments"]["length"]; R++) {
                                    var v = L["segments"][R]["segment_id"],
                                        f = game["LobbyNetMgr"].Inst["ob_url"] + L["segments"][R]["segment_uri"];
                                    m["segments"].push({
                                        segment_id: v,
                                        uri: f,
                                        units: [],
                                        loaded: !1
                                    }),
                                        m["_loadUnit"](v, f, Laya["Handler"]["create"](m, s));
                                }
                            }
                        });
                    },
                    J["prototype"]["clearPendingUnits"] = function () {
                        this["pending_units"] = [];
                    },
                    J["prototype"]["startRealtimeLive"] = function (P, m) {
                        var B = this;
                        this["segment_index"] = 0,
                            this["segments"] = [],
                            this["enable"] = !0,
                            this["guanzhanconfig"]["reset"](),
                            S["UI_Ob_Replay"].Inst["enable"] = !1,
                            this["do_unit_cd"] = 0,
                            this["have_gameend"] = !1,
                            this["is_realtime"] = !0,
                            this["_time0"] = 1000 * P,
                            this["_time_start"] = Laya["timer"]["currTimer"];
                        var J = this.me["getChildByName"]("f_realtime");
                        J["visible"] = !0,
                            Laya["timer"]["clearAll"](this),
                            Laya["timer"]["frameLoop"](1, this, function () {
                                var S = (Laya["timer"]["currTimer"] - B["_time_start"]) / 1000;
                                S -= 4 * Math["floor"](S / 4),
                                    J["alpha"] = 2 > S ? S / 2 * 0.7 + 0.3 : 0.7 * (1 - (S - 2) / 2) + 0.3;
                            });
                        for (var L = [], w = 0; w < m["actions"]["length"]; w++)
                            L.push(this["_parseUnit"](m["actions"][w]));
                        for (var w = 0; w < this["pending_units"]["length"]; w++)
                            L.push(this["_parseUnit"](this["pending_units"][w].unit));
                        this["pending_units"] = [],
                            this["segments"].push({
                                segment_id: 1,
                                units: L,
                                loaded: !0
                            }),
                            this["_onFirstLoadOver"]();
                    },
                    J["prototype"]["_onFirstLoadOver"] = function () {
                        var S = this;
                        if (this["_fastSync"]() && (app.Log.log("fastSync over"), Laya["timer"].loop(100, this, function () {
                            if (S["is_realtime"]) {
                                for (var P = 0; P < S["pending_units"]["length"]; P++)
                                    S["segments"][0]["units"].push(S["_parseUnit"](S["pending_units"][P].unit));
                                S["pending_units"] = [];
                            }
                            S["_timeDoAction"](!1);
                        }, null, !0), !this["is_realtime"])) {
                            var P = this["segments"][this["segments"]["length"] - 1]["units"],
                                m = P[P["length"] - 1]["timestamp"];
                            this["segment_end_millisecond"] = m,
                                Laya["timer"].loop(3700, this, function () {
                                    S["_askNewSegment"]();
                                }, null, !1);
                        }
                    },
                    J["prototype"]["_unitIsTimeLast"] = function (S, P) {
                        if (S >= this["segments"]["length"])
                            return !0;
                        var m = this["segments"][S];
                        if (!m["loaded"])
                            return !0;
                        if (m["units"]["length"] <= P)
                            return this["_unitIsTimeLast"](S + 1, 0);
                        var B = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"],
                            J = m["units"][P];
                        return J["timestamp"] > B ? !0 : 2 == J["category"] ? this["_unitIsTimeLast"](S, P + 1) : !1;
                    },
                    J["prototype"]["_getTimeStop"] = function (S, P, m) {
                        var B = 0;
                        if (m > 0 && (B = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"] - m), S >= this["segments"]["length"])
                            return B;
                        var J = this["segments"][S];
                        if (!J["loaded"])
                            return B;
                        if (J["units"]["length"] <= P)
                            return this["_getTimeStop"](S + 1, 0, m);
                        var L = J["units"][P],
                            w = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"];
                        if (L["timestamp"] > w)
                            return B;
                        if (1 == L["category"])
                            return 0;
                        if ("NotifyGamePause" == L.name) {
                            var h = 0;
                            return m > 0 && (h += L["timestamp"] - m),
                                m = L.data["paused"] ? L["timestamp"] : -1,
                                h + this["_getTimeStop"](S, P + 1, m);
                        }
                        return this["_getTimeStop"](S, P + 1, m);
                    },
                    J["prototype"]["_timeDoAction"] = function (m) {
                        if (this["state"] != P["gameing"])
                            return !1;
                        if (this["segment_index"] >= this["segments"]["length"])
                            return !1;
                        var B = this["segments"][this["segment_index"]];
                        if (!B["loaded"])
                            return !1;
                        if (this["segment_index"] == this["segments"]["length"] - 1 && this["unit_index"] >= B["units"]["length"])
                            return !1;
                        var J = B["units"][this["unit_index"]],
                            L = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"];
                        if (J["timestamp"] > L && !this["is_realtime"])
                            return !0;
                        if ("NotifyGameEndResult" == J.name)
                            return !0;
                        if (1 == J["category"] && this["during_do_cd"])
                            return !0;
                        var w = this["_unitIsTimeLast"](this["segment_index"], this["unit_index"] + 1);
                        w && (L -= this["_getTimeStop"](this["segment_index"], this["unit_index"] + 1, this["time_stop_start_time"]));
                        var h = 0;
                        if (this["is_realtime"] ? (h = Laya["timer"]["currTimer"] + GameMgr.Inst["server_time_delta"] - this["_time0"] - J["timestamp"], h = 0 > h ? 0 : h) : h = L - J["timestamp"], S["UI_Loading"].Inst && S["UI_Loading"].Inst["enable"] && S["UI_Loading"].Inst["close"](), m)
                            w ? this["_doUnit"](J, !0, h) : this["_doUnit"](J, !0, -1);
                        else {
                            var s = this["_doUnit"](J, !1, h);
                            s > 0 && (this["do_unit_cd"] = Laya["timer"]["currTimer"] + s);
                        }
                        return this["unit_index"]++,
                            this["unit_index"] >= B["units"]["length"] && !this["is_realtime"] && (this["unit_index"] = 0, this["segment_index"]++),
                            this["_timeDoAction"](m);
                    },
                    J["prototype"]["_askNewSegment"] = function () {
                        var P = this;
                        if (!this["have_gameend"] && !(this["during_asknew"] || this["retry_loadtime"] >= 3) && this["segments"][this["segments"]["length"] - 1]["loaded"]) {
                            var m = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"];
                            m + 15000 < this["segment_end_millisecond"] || (this["during_asknew"] = !0, app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameLiveLeftSegment", {
                                game_uuid: this["game_uuid"],
                                last_segment_id: this["segments"][this["segments"]["length"] - 1]["segment_id"]
                            }, function (m, B) {
                                if (P["during_asknew"] = !1, m || B["error"])
                                    P["retry_loadtime"]++, P["retry_loadtime"] >= 3 && (S["UIMgr"].Inst["showNetReqError"]("fetchGameLiveLeftSegment", m, B), GameMgr.Inst["postInfo2Server"]("ob_failure", {
                                        condition: "runtime",
                                        uuid: P["game_uuid"],
                                        segment_name: '',
                                        last_success_segment_name: P["segments"][P["segments"]["length"] - 1].uri,
                                        error_info: "server_timeout",
                                        gametime_since_start: P["_time_start"]
                                    }));
                                else {
                                    P["retry_loadtime"] = 0;
                                    var J = B["segments"];
                                    P["segment_end_millisecond"] = B["segment_end_millisecond"];
                                    for (var L = function (S) {
                                        if (S["success"]) {
                                            for (var m = 0; m < P["segments"]["length"]; m++)
                                                if (P["segments"][m]["segment_id"] == S.id) {
                                                    P["segments"][m]["units"] = S["units"];
                                                    for (var B = 0; B < S["units"]["length"]; B++)
                                                        if ("NotifyGameEndResult" == S["units"][B].name) {
                                                            P["have_gameend"] = !0;
                                                            break;
                                                        }
                                                    P["segments"][m]["loaded"] = !0;
                                                    break;
                                                }
                                        } else
                                            GameMgr.Inst["postInfo2Server"]("ob_failure", {
                                                condition: "runtime",
                                                uuid: P["game_uuid"],
                                                segment_name: S.url,
                                                last_success_segment_name: P["last_success_segment_url"],
                                                error_info: S.type,
                                                gametime_since_start: P["_time_start"]
                                            });
                                    }, w = P["segments"][P["segments"]["length"] - 1]["segment_id"], h = 0; h < J["length"]; h++) {
                                        var s = J[h]["segment_id"],
                                            R = game["LobbyNetMgr"].Inst["ob_url"] + J[h]["segment_uri"];
                                        w >= s || (P["segments"].push({
                                            segment_id: s,
                                            uri: R,
                                            units: [],
                                            loaded: !1
                                        }), P["_loadUnit"](s, R, Laya["Handler"]["create"](P, L, null, !1)));
                                    }
                                }
                            }));
                        }
                    },
                    J["prototype"]["_forceQuit"] = function () {
                        this["state"] = P.none,
                            this["enable"] = !1,
                            GameMgr.Inst["EnterLobby"]();
                    },
                    J["prototype"]["_fastSync"] = function () {
                        var m = -1,
                            B = -1;
                        this["time_stop_start_time"] = -1,
                            this["time_stop_length"] = 0;
                        var J = this["_time0"] + Laya["timer"]["currTimer"] - this["_time_start"];
                        this["is_realtime"] && (J = Laya["timer"]["currTimer"]);
                        for (var L = 0; L < this["segments"]["length"]; L++)
                            for (var w = this["segments"][L], h = 0; h < w["units"]["length"]; h++)
                                w["units"][h]["timestamp"] <= J && "RecordNewRound" == w["units"][h].name && (m = L, B = h);
                        if (app.Log.log("_fastSync1: segment=" + m + ", unit=" + B), -1 == m) {
                            m = 0;
                            for (var w = this["segments"][0], h = 0; h < w["units"]["length"]; h++)
                                if ("RecordNewRound" == w["units"][h].name) {
                                    m = 0,
                                        B = h,
                                        this["_time0"] = w["units"][h]["timestamp"] - 50;
                                    break;
                                }
                        }
                        return app.Log.log("_fastSync2: segment=" + m + ", unit=" + B),
                            -1 == B ? this["is_realtime"] ? (this["state"] = P["gameing"], this["segment_index"] = 0, this["unit_index"] = 0, !0) : (app.Log["Error"]("给的数据没有RecordNewRound"), S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](15)), this["_forceQuit"](), !1) : (this["state"] = P["gameing"], this["segment_index"] = m, this["unit_index"] = B, this["_timeDoAction"](!0), !0);
                    },
                    J["prototype"]["onChangeMainbody"] = function () {
                        this["state"] == P["gameing"] ? (this["do_unit_cd"] = 0, this["_fastSync"]()) : this["state"] == P["replay"] && S["UI_Ob_Replay"].Inst["onChangeMainBody"]();
                    },
                    J["prototype"]["onScoreChangeConfirm"] = function () {
                        if (!this["enable"])
                            return S["UI_Live_Broadcast1"].Inst["onScoreChangeConfirm"](), void 0;
                        if (this["state"] == P["gameing"]) {
                            if (this["do_unit_cd"] = 0, this["segment_index"] >= this["segments"]["length"])
                                return !1;
                            var m = this["segments"][this["segment_index"]];
                            if (!m["loaded"])
                                return !1;
                            if (this["segment_index"] == this["segments"]["length"] - 1 && this["unit_index"] >= m["units"]["length"])
                                return !1;
                            var B = m["units"][this["unit_index"]];
                            "NotifyGameEndResult" == B.name && (S["UI_ScoreChange"].Inst["enable"] = !1, this["_doUnit"](B, !1, 0));
                        } else
                            this["state"] == P["replay"] && (S["UI_ScoreChange"].Inst["enable"] = !1, S["UI_Ob_Replay"].Inst["nextStep"](!0));
                    },
                    J["prototype"]["enterReplay"] = function () {
                        this["state"] = P["replay"];
                        for (var m = [], B = 0; B <= this["segment_index"] && B < this["segments"]["length"] && this["segments"][B]["loaded"]; B++)
                            for (var J = this["segments"][B]["units"], L = 0; L < J["length"] && !(B == this["segment_index"] && L >= this["unit_index"]); L++) {
                                var w = J[L];
                                1 == w["category"] && m.push({
                                    name: w.name,
                                    data: w.data
                                });
                            }
                        S["UI_Ob_Replay"].Inst.show(m),
                            view["DesktopMgr"].Inst["ClearOperationShow"]();
                    },
                    J["prototype"]["closeReplay"] = function () {
                        this["state"] = P["gameing"],
                            S["UI_Ob_Replay"].Inst["close"](),
                            this["do_unit_cd"] = 0,
                            this["_fastSync"]();
                    },
                    J;
            }
                (S["UIBase"]);
            S["UI_Live_Broadcast"] = B;
        }
            (uiscript || (uiscript = {}));




        !function (S) {
            var P,
                m = function () {
                    function P(P) {
                        var m = this;
                        this["_show_hand"] = !1,
                            this["_show_paopai"] = !1,
                            this["_show_replay"] = !1,
                            this.me = P,
                            this._out = this.me["getChildByName"]("out"),
                            this._in = this.me["getChildByName"]('in'),
                            this["_btn_out"] = this._out["getChildByName"]("btn_out"),
                            this["_btn_out"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                m["switch"](!0);
                            }, null, !1),
                            this["_btn_in"] = this._in["getChildByName"]("btn_in"),
                            this["_btn_in"]["clickHandler"] = new Laya["Handler"](this, function () {
                                m["switch"]();
                            }),
                            this._in["getChildByName"]("btn_shoupai")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                m["_show_hand"] = !m["_show_hand"],
                                    m["_choosed_show_hand"]["visible"] = m["_show_hand"],
                                    view["DesktopMgr"].Inst["onShowHandChange"](m["_show_hand"]);
                            }, null, !1),
                            this["_choosed_show_hand"] = this._in["getChildByName"]("btn_shoupai")["getChildByName"]("choosed"),
                            this._in["getChildByName"]("btn_paopai")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                m["_show_paopai"] = !m["_show_paopai"],
                                    m["_choosed_show_paopai"]["visible"] = m["_show_paopai"],
                                    view["DesktopMgr"].Inst["onShowPaopaiChange"](m["_show_paopai"]);
                            }, null, !1),
                            this["_choosed_show_paopai"] = this._in["getChildByName"]("btn_paopai")["getChildByName"]("choosed"),
                            this._in["getChildByName"]("btn_showbar")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                S["UI_Ob_Replay"].Inst["locking"] || S["UI_Ob_Replay"].Inst["anim_time"] > Laya["timer"]["currTimer"] || "RecordHuleXueZhanEnd" != B.Inst["last_action_name"] && "RecordHule" != B.Inst["last_action_name"] && "RecordLiuJu" != B.Inst["last_action_name"] && "RecordNoTile" != B.Inst["last_action_name"] && ("RecordNewRound" == B.Inst["last_action_name"] && B.Inst["during_do_cd"] || (m["_show_replay"] = !m["_show_replay"], m["_choosed_show_replay"]["visible"] = m["_show_replay"], m["_show_replay"] ? B.Inst["enterReplay"]() : B.Inst["closeReplay"]()));
                            }, null, !1),
                            this["_choosed_show_replay"] = this._in["getChildByName"]("btn_showbar")["getChildByName"]("choosed"),
                            this._out["getChildByName"]("label_word")["visible"] = "chs" == GameMgr["client_language"],
                            this._out["getChildByName"]("img_set")["visible"] = "chs" != GameMgr["client_language"];
                    }
                    return P["prototype"]["reset"] = function () {
                        Laya["Tween"]["clearAll"](this),
                            this["_show_hand"] = !1,
                            this.me.x = -249,
                            this["_btn_out"]["disabled"] = !1,
                            this["_choosed_show_hand"]["visible"] = this["_show_hand"],
                            this["_show_paopai"] = !1,
                            this["_choosed_show_paopai"]["visible"] = this["_show_paopai"],
                            this["_show_replay"] = !1,
                            this["_choosed_show_replay"]["visible"] = this["_show_replay"],
                            this._out["visible"] = !0,
                            this._in["visible"] = !1;
                    },
                        P["prototype"]["switch"] = function (S) {
                            var P = this;
                            void 0 === S && (S = !1);
                            var m = S ? 21 : -249;
                            this["_btn_out"]["disabled"] = !0,
                                this["_btn_in"]["disabled"] = !0,
                                Laya["Tween"].to(this.me, {
                                    x: -333
                                }, S ? 60 : 140, Laya.Ease["strongOut"], Laya["Handler"]["create"](this, function () {
                                    P._in["visible"] = S,
                                        P._out["visible"] = !S,
                                        Laya["Tween"].to(P.me, {
                                            x: m
                                        }, S ? 140 : 60, Laya.Ease["strongOut"], Laya["Handler"]["create"](P, function () {
                                            P["_btn_out"]["disabled"] = !1,
                                                P["_btn_in"]["disabled"] = !1;
                                        }), 0, !0, !0);
                                }), 0, !0, !0);
                        },
                        P;
                }
                    ();
            !function (S) {
                S[S.none = 0] = "none",
                    S[S["gameing"] = 1] = "gameing",
                    S[S["replay"] = 2] = "replay";
            }
                (P || (P = {}));
            var B = function (B) {
                function J() {
                    var S = B.call(this, new ui.mj["live_broadcastUI"]()) || this;
                    return S["state"] = P.none,
                        S["pending_units"] = [],
                        S["_time0"] = 0,
                        S["_time_start"] = 0,
                        S["unit_index"] = 0,
                        S["guanzhanconfig"] = null,
                        S["do_unit_cd"] = 0,
                        S["time_stop_length"] = 0,
                        S["time_stop_start_time"] = 0,
                        S["_last_action_name"] = '',
                        S["have_gameend"] = !1,
                        S["is_realtime"] = !1,
                        S["waiting_start"] = !1,
                        S["sended_error_msg"] = !1,
                        J.Inst = S,
                        game["LiveNetMgr"].Inst["setNotifyHandler"](new Laya["Handler"](S, S["onReceiveNotify"])),
                        S;
                }
                return __extends(J, B),
                    J["fetchInfo"] = function (P, m) {
                        var B = this;
                        app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchOBToken", {
                            uuid: P
                        }, function (L, w) {
                            if (L || w["error"])
                                S["UIMgr"].Inst["showNetReqError"]("fetchOBToken", L, w), m && m["runWith"]({
                                    success: !1
                                });
                            else {
                                app.Log.log("fetchOBToken res:" + JSON["stringify"](w)),
                                    B["token"] = w["token"],
                                    B["game_uuid"] = P,
                                    B["create_time"] = w["create_time"],
                                    B["delay"] = w["delay"],
                                    B["start_time"] = w["start_time"];
                                var h = Math["floor"](w["start_time"] + w["delay"] - game["Tools"]["getServerTime"]() / 1000);
                                h > 0 ? S["UI_WaitOb"].Inst.show(J["game_uuid"], h, m) : m && m["runWith"]({
                                    success: !0,
                                    data: w
                                });
                            }
                        });
                    },
                    J["goToWatch"] = function (P, m) {
                        var B = this;
                        S["UI_Loading"].Inst["setProgressVal"](0.1),
                            S["UI_Loading"].Inst.show("enter_mj"),
                            this["connect"](new Laya["Handler"](this, function (J) {
                                J["success"] ? (S["UI_Loading"].Inst["setProgressVal"](0.2), B["startLoadOb"](P, J.data, m)) : (S["UI_Loading"].Inst["enable"] = !1, S["UIMgr"].Inst["showLobby"]());
                            }));
                    },
                    J["startLoadOb"] = function (P, m, B) {
                        var L = this;
                        app.Log.log("startLoadOb res:" + JSON["stringify"](m)),
                            GameMgr.Inst["onLoadStart"]('ob');
                        for (var w = JSON["parse"](m.head), h = [null, null, null, null], s = 0; s < w["players"]["length"]; s++) {
                            for (var R = -1, v = 0; v < w["seat_list"]["length"]; v++)
                                if (w["seat_list"][v] == w["players"][s]["account_id"]) {
                                    R = v;
                                    break;
                                }
                            -1 != R ? h[R] = w["players"][s] : app.Log["Error"]("goToWatch " + JSON["stringify"](w["players"][s]) + "未找到位置");
                        }
                        var f = game["Tools"]["strOfLocalization"](2003),
                            A = w["game_config"].mode;
                        A["extendinfo"] && (f = game["Tools"]["strOfLocalization"](2004)),
                            A["detail_rule"] && A["detail_rule"]["ai_level"] && (1 === A["detail_rule"]["ai_level"] && (f = game["Tools"]["strOfLocalization"](2003)), 2 === A["detail_rule"]["ai_level"] && (f = game["Tools"]["strOfLocalization"](2004)));
                        for (var s = 0; s < h["length"]; s++)
                            null == h[s] && (h[s] = {
                                nickname: f,
                                avatar_id: game["GameUtility"]["get_default_ai_skin"](),
                                level: {
                                    id: "10101"
                                },
                                level3: {
                                    id: "20101"
                                },
                                character: {
                                    charid: game["GameUtility"]["get_default_ai_character"](),
                                    level: 0,
                                    exp: 0,
                                    views: [],
                                    skin: game["GameUtility"]["get_default_ai_skin"](),
                                    is_upgraded: !1
                                }
                            });
                        game["Scene_MJ"].Inst["openMJRoom"]({
                            mode: A
                        }, h, Laya["Handler"]["create"](this, function () {
                            view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](w["game_config"])), h, B, view["EMJMode"]["live_broadcast"], Laya["Handler"]["create"](L, function () {
                                S["UI_Loading"].Inst["setProgressVal"](0.7),
                                    Laya["timer"].once(1000, L, function () {
                                        GameMgr.Inst["EnterMJ"](),
                                            S["UI_Loading"].Inst["setProgressVal"](0.8),
                                            J.Inst["time0"] = game["Tools"]["getServerTime"]() - (1000 * m["start_time"] + 1000 * m["delay"]),
                                            J.Inst["startLive"](P);
                                    });
                            }));
                        }), Laya["Handler"]["create"](this, function (P) {
                            return S["UI_Loading"].Inst["setProgressVal"](0.5 * P + 0.2);
                        }, null, !1));
                    },
                    J["connect"] = function (S) {
                        this["connect_func"] = S,
                            game["LiveNetMgr"].Inst["connect"](new Laya["Handler"](this, this["onConnect"]), new Laya["Handler"](this, this["onFetchSequence"]), new Laya["Handler"](this, this["onDisconnect"]));
                    },
                    J["onConnect"] = function (P) {
                        var m = this;
                        if (P.open)
                            app["Log_OB"].log("Auth Sended"), game["LiveNetMgr"].Inst["sendReq"]("Auth", {
                                token: this["token"]
                            }, function (P, B) {
                                P || B["error"] ? (m["connect_func"] && (m["connect_func"]["runWith"]({
                                    success: !1,
                                    data: B
                                }), m["connect_func"] = null), J.Inst && J.Inst["_forceQuit"](), B["error"] ? S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["translateOfLocalization"](B["error"])) : S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](12)), S["UI_Loading"].Inst["enable"] = !1) : (J.Inst && J.Inst["enable"] ? J.Inst["sendStartObRequest"]() : m["connect_func"] && (m["connect_func"]["runWith"]({
                                    success: !0,
                                    data: B
                                }), m["connect_func"] = null), app["Log_OB"].log("Auth Success"));
                            }), game["LiveNetMgr"].Inst["clearTimer"](), game["LiveNetMgr"].Inst["sendFetchSequence"]();
                        else if (this["connect_func"] && (this["connect_func"]["runWith"]({
                            success: !1
                        }), this["connect_func"] = null), game["LiveNetMgr"].Inst["close"](), "connect failed" == P.info)
                            S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](15)), J.Inst ? J.Inst["_forceQuit"]() : S["UI_Loading"].Inst["enable"] = !1;
                        else if ("disconnect" == P.info) {
                            if (!J.Inst || !J.Inst["enable"])
                                return;
                            S["UI_SecondConfirm"].Inst.show(game["Tools"]["strOfLocalization"](3529), Laya["Handler"]["create"](this, function () {
                                game["LiveNetMgr"].Inst["force_reconnect"]();
                            }), Laya["Handler"]["create"](this, function () {
                                J.Inst && J.Inst["_forceQuit"]();
                            }));
                        } else
                            J.Inst && J.Inst["_forceQuit"]();
                    },
                    J["onFetchSequence"] = function (S) {
                        var m = this;
                        S["success"] && (J.Inst && J.Inst["max_seq"] < S.seq ? Laya["timer"].once(5000, this, function () {
                            J.Inst && J.Inst["max_seq"] < S.seq && J.Inst["state"] != P.none ? game["LiveNetMgr"].Inst["on_seq_error"](S.seq, J.Inst["max_seq"]) : Laya["timer"].once(1000, m, function () {
                                game["LiveNetMgr"].Inst["sendFetchSequence"]();
                            });
                        }) : Laya["timer"].once(1000, this, function () {
                            game["LiveNetMgr"].Inst["sendFetchSequence"]();
                        }));
                    },
                    J["onDisconnect"] = function () {
                        J.Inst && J.Inst["removeTimer"]();
                    },
                    Object["defineProperty"](J["prototype"], "max_seq", {
                        get: function () {
                            return 0 == this["pending_units"]["length"] ? 0 : this["pending_units"][this["pending_units"]["length"] - 1].seq;
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](J["prototype"], "time0", {
                        set: function (S) {
                            this["_time0"] = S;
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](J["prototype"], "during_do_cd", {
                        get: function () {
                            return game["Tools"]["getServerTime"]() < this["do_unit_cd"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](J["prototype"], "during_play", {
                        get: function () {
                            return this["state"] == P["gameing"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object["defineProperty"](J["prototype"], "last_action_name", {
                        get: function () {
                            return this["_last_action_name"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    J["prototype"]["onCreate"] = function () {
                        this["guanzhanconfig"] = new m(this.me["getChildByName"]("config"));
                    },
                    J["prototype"]["startLive"] = function () {
                        var P = this;
                        if (game["LiveNetMgr"].Inst["connect_state"] != game["EConnectState"]["connecting"])
                            return S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](12)), J.Inst && J.Inst["_forceQuit"](), void 0;
                        this["sended_error_msg"] = !1,
                            this["pending_units"] = [];
                        var m = this.me["getChildByName"]("f_realtime");
                        m["visible"] = !1,
                            this["_time_start"] = game["Tools"]["getServerTime"]();
                        this["enable"] = !0,
                            this["guanzhanconfig"]["reset"](),
                            S["UI_Ob_Replay"].Inst["enable"] = !1,
                            this["do_unit_cd"] = 0,
                            this["have_gameend"] = !1,
                            this["waiting_start"] = !0,
                            game["LiveNetMgr"].Inst["sendReq"]("StartOb", {}, function (m, B) {
                                m || B["error"] ? (B["error"] ? S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["translateOfLocalization"](B["error"])) : S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](12)), P["_forceQuit"]()) : (app["Log_OB"].log("StartOb"), P["start_seq"] = B.seq ? B.seq : 0);
                            });
                    },
                    J["prototype"]["sendStartObRequest"] = function () {
                        var P = this;
                        game["LiveNetMgr"].Inst["sendReq"]("StartOb", {}, function (m, B) {
                            m || B["error"] ? (B["error"] ? S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["translateOfLocalization"](B["error"])) : S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](12)), P["_forceQuit"]()) : app["Log_OB"].log("StartOb");
                        });
                    },
                    J["prototype"]["onDisable"] = function () {
                        Laya["timer"]["clearAll"](this),
                            game["LiveNetMgr"].Inst["close"](),
                            this["pending_units"] = [];
                    },
                    J["prototype"]["onReceiveNotify"] = function (S, P) {
                        var m = this;
                        void 0 === P && (P = !1);
                        for (var B = 0, L = this["pending_units"]; B < L["length"]; B++) {
                            var w = L[B];
                            if (w.seq == S.seq)
                                return;
                        }
                        if ("GameEndAction" == S.name && game["LiveNetMgr"].Inst["close"](), app["Log_OB"].log("receive seq:" + S.seq + "  name:" + S.name), P) {
                            for (var h = !1, s = -1, R = 0, v = this["pending_units"]; R < v["length"]; R++) {
                                var w = v[R];
                                if (h || (s++, w.seq == S.seq - 1 && (h = !0)), w.seq == S.seq)
                                    return;
                            }
                            if (0 > s)
                                this["pending_units"].push(S);
                            else if (this["pending_units"]["splice"](s + 1, 0, S), this["pending_units"][s + 2] && this["pending_units"][s + 2].seq != S.seq + 1) {
                                var f = this;
                                game["LiveNetMgr"].Inst["sendReq"]("FetchSegment", {
                                    seq: S.seq + 1
                                }, function (P, m) {
                                    (P || m["error"]) && GameMgr.Inst["postInfo2Server"]("livebroad", {
                                        uuid: J["game_uuid"],
                                        token: J["token"],
                                        missing_seq: S.seq + 1,
                                        error: P || m["error"]
                                    }),
                                        !P && m && f["onReceiveNotify"](f["_handleMsg"](m["segments"]), !0);
                                });
                            }
                        } else {
                            if (this["pending_units"]["length"] > 0 && S.seq != this["pending_units"][this["pending_units"]["length"] - 1].seq + 1) {
                                this["sended_error_msg"] || (GameMgr.Inst["postInfo2Server"]("livebroad", {
                                    uuid: J["game_uuid"],
                                    last_seq: this["pending_units"][this["pending_units"]["length"] - 1].seq,
                                    recent_seq: S.seq,
                                    token: J["token"]
                                }), this["sended_error_msg"] = !0);
                                var A = this;
                                game["LiveNetMgr"].Inst["sendReq"]("FetchSegment", {
                                    seq: this["pending_units"][this["pending_units"]["length"] - 1].seq + 1
                                }, function (S, P) {
                                    (S || P["error"]) && GameMgr.Inst["postInfo2Server"]("livebroad", {
                                        uuid: J["game_uuid"],
                                        token: J["token"],
                                        missing_seq: m["pending_units"][m["pending_units"]["length"] - 1].seq + 1,
                                        error: S || P["error"]
                                    }),
                                        !S && P && A["onReceiveNotify"](A["_handleMsg"](P["segments"]), !0);
                                });
                            }
                            this["pending_units"].push(S);
                        }
                        this["waiting_start"] && (S.seq >= this["start_seq"] && this["start_seq"] > 0 || S["offsetTime"] > this["_time0"] - 3000 || "GameEndAction" == S.name) && (this["_onFirstLoadOver"](), this["waiting_start"] = !1);
                    },
                    J["prototype"]["_onFirstLoadOver"] = function () {
                        var S = this;
                        this["_fastSync"]() && (app.Log.log("fastSync over"), Laya["timer"].loop(100, this, function () {
                            S["_timeDoAction"](!1);
                        }, null, !0));
                    },
                    J["prototype"]["_fastSync"] = function () {
                        var m = -1;
                        this["time_stop_start_time"] = -1,
                            this["time_stop_length"] = 0;
                        var B = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"];
                        this["is_realtime"] && (B = game["Tools"]["getServerTime"]());
                        for (var J = 0; J < this["pending_units"]["length"]; J++) {
                            var L = this["pending_units"][J];
                            L["offsetTime"] <= B && ("RecordNewRound" == L.name || "RecordNewCard" == L.name) && (m = J);
                        }
                        if (app.Log.log("_fastSync1: unit=" + m), -1 == m && (m = 0, this["pending_units"]["length"] > 0)) {
                            var L = this["pending_units"][0];
                            ("RecordNewRound" == L.name || "RecordNewCard" == L.name) && (m = 0, this["_time0"] = L["offsetTime"] - 50);
                        }
                        return app.Log.log("_fastSync2: unit=" + m),
                            -1 == m ? this["is_realtime"] ? (this["state"] = P["gameing"], this["unit_index"] = 0, !0) : (app.Log["Error"]("给的数据没有RecordNewRound"), S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](15)), this["_forceQuit"](), !1) : (this["state"] = P["gameing"], this["unit_index"] = m, this["pending_units"][m] && "RecordNewCard" == this["pending_units"][m].name && !this["pending_units"][m + 1] ? this["_timeDoAction"](!1) : this["_timeDoAction"](!0), !0);
                    },
                    J["prototype"]["_forceQuit"] = function () {
                        app.Log["Error"]("_forceQuit"),
                            this["state"] = P.none,
                            this["enable"] = !1,
                            GameMgr.Inst["EnterLobby"]();
                    },
                    J["prototype"]["_getTimeStop"] = function (S, P) {
                        var m = 0;
                        if (P > 0 && (m = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"] - P), this["pending_units"]["length"] <= S)
                            return m;
                        var B = this["pending_units"][S],
                            J = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"];
                        if (B["offsetTime"] > J)
                            return m;
                        if (1 == B["category"])
                            return 0;
                        if ("NotifyGamePause" == B.name) {
                            var L = 0;
                            return P > 0 && (L += B["offsetTime"] - P),
                                P = B.data["paused"] ? B["offsetTime"] : -1,
                                L + this["_getTimeStop"](S + 1, P);
                        }
                        return this["_getTimeStop"](S + 1, P);
                    },
                    J["prototype"]["_unitIsTimeLast"] = function (S) {
                        if (S >= this["pending_units"]["length"])
                            return !0;
                        var P = this["pending_units"][S],
                            m = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"];
                        return P["offsetTime"] > m ? !0 : 2 == P["category"] ? this["_unitIsTimeLast"](S + 1) : !1;
                    },
                    J["prototype"]["_timeDoAction"] = function (m) {
                        if (this["state"] != P["gameing"])
                            return !1;
                        if (this["unit_index"] >= this["pending_units"]["length"])
                            return !1;
                        var B = this["pending_units"][this["unit_index"]],
                            J = this["_time0"] + game["Tools"]["getServerTime"]() - this["_time_start"];
                        if (B["offsetTime"] > J && !this["is_realtime"])
                            return !0;
                        if ("NotifyGameEndResult" == B.name)
                            return !0;
                        if (1 == B["category"] && this["during_do_cd"])
                            return !0;
                        var L = this["_unitIsTimeLast"](this["unit_index"] + 1);
                        L && (J -= this["_getTimeStop"](this["unit_index"] + 1, this["time_stop_start_time"]));
                        var w = 0;
                        if (this["is_realtime"] ? (w = game["Tools"]["getServerTime"]() - this["_time0"] - B["offsetTime"], w = 0 > w ? 0 : w) : w = J - B["offsetTime"], S["UI_Loading"].Inst && S["UI_Loading"].Inst["enable"] && (app["Log_OB"].log("loading_close"), S["UI_Loading"].Inst["close"]()), m)
                            L ? this["_doUnit"](B, !0, w) : this["_doUnit"](B, !0, -1);
                        else {
                            var h = this["_doUnit"](B, !1, w);
                            h > 0 && (this["do_unit_cd"] = game["Tools"]["getServerTime"]() + h);
                        }
                        return this["unit_index"]++,
                            this["_timeDoAction"](m);
                    },
                    J["prototype"]["onScoreChangeConfirm"] = function () {
                        if (this["state"] == P["gameing"]) {
                            if (this["do_unit_cd"] = 0, this["unit_index"] >= this["pending_units"]["length"])
                                return !1;
                            var m = this["pending_units"][this["unit_index"]];
                            "NotifyGameEndResult" == m.name && (S["UI_ScoreChange"].Inst["enable"] = !1, this["_doUnit"](m, !1, 0));
                        } else
                            this["state"] == P["replay"] && (S["UI_ScoreChange"].Inst["enable"] = !1, S["UI_Ob_Replay"].Inst["nextStep"](!0));
                    },
                    J["prototype"]["_doRecord"] = function (P, m, B) {
                        switch (view["DesktopMgr"].Inst["ClearOperationShow"](), this["_last_action_name"] = P, P) {
                            case "RecordNewRound":
                                return view["ActionNewRound"]["record"](m, B);
                            case "RecordChangeTile":
                                return view["ActionChangeTile"]["record"](m, B);
                            case "RecordSelectGap":
                                return view["ActionSelectGap"]["record"](m, B);
                            case "RecordDiscardTile":
                                if (view["DesktopMgr"].Inst.mode == view["EMJMode"]["live_broadcast"] && S["UI_Live_Broadcast"].Inst["during_play"] && m["operations"] && m["operations"]["length"] > 0) {
                                    for (var J = 0, L = 0, w = 0, h = m["operations"]; w < h["length"]; w++) {
                                        var s = h[w];
                                        J = Math.max(s["time_fixed"], J),
                                            L = Math.max(s["time_add"], L);
                                    }
                                    Laya["timer"].once(J + L - B + 7000, this, this["onUnitTimeOut"]);
                                }
                                return view["ActionDiscardTile"]["record"](m, B);
                            case "RecordDealTile":
                                if (view["DesktopMgr"].Inst.mode == view["EMJMode"]["live_broadcast"] && S["UI_Live_Broadcast"].Inst["during_play"] && m["operation"]) {
                                    var J = m["operation"]["time_fixed"],
                                        L = m["operation"]["time_add"];
                                    Laya["timer"].once(J + L - B + 7000, this, this["onUnitTimeOut"]);
                                }
                                return view["ActionDealTile"]["record"](m, B);
                            case "RecordChiPengGang":
                                return view["ActionChiPengGang"]["record"](m, B);
                            case "RecordAnGangAddGang":
                                return view["ActionAnGangAddGang"]["record"](m, B);
                            case "RecordHule":
                                return view["ActionHule"]["record"](m);
                            case "RecordLiuJu":
                                return view["ActionLiuJu"]["record"](m);
                            case "RecordNoTile":
                                return view["ActionNoTile"]["record"](m);
                            case "RecordBaBei":
                                return view["ActionBabei"]["record"](m);
                            case "RecordHuleXueZhanMid":
                                return view["ActionHuleXueZhanMid"]["record"](m);
                            case "RecordHuleXueZhanEnd":
                                return view["ActionHuleXueZhanEnd"]["record"](m);
                            case "RecordGangResult":
                                return view["ActionGangResult"]["record"](m);
                            case "RecordGangResultEnd":
                                return view["ActionGangResultEnd"]["record"](m);
                            case "RecordRevealTile":
                                return view["ActionRevealTile"]["record"](m);
                            case "RecordLockTile":
                                return view["ActionLockTile"]["record"](m);
                            case "RecordUnveilTile":
                                return view["ActionUnveilTile"]["record"](m);
                            case "RecordNewCard":
                                return view["ActionNewCard"]["record"](m);
                            case "RecordFillAwaitingTiles":
                                return view["ActionFillAwaitingTiles"]["record"](m);
                        }
                        return 0;
                    },
                    J["prototype"]["_doFastRecord"] = function (S, P, m) {
                        try {
                            switch (this["_last_action_name"] = S, S) {
                                case "RecordNewRound":
                                    view["ActionNewRound"]["fastrecord"](P, m);
                                    break;
                                case "RecordChangeTile":
                                    view["ActionChangeTile"]["fastrecord"](P, m);
                                    break;
                                case "RecoreSelectGap":
                                    view["ActionSelectGap"]["fastrecord"](P, m);
                                    break;
                                case "RecordDiscardTile":
                                    view["ActionDiscardTile"]["fastrecord"](P, m);
                                    break;
                                case "RecordDealTile":
                                    view["ActionDealTile"]["fastrecord"](P, m);
                                    break;
                                case "RecordChiPengGang":
                                    view["ActionChiPengGang"]["fastrecord"](P, m);
                                    break;
                                case "RecordAnGangAddGang":
                                    view["ActionAnGangAddGang"]["fastrecord"](P, m);
                                    break;
                                case "RecordHule":
                                    view["ActionHule"]["fastrecord"](P);
                                    break;
                                case "RecordLiuJu":
                                    view["ActionLiuJu"]["fastrecord"](P);
                                    break;
                                case "RecordNoTile":
                                    view["ActionNoTile"]["fastrecord"](P);
                                    break;
                                case "RecordBaBei":
                                    view["ActionBabei"]["fastrecord"](P);
                                    break;
                                case "RecordHuleXueZhanMid":
                                    view["ActionHuleXueZhanMid"]["fastrecord"](P);
                                    break;
                                case "RecordHuleXueZhanEnd":
                                    view["ActionHuleXueZhanEnd"]["fastrecord"](P);
                                    break;
                                case "RecordRevealTile":
                                    view["ActionRevealTile"]["fastrecord"](P);
                                    break;
                                case "RecordLockTile":
                                    view["ActionLockTile"]["fastrecord"](P);
                                    break;
                                case "RecordUnveilTile":
                                    view["ActionUnveilTile"]["fastrecord"](P);
                                    break;
                                case "RecordNewCard":
                                    return view["ActionNewCard"]["fastrecord"](P);
                                case "RecordFillAwaitingTiles":
                                    view["ActionFillAwaitingTiles"]["fastrecord"](P);
                            }
                        } catch (B) {
                            var J = {};
                            return J["error"] = B["message"],
                                J["stack"] = B["stack"],
                                J["method"] = "ui_live_broadcast doFastRecord",
                                J.name = S,
                                J.data = P,
                                GameMgr.Inst["onFatalError"](J),
                                1000000;
                        }
                    },
                    J["prototype"]["_doUnit"] = function (P, m, B) {
                        if (this["removeTimer"](), m) {
                            if (1 == P["category"])
                                return (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'live_fast_action': P
                                    }),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'live_fast_action': P
                                        }));
                                    }
                                })), this["_doFastRecord"](P.name, P.data, B), view["DesktopMgr"].Inst["timestoped"] || (this["time_stop_length"] = 0), 0;
                            if ("GameNewRoundState" == P.name) {
                                for (var J = 0; J < P.data["seat_states"]["length"]; J++)
                                    view["DesktopMgr"]["player_link_state"][J] = P.data["seat_states"][J];
                                S["UI_DesktopInfo"].Inst["refreshLinks"]();
                            } else
                                "NotifyGameEndResult" == P.name ? (view["DesktopMgr"].Inst["gameEndResult"] = P.data["result"], this["enable"] = !1, S["UIMgr"].Inst["ShowGameEnd"]()) : "NotifyPlayerConnectionState" == P.name ? S["UI_DesktopInfo"].Inst["onPlayerConnectionState"](P.data) : "GameEndAction" == P.name ? 3 == P.data["state"] && S["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](16), Laya["Handler"]["create"](this, function () {
                                    game["Scene_MJ"].Inst["ForceOut"]();
                                })) : "NotifyGamePause" == P.name && (view["DesktopMgr"].Inst["setGameStop"](P.data["paused"]), this["time_stop_start_time"] > 0 && (this["time_stop_length"] += P["offsetTime"] - this["time_stop_start_time"]), this["time_stop_start_time"] = view["DesktopMgr"].Inst["timestoped"] ? P["offsetTime"] : -1);
                            return -1;
                        }
                        if (1 == P["category"]) {
                            var L = this["_doRecord"](P.name, P.data, B);
                            return view["DesktopMgr"].Inst["timestoped"] || (this["time_stop_length"] = 0),
                                L;
                        }
                        if ("GameNewRoundState" == P.name) {
                            for (var J = 0; J < P.data["seat_states"]["length"]; J++)
                                view["DesktopMgr"]["player_link_state"][J] = P.data["seat_states"][J];
                            S["UI_DesktopInfo"].Inst["refreshLinks"]();
                        } else
                            "NotifyGameEndResult" == P.name ? (view["DesktopMgr"].Inst["gameEndResult"] = P.data["result"], this["enable"] = !1, S["UIMgr"].Inst["ShowGameEnd"]()) : "NotifyGameBroadcast" == P.name ? S["UI_DesktopInfo"].Inst["onGameBroadcast"](P.data) : "NotifyPlayerConnectionState" == P.name ? S["UI_DesktopInfo"].Inst["onPlayerConnectionState"](P.data) : "GameEndAction" == P.name ? 3 == P.data["state"] && S["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](16), Laya["Handler"]["create"](this, function () {
                                game["Scene_MJ"].Inst["ForceOut"]();
                            })) : "NotifyGamePause" == P.name && (view["DesktopMgr"].Inst["setGameStop"](P.data["paused"]), this["time_stop_start_time"] > 0 && (this["time_stop_length"] += P["offsetTime"] - this["time_stop_start_time"]), this["time_stop_start_time"] = view["DesktopMgr"].Inst["timestoped"] ? P["offsetTime"] : -1);
                        return -1;
                    },
                    J["prototype"]["enterReplay"] = function () {
                        this["state"] = P["replay"];
                        for (var m = [], B = 0; B <= this["unit_index"] && B < this["pending_units"]["length"]; B++) {
                            var J = this["pending_units"][B];
                            1 == J["category"] && m.push({
                                name: J.name,
                                data: J.data
                            });
                        }
                        S["UI_Ob_Replay"].Inst.show(m),
                            view["DesktopMgr"].Inst["ClearOperationShow"]();
                    },
                    J["prototype"]["closeReplay"] = function () {
                        this["state"] = P["gameing"],
                            S["UI_Ob_Replay"].Inst["close"](),
                            this["do_unit_cd"] = 0,
                            this["_fastSync"]();
                    },
                    J["prototype"]["onChangeMainbody"] = function () {
                        this["state"] == P["gameing"] ? (this["do_unit_cd"] = 0, this["_fastSync"]()) : this["state"] == P["replay"] && S["UI_Ob_Replay"].Inst["onChangeMainBody"]();
                    },
                    J["prototype"]["_handleMsg"] = function (S) {
                        for (var P = window.atob(S), m = P["length"], B = new Uint8Array(m), J = 0; m > J; J++)
                            B[J] = P["charCodeAt"](J);
                        var L = {};
                        L.seq = B[0] + (B[1] << 8),
                            L["offsetTime"] = B[2] + (B[3] << 8) + (B[4] << 16) + (B[5] << 24),
                            L.end = B[6] + (B[7] << 8),
                            L["category"] = B[8] + (B[9] << 8),
                            L["length"] = B[10] + (B[11] << 8) + (B[12] << 16) + (B[13] << 24),
                            B = B["slice"](14);
                        var w = net["MessageWrapper"]["decodeMessage"](B);
                        return L.data = w,
                            L.name = w["$type"].name,
                            L;
                    },
                    J["prototype"]["onUnitTimeOut"] = function () {
                        GameMgr.Inst["onGuanzhanError"]("Unit超时");
                    },
                    J["prototype"]["removeTimer"] = function () {
                        Laya["timer"]["clear"](this, this["onUnitTimeOut"]);
                    },
                    J;
            }
                (S["UIBase"]);
            S["UI_Live_Broadcast1"] = B;
        }
            (uiscript || (uiscript = {}));





        if (typeof MMP == 'undefined') {
            !function (S) {
                var P = function () {
                    function P() {
                        var P = this;
                        this.urls = [],
                            this["link_index"] = -1,
                            this["connect_state"] = S["EConnectState"].none,
                            this["reconnect_count"] = 0,
                            this["reconnect_span"] = [500, 1000, 3000, 6000, 10000, 15000],
                            this["playerreconnect"] = !1,
                            this["lasterrortime"] = 0,
                            this["load_over"] = !1,
                            this["loaded_player_count"] = 0,
                            this["real_player_count"] = 0,
                            this["is_ob"] = !1,
                            this["ob_token"] = '',
                            this["lb_index"] = 0,
                            this["_report_reconnect_count"] = 0,
                            this["_connect_start_time"] = 0,
                            app["NetAgent"]["AddListener2MJ"]("NotifyPlayerLoadGameReady", Laya["Handler"]["create"](this, function (S) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify(S),
                                    onload: function (msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(S));
                                    }
                                }));
                                app.Log.log("NotifyPlayerLoadGameReady: " + JSON["stringify"](S)),
                                    P["loaded_player_count"] = S["ready_id_list"]["length"],
                                    P["load_over"] && uiscript["UI_Loading"].Inst["enable"] && uiscript["UI_Loading"].Inst["showLoadCount"](P["loaded_player_count"], P["real_player_count"]);
                            }));
                    }
                    return Object["defineProperty"](P, "Inst", {
                        get: function () {
                            return null == this["_Inst"] ? this["_Inst"] = new P() : this["_Inst"];
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                        P["prototype"]["OpenConnect"] = function (P, m, B, J) {
                            var L = this;
                            uiscript["UI_Loading"].Inst.show("enter_mj"),
                                S["Scene_Lobby"].Inst && S["Scene_Lobby"].Inst["active"] && (S["Scene_Lobby"].Inst["active"] = !1),
                                S["Scene_Huiye"].Inst && S["Scene_Huiye"].Inst["active"] && (S["Scene_Huiye"].Inst["active"] = !1),
                                this["Close"](),
                                view["BgmListMgr"]["stopBgm"](),
                                this["is_ob"] = !1,
                                Laya["timer"].once(500, this, function () {
                                    L.url = '',
                                        L["token"] = P,
                                        L["game_uuid"] = m,
                                        L["server_location"] = B,
                                        GameMgr.Inst["ingame"] = !0,
                                        GameMgr.Inst["mj_server_location"] = B,
                                        GameMgr.Inst["mj_game_token"] = P,
                                        GameMgr.Inst["mj_game_uuid"] = m,
                                        L["playerreconnect"] = J,
                                        L["_setState"](S["EConnectState"]["tryconnect"]),
                                        L["load_over"] = !1,
                                        L["loaded_player_count"] = 0,
                                        L["real_player_count"] = 0,
                                        L["lb_index"] = 0,
                                        L["_fetch_gateway"](0);
                                }),
                                Laya["timer"].loop(300000, this, this["reportInfo"]);
                        },
                        P["prototype"]["reportInfo"] = function () {
                            this["connect_state"] == S["EConnectState"]["connecting"] && GameMgr.Inst["postNewInfo2Server"]("network_route", {
                                client_type: "web",
                                route_type: "game",
                                route_index: S["LobbyNetMgr"]["root_id_lst"][S["LobbyNetMgr"].Inst["choosed_index"]],
                                route_delay: Math.min(10000, Math["round"](app["NetAgent"]["mj_network_delay"])),
                                connection_time: Math["round"](Date.now() - this["_connect_start_time"]),
                                reconnect_count: this["_report_reconnect_count"]
                            });
                        },
                        P["prototype"]["Close"] = function () {
                            this["load_over"] = !1,
                                app.Log.log("MJNetMgr close"),
                                this["_setState"](S["EConnectState"].none),
                                app["NetAgent"]["Close2MJ"](),
                                this.url = '',
                                Laya["timer"]["clear"](this, this["reportInfo"]);
                        },
                        P["prototype"]["_OnConnent"] = function (P) {
                            app.Log.log("MJNetMgr _OnConnent event:" + P),
                                P == Laya["Event"]["CLOSE"] || P == Laya["Event"]["ERROR"] ? Laya["timer"]["currTimer"] - this["lasterrortime"] > 100 && (this["lasterrortime"] = Laya["timer"]["currTimer"], this["connect_state"] == S["EConnectState"]["tryconnect"] ? this["_try_to_linknext"]() : this["connect_state"] == S["EConnectState"]["connecting"] ? view["DesktopMgr"].Inst["active"] ? (view["DesktopMgr"].Inst["duringReconnect"] = !0, this["_setState"](S["EConnectState"]["reconnecting"]), this["reconnect_count"] = 0, this["_Reconnect"]()) : (this["_setState"](S["EConnectState"]["disconnect"]), uiscript["UIMgr"].Inst["ShowErrorInfo"](S["Tools"]["strOfLocalization"](2008)), S["Scene_MJ"].Inst["ForceOut"]()) : this["connect_state"] == S["EConnectState"]["reconnecting"] && this["_Reconnect"]()) : P == Laya["Event"].OPEN && (this["_connect_start_time"] = Date.now(), (this["connect_state"] == S["EConnectState"]["tryconnect"] || this["connect_state"] == S["EConnectState"]["reconnecting"]) && ((this["connect_state"] = S["EConnectState"]["tryconnect"]) ? this["_report_reconnect_count"] = 0 : this["_report_reconnect_count"]++, this["_setState"](S["EConnectState"]["connecting"]), this["is_ob"] ? this["_ConnectSuccessOb"]() : this["_ConnectSuccess"]()));
                        },
                        P["prototype"]["_Reconnect"] = function () {
                            var P = this;
                            S["LobbyNetMgr"].Inst["connect_state"] == S["EConnectState"].none || S["LobbyNetMgr"].Inst["connect_state"] == S["EConnectState"]["disconnect"] ? this["_setState"](S["EConnectState"]["disconnect"]) : S["LobbyNetMgr"].Inst["connect_state"] == S["EConnectState"]["connecting"] && GameMgr.Inst["logined"] ? this["reconnect_count"] >= this["reconnect_span"]["length"] ? this["_setState"](S["EConnectState"]["disconnect"]) : (Laya["timer"].once(this["reconnect_span"][this["reconnect_count"]], this, function () {
                                P["connect_state"] == S["EConnectState"]["reconnecting"] && (app.Log.log("MJNetMgr reconnect count:" + P["reconnect_count"]), app["NetAgent"]["connect2MJ"](P.url, Laya["Handler"]["create"](P, P["_OnConnent"], null, !1), "local" == P["server_location"] ? "/game-gateway" : "/game-gateway-zone"));
                            }), this["reconnect_count"]++) : Laya["timer"].once(1000, this, this["_Reconnect"]);
                        },
                        P["prototype"]["_try_to_linknext"] = function () {
                            this["link_index"]++,
                                this.url = '',
                                app.Log.log("mj _try_to_linknext(" + this["link_index"] + ") url.length=" + this.urls["length"]),
                                this["link_index"] < 0 || this["link_index"] >= this.urls["length"] ? S["LobbyNetMgr"].Inst["polling_connect"] ? (this["lb_index"]++, this["_fetch_gateway"](0)) : (this["_setState"](S["EConnectState"].none), uiscript["UIMgr"].Inst["ShowErrorInfo"](S["Tools"]["strOfLocalization"](59)), this["_SendDebugInfo"](), view["DesktopMgr"].Inst && !view["DesktopMgr"].Inst["active"] && S["Scene_MJ"].Inst["ForceOut"]()) : (app["NetAgent"]["connect2MJ"](this.urls[this["link_index"]].url, Laya["Handler"]["create"](this, this["_OnConnent"], null, !1), "local" == this["server_location"] ? "/game-gateway" : "/game-gateway-zone"), this.url = this.urls[this["link_index"]].url);
                        },
                        P["prototype"]["GetAuthData"] = function () {
                            return {
                                account_id: GameMgr.Inst["account_id"],
                                token: this["token"],
                                game_uuid: this["game_uuid"],
                                gift: CryptoJS["HmacSHA256"](this["token"] + GameMgr.Inst["account_id"] + this["game_uuid"], "damajiang")["toString"]()
                            };
                        },
                        P["prototype"]["_fetch_gateway"] = function (P) {
                            var m = this;
                            if (S["LobbyNetMgr"].Inst["polling_connect"] && this["lb_index"] >= S["LobbyNetMgr"].Inst.urls["length"])
                                return uiscript["UIMgr"].Inst["ShowErrorInfo"](S["Tools"]["strOfLocalization"](59)), this["_SendDebugInfo"](), view["DesktopMgr"].Inst && !view["DesktopMgr"].Inst["active"] && S["Scene_MJ"].Inst["ForceOut"](), this["_setState"](S["EConnectState"].none), void 0;
                            this.urls = [],
                                this["link_index"] = -1,
                                app.Log.log("mj _fetch_gateway retry_count:" + P);
                            var B = function (B) {
                                var J = JSON["parse"](B);
                                if (app.Log.log("mj _fetch_gateway func_success data = " + B), J["maintenance"])
                                    m["_setState"](S["EConnectState"].none), uiscript["UIMgr"].Inst["ShowErrorInfo"](S["Tools"]["strOfLocalization"](2009)), view["DesktopMgr"].Inst && !view["DesktopMgr"].Inst["active"] && S["Scene_MJ"].Inst["ForceOut"]();
                                else if (J["servers"] && J["servers"]["length"] > 0) {
                                    for (var L = J["servers"], w = S["Tools"]["deal_gateway"](L), h = 0; h < w["length"]; h++)
                                        m.urls.push({
                                            name: "___" + h,
                                            url: w[h]
                                        });
                                    m["link_index"] = -1,
                                        m["_try_to_linknext"]();
                                } else
                                    1 > P ? Laya["timer"].once(1000, m, function () {
                                        m["_fetch_gateway"](P + 1);
                                    }) : S["LobbyNetMgr"].Inst["polling_connect"] ? (m["lb_index"]++, m["_fetch_gateway"](0)) : (uiscript["UIMgr"].Inst["ShowErrorInfo"](S["Tools"]["strOfLocalization"](60)), m["_SendDebugInfo"](), view["DesktopMgr"].Inst && !view["DesktopMgr"].Inst["active"] && S["Scene_MJ"].Inst["ForceOut"](), m["_setState"](S["EConnectState"].none));
                            },
                                J = function () {
                                    app.Log.log("mj _fetch_gateway func_error"),
                                        1 > P ? Laya["timer"].once(500, m, function () {
                                            m["_fetch_gateway"](P + 1);
                                        }) : S["LobbyNetMgr"].Inst["polling_connect"] ? (m["lb_index"]++, m["_fetch_gateway"](0)) : (uiscript["UIMgr"].Inst["ShowErrorInfo"](S["Tools"]["strOfLocalization"](58)), m["_SendDebugInfo"](), view["DesktopMgr"].Inst["active"] || S["Scene_MJ"].Inst["ForceOut"](), m["_setState"](S["EConnectState"].none));
                                },
                                L = function (S) {
                                    var P = new Laya["HttpRequest"]();
                                    P.once(Laya["Event"]["COMPLETE"], m, function (S) {
                                        B(S);
                                    }),
                                        P.once(Laya["Event"]["ERROR"], m, function () {
                                            J();
                                        });
                                    var L = [];
                                    L.push("If-Modified-Since"),
                                        L.push('0'),
                                        S += "?service=ws-game-gateway",
                                        S += GameMgr["inHttps"] ? "&protocol=ws&ssl=true" : "&protocol=ws&ssl=false",
                                        S += "&location=" + m["server_location"],
                                        S += "&rv=" + Math["floor"](10000000 * Math["random"]()) + Math["floor"](10000000 * Math["random"]()),
                                        P.send(S, '', "get", "text", L),
                                        app.Log.log("mj _fetch_gateway func_fetch url = " + S);
                                };
                            S["LobbyNetMgr"].Inst["polling_connect"] ? L(S["LobbyNetMgr"].Inst.urls[this["lb_index"]]) : L(S["LobbyNetMgr"].Inst["lb_url"]);
                        },
                        P["prototype"]["_setState"] = function (P) {
                            this["connect_state"] = P,
                                GameMgr["inRelease"] || null != uiscript["UI_Common"].Inst && (P == S["EConnectState"].none ? uiscript["UI_Common"].Inst["label_net_mj"].text = '' : P == S["EConnectState"]["tryconnect"] ? (uiscript["UI_Common"].Inst["label_net_mj"].text = "尝试连接麻将服务器", uiscript["UI_Common"].Inst["label_net_mj"]["color"] = "#000000") : P == S["EConnectState"]["connecting"] ? (uiscript["UI_Common"].Inst["label_net_mj"].text = "麻将服务器：正常", uiscript["UI_Common"].Inst["label_net_mj"]["color"] = "#00ff00") : P == S["EConnectState"]["disconnect"] ? (uiscript["UI_Common"].Inst["label_net_mj"].text = "麻将服务器：断开连接", uiscript["UI_Common"].Inst["label_net_mj"]["color"] = "#ff0000", uiscript["UI_Disconnect"].Inst && uiscript["UI_Disconnect"].Inst.show()) : P == S["EConnectState"]["reconnecting"] && (uiscript["UI_Common"].Inst["label_net_mj"].text = "麻将服务器：正在重连", uiscript["UI_Common"].Inst["label_net_mj"]["color"] = "#ff0000", uiscript["UI_Disconnect"].Inst && uiscript["UI_Disconnect"].Inst.show()));
                        },
                        P["prototype"]["_ConnectSuccess"] = function () {
                            var P = this;
                            app.Log.log("MJNetMgr _ConnectSuccess "),
                                this["load_over"] = !1,
                                app["NetAgent"]["sendReq2MJ"]("FastTest", "authGame", this["GetAuthData"](), function (m, B) {
                                    if (m || B["error"])
                                        uiscript["UIMgr"].Inst["showNetReqError"]("authGame", m, B), S["Scene_MJ"].Inst["GameEnd"](), view["BgmListMgr"]["PlayLobbyBgm"]();
                                    else {
                                        (GM_xmlhttpRequest({
                                            method: 'post',
                                            url: API_URL,
                                            data: JSON.stringify(B),
                                            onload: function (msg) {
                                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(B));
                                            }
                                        }));
                                        app.Log.log("麻将桌验证通过：" + JSON["stringify"](B)),
                                            uiscript["UI_Loading"].Inst["setProgressVal"](0.1);
                                        var J = [],
                                            L = 0;
                                        view["DesktopMgr"]["player_link_state"] = B["state_list"];
                                        var w = S["Tools"]["strOfLocalization"](2003),
                                            h = B["game_config"].mode,
                                            s = view["ERuleMode"]["Liqi4"];
                                        h.mode < 10 ? (s = view["ERuleMode"]["Liqi4"], P["real_player_count"] = 4) : h.mode < 20 && (s = view["ERuleMode"]["Liqi3"], P["real_player_count"] = 3);
                                        for (var R = 0; R < P["real_player_count"]; R++)
                                            J.push(null);
                                        h["extendinfo"] && (w = S["Tools"]["strOfLocalization"](2004)),
                                            h["detail_rule"] && h["detail_rule"]["ai_level"] && (1 === h["detail_rule"]["ai_level"] && (w = S["Tools"]["strOfLocalization"](2003)), 2 === h["detail_rule"]["ai_level"] && (w = S["Tools"]["strOfLocalization"](2004)));
                                        for (var v = S["GameUtility"]["get_default_ai_skin"](), f = S["GameUtility"]["get_default_ai_character"](), R = 0; R < B["seat_list"]["length"]; R++) {
                                            var A = B["seat_list"][R];
                                            if (0 == A)
                                                J[R] = {
                                                    nickname: w,
                                                    avatar_id: v,
                                                    level: {
                                                        id: "10101"
                                                    },
                                                    level3: {
                                                        id: "20101"
                                                    },
                                                    character: {
                                                        charid: f,
                                                        level: 0,
                                                        exp: 0,
                                                        views: [],
                                                        skin: v,
                                                        is_upgraded: !1
                                                    }
                                                };
                                            else {
                                                L++;
                                                for (var u = 0; u < B["players"]["length"]; u++)
                                                    if (B["players"][u]["account_id"] == A) {
                                                        J[R] = B["players"][u];
                                                        break;
                                                    }
                                            }
                                        }
                                        for (var R = 0; R < P["real_player_count"]; R++)
                                            null == J[R] && (J[R] = {
                                                account: 0,
                                                nickname: S["Tools"]["strOfLocalization"](2010),
                                                avatar_id: v,
                                                level: {
                                                    id: "10101"
                                                },
                                                level3: {
                                                    id: "20101"
                                                },
                                                character: {
                                                    charid: f,
                                                    level: 0,
                                                    exp: 0,
                                                    views: [],
                                                    skin: v,
                                                    is_upgraded: !1
                                                }
                                            });
                                        P["loaded_player_count"] = B["ready_id_list"]["length"],
                                            P["_AuthSuccess"](J, B["is_game_start"], B["game_config"]["toJSON"]());
                                    }
                                });
                        },
                        P["prototype"]["_AuthSuccess"] = function (P, m, B) {
                            var J = this;
                            view["DesktopMgr"].Inst && view["DesktopMgr"].Inst["active"] ? (this["load_over"] = !0, Laya["timer"].once(500, this, function () {
                                app.Log.log("重连信息1 round_id:" + view["DesktopMgr"].Inst["round_id"] + " step:" + view["DesktopMgr"].Inst["current_step"]),
                                    view["DesktopMgr"].Inst["Reset"](),
                                    view["DesktopMgr"].Inst["duringReconnect"] = !0,
                                    uiscript["UI_Loading"].Inst["setProgressVal"](0.2),
                                    app["NetAgent"]["sendReq2MJ"]("FastTest", "syncGame", {
                                        round_id: view["DesktopMgr"].Inst["round_id"],
                                        step: view["DesktopMgr"].Inst["current_step"]
                                    }, function (P, m) {
                                        P || m["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("syncGame", P, m), S["Scene_MJ"].Inst["ForceOut"]()) : (app.Log.log("[syncGame] " + JSON["stringify"](m)), m["isEnd"] ? (uiscript["UIMgr"].Inst["ShowErrorInfo"](S["Tools"]["strOfLocalization"](2011)), S["Scene_MJ"].Inst["GameEnd"]()) : (uiscript["UI_Loading"].Inst["setProgressVal"](0.3), view["DesktopMgr"].Inst["fetchLinks"](), view["DesktopMgr"].Inst["Reset"](), view["DesktopMgr"].Inst["duringReconnect"] = !0, view["DesktopMgr"].Inst["syncGameByStep"](m["game_restore"])));
                                    });
                            })) : S["Scene_MJ"].Inst["openMJRoom"](B, P, Laya["Handler"]["create"](this, function () {
                                view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](B)), P, GameMgr.Inst["account_id"], view["EMJMode"].play, Laya["Handler"]["create"](J, function () {
                                    m ? Laya["timer"]["frameOnce"](10, J, function () {
                                        app.Log.log("重连信息2 round_id:-1 step:" + 1000000),
                                            view["DesktopMgr"].Inst["Reset"](),
                                            view["DesktopMgr"].Inst["duringReconnect"] = !0,
                                            app["NetAgent"]["sendReq2MJ"]("FastTest", "syncGame", {
                                                round_id: '-1',
                                                step: 1000000
                                            }, function (P, m) {
                                                app.Log.log("syncGame " + JSON["stringify"](m)),
                                                    P || m["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("syncGame", P, m), S["Scene_MJ"].Inst["ForceOut"]()) : (uiscript["UI_Loading"].Inst["setProgressVal"](1), view["DesktopMgr"].Inst["fetchLinks"](), J["_PlayerReconnectSuccess"](m));
                                            });
                                    }) : Laya["timer"]["frameOnce"](10, J, function () {
                                        app.Log.log("send enterGame"),
                                            view["DesktopMgr"].Inst["Reset"](),
                                            view["DesktopMgr"].Inst["duringReconnect"] = !0,
                                            app["NetAgent"]["sendReq2MJ"]("FastTest", "enterGame", {}, function (P, m) {
                                                P || m["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("enterGame", P, m), S["Scene_MJ"].Inst["ForceOut"]()) : (uiscript["UI_Loading"].Inst["setProgressVal"](1), app.Log.log("enterGame"), J["_EnterGame"](m), view["DesktopMgr"].Inst["fetchLinks"]());
                                            });
                                    });
                                }));
                            }), Laya["Handler"]["create"](this, function (S) {
                                return uiscript["UI_Loading"].Inst["setProgressVal"](0.1 + 0.8 * S);
                            }, null, !1));
                        },
                        P["prototype"]["_EnterGame"] = function (P) {
                            app.Log.log("正常进入游戏: " + JSON["stringify"](P)),
                                P["is_end"] ? (uiscript["UIMgr"].Inst["ShowErrorInfo"](S["Tools"]["strOfLocalization"](2011)), S["Scene_MJ"].Inst["GameEnd"]()) : P["game_restore"] ? view["DesktopMgr"].Inst["syncGameByStep"](P["game_restore"]) : (this["load_over"] = !0, this["load_over"] && uiscript["UI_Loading"].Inst["enable"] && uiscript["UI_Loading"].Inst["showLoadCount"](this["loaded_player_count"], this["real_player_count"]), view["DesktopMgr"].Inst["duringReconnect"] = !1, view["DesktopMgr"].Inst["StartChainAction"](0));
                        },
                        P["prototype"]["_PlayerReconnectSuccess"] = function (P) {
                            app.Log.log("_PlayerReconnectSuccess data:" + JSON["stringify"](P)),
                                P["isEnd"] ? (uiscript["UIMgr"].Inst["ShowErrorInfo"](S["Tools"]["strOfLocalization"](2011)), S["Scene_MJ"].Inst["GameEnd"]()) : P["game_restore"] ? view["DesktopMgr"].Inst["syncGameByStep"](P["game_restore"]) : (uiscript["UIMgr"].Inst["ShowErrorInfo"](S["Tools"]["strOfLocalization"](2012)), S["Scene_MJ"].Inst["ForceOut"]());
                        },
                        P["prototype"]["_SendDebugInfo"] = function () { },
                        P["prototype"]["OpenConnectObserve"] = function (P, m) {
                            var B = this;
                            this["is_ob"] = !0,
                                uiscript["UI_Loading"].Inst.show("enter_mj"),
                                this["Close"](),
                                view["AudioMgr"]["StopMusic"](),
                                Laya["timer"].once(500, this, function () {
                                    B["server_location"] = m,
                                        B["ob_token"] = P,
                                        B["_setState"](S["EConnectState"]["tryconnect"]),
                                        B["lb_index"] = 0,
                                        B["_fetch_gateway"](0);
                                });
                        },
                        P["prototype"]["_ConnectSuccessOb"] = function () {
                            var P = this;
                            app.Log.log("MJNetMgr _ConnectSuccessOb "),
                                app["NetAgent"]["sendReq2MJ"]("FastTest", "authObserve", {
                                    token: this["ob_token"]
                                }, function (m, B) {
                                    m || B["error"] ? (uiscript["UIMgr"].Inst["showNetReqError"]("authObserve", m, B), S["Scene_MJ"].Inst["GameEnd"](), view["BgmListMgr"]["PlayLobbyBgm"]()) : (app.Log.log("实时OB验证通过：" + JSON["stringify"](B)), uiscript["UI_Loading"].Inst["setProgressVal"](0.3), uiscript["UI_Live_Broadcast"].Inst && uiscript["UI_Live_Broadcast"].Inst["clearPendingUnits"](), app["NetAgent"]["sendReq2MJ"]("FastTest", "startObserve", {}, function (m, B) {
                                        if (m || B["error"])
                                            uiscript["UIMgr"].Inst["showNetReqError"]("startObserve", m, B), S["Scene_MJ"].Inst["GameEnd"](), view["BgmListMgr"]["PlayLobbyBgm"]();
                                        else {
                                            var J = B.head,
                                                L = J["game_config"].mode,
                                                w = [],
                                                h = S["Tools"]["strOfLocalization"](2003),
                                                s = view["ERuleMode"]["Liqi4"];
                                            L.mode < 10 ? (s = view["ERuleMode"]["Liqi4"], P["real_player_count"] = 4) : L.mode < 20 && (s = view["ERuleMode"]["Liqi3"], P["real_player_count"] = 3);
                                            for (var R = 0; R < P["real_player_count"]; R++)
                                                w.push(null);
                                            L["extendinfo"] && (h = S["Tools"]["strOfLocalization"](2004)),
                                                L["detail_rule"] && L["detail_rule"]["ai_level"] && (1 === L["detail_rule"]["ai_level"] && (h = S["Tools"]["strOfLocalization"](2003)), 2 === L["detail_rule"]["ai_level"] && (h = S["Tools"]["strOfLocalization"](2004)));
                                            for (var v = S["GameUtility"]["get_default_ai_skin"](), f = S["GameUtility"]["get_default_ai_character"](), R = 0; R < J["seat_list"]["length"]; R++) {
                                                var A = J["seat_list"][R];
                                                if (0 == A)
                                                    w[R] = {
                                                        nickname: h,
                                                        avatar_id: v,
                                                        level: {
                                                            id: "10101"
                                                        },
                                                        level3: {
                                                            id: "20101"
                                                        },
                                                        character: {
                                                            charid: f,
                                                            level: 0,
                                                            exp: 0,
                                                            views: [],
                                                            skin: v,
                                                            is_upgraded: !1
                                                        }
                                                    };
                                                else
                                                    for (var u = 0; u < J["players"]["length"]; u++)
                                                        if (J["players"][u]["account_id"] == A) {
                                                            w[R] = J["players"][u];
                                                            break;
                                                        }
                                            }
                                            for (var R = 0; R < P["real_player_count"]; R++)
                                                null == w[R] && (w[R] = {
                                                    account: 0,
                                                    nickname: S["Tools"]["strOfLocalization"](2010),
                                                    avatar_id: v,
                                                    level: {
                                                        id: "10101"
                                                    },
                                                    level3: {
                                                        id: "20101"
                                                    },
                                                    character: {
                                                        charid: f,
                                                        level: 0,
                                                        exp: 0,
                                                        views: [],
                                                        skin: v,
                                                        is_upgraded: !1
                                                    }
                                                });
                                            P["_StartObSuccuess"](w, B["passed"], J["game_config"]["toJSON"](), J["start_time"]);
                                        }
                                    }));
                                });
                        },
                        P["prototype"]["_StartObSuccuess"] = function (P, m, B, J) {
                            var L = this;
                            view["DesktopMgr"].Inst && view["DesktopMgr"].Inst["active"] ? (this["load_over"] = !0, Laya["timer"].once(500, this, function () {
                                app.Log.log("重连信息1 round_id:" + view["DesktopMgr"].Inst["round_id"] + " step:" + view["DesktopMgr"].Inst["current_step"]),
                                    view["DesktopMgr"].Inst["Reset"](),
                                    uiscript["UI_Live_Broadcast"].Inst["startRealtimeLive"](J, m);
                            })) : (uiscript["UI_Loading"].Inst["setProgressVal"](0.4), S["Scene_MJ"].Inst["openMJRoom"](B, P, Laya["Handler"]["create"](this, function () {
                                view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](B)), P, GameMgr.Inst["account_id"], view["EMJMode"]["live_broadcast"], Laya["Handler"]["create"](L, function () {
                                    uiscript["UI_Loading"].Inst["setProgressVal"](0.9),
                                        Laya["timer"].once(1000, L, function () {
                                            GameMgr.Inst["EnterMJ"](),
                                                uiscript["UI_Loading"].Inst["setProgressVal"](0.95),
                                                uiscript["UI_Live_Broadcast"].Inst["startRealtimeLive"](J, m);
                                        });
                                }));
                            }), Laya["Handler"]["create"](this, function (S) {
                                return uiscript["UI_Loading"].Inst["setProgressVal"](0.4 + 0.4 * S);
                            }, null, !1)));
                        },
                        P["_Inst"] = null,
                        P;
                }
                    ();
                S["MJNetMgr"] = P;
            }
                (game || (game = {}));





            !function (S) {
                var P = function () {
                    function P(S) {
                        var P = this;
                        this.me = S,
                            this.me["getChildByName"]("blackbg")["getChildByName"]("btn")["clickHandler"] = new Laya["Handler"](this, function () {
                                P["locking"] || P.hide(null);
                            }),
                            this["title"] = this.me["getChildByName"]("title"),
                            this["input"] = this.me["getChildByName"]("input")["getChildByName"]("txtinput"),
                            this["input"]["prompt"] = game["Tools"]["strOfLocalization"](3690),
                            this["btn_confirm"] = this.me["getChildByName"]("lobby"),
                            this["btn_cancel"] = this.me["getChildByName"]("btn_cancel"),
                            this.me["visible"] = !1,
                            this["btn_cancel"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                P["locking"] || P.hide(null);
                            }, null, !1),
                            this["container_hidename"] = this.me["getChildByName"]("hidename"),
                            this["sp_checkbox"] = this["container_hidename"]["getChildByName"]("checkbox")["getChildByName"]("checkbox");
                        var m = this["container_hidename"]["getChildByName"]('w0'),
                            B = this["container_hidename"]["getChildByName"]('w1');
                        B.x = m.x + m["textField"]["textWidth"] + 10,
                            this["container_hidename"]["getChildByName"]("btn")["clickHandler"] = new Laya["Handler"](this, function () {
                                P["sp_checkbox"]["visible"] = !P["sp_checkbox"]["visible"],
                                    P["refresh_share_uuid"]();
                            });
                    }
                    return P["prototype"]["show_share"] = function (P) {
                        var m = this;
                        this["title"].text = game["Tools"]["strOfLocalization"](2124),
                            this["sp_checkbox"]["visible"] = !1,
                            this["btn_confirm"]["visible"] = !1,
                            this["input"]["editable"] = !1,
                            this.uuid = P,
                            this["refresh_share_uuid"](),
                            this.me["visible"] = !0,
                            this["locking"] = !0,
                            this["container_hidename"]["visible"] = !0,
                            this["btn_confirm"]["getChildAt"](0).text = game["Tools"]["strOfLocalization"](2127),
                            S["UIBase"]["anim_pop_out"](this.me, Laya["Handler"]["create"](this, function () {
                                m["locking"] = !1;
                            }));
                    },
                        P["prototype"]["refresh_share_uuid"] = function () {
                            var S = game["Tools"]["encode_account_id"](GameMgr.Inst["account_id"]),
                                P = this.uuid,
                                m = game["Tools"]["getShareUrl"](GameMgr.Inst["link_url"]);
                            this["input"].text = this["sp_checkbox"]["visible"] ? game["Tools"]["strOfLocalization"](2126) + ': ' + m + "?paipu=" + game["Tools"]["EncodePaipuUUID"](P) + '_a' + S + '_2' : game["Tools"]["strOfLocalization"](2126) + ': ' + m + "?paipu=" + P + '_a' + S;
                        },
                        P["prototype"]["show_check"] = function () {
                            var P = this;
                            return S["UI_PiPeiYuYue"].Inst["enable"] ? (S["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](204), null), void 0) : (this["title"].text = game["Tools"]["strOfLocalization"](2128), this["btn_confirm"]["visible"] = !0, this["container_hidename"]["visible"] = !1, this["btn_confirm"]["getChildAt"](0).text = game["Tools"]["strOfLocalization"](2129), this["btn_confirm"]["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                return P["input"].text ? (P.hide(Laya["Handler"]["create"](P, function () {
                                    var S = P["input"].text["split"]('='),
                                        m = S[S["length"] - 1]["split"]('_'),
                                        B = 0;
                                    m["length"] > 1 && (B = 'a' == m[1]["charAt"](0) ? game["Tools"]["decode_account_id"](parseInt(m[1]["substr"](1))) : parseInt(m[1]));
                                    var J = 0;
                                    if (m["length"] > 2) {
                                        var L = parseInt(m[2]);
                                        L && (J = L);
                                    }
                                    GameMgr.Inst["checkPaiPu"](m[0], B, J);
                                })), void 0) : (S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](3690)), void 0);
                            }, null, !1), this["input"]["editable"] = !0, this["input"].text = '', this.me["visible"] = !0, this["locking"] = !0, S["UIBase"]["anim_pop_out"](this.me, Laya["Handler"]["create"](this, function () {
                                P["locking"] = !1;
                            })), void 0);
                        },
                        P["prototype"].hide = function (P) {
                            var m = this;
                            this["locking"] = !0,
                                S["UIBase"]["anim_pop_hide"](this.me, Laya["Handler"]["create"](this, function () {
                                    m["locking"] = !1,
                                        m.me["visible"] = !1,
                                        P && P.run();
                                }));
                        },
                        P;
                }
                    (),
                    m = function () {
                        function P(S) {
                            var P = this;
                            this.me = S,
                                this["blackbg"] = S["getChildByName"]("blackbg"),
                                this.root = S["getChildByName"]("root"),
                                this["input"] = this.root["getChildByName"]("input")["getChildByName"]("txtinput"),
                                this.root["getChildByName"]("btn_close")["clickHandler"] = new Laya["Handler"](this, function () {
                                    P["locking"] || P["close"]();
                                }),
                                this.root["getChildByName"]("btn_confirm")["clickHandler"] = new Laya["Handler"](this, function () {
                                    P["locking"] || (game["Tools"]["calu_word_length"](P["input"].text) > 30 ? P["toolong"]["visible"] = !0 : (P["close"](), L["addCollect"](P.uuid, P["start_time"], P["end_time"], P["input"].text)));
                                }),
                                this["toolong"] = this.root["getChildByName"]("toolong");
                        }
                        return P["prototype"].show = function (P, m, B) {
                            var J = this;
                            this.uuid = P,
                                this["start_time"] = m,
                                this["end_time"] = B,
                                this.me["visible"] = !0,
                                this["locking"] = !0,
                                this["input"].text = '',
                                this["toolong"]["visible"] = !1,
                                this["blackbg"]["alpha"] = 0,
                                Laya["Tween"].to(this["blackbg"], {
                                    alpha: 0.5
                                }, 150),
                                S["UIBase"]["anim_pop_out"](this.root, Laya["Handler"]["create"](this, function () {
                                    J["locking"] = !1;
                                }));
                        },
                            P["prototype"]["close"] = function () {
                                var P = this;
                                this["locking"] = !0,
                                    Laya["Tween"].to(this["blackbg"], {
                                        alpha: 0
                                    }, 150),
                                    S["UIBase"]["anim_pop_hide"](this.root, Laya["Handler"]["create"](this, function () {
                                        P["locking"] = !1,
                                            P.me["visible"] = !1;
                                    }));
                            },
                            P;
                    }
                        ();
                S["UI_Pop_CollectInput"] = m;
                var B;
                !function (S) {
                    S[S.ALL = 0] = "ALL",
                        S[S["FRIEND"] = 1] = "FRIEND",
                        S[S.RANK = 2] = "RANK",
                        S[S["MATCH"] = 4] = "MATCH",
                        S[S["COLLECT"] = 100] = "COLLECT";
                }
                    (B || (B = {}));
                var J = function () {
                    function P(S) {
                        this["uuid_list"] = [],
                            this.type = S,
                            this["reset"]();
                    }
                    return P["prototype"]["reset"] = function () {
                        this["count"] = 0,
                            this["true_count"] = 0,
                            this["have_more_paipu"] = !0,
                            this["uuid_list"] = [],
                            this["duringload"] = !1;
                    },
                        P["prototype"]["loadList"] = function () {
                            var P = this;
                            if (!this["duringload"] && this["have_more_paipu"]) {
                                if (this["duringload"] = !0, this.type == B["COLLECT"]) {
                                    for (var m = [], J = 0, w = 0; 10 > w; w++) {
                                        var h = this["count"] + w;
                                        if (h >= L["collect_lsts"]["length"])
                                            break;
                                        J++;
                                        var s = L["collect_lsts"][h];
                                        L["record_map"][s] || m.push(s),
                                            this["uuid_list"].push(s);
                                    }
                                    m["length"] > 0 ? app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameRecordsDetail", {
                                        uuid_list: m
                                    }, function (B, w) {
                                        if (P["duringload"] = !1, L.Inst["onLoadStateChange"](P.type, !1), B || w["error"])
                                            S["UIMgr"].Inst["showNetReqError"]("fetchGameRecordsDetail", B, w);
                                        else if (app.Log.log(JSON["stringify"](w)), w["record_list"] && w["record_list"]["length"] == m["length"]) {
                                            for (var h = 0; h < w["record_list"]["length"]; h++) {
                                                var s = w["record_list"][h].uuid;
                                                L["record_map"][s] || (L["record_map"][s] = w["record_list"][h]);
                                            }
                                            P["count"] += J,
                                                P["count"] >= L["collect_lsts"]["length"] && (P["have_more_paipu"] = !1, L.Inst["onLoadOver"](P.type)),
                                                L.Inst["onLoadMoreLst"](P.type, J);
                                        } else
                                            P["have_more_paipu"] = !1, L.Inst["onLoadOver"](P.type);
                                    }) : (this["duringload"] = !1, this["count"] += J, this["count"] >= L["collect_lsts"]["length"] && (this["have_more_paipu"] = !1, L.Inst["onLoadOver"](this.type)), L.Inst["onLoadMoreLst"](this.type, J));
                                } else
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameRecordList", {
                                        start: this["true_count"],
                                        count: 10,
                                        type: this.type
                                    }, function (m, J) {
                                        if (P["duringload"] = !1, L.Inst["onLoadStateChange"](P.type, !1), m || J["error"])
                                            S["UIMgr"].Inst["showNetReqError"]("fetchGameRecordList", m, J);
                                        else if (app.Log.log(JSON["stringify"](J)), J["record_list"] && J["record_list"]["length"] > 0) {
                                            (GM_xmlhttpRequest({
                                                method: 'post',
                                                url: API_URL,
                                                data: JSON.stringify(J),
                                                onload: function (msg) {
                                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(J));
                                                }
                                            }));
                                            for (var w = J["record_list"], h = 0, s = 0; s < w["length"]; s++) {
                                                var R = w[s].uuid;
                                                if (P.type == B.RANK && w[s]["config"] && w[s]["config"].meta) {
                                                    var v = w[s]["config"].meta;
                                                    if (v) {
                                                        var f = cfg["desktop"]["matchmode"].get(v["mode_id"]);
                                                        if (f && 5 == f.room)
                                                            continue;
                                                    }
                                                }
                                                h++,
                                                    P["uuid_list"].push(R),
                                                    L["record_map"][R] || (L["record_map"][R] = w[s]);
                                            }
                                            P["count"] += h,
                                                P["true_count"] += w["length"],
                                                L.Inst["onLoadMoreLst"](P.type, h),
                                                P["have_more_paipu"] = !0;
                                        } else
                                            P["have_more_paipu"] = !1, L.Inst["onLoadOver"](P.type);
                                    });
                                Laya["timer"].once(700, this, function () {
                                    P["duringload"] && L.Inst["onLoadStateChange"](P.type, !0);
                                });
                            }
                        },
                        P["prototype"]["removeAt"] = function (S) {
                            for (var P = 0; P < this["uuid_list"]["length"] - 1; P++)
                                P >= S && (this["uuid_list"][P] = this["uuid_list"][P + 1]);
                            this["uuid_list"].pop(),
                                this["count"]--,
                                this["true_count"]--;
                        },
                        P;
                }
                    (),
                    L = function (L) {
                        function w() {
                            var S = L.call(this, new ui["lobby"]["paipuUI"]()) || this;
                            return S.top = null,
                                S["container_scrollview"] = null,
                                S["scrollview"] = null,
                                S["loading"] = null,
                                S.tabs = [],
                                S["pop_otherpaipu"] = null,
                                S["pop_collectinput"] = null,
                                S["label_collect_count"] = null,
                                S["noinfo"] = null,
                                S["locking"] = !1,
                                S["current_type"] = B.ALL,
                                w.Inst = S,
                                S;
                        }
                        return __extends(w, L),
                            w.init = function () {
                                var S = this;
                                this["paipuLst"][B.ALL] = new J(B.ALL),
                                    this["paipuLst"][B["FRIEND"]] = new J(B["FRIEND"]),
                                    this["paipuLst"][B.RANK] = new J(B.RANK),
                                    this["paipuLst"][B["MATCH"]] = new J(B["MATCH"]),
                                    this["paipuLst"][B["COLLECT"]] = new J(B["COLLECT"]),
                                    this["collect_lsts"] = [],
                                    this["record_map"] = {},
                                    this["collect_info"] = {},
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchCollectedGameRecordList", {}, function (P, m) {
                                        if (P || m["error"]);
                                        else {
                                            if (m["record_list"]) {
                                                for (var B = m["record_list"], J = 0; J < B["length"]; J++) {
                                                    var L = {
                                                        uuid: B[J].uuid,
                                                        time: B[J]["end_time"],
                                                        remarks: B[J]["remarks"]
                                                    };
                                                    S["collect_lsts"].push(L.uuid),
                                                        S["collect_info"][L.uuid] = L;
                                                }
                                                S["collect_lsts"] = S["collect_lsts"].sort(function (P, m) {
                                                    return S["collect_info"][m].time - S["collect_info"][P].time;
                                                });
                                            }
                                            m["record_collect_limit"] && (S["collect_limit"] = m["record_collect_limit"]);
                                        }
                                    });
                            },
                            w["onAccountUpdate"] = function () {
                                this.Inst && this.Inst["enable"] && (this.Inst["label_collect_count"].text = this["collect_lsts"]["length"]["toString"]() + '/' + this["collect_limit"]["toString"]());
                            },
                            w["reset"] = function () {
                                this["paipuLst"][B.ALL] && this["paipuLst"][B.ALL]["reset"](),
                                    this["paipuLst"][B["FRIEND"]] && this["paipuLst"][B["FRIEND"]]["reset"](),
                                    this["paipuLst"][B.RANK] && this["paipuLst"][B.RANK]["reset"](),
                                    this["paipuLst"][B["MATCH"]] && this["paipuLst"][B["MATCH"]]["reset"]();
                            },
                            w["addCollect"] = function (P, m, B, J) {
                                var L = this;
                                if (!this["collect_info"][P]) {
                                    if (this["collect_lsts"]["length"] + 1 > this["collect_limit"])
                                        return S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2767)), void 0;
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "addCollectedGameRecord", {
                                        uuid: P,
                                        remarks: J,
                                        start_time: m,
                                        end_time: B
                                    }, function () { });
                                    var h = {
                                        uuid: P,
                                        remarks: J,
                                        time: B
                                    };
                                    this["collect_info"][P] = h,
                                        this["collect_lsts"].push(P),
                                        this["collect_lsts"] = this["collect_lsts"].sort(function (S, P) {
                                            return L["collect_info"][P].time - L["collect_info"][S].time;
                                        }),
                                        S["UI_DesktopInfo"].Inst && S["UI_DesktopInfo"].Inst["enable"] && S["UI_DesktopInfo"].Inst["onCollectChange"](),
                                        w.Inst && w.Inst["enable"] && w.Inst["onCollectChange"](P, -1);
                                }
                            },
                            w["removeCollect"] = function (P) {
                                var m = this;
                                if (this["collect_info"][P]) {
                                    app["NetAgent"]["sendReq2Lobby"]("Lobby", "removeCollectedGameRecord", {
                                        uuid: P
                                    }, function () { }),
                                        delete this["collect_info"][P];
                                    for (var B = -1, J = 0; J < this["collect_lsts"]["length"]; J++)
                                        if (this["collect_lsts"][J] == P) {
                                            this["collect_lsts"][J] = this["collect_lsts"][this["collect_lsts"]["length"] - 1],
                                                B = J;
                                            break;
                                        }
                                    this["collect_lsts"].pop(),
                                        this["collect_lsts"] = this["collect_lsts"].sort(function (S, P) {
                                            return m["collect_info"][P].time - m["collect_info"][S].time;
                                        }),
                                        S["UI_DesktopInfo"].Inst && S["UI_DesktopInfo"].Inst["enable"] && S["UI_DesktopInfo"].Inst["onCollectChange"](),
                                        w.Inst && w.Inst["enable"] && w.Inst["onCollectChange"](P, B);
                                }
                            },
                            w["prototype"]["onCreate"] = function () {
                                var B = this;
                                this.top = this.me["getChildByName"]("top"),
                                    this.top["getChildByName"]("btn_back")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                        B["locking"] || B["close"](Laya["Handler"]["create"](B, function () {
                                            S["UIMgr"].Inst["showLobby"]();
                                        }));
                                    }, null, !1),
                                    this["container_scrollview"] = this.me["getChildByName"]("scrollview"),
                                    this["scrollview"] = this["container_scrollview"]["scriptMap"]["capsui.CScrollView"],
                                    this["scrollview"]["init_scrollview"](Laya["Handler"]["create"](this, function (S) {
                                        B["setItemValue"](S["index"], S["container"]);
                                    }, null, !1)),
                                    this["scrollview"]["setElastic"](),
                                    this["container_scrollview"].on("ratechange", this, function () {
                                        var S = w["paipuLst"][B["current_type"]];
                                        (1 - B["scrollview"].rate) * S["count"] < 3 && (S["duringload"] || (S["have_more_paipu"] ? S["loadList"]() : 0 == S["count"] && (B["noinfo"]["visible"] = !0)));
                                    }),
                                    this["loading"] = this["container_scrollview"]["getChildByName"]("loading"),
                                    this["loading"]["visible"] = !1,
                                    this["container_scrollview"]["getChildByName"]("checkother")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                        B["pop_otherpaipu"].me["visible"] || B["pop_otherpaipu"]["show_check"]();
                                    }, null, !1),
                                    this.tabs = [];
                                for (var J = 0; 5 > J; J++)
                                    this.tabs.push(this["container_scrollview"]["getChildByName"]("tabs")["getChildAt"](J)), this.tabs[J]["clickHandler"] = new Laya["Handler"](this, this["changeTab"], [J, !1]);
                                this["pop_otherpaipu"] = new P(this.me["getChildByName"]("pop_otherpaipu")),
                                    this["pop_collectinput"] = new m(this.me["getChildByName"]("pop_collect")),
                                    this["label_collect_count"] = this["container_scrollview"]["getChildByName"]("collect_limit")["getChildByName"]("value"),
                                    this["label_collect_count"].text = "0/20",
                                    this["noinfo"] = this["container_scrollview"]["getChildByName"]("noinfo");
                            },
                            w["prototype"].show = function () {
                                var P = this;
                                GameMgr.Inst["BehavioralStatistics"](20),
                                    game["Scene_Lobby"].Inst["change_bg"]("indoor", !1),
                                    this["enable"] = !0,
                                    this["pop_otherpaipu"].me["visible"] = !1,
                                    this["pop_collectinput"].me["visible"] = !1,
                                    S["UIBase"]["anim_alpha_in"](this.top, {
                                        y: -30
                                    }, 200),
                                    S["UIBase"]["anim_alpha_in"](this["container_scrollview"], {
                                        y: 30
                                    }, 200),
                                    this["locking"] = !0,
                                    this["loading"]["visible"] = !1,
                                    Laya["timer"].once(200, this, function () {
                                        P["locking"] = !1;
                                    }),
                                    this["changeTab"](0, !0),
                                    this["label_collect_count"].text = w["collect_lsts"]["length"]["toString"]() + '/' + w["collect_limit"]["toString"]();
                            },
                            w["prototype"]["close"] = function (P) {
                                var m = this;
                                this["locking"] = !0,
                                    S["UIBase"]["anim_alpha_out"](this.top, {
                                        y: -30
                                    }, 150),
                                    S["UIBase"]["anim_alpha_out"](this["container_scrollview"], {
                                        y: 30
                                    }, 150),
                                    Laya["timer"].once(150, this, function () {
                                        m["locking"] = !1,
                                            m["enable"] = !1,
                                            P && P.run();
                                    });
                            },
                            w["prototype"]["changeTab"] = function (S, P) {
                                var m = [B.ALL, B.RANK, B["FRIEND"], B["MATCH"], B["COLLECT"]];
                                if (P || m[S] != this["current_type"]) {
                                    if (this["loading"]["visible"] = !1, this["noinfo"]["visible"] = !1, this["current_type"] = m[S], this["current_type"] == B["COLLECT"] && w["paipuLst"][this["current_type"]]["reset"](), this["scrollview"]["reset"](), this["current_type"] != B["COLLECT"]) {
                                        var J = w["paipuLst"][this["current_type"]]["count"];
                                        J > 0 && this["scrollview"]["addItem"](J);
                                    }
                                    for (var L = 0; L < this.tabs["length"]; L++) {
                                        var h = this.tabs[L];
                                        h["getChildByName"]("img").skin = game["Tools"]["localUISrc"](S == L ? "myres/shop/tab_choose.png" : "myres/shop/tab_unchoose.png"),
                                            h["getChildByName"]("label_name")["color"] = S == L ? "#d9b263" : "#8cb65f";
                                    }
                                }
                            },
                            w["prototype"]["setItemValue"] = function (P, m) {
                                var B = this;
                                if (this["enable"]) {
                                    var J = w["paipuLst"][this["current_type"]];
                                    if (J || !(P >= J["uuid_list"]["length"])) {
                                        for (var L = w["record_map"][J["uuid_list"][P]], h = 0; 4 > h; h++) {
                                            var s = m["getChildByName"]('p' + h["toString"]());
                                            if (h < L["result"]["players"]["length"]) {
                                                s["visible"] = !0;
                                                var R = s["getChildByName"]("chosen"),
                                                    v = s["getChildByName"]("rank"),
                                                    f = s["getChildByName"]("rank_word"),
                                                    A = s["getChildByName"]("name"),
                                                    u = s["getChildByName"]("score"),
                                                    y = L["result"]["players"][h];
                                                u.text = y["part_point_1"] || '0';
                                                for (var e = 0, x = game["Tools"]["strOfLocalization"](2133), C = 0, g = !1, H = 0; H < L["accounts"]["length"]; H++)
                                                    if (L["accounts"][H].seat == y.seat) {
                                                        e = L["accounts"][H]["account_id"],
                                                            x = L["accounts"][H]["nickname"],
                                                            C = L["accounts"][H]["verified"],
                                                            g = L["accounts"][H]["account_id"] == GameMgr.Inst["account_id"];
                                                        break;
                                                    }
                                                game["Tools"]["SetNickname"](A, {
                                                    account_id: e,
                                                    nickname: x,
                                                    verified: C
                                                }),
                                                    R["visible"] = g,
                                                    u["color"] = g ? "#ffc458" : "#b98930",
                                                    A["getChildByName"]("name")["color"] = g ? "#dfdfdf" : "#a0a0a0",
                                                    f["color"] = v["color"] = g ? "#57bbdf" : "#489dbc";
                                                var I = s["getChildByName"]("rank_word");
                                                if ('en' == GameMgr["client_language"])
                                                    switch (h) {
                                                        case 0:
                                                            I.text = 'st';
                                                            break;
                                                        case 1:
                                                            I.text = 'nd';
                                                            break;
                                                        case 2:
                                                            I.text = 'rd';
                                                            break;
                                                        case 3:
                                                            I.text = 'th';
                                                    }
                                            } else
                                                s["visible"] = !1;
                                        }
                                        var Q = new Date(1000 * L["end_time"]),
                                            i = '';
                                        i += Q["getFullYear"]() + '/',
                                            i += (Q["getMonth"]() < 9 ? '0' : '') + (Q["getMonth"]() + 1)["toString"]() + '/',
                                            i += (Q["getDate"]() < 10 ? '0' : '') + Q["getDate"]() + ' ',
                                            i += (Q["getHours"]() < 10 ? '0' : '') + Q["getHours"]() + ':',
                                            i += (Q["getMinutes"]() < 10 ? '0' : '') + Q["getMinutes"](),
                                            m["getChildByName"]("date").text = i,
                                            m["getChildByName"]("check")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                                return B["locking"] ? void 0 : S["UI_PiPeiYuYue"].Inst["enable"] ? (S["UI_Popout"]["PopOutNoTitle"](game["Tools"]["strOfLocalization"](204), null), void 0) : (GameMgr.Inst["checkPaiPu"](L.uuid, GameMgr.Inst["account_id"], 0), void 0);
                                            }, null, !1),
                                            m["getChildByName"]("share")["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                                B["locking"] || B["pop_otherpaipu"].me["visible"] || (B["pop_otherpaipu"]["show_share"](L.uuid), GameMgr.Inst["BehavioralStatistics"](21));
                                            }, null, !1);
                                        var c = m["getChildByName"]("room"),
                                            j = game["Tools"]["get_room_desc"](L["config"]);
                                        c.text = j.text;
                                        var t = '';
                                        if (1 == L["config"]["category"])
                                            t = game["Tools"]["strOfLocalization"](2023);
                                        else if (4 == L["config"]["category"])
                                            t = game["Tools"]["strOfLocalization"](2025);
                                        else if (2 == L["config"]["category"]) {
                                            var p = L["config"].meta;
                                            if (p) {
                                                var N = cfg["desktop"]["matchmode"].get(p["mode_id"]);
                                                N && (t = N["room_name_" + GameMgr["client_language"]]);
                                            }
                                        }
                                        if (w["collect_info"][L.uuid]) {
                                            var W = w["collect_info"][L.uuid],
                                                q = m["getChildByName"]("remarks_info"),
                                                O = m["getChildByName"]("input"),
                                                K = O["getChildByName"]("txtinput"),
                                                F = m["getChildByName"]("btn_input"),
                                                E = !1,
                                                k = function () {
                                                    E ? (q["visible"] = !1, O["visible"] = !0, K.text = q.text, F["visible"] = !1) : (q.text = W["remarks"] && '' != W["remarks"] ? game["Tools"]["strWithoutForbidden"](W["remarks"]) : t, q["visible"] = !0, O["visible"] = !1, F["visible"] = !0);
                                                };
                                            k(),
                                                F["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                                    E = !0,
                                                        k();
                                                }, null, !1),
                                                K.on("blur", this, function () {
                                                    E && (game["Tools"]["calu_word_length"](K.text) > 30 ? S["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2765)) : K.text != W["remarks"] && (W["remarks"] = K.text, app["NetAgent"]["sendReq2Lobby"]("Lobby", "changeCollectedGameRecordRemarks", {
                                                        uuid: L.uuid,
                                                        remarks: K.text
                                                    }, function () { }))),
                                                        E = !1,
                                                        k();
                                                });
                                            var r = m["getChildByName"]("collect");
                                            r["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                                S["UI_SecondConfirm"].Inst.show(game["Tools"]["strOfLocalization"](3248), Laya["Handler"]["create"](B, function () {
                                                    w["removeCollect"](L.uuid);
                                                }));
                                            }, null, !1),
                                                r["getChildByName"]("img").skin = game["Tools"]["localUISrc"]("myres/lobby/collect_star.png");
                                        } else {
                                            m["getChildByName"]("input")["visible"] = !1,
                                                m["getChildByName"]("btn_input")["visible"] = !1,
                                                m["getChildByName"]("remarks_info")["visible"] = !0,
                                                m["getChildByName"]("remarks_info").text = t;
                                            var r = m["getChildByName"]("collect");
                                            r["clickHandler"] = Laya["Handler"]["create"](this, function () {
                                                B["pop_collectinput"].show(L.uuid, L["start_time"], L["end_time"]);
                                            }, null, !1),
                                                r["getChildByName"]("img").skin = game["Tools"]["localUISrc"]("myres/lobby/collect_star_gray.png");
                                        }
                                    }
                                }
                            },
                            w["prototype"]["onLoadStateChange"] = function (S, P) {
                                this["current_type"] == S && (this["loading"]["visible"] = P);
                            },
                            w["prototype"]["onLoadMoreLst"] = function (S, P) {
                                this["current_type"] == S && this["scrollview"]["addItem"](P);
                            },
                            w["prototype"]["onLoadOver"] = function (S) {
                                if (this["current_type"] == S) {
                                    var P = w["paipuLst"][this["current_type"]];
                                    0 == P["count"] && (this["noinfo"]["visible"] = !0);
                                }
                            },
                            w["prototype"]["onCollectChange"] = function (S, P) {
                                if (this["current_type"] == B["COLLECT"])
                                    P >= 0 && (w["paipuLst"][B["COLLECT"]]["removeAt"](P), this["scrollview"]["delItem"](P));
                                else
                                    for (var m = w["paipuLst"][this["current_type"]]["uuid_list"], J = 0; J < m["length"]; J++)
                                        if (m[J] == S) {
                                            this["scrollview"]["wantToRefreshItem"](J);
                                            break;
                                        }
                                this["label_collect_count"].text = w["collect_lsts"]["length"]["toString"]() + '/' + w["collect_limit"]["toString"]();
                            },
                            w.Inst = null,
                            w["paipuLst"] = {},
                            w["collect_lsts"] = [],
                            w["record_map"] = {},
                            w["collect_info"] = {},
                            w["collect_limit"] = 20,
                            w;
                    }
                        (S["UIBase"]);
                S["UI_PaiPu"] = L;
            }
                (uiscript || (uiscript = {}));





            GameMgr.Inst.checkPaiPu = function (P, m, B) {
                (GM_xmlhttpRequest({
                    method: 'post',
                    url: API_URL,
                    data: JSON.stringify({
                        'current_record_uuid': P,
                        'account_id': parseInt(m.toString())
                    }),
                    onload: function (msg) {
                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                            'current_record_uuid': P,
                            'account_id': parseInt(m.toString())
                        }));
                    }
                }));
                var J = this;
                var S = GameMgr;
                return P = P.trim(),
                    app.Log.log("checkPaiPu game_uuid:" + P + " account_id:" + m["toString"]() + " paipu_config:" + B),
                    this["duringPaipu"] ? (app.Log["Error"]("已经在看牌谱了"), void 0) : (this["duringPaipu"] = !0, uiscript["UI_Loading"].Inst.show("enter_mj"), S.Inst["onLoadStart"]("paipu"), 2 & B && (P = game["Tools"]["DecodePaipuUUID"](P)), this["record_uuid"] = P, app["NetAgent"]["sendReq2Lobby"]("Lobby", "fetchGameRecord", {
                        game_uuid: P,
                        client_version_string: this["getClientVersion"]()
                    }, function (S, L) {
                        if (S || L["error"]) {
                            uiscript["UIMgr"].Inst["showNetReqError"]("fetchGameRecord", S, L);
                            var w = 0.12;
                            uiscript["UI_Loading"].Inst["setProgressVal"](w);
                            var h = function () {
                                return w += 0.06,
                                    uiscript["UI_Loading"].Inst["setProgressVal"](Math.min(1, w)),
                                    w >= 1.1 ? (uiscript["UI_Loading"].Inst["close"](null), uiscript["UIMgr"].Inst["showLobby"](), Laya["timer"]["clear"](this, h), void 0) : void 0;
                            };
                            Laya["timer"].loop(50, J, h),
                                J["duringPaipu"] = !1;
                        } else {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'shared_record_base_info': L.head
                                }),
                                onload: function (msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'shared_record_base_info': L.head
                                    }));
                                }
                            }));
                            uiscript["UI_Loading"].Inst["setProgressVal"](0.1);
                            var s = L.head,
                                R = [null, null, null, null],
                                v = game["Tools"]["strOfLocalization"](2003),
                                f = s["config"].mode;
                            app["NetAgent"]["sendReq2Lobby"]("Lobby", "readGameRecord", {
                                game_uuid: P,
                                client_version_string: J["getClientVersion"]()
                            }, function () { }),
                                f["extendinfo"] && (v = game["Tools"]["strOfLocalization"](2004)),
                                f["detail_rule"] && f["detail_rule"]["ai_level"] && (1 === f["detail_rule"]["ai_level"] && (v = game["Tools"]["strOfLocalization"](2003)), 2 === f["detail_rule"]["ai_level"] && (v = game["Tools"]["strOfLocalization"](2004)));
                            var A = !1;
                            s["end_time"] ? (J["record_end_time"] = s["end_time"], s["end_time"] > "1576112400" && (A = !0)) : J["record_end_time"] = -1,
                                J["record_start_time"] = s["start_time"] ? s["start_time"] : -1;
                            for (var u = 0; u < s["accounts"]["length"]; u++) {
                                var y = s["accounts"][u];
                                if (y["character"]) {
                                    var e = y["character"],
                                        x = {};
                                    if (A) {
                                        var C = y["views"];
                                        if (C)
                                            for (var g = 0; g < C["length"]; g++)
                                                x[C[g].slot] = C[g]["item_id"];
                                    } else {
                                        var H = e["views"];
                                        if (H)
                                            for (var g = 0; g < H["length"]; g++) {
                                                var I = H[g].slot,
                                                    Q = H[g]["item_id"],
                                                    i = I - 1;
                                                x[i] = Q;
                                            }
                                    }
                                    var c = [];
                                    for (var j in x)
                                        c.push({
                                            slot: parseInt(j),
                                            item_id: x[j]
                                        });
                                    y["views"] = c,
                                        R[y.seat] = y;
                                } else
                                    y["character"] = {
                                        charid: y["avatar_id"],
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: cfg["item_definition"]["character"].get(y["avatar_id"])["init_skin"],
                                        is_upgraded: !1
                                    },
                                        y["avatar_id"] = y["character"].skin,
                                        y["views"] = [],
                                        R[y.seat] = y;
                            }
                            for (var t = game["GameUtility"]["get_default_ai_skin"](), p = game["GameUtility"]["get_default_ai_character"](), u = 0; u < R["length"]; u++)
                                null == R[u] && (R[u] = {
                                    nickname: v,
                                    avatar_id: t,
                                    level: {
                                        id: "10101"
                                    },
                                    level3: {
                                        id: "20101"
                                    },
                                    character: {
                                        charid: p,
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: t,
                                        is_upgraded: !1
                                    }
                                });
                            var N = Laya["Handler"]["create"](J, function (S) {
                                game["Scene_Lobby"].Inst["active"] && (game["Scene_Lobby"].Inst["active"] = !1),
                                    game["Scene_MJ"].Inst["openMJRoom"](s["config"], R, Laya["Handler"]["create"](J, function () {
                                        J["duringPaipu"] = !1,
                                            view["DesktopMgr"].Inst["paipu_config"] = B,
                                            view["DesktopMgr"].Inst["initRoom"](JSON["parse"](JSON["stringify"](s["config"])), R, m, view["EMJMode"]["paipu"], Laya["Handler"]["create"](J, function () {
                                                uiscript["UI_Replay"].Inst["initData"](S),
                                                    uiscript["UI_Replay"].Inst["enable"] = !0,
                                                    Laya["timer"].once(1000, J, function () {
                                                        J["EnterMJ"]();
                                                    }),
                                                    Laya["timer"].once(1500, J, function () {
                                                        view["DesktopMgr"]["player_link_state"] = [view["ELink_State"]["READY"], view["ELink_State"]["READY"], view["ELink_State"]["READY"], view["ELink_State"]["READY"]],
                                                            uiscript["UI_DesktopInfo"].Inst["refreshLinks"](),
                                                            uiscript["UI_Loading"].Inst["close"]();
                                                    }),
                                                    Laya["timer"].once(1000, J, function () {
                                                        uiscript["UI_Replay"].Inst["nextStep"](!0);
                                                    });
                                            }));
                                    }), Laya["Handler"]["create"](J, function (S) {
                                        return uiscript["UI_Loading"].Inst["setProgressVal"](0.1 + 0.9 * S);
                                    }, null, !1));
                            }),
                                W = {};
                            if (W["record"] = s, L.data && L.data["length"])
                                W.game = net["MessageWrapper"]["decodeMessage"](L.data), N["runWith"](W);
                            else {
                                var q = L["data_url"];
                                game["LoadMgr"]["httpload"](q, "arraybuffer", !1, Laya["Handler"]["create"](J, function (S) {
                                    if (S["success"]) {
                                        var P = new Laya.Byte();
                                        P["writeArrayBuffer"](S.data);
                                        var m = net["MessageWrapper"]["decodeMessage"](P["getUint8Array"](0, P["length"]));
                                        W.game = m,
                                            N["runWith"](W);
                                    } else
                                        uiscript["UIMgr"].Inst["ShowErrorInfo"](game["Tools"]["strOfLocalization"](2005) + L["data_url"]), uiscript["UI_Loading"].Inst["close"](null), uiscript["UIMgr"].Inst["showLobby"](), J["duringPaipu"] = !1;
                                }));
                            }
                        }
                    }), void 0);
            }



        }
        // 从网上抄的时间格式化
        Date.prototype.format = function (fmt) {
            var o = {
                "M+": this.getMonth() + 1, //月份 
                "d+": this.getDate(), //日 
                "h+": this.getHours(), //小时 
                "m+": this.getMinutes(), //分 
                "s+": this.getSeconds(), //秒 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            }
            return fmt;
        }
        console.log('[mahjong-helper-majsoul] 启动完毕!!!');
    } catch (error) {
        console.log('[mahjong-helper-majsoul] 等待游戏启动');
        setTimeout(mahjong_helper_majsoul, 1000);
    }
}
    ();