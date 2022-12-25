// ==UserScript==
// @name         mahjong-helper-majsoul
// @namespace    https://github.com/Avenshy
// @version      20221225
// @description  majsoul for mahjong-helper
// @author       Avenshy
// @iconURL      https://www.maj-soul.com/homepage/character/1/yiji_0.png
// @homepageURL  https://github.com/Avenshy/mahjong-helper-majsoul
// @supportURL   https://github.com/Avenshy/mahjong-helper-majsoul/issues
// @match        https://game.maj-soul.com/1/
// @match        https://game.maj-soul.net/1/
// @match        https://game.mahjongsoul.com/index.html
// @match        https://mahjongsoul.game.yo-star.com/
// @grant        GM_xmlhttpRequest
// @connect      localhost
// @license      GPL-3.0
// ==/UserScript==

let API_URL = 'https://localhost:12121/'

! function mahjong_helper_majsoul() {
    try {
        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            app.Log.log('ActionLockTile play data:' + JSON['stringify'](L));
                            var F = L.seat;
                            L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1);
                            var s = mjcore['MJPai']['Create'](L.tile ? L.tile : '5z'),
                                i = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)];
                            if (L['operation'] && Laya['timer'].once(500, this, function() {
                                    y['ActionOperation'].play(L['operation']);
                                }), void 0 != L['zhenting'] && void 0 == L['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](L['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting'])), y['DesktopMgr'].Inst['setScores'](L['scores']), 0 == L['lock_state'] ? i['RevealFailed'](s) : 1 == L['lock_state'] && i['PlaySound']('act_locktile'), 3 == L['lock_state']) {
                                i['PlaySound']('act_unveil');
                                var M = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](y['DesktopMgr'].Inst['lastpai_seat'])];
                                M['RevealFailed'](s),
                                    y['DesktopMgr'].Inst['onRevealStateChange'](y['DesktopMgr'].Inst['lastpai_seat'], !1);
                            } else
                                y['DesktopMgr'].Inst['onRevealStateChange'](F, !1);
                            y['DesktopMgr'].Inst['ActionRunComplete'](),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']);
                        },
                        F['fastplay'] = function(L, F) {
                            app.Log.log('ActionLockTile fastplay data:' + JSON['stringify'](L) + ' usetime:' + F);
                            var s = L.seat;
                            L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1);
                            var i = mjcore['MJPai']['Create'](L.tile ? L.tile : '5z'),
                                M = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)];
                            if (L['operation'] && -1 != F && Laya['timer'].once(500, this, function() {
                                    y['ActionOperation'].play(L['operation'], F);
                                }), void 0 != L['zhenting'] && void 0 == L['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](L['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting'])), y['DesktopMgr'].Inst['setScores'](L['scores']), 0 == L['lock_state'] && M['RevealFailed'](i, !1), 3 == L['lock_state']) {
                                var Z = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](y['DesktopMgr'].Inst['lastpai_seat'])];
                                Z['RevealFailed'](i, !1),
                                    y['DesktopMgr'].Inst['onRevealStateChange'](y['DesktopMgr'].Inst['lastpai_seat'], !1);
                            } else
                                y['DesktopMgr'].Inst['onRevealStateChange'](s, !1);
                            uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang'], !1);
                        },
                        F['record'] = function(L, F) {
                            if (void 0 === F && (F = 0), app.Log.log('ActionLockTile record data:' + JSON['stringify'](L)), y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && L['operations'])
                                for (var s = 0; s < L['operations']['length']; s++)
                                    y['ActionOperation'].ob(L['operations'][s], F, 450);
                            L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1),
                                y['DesktopMgr'].Inst['setScores'](L['scores']);
                            var i = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](L.seat)],
                                M = mjcore['MJPai']['Create'](L.tile ? L.tile : '5z');
                            if (0 == L['lock_state'] ? i['RevealFailed'](M) : 1 == L['lock_state'] && i['PlaySound']('act_locktile'), 3 == L['lock_state']) {
                                i['PlaySound']('act_unveil');
                                var Z = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](y['DesktopMgr'].Inst['lastpai_seat'])];
                                Z['RevealFailed'](M),
                                    y['DesktopMgr'].Inst['onRevealStateChange'](y['DesktopMgr'].Inst['lastpai_seat'], !1);
                            } else
                                y['DesktopMgr'].Inst['onRevealStateChange'](L.seat, !1);
                            return uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']),
                                1000;
                        },
                        F['fastrecord'] = function(L, F) {
                            if (void 0 === F && (F = -1), app.Log.log('ActionLockTile record data:' + JSON['stringify'](L)), y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && F >= 0 && L['operations'])
                                for (var s = 0; s < L['operations']['length']; s++)
                                    y['ActionOperation'].ob(L['operations'][s], F, 450);
                            y['DesktopMgr'].Inst['setScores'](L['scores']),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1);
                            var i = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](L.seat)],
                                M = mjcore['MJPai']['Create'](L.tile ? L.tile : '5z');
                            if (0 == L['lock_state'] && i['RevealFailed'](M, !1), 3 == L['lock_state']) {
                                var Z = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](y['DesktopMgr'].Inst['lastpai_seat'])];
                                Z['RevealFailed'](M, !1),
                                    y['DesktopMgr'].Inst['onRevealStateChange'](y['DesktopMgr'].Inst['lastpai_seat'], !1);
                            } else
                                y['DesktopMgr'].Inst['onRevealStateChange'](L.seat, !1);
                            uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang'], !1);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionLockTile'] = L;
        }
        (view || (view = {}));



        ! function(y) {
            y['PAIMODEL_HEIGHT'] = '0.043225' * 0.94,
                y['PAIMODEL_WIDTH'] = '0.032775' * 0.94,
                y['PAIMODEL_THICKNESS'] = '0.0235' * 0.95 * 0.94,
                y['PAI_COUNT'] = 136;
            var L;
            ! function(y) {
                y[y.NULL = 0] = 'NULL',
                    y[y.AUTH = 1] = 'AUTH',
                    y[y['SYNCING'] = 2] = 'SYNCING',
                    y[y['READY'] = 3] = 'READY';
            }
            (L = y['ELink_State'] || (y['ELink_State'] = {}));
            var F;
            ! function(y) {
                y[y['Liqi4'] = 0] = 'Liqi4',
                    y[y['Liqi3'] = 1] = 'Liqi3';
            }
            (F = y['ERuleMode'] || (y['ERuleMode'] = {}));
            var s;
            ! function(y) {
                y[y.play = 0] = 'play',
                    y[y['paipu'] = 1] = 'paipu',
                    y[y['live_broadcast'] = 2] = 'live_broadcast';
            }
            (s = y['EMJMode'] || (y['EMJMode'] = {}));
            var i = function(i) {
                    function M() {
                        var L = i.call(this) || this;
                        return L['rule_mode'] = F['Liqi4'],
                            L.mode = s.play,
                            L['active'] = !1,
                            L['game_config'] = null,
                            L.seat = 0,
                            L.dora = [],
                            L['xuezhan'] = !1,
                            L['anpai'] = !1,
                            L['last_anpai_score'] = 0,
                            L['players'] = null,
                            L['mainrole'] = null,
                            L['num_left_show'] = new Array(),
                            L['container_other'] = null,
                            L['plane_chang'] = null,
                            L['plane_ju'] = null,
                            L['container_other_reveal'] = null,
                            L['plane_chang_reveal'] = null,
                            L['plane_ju_reveal'] = null,
                            L['num_left_show_reveal'] = new Array(),
                            L['score_reveal'] = new Array(),
                            L['trans_container_effect'] = null,
                            L['effect_pai_canchi'] = null,
                            L['effect_dora3D'] = null,
                            L['effect_dora3D_touying'] = null,
                            L['effect_doraPlane'] = null,
                            L['effect_shadow'] = null,
                            L['effect_shadow_touming'] = null,
                            L['effect_recommend'] = null,
                            L['auto_hule'] = !1,
                            L['auto_nofulu'] = !1,
                            L['auto_moqie'] = !1,
                            L['auto_liqi'] = !0,
                            L['emoji_switch'] = !1,
                            L['duringReconnect'] = !1,
                            L['gameing'] = !1,
                            L['lastpai_seat'] = 0,
                            L['lastqipai'] = null,
                            L['oplist'] = [],
                            L['liqi_select'] = [],
                            L['operation_showing'] = !1,
                            L['myaccountid'] = 0,
                            L['player_datas'] = [],
                            L['player_effects'] = [],
                            L['mjp_res_name'] = '',
                            L['last_gang'] = 0,
                            L['gameEndResult'] = null,
                            L['levelchangeinfo'] = null,
                            L['activity_reward'] = null,
                            L['rewardinfo'] = null,
                            L['choosed_pai'] = null,
                            L['muyu_info'] = null,
                            L['muyu_effect'] = null,
                            L['actionList'] = [],
                            L['action_index'] = 0,
                            L['current_step'] = 0,
                            L['actionMap'] = null,
                            L['tingpais'] = [],
                            L['record_show_hand'] = !1,
                            L['record_show_paopai'] = !1,
                            L['record_show_anim'] = !0,
                            L['ptchange'] = 0,
                            L['waiting_lingshang_deal_tile'] = !1,
                            L.md5 = '',
                            L['paipu_config'] = 0,
                            L['ai_level'] = 1,
                            L['timestoped'] = !1,
                            L['handles_after_timerun'] = [],
                            L['doactioncd'] = 0,
                            L['dochain_fast'] = !1,
                            L['action_running'] = !1,
                            L['hangupCount'] = 0,
                            L['state_cache'] = {},
                            L['mind_voice_seat'] = -1,
                            L['mind_voice_type'] = '',
                            L['during_playing_mind_voice'] = !1,
                            M.Inst = L,
                            L['actionMap'] = {},
                            L['actionMap']['ActionMJStart'] = new Laya['Handler'](L, function(y) {
                                y.msg;
                                return app.Log.log('ActionMJStart begin'),
                                    L['ClearOperationShow'](),
                                    GameMgr.Inst['EnterMJ'](),
                                    uiscript['UI_FightBegin'].show(Laya['Handler']['create'](L, function() {
                                        uiscript['UI_Loading'].Inst['close'](),
                                            L['ActionRunComplete']();
                                    })),
                                    2000;
                            }, null, !1),
                            L['actionMap']['ActionNewRound'] = new Laya['Handler'](L, function(F) {
                                app.Log.log('ActionNewRound begin');
                                var s = F.msg,
                                    i = F.fast;
                                if (L['ClearOperationShow'](), uiscript['UI_Loading'].Inst['close'](), GameMgr.Inst['EnterMJ'](), i)
                                    return uiscript['UI_FightBegin'].hide(), y['ActionNewRound']['fastplay'](s, -1), 0;
                                var M = uiscript['UI_FightBegin'].hide();
                                return Laya['timer'].once(M + 200, L, function() {
                                        y['ActionNewRound'].play(s);
                                    }),
                                    s.al && (M += 1300),
                                    L['is_jiuchao_mode']() && (M += 150),
                                    M + 200 + 1200 + 400;
                            }, null, !1),
                            L['actionMap']['ActionNewCard'] = new Laya['Handler'](L, function(F) {
                                app.Log.log('ActionNewCard begin');
                                var s = F.msg,
                                    i = F.fast;
                                return L['ClearOperationShow'](),
                                    uiscript['UI_Loading'].Inst['close'](),
                                    GameMgr.Inst['EnterMJ'](),
                                    i ? (y['ActionNewCard']['fastplay'](s, -1), 0) : y['ActionNewCard'].play(s);
                            }, null, !1),
                            L['actionMap']['ActionDiscardTile'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg,
                                    i = F.fast;
                                return i ? (y['ActionDiscardTile']['fastplay'](s, -1), 0) : (y['ActionDiscardTile'].play(s), Laya['timer'].once(500, L, L['ActionRunComplete']), 500);
                            }, null, !1),
                            L['actionMap']['ActionDealTile'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg,
                                    i = F.fast;
                                return i ? (y['ActionDealTile']['fastplay'](s, -1), 0) : (y['ActionDealTile'].play(s), 500);
                            }, null, !1),
                            L['actionMap']['ActionChiPengGang'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg,
                                    i = F.fast;
                                return i ? (y['ActionChiPengGang']['fastplay'](s, -1), 0) : (y['ActionChiPengGang'].play(s), 1100);
                            }, null, !1),
                            L['actionMap']['ActionAnGangAddGang'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg,
                                    i = F.fast;
                                return i ? (y['ActionAnGangAddGang']['fastplay'](s, -1), 0) : (y['ActionAnGangAddGang'].play(s), 1100);
                            }, null, !1),
                            L['actionMap']['ActionHule'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg;
                                return y['ActionHule'].play(s),
                                    5000;
                            }, null, !1),
                            L['actionMap']['ActionHuleXueZhanMid'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg;
                                return y['ActionHuleXueZhanMid'].play(s),
                                    1000;
                            }, null, !1),
                            L['actionMap']['ActionHuleXueZhanEnd'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg;
                                return y['ActionHuleXueZhanEnd'].play(s),
                                    1000;
                            }, null, !1),
                            L['actionMap']['ActionNoTile'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg;
                                return y['ActionNoTile'].play(s),
                                    5000;
                            }, null, !1),
                            L['actionMap']['ActionLiuJu'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg;
                                return y['ActionLiuJu'].play(s),
                                    5000;
                            }, null, !1),
                            L['actionMap']['ActionBaBei'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg,
                                    i = F.fast;
                                return i ? (y['ActionBabei']['fastplay'](s, -1), 0) : (y['ActionBabei'].play(s), 1000);
                            }, null, !1),
                            L['actionMap']['ActionChangeTile'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg,
                                    i = F.fast;
                                return i ? (y['ActionChangeTile']['fastplay'](s, -1), 0) : (y['ActionChangeTile'].play(s), 3000);
                            }, null, !1),
                            L['actionMap']['ActionSelectGap'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg,
                                    i = F.fast;
                                return i ? (y['ActionSelectGap']['fastplay'](s, -1), 0) : (y['ActionSelectGap'].play(s), 800);
                            }, null, !1),
                            L['actionMap']['ActionGangResult'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg,
                                    i = F.fast;
                                return i ? (y['ActionGangResult']['fastplay'](s, -1), 0) : (y['ActionGangResult'].play(s), 1000);
                            }, null, !1),
                            L['actionMap']['ActionGangResultEnd'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg,
                                    i = F.fast;
                                return i ? (y['ActionGangResultEnd']['fastplay'](s, -1), 0) : (y['ActionGangResultEnd'].play(s), 2000);
                            }, null, !1),
                            L['actionMap']['ActionRevealTile'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg,
                                    i = F.fast;
                                return i ? (y['ActionRevealTile']['fastplay'](s, -1), 0) : (y['ActionRevealTile'].play(s), Laya['timer'].once(500, L, L['ActionRunComplete']), 500);
                            }, null, !1),
                            L['actionMap']['ActionLockTile'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg,
                                    i = F.fast;
                                return i ? (y['ActionLockTile']['fastplay'](s, -1), 0) : (y['ActionLockTile'].play(s), 1000);
                            }, null, !1),
                            L['actionMap']['ActionUnveilTile'] = new Laya['Handler'](L, function(F) {
                                L['ClearOperationShow']();
                                var s = F.msg,
                                    i = F.fast;
                                return i ? (y['ActionUnveilTile']['fastplay'](s, -1), 0) : (y['ActionUnveilTile'].play(s), 1000);
                            }, null, !1),
                            L['actionMap']['ActionFillAwaitingTiles'] = new Laya['Handler'](L, function(L) {
                                app.Log.log('ActionFillAwaitingTiles begin');
                                var F = L.msg,
                                    s = L.fast;
                                return s ? (y['ActionFillAwaitingTiles']['fastplay'](F, -1), 0) : y['ActionFillAwaitingTiles'].play(F);
                            }, null, !1),
                            app['NetAgent']['AddListener2MJ']('NotifyGameEndResult', Laya['Handler']['create'](L, function(y) {
                                L['gameEndResult'] = y['result'],
                                    uiscript['UI_Hangup_Warn'].Inst['enable'] && uiscript['UI_Hangup_Warn'].Inst['close'](),
                                    L.mode == s.play && (uiscript['UI_Activity']['need_check_activity'] = !0),
                                    Laya['timer'].once(10000, L, function() {
                                        game['MJNetMgr'].Inst['Close']();
                                    });
                            })),
                            app['NetAgent']['AddListener2MJ']('ActionPrototype', Laya['Handler']['create'](L, function(y) {
                                if (app.Log.log('Receive Action: ' + JSON['stringify'](y)), L['duringReconnect'])
                                    L['actionList'].push(y);
                                else if (L['actionList']['length'] > 0)
                                    L['actionList'].push(y);
                                else {
                                    L['actionList'].push(y);
                                    var F = L['doactioncd'] - Laya['timer']['currTimer'];
                                    0 > F && (F = 0),
                                        L['StartChainAction'](F);
                                }
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyGameTerminate', Laya['Handler']['create'](L, function(F) {
                                app.Log.log('NotifyGameTerminate:' + JSON['stringify'](F)),
                                    y['AudioMgr']['StopMusic'](),
                                    'user-manual-terminate' != F['reason'] && uiscript['UI_SecondConfirm'].Inst['show_only_confirm'](game['Tools']['strOfLocalization'](2227), Laya['Handler']['create'](L, function() {
                                        L['Reset'](),
                                            game['Scene_MJ'].Inst['GameEnd']();
                                    })),
                                    uiscript['UI_VoteProgress'].Inst['enable'] && uiscript['UI_VoteProgress'].Inst['close']();
                            })),
                            y['ModelAnimationController']['init_data'](),
                            app['NetAgent']['AddListener2MJ']('NotifyGamePause', Laya['Handler']['create'](L, function(y) {
                                app.Log.log('NotifyGamePause:' + JSON['stringify'](y));
                                var F = y['paused'];
                                L['setGameStop'](F);
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyGameFinishReward', Laya['Handler']['create'](L, function(y) {
                                app.Log.log('NotifyGameFinishReward: ' + JSON['stringify'](y)),
                                    L['levelchangeinfo'] = y['level_change'],
                                    L['rewardinfo'] = y;
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyActivityReward', Laya['Handler']['create'](L, function(y) {
                                app.Log.log('NotifyActivityReward: ' + JSON['stringify'](y)),
                                    L['activity_reward'] = y;
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyActivityPoint', Laya['Handler']['create'](L, function(y) {
                                for (var L = y['activity_points'], F = 0; F < L['length']; F++) {
                                    var s = L[F];
                                    s['activity_id'] == uiscript['UI_Activity_DuanWu_Point']['activity_id'] && (uiscript['UI_Activity_DuanWu_Point']['point'] = s['point'], uiscript['UI_Chunjie']['need_refresh_rank'] = !0);
                                }
                            })),
                            app['NetAgent']['AddListener2MJ']('NotifyLeaderboardPoint', Laya['Handler']['create'](L, function(y) {
                                for (var L = y['leaderboard_points'], F = 0; F < L['length']; F++) {
                                    var s = L[F];
                                    s['leaderboard_id'] == uiscript['UI_Activity_DuanWu_Rank']['activity_id'] && (uiscript['UI_Activity_DuanWu_Rank']['point'] = s['point']);
                                }
                            })),
                            app['NetAgent']['AddListener2Lobby']('NotifyGameFinishRewardV2', Laya['Handler']['create'](L, function(y) {
                                app.Log.log('NotifyGameFinishReward: ' + JSON['stringify'](y)),
                                    L['levelchangeinfo'] = y['level_change'],
                                    L['rewardinfo'] = y;
                            })),
                            app['NetAgent']['AddListener2Lobby']('NotifyActivityRewardV2', Laya['Handler']['create'](L, function(y) {
                                app.Log.log('NotifyActivityReward: ' + JSON['stringify'](y)),
                                    L['activity_reward'] = y;
                            })),
                            app['NetAgent']['AddListener2Lobby']('NotifyActivityPointV2', Laya['Handler']['create'](L, function(y) {
                                for (var L = y['activity_points'], F = 0; F < L['length']; F++) {
                                    var s = L[F];
                                    s['activity_id'] == uiscript['UI_Activity_DuanWu_Point']['activity_id'] && (uiscript['UI_Activity_DuanWu_Point']['point'] = s['point'], uiscript['UI_Chunjie']['need_refresh_rank'] = !0);
                                }
                            })),
                            app['NetAgent']['AddListener2Lobby']('NotifyLeaderboardPointV2', Laya['Handler']['create'](L, function(y) {
                                for (var L = y['leaderboard_points'], F = 0; F < L['length']; F++) {
                                    var s = L[F];
                                    s['leaderboard_id'] == uiscript['UI_Activity_DuanWu_Rank']['activity_id'] && (uiscript['UI_Activity_DuanWu_Rank']['point'] = s['point']);
                                }
                            })),
                            app['NetAgent']['AddListener2MJ']('PlayerLeaving', Laya['Handler']['create'](L, function(y) {
                                y && y.seat == L.seat && uiscript['UI_Hangup_Warn'].Inst.show();
                            })),
                            L;
                    }
                    return __extends(M, i),
                        M['is_yuren_type'] = function(y) {
                            if (void 0 === y && (y = !1), y) {
                                var L = new Date();
                                this['_is_yuren_type'] = 3 == L['getMonth']() && 1 == L['getDate']();
                            }
                            return this['_is_yuren_type'];
                        },
                        Object['defineProperty'](M['prototype'], 'round_id', {
                            get: function() {
                                return this['index_change'] + '-' + this['index_ju'] + '-' + this['index_ben'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](M['prototype'], 'main_role_character_info', {
                            get: function() {
                                return this['player_datas'][this.seat]['character'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](M['prototype'], 'player_count', {
                            get: function() {
                                return this['rule_mode'] == F['Liqi3'] ? 3 : 4;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        M['prototype']['seat2LocalPosition'] = function(y) {
                            if (this['rule_mode'] == F['Liqi3']) {
                                for (var L = this.seat, s = 0; 4 > s; s++) {
                                    if (y == L)
                                        return s;
                                    L++,
                                    L >= 3 && (L = -1);
                                }
                                return 0;
                            }
                            return (y - this.seat + 4) % 4;
                        },
                        M['prototype']['localPosition2Seat'] = function(y) {
                            if (this['rule_mode'] == F['Liqi3']) {
                                for (var L = this.seat, s = 0; y > s; s++)
                                    L++, L >= 3 && (L = -1);
                                return L;
                            }
                            return (this.seat + y) % 4;
                        },
                        M['prototype']['getPlayerName'] = function(y) {
                            var L = this['player_datas'][y]['account_id'];
                            if (this.mode == s['paipu'] && uiscript['UI_Replay'].Inst['hide_name']) {
                                var F = this['seat2LocalPosition'](y);
                                switch (F) {
                                    case 0:
                                        return {
                                            account_id: L,
                                            nickname: game['Tools']['strOfLocalization'](3076),
                                            verified: 0
                                        };
                                    case 1:
                                        return {
                                            account_id: L,
                                            nickname: game['Tools']['strOfLocalization'](3073),
                                            verified: 0
                                        };
                                    case 2:
                                        return {
                                            account_id: L,
                                            nickname: game['Tools']['strOfLocalization'](3074),
                                            verified: 0
                                        };
                                    case 3:
                                        return {
                                            account_id: L,
                                            nickname: game['Tools']['strOfLocalization'](3075),
                                            verified: 0
                                        };
                                }
                                return {
                                    account_id: L,
                                    nickname: '',
                                    verified: 0
                                };
                            }
                            var i = this['player_datas'][y]['nickname'];
                            return L && !game['Tools']['is_same_zone'](GameMgr.Inst['account_id'], L) && (GameMgr.Inst['nickname_replace_enable'] && GameMgr.Inst['nickname_replace_lst']['length'] > 0 ? GameMgr.Inst['nickname_replace_table'][L] ? i = GameMgr.Inst['nickname_replace_table'][L] : (i = GameMgr.Inst['nickname_replace_lst'][Math['floor'](Math['random']() * GameMgr.Inst['nickname_replace_lst']['length'])], GameMgr.Inst['nickname_replace_table'][L] = i) : null != app['Taboo'].test(i) && (i = game['Tools']['strOfLocalization'](3060))), {
                                account_id: L,
                                nickname: i,
                                verified: this['player_datas'][y]['verified']
                            };
                        },
                        Object['defineProperty'](M['prototype'], 'showingPaopai', {
                            get: function() {
                                return this.mode != s.play;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        M['prototype']['is_dora3_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['dora3_mode'] ? !0 : !1;
                        },
                        M['prototype']['is_peipai_open_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['begin_open_mode'] ? !0 : !1;
                        },
                        M['prototype']['is_muyu_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['muyu_mode'] ? !0 : !1;
                        },
                        M['prototype']['is_open_hand'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['open_hand'] ? !0 : !1;
                        },
                        M['prototype']['is_shilian_mode'] = function() {
                            return this['game_config'] && this['game_config'].meta && this['game_config'].meta['mode_id'] == game['EMatchMode']['shilian'] ? !0 : !1;
                        },
                        M['prototype']['is_xiuluo_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['xuezhandaodi'] ? !0 : !1;
                        },
                        M['prototype']['is_jiuchao_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['jiuchao_mode'] ? !0 : !1;
                        },
                        M['prototype']['is_reveal_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['reveal_discard'] ? !0 : !1;
                        },
                        M['prototype']['is_hesu_mode'] = function() {
                            return this['game_config'] && this['game_config'].meta && this['game_config'].meta['mode_id'] == game['EMatchMode'].hesu ? !0 : !1;
                        },
                        M['prototype']['is_huansanzhang_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['huansanzhang'] ? !0 : !1;
                        },
                        M['prototype']['is_chuanma_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['chuanma'] ? !0 : !1;
                        },
                        M['prototype']['is_jjc_mode'] = function() {
                            return this['game_config'] && this['game_config'].meta && this['game_config'].meta['mode_id'] == game['EMatchMode'].jjc ? !0 : !1;
                        },
                        M['prototype']['is_top_match'] = function() {
                            var y = 0;
                            if (this['game_config'] && this['game_config'].meta && (y = this['game_config'].meta['mode_id']), (15 == y || 16 == y || 25 == y || 26 == y) && this['player_datas']) {
                                for (var L = 0, s = this['player_datas']; L < s['length']; L++) {
                                    var i = s[L],
                                        M = this['rule_mode'] == F['Liqi4'] ? i['level'].id : i['level3'].id;
                                    if (6 != cfg['level_definition']['level_definition'].get(M)['primary_level'])
                                        return !1;
                                }
                                return !0;
                            }
                            return !1;
                        },
                        M['prototype']['ActionRunComplete'] = function() {
                            this['action_running'] = !1;
                        },
                        M['prototype']['StartChainAction'] = function(y) {
                            this['doactioncd'] = Laya['timer']['currTimer'] + y,
                                Laya['timer']['frameLoop'](1, this, this['DoChainAction']);
                        },
                        M['prototype']['DoChainAction'] = function() {
                            var y = this;
                            if (this['action_index'] >= this['actionList']['length'])
                                this['action_index'] = 0, this['actionList'] = [], this['dochain_fast'] = !1, Laya['timer']['clear'](this, this['DoChainAction']), this['duringReconnect'] && (app.Log.log('finishSyncGame0'), app['NetAgent']['sendReq2MJ']('FastTest', 'finishSyncGame', {}, function() {}), this['duringReconnect'] = !1);
                            else {
                                if (!this['dochain_fast']) {
                                    if (this['action_running'])
                                        return;
                                    if (Laya['timer']['currTimer'] <= this['doactioncd'] - Laya['timer']['delta'])
                                        return;
                                    Laya['timer']['clear'](this, this['DoChainAction']);
                                }
                                this['action_index'] == this['actionList']['length'] - 1 && this['duringReconnect'] && (this['duringReconnect'] = !1, app.Log.log('finishSyncGame1'), app['NetAgent']['sendReq2MJ']('FastTest', 'finishSyncGame', {}, function() {})),
                                    this['dochain_fast'] ? this['action_index'] + 2 < this['actionList']['length'] ? this['DoMJAction'](this['actionList'][this['action_index']++], !0) : (this['dochain_fast'] = !1, this['DoMJAction'](this['actionList'][this['action_index']++], !1)) : (this['dochain_fast'] = !1, this['action_index'] + 4 < this['actionList']['length'] && (this['dochain_fast'] = !0), this['dochain_fast'] ? Laya['timer'].once(800, this, function() {
                                        for (var L = y['actionList']['length'] - 1; L >= y['action_index']; L--)
                                            if ('ActionNewRound' == y['actionList'][L].name) {
                                                y['action_index'] = L;
                                                break;
                                            }
                                        y['DoMJAction'](y['actionList'][y['action_index']++], !0);
                                    }) : this['DoMJAction'](this['actionList'][this['action_index']++], !1));
                            }
                        },
                        M['EnDecode'] = function(y) {
                            for (var L = [132, 94, 78, 66, 57, 162, 31, 96, 28], F = 0; F < y['byteLength']; F++) {
                                var s = (23 ^ y['byteLength']) + 5 * F + L[F % L['length']] & 255;
                                y[F] ^= s;
                            }
                            return y;
                        },
                        M['prototype']['DoMJAction'] = function(y, L) {
                            var F = this;
                            if (this['active']) {
                                var s = net['ProtobufManager']['lookupType']('lq.' + y.name);
                                if (!s)
                                    throw new Error('ERR_CANNOT_FIND_MESSAGE_TYPE, lq.' + y.name);
                                var i = y.step,
                                    Z = s['decode'](M['EnDecode'](y.data));
                                if (app.Log.log('DoMJAction step:' + i + ' [' + y.name + ']:  ' + JSON['stringify'](Z) + ' fast:' + L), i > 1 && i != this['current_step'] + 1)
                                    return app.Log.log('step 不对 强制触发全数据重连 step:' + i + ' current_step:' + this['current_step']), this['trySyncGame'](), void 0;
                                var N = 0;
                                if (this['current_step'] = i, this['actionMap']['hasOwnProperty'](y.name))
                                    try {
                                        L || (this['action_running'] = !0),
                                            N = this['actionMap'][y.name]['runWith']({
                                                msg: Z,
                                                fast: L
                                            });
                                    } catch (e) {
                                        var W = {};
                                        return W['error'] = e['message'],
                                            W['stack'] = e['stack'],
                                            W['method'] = 'DoMJAction',
                                            W.name = y.name,
                                            W.data = y,
                                            W.step = i,
                                            GameMgr.Inst['onFatalError'](W),
                                            void 0;
                                    }
                                else
                                    app.Log['Error']('没有监听操作：' + y.name);
                                L ? this['DoChainAction']() : Laya['timer']['frameOnce'](1, this, function() {
                                    F['StartChainAction'](N);
                                });
                            }
                        },
                        M['prototype']['_load'] = function(L) {
                            this['desktop3D'] = L,
                                this['desktop3D']['getChildByName']('all')['active'] = !1;
                            var F = this['desktop3D']['getChildByName']('poss');
                            this['players'] = new Array(),
                                this['mainrole'] = F['getChildByName']('man_1')['addComponent'](y['ViewPlayer_Me']),
                                this['mainrole']['InitMe'](this, 0, game['Scene_MJ'].Inst['root2']['getChildByName']('hands'), F),
                                this['players'].push(this['mainrole']);
                            for (var s = 2; 4 >= s; s++) {
                                var i = F['getChildByName']('man_' + s)['addComponent'](y['ViewPlayer_Other']);
                                i.Init(this, s - 1, F),
                                    this['players'].push(i);
                            }
                            var M = this['desktop3D']['getChildByName']('other'),
                                Z = M['getChildByName']('left');
                            this['num_left_show'].push(Z['getChildByName']('0')),
                                this['num_left_show'].push(Z['getChildByName']('1'));
                            var N = M['getChildByName']('chang');
                            this['container_other'] = M,
                                this['plane_chang'] = N['getChildByName']('chang'),
                                this['plane_ju'] = N['getChildByName']('ju'),
                                this['container_other'] = M,
                                this['container_other_reveal'] = this['desktop3D']['getChildByName']('other_reveal');
                            var e = this['container_other_reveal']['getChildByName']('left');
                            this['num_left_show_reveal'].push(e['getChildByName']('0')),
                                this['num_left_show_reveal'].push(e['getChildByName']('1'));
                            var W = this['container_other_reveal']['getChildByName']('chang');
                            if (this['plane_chang_reveal'] = W['getChildByName']('chang'), this['plane_ju_reveal'] = W['getChildByName']('ju'), 'kr' == GameMgr['client_language']) {
                                var D = 'scene/Assets/Resource/table/tablemid/',
                                    B = this['plane_chang_reveal']['meshRender']['material'];
                                B['albedoTexture'] = Laya['Loader']['getRes'](D + 'chang_kr.png'),
                                    B = W['getChildByName']('juzi')['meshRender']['material'],
                                    B['albedoTexture'] = Laya['Loader']['getRes'](D + 'chang_kr.png'),
                                    B = e['getChildByName']('left')['meshRender']['material'],
                                    B['albedoTexture'] = Laya['Loader']['getRes'](D + 'left_kr.png'),
                                    B = this['plane_chang']['meshRender']['material'],
                                    B['albedoTexture'] = Laya['Loader']['getRes'](D + 'chang_kr.png'),
                                    B = N['getChildByName']('juzi')['meshRender']['material'],
                                    B['albedoTexture'] = Laya['Loader']['getRes'](D + 'chang_kr.png'),
                                    B = Z['getChildByName']('left')['meshRender']['material'],
                                    B['albedoTexture'] = Laya['Loader']['getRes'](D + 'left_kr.png');
                            }
                            for (var E = this['container_other_reveal']['getChildByName']('score'), s = 0; 6 > s; s++)
                                this['score_reveal'].push(E['getChildAt'](s));
                            this['SetLeftPaiShow'](0),
                                this['SetChangJuShow'](0, 0, 0),
                                this['trans_container_effect'] = this['desktop3D']['getChildByName']('effect'),
                                this['effect_dora3D'] = this['trans_container_effect']['getChildByName']('effect_dora'),
                                this['effect_dora3D_touying'] = this['trans_container_effect']['getChildByName']('effect_touming_dora');
                            var f = this['effect_dora3D']['getChildAt'](0)['meshRender']['material'];
                            f['disableLight'](),
                                this['effect_shadow'] = this['trans_container_effect']['getChildByName']('effect_shadow'),
                                this['effect_shadow_touming'] = this['trans_container_effect']['getChildByName']('effect_shadow_touming'),
                                this['effect_dora3D']['active'] = !0,
                                this['effect_shadow']['active'] = !0,
                                this['effect_shadow_touming']['active'] = !0,
                                this['effect_dora3D_touying']['active'] = !0,
                                this['effect_doraPlane'] = game['Scene_MJ'].Inst['root2']['getChildByName']('hands')['getChildByName']('effect_dora'),
                                this['effect_recommend'] = game['Scene_MJ'].Inst['root2']['getChildByName']('hands')['getChildByName']('effect_recommend'),
                                this['effect_doraPlane']['active'] = !1,
                                this['effect_recommend']['active'] = !1;
                            var z = this['effect_recommend']['getChildAt'](0)['meshRender']['material'],
                                d = 'myres2/mjp/recommend.png';
                            'chs' != GameMgr['client_language'] && (d = GameMgr['client_language'] + '/' + d),
                                Laya['loader']['getRes'](d) && (z['diffuseTexture'] = Laya['loader']['getRes'](d));
                        },
                        M['prototype']['initRoom'] = function(L, i, Z, N, e) {
                            var W = this;
                            uiscript['UI_Rpg']['needShow'] = !1,
                                uiscript['UI_WaitingRoom'].Inst['resetData'](),
                                GameMgr.Inst['in_hesu'] = !1,
                                this['game_config'] = L,
                                this['rule_mode'] = F['Liqi4'],
                                L.mode.mode && (this['rule_mode'] = L.mode.mode < 10 ? F['Liqi4'] : F['Liqi3']),
                                this['xuezhan'] = !1,
                                L.mode && L.mode['detail_rule'] && (this['xuezhan'] = !!L.mode['detail_rule']['xuezhandaodi']),
                                L.mode && L.mode['detail_rule'] && (this['field_spell'] = L.mode['detail_rule']['field_spell_mode']),
                                L.mode && L.mode['detail_rule'] && L.mode['detail_rule']['reveal_discard'] ? (this['container_other']['active'] = !1, this['container_other_reveal']['active'] = !0, this['anpai'] = !0) : (this['anpai'] = !1, this['container_other']['active'] = !0, this['container_other_reveal']['active'] = !1),
                                this.mode = N,
                                this.seat = -1,
                                this['player_datas'] = i,
                                this['gameEndResult'] = null,
                                this['levelchangeinfo'] = null,
                                this['activity_reward'] = null,
                                this['rewardinfo'] = null,
                                this['active'] = !0,
                                this['ptchange'] = 0,
                                this['timestoped'] = !1,
                                this['action_running'] = !1,
                                this['hangupCount'] = 0,
                                this['handles_after_timerun'] = [],
                                this['muyu_info'] = null,
                                this['muyu_effect'] && (this['muyu_effect']['destroy'](), this['muyu_effect'] = null),
                                uiscript['UI_GameStop'].Inst['close'](),
                                uiscript['UI_Replay'].Inst['hide_name'] = !1,
                                this.mode == s['paipu'] ? (this['record_show_hand'] = '0' != Laya['LocalStorage']['getItem']('record_show_hand'), this['record_show_paopai'] = '0' != Laya['LocalStorage']['getItem']('record_show_paopai'), this['record_show_anim'] = '0' != Laya['LocalStorage']['getItem']('record_show_anim')) : (this['record_show_anim'] = !0, this['record_show_hand'] = this['record_show_paopai'] = !1),
                                this.mode == s.play ? (uiscript['UI_Invite'].Inst['enable'] = !1, 4 == L['category'] && (GameMgr.Inst['custom_match_id'] = L.meta['contest_uid'])) : uiscript['UI_Invite'].Inst['enable'] = !0,
                                this['myaccountid'] = Z;
                            for (var D = {}, B = 0; B < i['length']; B++)
                                for (var E = cfg['item_definition'].skin.get(i[B]['avatar_id']), f = cfg['item_definition']['character'].get(E['character_id']), z = cfg['voice']['sound']['getGroup'](f['sound']), d = 0; d < z['length']; d++)
                                    if (i[B]['character'] && 2 == z[d]['category'] && z[d]['level_limit'] <= i[B]['character']['level']) {
                                        var P = z[d].path + y['AudioMgr']['suffix'];
                                        D['hasOwnProperty'](P) || (D[P] = 1);
                                    }
                            for (var _ in D)
                                Laya['loader'].load(_, null, null, null, 3);
                            for (var B = 0; B < this['player_datas']['length']; B++)
                                this['player_datas'][B]['account_id'] == Z && (this.seat = B);
                            if (GameMgr['sakiLimited'])
                                for (var B = 0; B < this['player_datas']['length']; B++)
                                    if (this['player_datas'][B]['account_id'] != GameMgr.Inst['account_id']) {
                                        game['GameUtility']['char_limited'](this['player_datas'][B]['character']['charid']) && (this['player_datas'][B]['character']['charid'] = game['GameUtility']['get_default_ai_character'](), this['player_datas'][B]['character'].skin = game['GameUtility']['get_default_ai_skin'](), this['player_datas'][B]['avatar_id'] = game['GameUtility']['get_default_ai_skin']());
                                        var u = this['player_datas'][B]['views'];
                                        if (u)
                                            for (var d = u['length'] - 1; d >= 0; d--) {
                                                var l = u[d]['item_id'];
                                                l && 1 == cfg['item_definition'].item.get(l)['collaboration'] && u['splice'](d, 1);
                                            }
                                    }
                            if (-1 == this.seat) {
                                if (this.mode == s.play)
                                    return uiscript['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2228)), app.Log['Error'](JSON['stringify'](i)), void 0;
                                this.seat = 0;
                            }
                            if (this['emoji_switch'] = !1, L.mode && L.mode['game_setting'] && (this['emoji_switch'] = !!L.mode['game_setting']['emoji_switch']), uiscript['UI_Replay'].Inst['enable'] = this.mode == s['paipu'], uiscript['UI_Ob_Replay'].Inst['enable'] = !1, M['bianjietishi'] = !0, N == s.play) {
                                if (L.mode && L.mode['detail_rule']) {
                                    var q = L.mode['detail_rule'];
                                    null != q['bianjietishi'] && (M['bianjietishi'] = q['bianjietishi']);
                                }
                                if (2 == L['category'] && L.meta) {
                                    var o = cfg['desktop']['matchmode'].get(L.meta['mode_id']);
                                    o && 6 == o.room && (M['bianjietishi'] = !1);
                                }
                                uiscript['UI_MJTask_Progress']['record']();
                            }
                            this['mjp_res_name'] = game['GameUtility']['get_view_res_name'](game['EView'].mjp),
                                this['player_effects'] = [];
                            for (var K = game['EView']['liqibang'], Q = game['EView']['lobby_bg'], B = 0; B < this['player_datas']['length']; B++) {
                                for (var H = this['player_datas'][B]['character'], h = {}, p = K; Q >= p; p++) {
                                    var b = game['GameUtility']['get_view_default_item_id'](p);
                                    h[p] = b;
                                }
                                if (H) {
                                    var u = this['player_datas'][B]['views'],
                                        c = cfg['item_definition']['character'].get(H['charid']);
                                    if (c && (h[game['EView']['hand_model']] = c.hand), u)
                                        for (var d = 0; d < u['length']; d++) {
                                            var v = u[d].slot,
                                                l = u[d]['item_id'];
                                            l && (h[v] = l);
                                        }
                                } else
                                    this['player_datas'][B]['character'] = {
                                        charid: game['GameUtility']['get_default_ai_character'](),
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: game['GameUtility']['get_default_ai_skin'](),
                                        is_upgraded: !1
                                    };
                                this['player_effects'].push(h);
                            }
                            uiscript['UI_DesktopInfo'].Inst['initRoom'](),
                                uiscript['UI_DesktopInfo'].Inst['refreshSeat'](),
                                uiscript['UI_Hangup_Warn'].Inst['enable'] = !1,
                                uiscript['UI_TingPai'].Inst['enable'] = !0,
                                uiscript['UI_HuanSanZhange'].Inst['enable'] = !1,
                                uiscript['UI_HuanSanZhange_ChangeType'].Inst['enable'] = !1,
                                uiscript['UI_Dingque'].Inst['enable'] = !1,
                                this['index_change'] = 0,
                                this['index_ju'] = 0,
                                this['index_ben'] = 0,
                                this['index_player'] = 0,
                                this['index_chuanma_ju'] = 0,
                                this['gameing'] = !0,
                                this['left_tile_count'] = 69,
                                this['duringReconnect'] = !1,
                                this['current_step'] = 0,
                                this['action_index'] = 0,
                                this['dochain_fast'] = !1,
                                this['actionList'] = [],
                                this['setAutoHule'](!1),
                                this['setAutoMoQie'](!1),
                                this['setAutoNoFulu'](!1),
                                uiscript['UI_DesktopInfo'].Inst['resetFunc'](),
                                this['SetChangJuShow'](this['index_change'], this['index_ju'], this['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](this['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1);
                            for (var B = 0; 4 > B; B++)
                                this['players'][B]['onInitRoom'](this['localPosition2Seat'](B)), this['players'][B]['SetScore'](0, 0), this['players'][B]['trans_ind']['active'] = !1, this['players'][B]['RefreshDir']();
                            if (this['RefreshPaiLeft'](), uiscript['UI_GameEnd'].Inst['forceclose'](), uiscript['UI_RankChange'].Inst['close'](), uiscript['UI_MJReward'].Inst['close'](), Laya['timer']['frameOnce'](6, this, function() {
                                    W['Reset'](),
                                        app.Log.log('场景init结束：' + Laya.Stat['currentMemorySize'] / 1024 / 1024 + ' MB'),
                                        e && e.run();
                                }), this['state_cache'] = {}, uiscript['UI_Activity']['activity_is_running'](uiscript['UI_Activity_DuanWu_Point']['activity_id']) && (this['state_cache']['duanwu_point'] = uiscript['UI_Activity_DuanWu_Point']['point'], this['state_cache']['duanwu_rank'] = uiscript['UI_Activity_DuanWu_Rank']['point']), this['is_muyu_mode']()) {
                                var S = 'scene/effect_muyu_' + GameMgr['client_language'] + '.lh';
                                this['muyu_effect'] = new game['EffectBase'](S),
                                    this['muyu_effect'].root['active'] = !1,
                                    this['trans_container_effect']['addChild'](this['muyu_effect'].root);
                            }
                        },
                        M['prototype']['changeMainbody'] = function(y) {
                            if (this.mode != s.play && this['gameing']) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({ 'change_seat_to': y }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({ 'change_seat_to': y }));
                                    }
                                }));
                                this.seat = y,
                                    uiscript['UI_DesktopInfo'].Inst['refreshSeat'](!0);
                                for (var L = 0; 4 > L; L++)
                                    this['players'][L]['onInitRoom'](this['localPosition2Seat'](L)), this['players'][L]['trans_ind']['active'] = !1, this['players'][L]['RefreshDir']();
                                this['Reset'](),
                                    this.mode == s['paipu'] && uiscript['UI_Replay'].Inst['onChangeMainBody'](),
                                    this.mode == s['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['onChangeMainbody'](),
                                    this.mode == s['live_broadcast'] && uiscript['UI_Live_Broadcast1'].Inst['onChangeMainbody']();
                            }
                        },
                        M['prototype']['trySyncGame'] = function() {
                            var y = this;
                            this['Reset'](),
                                this['duringReconnect'] = !0,
                                this['hangupCount'] = 0,
                                app['NetAgent']['sendReq2MJ']('FastTest', 'syncGame', {
                                    round_id: this['round_id'],
                                    step: 0
                                }, function(L, F) {
                                    L || F['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('syncGame', L, F), game['Scene_MJ'].Inst['ForceOut']()) : (app.Log.log('[syncGame2] ' + JSON['stringify'](F)), F['isEnd'] ? (uiscript['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2229)), game['Scene_MJ'].Inst['GameEnd']()) : (y['fetchLinks'](), y['Reset'](), y['duringReconnect'] = !0, y['syncGameByStep'](F['game_restore'])));
                                });
                        },
                        M['prototype']['syncGameByStep'] = function(L) {
                            var F = this,
                                s = !1;
                            if (this['timestoped'] = !1, this['handles_after_timerun'] = [], this['action_running'] = !1, uiscript['UI_GameStop'].Inst['close'](), this['hangupCount'] = 0, uiscript['UI_Hangup_Warn'].Inst['enable'] = !1, L && 5 === L['game_state'] && (this['timestoped'] = !0), GameMgr.Inst['EnterMJ'](), L && L['actions'] && L['actions']['length'] > 0) {
                                var actions = [];
                                for (var idx = 0; idx < a.actions.length; idx++) {
                                    var rawAction = L.actions[idx];
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
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'sync_game_actions': actions
                                        }));
                                    }
                                }));
                                this['actionList'] = [];
                                var i = -1;
                                null != L['passed_waiting_time'] && void 0 != L['passed_waiting_time'] && (i = 1000 * L['passed_waiting_time']);
                                for (var Z = 0; Z < L['actions']['length']; Z++) {
                                    var N = L['actions'][Z],
                                        e = Z == L['actions']['length'] - 1 ? i : -1,
                                        W = net['ProtobufManager']['lookupType']('lq.' + N.name);
                                    if (!W)
                                        throw new Error('ERR_CANNOT_FIND_MESSAGE_TYPE, lq.' + N.name);
                                    var D = W['decode'](N.data);
                                    this['current_step'] = N.step;
                                    try {
                                        switch (N.name) {
                                            case 'ActionNewRound':
                                                y['ActionNewRound']['fastplay'](D, e);
                                                break;
                                            case 'ActionChangeTile':
                                                y['ActionChangeTile']['fastplay'](D, e);
                                                break;
                                            case 'ActionDiscardTile':
                                                y['ActionDiscardTile']['fastplay'](D, e);
                                                break;
                                            case 'ActionDealTile':
                                                y['ActionDealTile']['fastplay'](D, e);
                                                break;
                                            case 'ActionChiPengGang':
                                                y['ActionChiPengGang']['fastplay'](D, e);
                                                break;
                                            case 'ActionAnGangAddGang':
                                                y['ActionAnGangAddGang']['fastplay'](D, e);
                                                break;
                                            case 'ActionHule':
                                                y['ActionHule']['fastplay'](D, e),
                                                    s = !0;
                                                break;
                                            case 'ActionHuleXueZhanMid':
                                                y['ActionHuleXueZhanMid']['fastplay'](D, e),
                                                    s = !0;
                                                break;
                                            case 'ActionHuleXueZhanEnd':
                                                y['ActionHuleXueZhanEnd']['fastplay'](D, e),
                                                    s = !0;
                                                break;
                                            case 'ActionLiuJu':
                                                y['ActionLiuJu']['fastplay'](D, e),
                                                    s = !0;
                                                break;
                                            case 'ActionNoTile':
                                                y['ActionNoTile']['fastplay'](D, e),
                                                    s = !0;
                                                break;
                                            case 'ActionBaBei':
                                                y['ActionBabei']['fastplay'](D, e);
                                                break;
                                            case 'ActionSelectGap':
                                                y['ActionSelectGap']['fastplay'](D, e);
                                                break;
                                            case 'ActionGangResult':
                                                y['ActionGangResult']['fastplay'](D, e);
                                                break;
                                            case 'ActionGangResultEnd':
                                                y['ActionGangResultEnd']['fastplay'](D, e);
                                                break;
                                            case 'ActionLockTile':
                                                y['ActionLockTile']['fastplay'](D, e);
                                                break;
                                            case 'ActionRevealTile':
                                                y['ActionRevealTile']['fastplay'](D, e);
                                                break;
                                            case 'ActionUnveilTile':
                                                y['ActionUnveilTile']['fastplay'](D, e);
                                                break;
                                            case 'ActionNewCard':
                                                y['ActionNewCard']['fastplay'](D, e);
                                                break;
                                            case 'ActionFillAwaitingTiles':
                                                y['ActionFillAwaitingTiles']['fastplay'](D, e);
                                        }
                                    } catch (B) {
                                        var E = {};
                                        E['error'] = B['message'],
                                            E['stack'] = B['stack'],
                                            E['method'] = 'syncGameByStep',
                                            E.name = N.name,
                                            E.data = N,
                                            E.step = Z,
                                            GameMgr.Inst['onFatalError'](E);
                                        break;
                                    }
                                }
                                Laya['timer'].once(1000, this, function() {
                                    F['duringReconnect'] = !1,
                                        uiscript['UI_Loading'].Inst['close'](),
                                        s || y['BgmListMgr']['PlayMJBgm'](),
                                        F['DoChainAction']();
                                });
                            } else
                                this['duringReconnect'] = !1, this['timestoped'] ? this['handles_after_timerun'].push(Laya['Handler']['create'](this, function() {
                                    app['NetAgent']['sendReq2MJ']('FastTest', 'confirmNewRound', {}, function() {});
                                })) : app['NetAgent']['sendReq2MJ']('FastTest', 'confirmNewRound', {}, function() {});
                            app.Log.log('finishSyncGame11'),
                                app['NetAgent']['sendReq2MJ']('FastTest', 'finishSyncGame', {}, function() {}),
                                M.Inst['fetchLinks'](),
                                this['timestoped'] && uiscript['UI_GameStop'].Inst.show();
                        },
                        M['prototype']['setGameStop'] = function(y) {
                            if (y != this['timestoped'])
                                if (this['timestoped'] = y, this['timestoped'])
                                    this['handles_after_timerun'] = [], uiscript['UI_GameStop'].Inst.show();
                                else {
                                    if (uiscript['UI_GameStop'].Inst['close'](), this['handles_after_timerun'])
                                        for (var L = 0; L < this['handles_after_timerun']['length']; L++)
                                            this['handles_after_timerun'][L].run();
                                    this['handles_after_timerun'] = [],
                                        this['hangupCount'] = 0;
                                }
                        },
                        M['prototype']['CreatePai3D'] = function(y) {
                            var L = this['desktop3D']['getChildByName']('all')['getChildByName']('mjp')['getChildByName'](y['touming'] ? 'touming' : y['toString']())['clone'](),
                                F = this['desktop3D']['getChildByName']('all')['getChildByName']('maque_outline')['clone'](),
                                s = L,
                                i = (new caps['BaseMaterial'](caps['Cartoon']['filename']), 'scene/Assets/Resource/mjpai/');
                            if (y['touming']) {
                                var Z = new caps['Material_TouMingPai'](caps['TouMingPai']['filename']),
                                    N = 'scene/Assets/Resource/mjpai/';
                                ('en' == GameMgr['client_language'] || 'kr' == GameMgr['client_language']) && (N += 'en_kr/'),
                                N += M['en_mjp'] ? 'toumingpai_0/mjp.png' : 'toumingpai/mjp.png',
                                    Z['setTexture'](caps['TouMingPai']['TEXTURE'], Laya['loader']['getRes'](N)),
                                    s['meshRender']['sharedMaterial'] = Z;
                            } else {
                                var e = new caps['BaseMaterial'](caps['Cartoon']['filename']),
                                    W = 'scene/Assets/Resource/mjpai/';
                                ('en' == GameMgr['client_language'] || 'kr' == GameMgr['client_language']) && (W += 'en_kr/'),
                                W += this['mjp_res_name'] + '/mjp.png',
                                    e['setTexture'](caps['Cartoon']['TEXTURE'], Laya['loader']['getRes'](W)),
                                    e['setNumber'](caps['Cartoon']['SPLIT'], 0.4),
                                    e['setColor'](caps['Cartoon']['COLOR_LIGHT'], new Laya['Vector3'](1, 1, 1)),
                                    e['setColor'](caps['Cartoon']['COLOR_UNLIGHT'], new Laya['Vector3'](0.788, 0.788, '0.8235')),
                                    e['setColor'](caps['Cartoon']['COLOR'], new Laya['Vector3'](1, 1, 1)),
                                    s['meshRender']['sharedMaterial'] = e;
                            }
                            var D = F;
                            L['addChild'](D),
                                D['transform']['localPosition'] = new Laya['Vector3'](0, 0, 0),
                                D['transform']['localScale'] = new Laya['Vector3'](1, 1, 1),
                                D['transform']['localRotation'] = new Laya['Quaternion'](0, 0, 0, 0);
                            var B = D,
                                E = new caps['Material_Outline'](caps['Outline']['filename']);
                            E['renderQueue'] = 2999,
                                E['setColor'](caps['Outline']['OUTLINE_COLOR'], new Laya['Vector3'](0.165, 0.192, 0.204)),
                                E['setNumber'](caps['Outline']['OUTLINE_ALPHA'], 0.6),
                                E['setNumber'](caps['Outline']['OUTLINE'], '0.0012'),
                                B['meshRender']['sharedMaterial'] = E;
                            var f = new Laya['Sprite3D']();
                            if (f.name = 'effect', f['transform']['localPosition'] = new Laya['Vector3'](0, 0, 0), f['transform']['localScale'] = new Laya['Vector3'](1, 1, 1), f['transform']['localRotation'] = new Laya['Quaternion'](0, 0, 0, 0), L['addChild'](f), y['touming']) {
                                var z = this['desktop3D']['getChildByName']('all')['getChildByName']('touming')['clone']();
                                z.name = 'touming',
                                    L['addChild'](z),
                                    z['transform']['localPosition'] = new Laya['Vector3'](0, 0, 0.00001),
                                    z['transform']['localScale'] = new Laya['Vector3'](1, 1, 1),
                                    z['transform']['localRotation'] = new Laya['Quaternion'](0, 0, 0, 0);
                                var d = new caps['Material_TwoSided'](caps['TwoSided']['filename']),
                                    P = 0;
                                switch (y.type) {
                                    case mjcore['E_MJPai'].m:
                                        P = 0;
                                        break;
                                    case mjcore['E_MJPai'].p:
                                        P = 10;
                                        break;
                                    case mjcore['E_MJPai'].s:
                                        P = 20;
                                        break;
                                    default:
                                        P = 29;
                                }
                                y.dora || (P += y['index']);
                                var _ = (6 + P % 7 * 104) / 1024,
                                    u = (6 + 144 * Math['floor'](P / 7)) / 1024,
                                    i = 'scene/Assets/Resource/mjpai/';
                                ('en' == GameMgr['client_language'] || 'kr' == GameMgr['client_language']) && (i += 'en_kr/'),
                                i += M['en_mjp'] ? 'toumingpai_0/mjp.png' : 'toumingpai/mjp.png',
                                    d['setTexture'](caps['TwoSided']['TEXTURE'], Laya['loader']['getRes'](i)),
                                    d['setColor'](caps['TwoSided']['COLOR'], new Laya['Vector3'](1, 1, 1)),
                                    d['setNumber'](caps['TwoSided']['OFFSET_X'], _),
                                    d['setNumber'](caps['TwoSided']['OFFSET_Y'], u),
                                    d['renderQueue'] = 3000,
                                    z['getChildByName']('twosided')['meshRender']['sharedMaterial'] = d,
                                    z['getChildByName']('touying')['getChildByName']('pai')['meshRender']['sharedMaterial'] = d,
                                    z['getChildByName']('touying')['getChildByName']('bg')['meshRender']['sharedMaterial']['renderQueue'] = 2998;
                            }
                            return L;
                        },
                        M['prototype']['RefreshPlayerIndicator'] = function() {
                            for (var y = 0; 4 > y; y++)
                                this['players'][y]['trans_ind']['active'] = y == this['seat2LocalPosition'](this['index_player']), this['players'][y]['RefreshScore'](this['mainrole']['score']);
                        },
                        M['prototype']['setAutoHule'] = function(y) {
                            this['auto_hule'] = y,
                                this['_PendingAuto'](!0);
                        },
                        M['prototype']['setAutoNoFulu'] = function(y) {
                            this['auto_nofulu'] = y,
                                this['_PendingAuto'](!0);
                        },
                        M['prototype']['setAutoMoQie'] = function(y) {
                            this['auto_moqie'] = y,
                                this['_PendingAuto'](!0);
                        },
                        M['prototype']['setAutoLiPai'] = function(y) {
                            this['auto_liqi'] = y,
                                y && this['gameing'] && this['mainrole'] && this['mainrole']['LiPai'](!1, !1, !0);
                        },
                        M['prototype']['setScoreDelta'] = function(y) {
                            for (var L = 1; 4 > L; L++)
                                this['players'][L]['duringShowDetla'] = y, this['players'][L]['RefreshScore'](this['mainrole']['score']);
                        },
                        M['prototype']['SetChangJuShow'] = function(y, L, F) {
                            if (this['is_chuanma_mode']()) {
                                var s = new Laya['Vector4']('0.1666', 1, 0, 0);
                                'en' == GameMgr['client_language'] && (s = new Laya['Vector4'](1, 0.2, 0, -0.8)),
                                    this['plane_chang']['meshRender']['material']['tilingOffset'] = s;
                                var i = new Laya['Vector4'](0.1, 1, 0.1 * F, 0);
                                this['plane_ju']['meshRender']['material']['tilingOffset'] = i;
                            } else {
                                var s = new Laya['Vector4'](0.166, 1, 0.166 + y % 4 * 0.166, 0);
                                'en' == GameMgr['client_language'] && (s = new Laya['Vector4'](1, 0.2, 0, 0.2 * (y % 4 - 3))),
                                    this['plane_chang']['meshRender']['material']['tilingOffset'] = s,
                                    this['plane_chang_reveal']['meshRender']['material']['tilingOffset'] = s;
                                var i = new Laya['Vector4'](0.1, 1, 0.1 * L, 0);
                                this['plane_ju']['meshRender']['material']['tilingOffset'] = i,
                                    this['plane_ju_reveal']['meshRender']['material']['tilingOffset'] = i;
                            }
                        },
                        M['prototype']['SetLeftPaiShow'] = function(y) {
                            y >= 100 ? y = 99 : 0 > y && (y = 0);
                            for (var L = [y % 10, Math['floor'](y / 10)], F = 0; F < L['length']; F++) {
                                var s = new Laya['Vector4'](0.1, 1, 0.1 * L[F], 0);
                                this['num_left_show'][F]['meshRender']['material']['tilingOffset'] = s,
                                    this['num_left_show_reveal'][F]['meshRender']['material']['tilingOffset'] = s;
                            }
                        },
                        M['prototype']['RefreshPaiLeft'] = function() {
                            this['SetLeftPaiShow'](this['left_tile_count']);
                        },
                        M['prototype']['Reset'] = function() {
                            app.Log.log('DesktopMgr.Reset'),
                                this['operation_showing'] = !1,
                                this['oplist'] = [],
                                Laya['timer']['clearAll'](y['ActionAnGangAddGang']),
                                Laya['timer']['clearAll'](y['ActionChiPengGang']),
                                Laya['timer']['clearAll'](y['ActionDealTile']),
                                Laya['timer']['clearAll'](y['ActionDiscardTile']),
                                Laya['timer']['clearAll'](y['ActionHule']),
                                Laya['timer']['clearAll'](y['ActionHuleXueZhanEnd']),
                                Laya['timer']['clearAll'](y['ActionHuleXueZhanMid']),
                                Laya['timer']['clearAll'](y['ActionLiqi']),
                                Laya['timer']['clearAll'](y['ActionLiuJu']),
                                Laya['timer']['clearAll'](y['ActionNewRound']),
                                Laya['timer']['clearAll'](y['ActionNoTile']),
                                Laya['timer']['clearAll'](y['ActionOperation']),
                                Laya['timer']['clearAll'](y['ActionChangeTile']),
                                Laya['timer']['clearAll'](y['ActionSelectGap']),
                                Laya['timer']['clearAll'](y['ActionGangResult']),
                                Laya['timer']['clearAll'](y['ActionGangResultEnd']),
                                Laya['timer']['clearAll'](y['ActionRevealTile']),
                                Laya['timer']['clearAll'](y['ActionUnveilTile']),
                                Laya['timer']['clearAll'](y['ActionLockTile']),
                                Laya['timer']['clearAll'](y['ActionNewCard']),
                                Laya['timer']['clearAll'](y['ActionFillAwaitingTiles']),
                                Laya['timer']['clearAll'](this),
                                uiscript['UI_DesktopInfo'].Inst['reset_rounds'](),
                                uiscript['UI_Replay'].Inst['reset'](),
                                this['effect_pai_canchi'] && (this['effect_pai_canchi']['destroy'](), this['effect_pai_canchi'] = null);
                            for (var L = 0; 4 > L; L++)
                                this['players'][L]['Reset']();
                            this['tingpais'] = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                this.md5 = '',
                                this['current_step'] = -1,
                                this['muyu_info'] = null,
                                this['muyu_effect'] && (this['muyu_effect'].root['active'] = !1, Laya['timer']['clearAll'](this['muyu_effect'])),
                                this['mind_voice_seat'] = -1,
                                this['mind_voice_type'] = '',
                                this['during_playing_mind_voice'] = !1;
                        },
                        M['prototype']['setScores'] = function(L) {
                            for (var F = 0; F < L['length']; F++)
                                this['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['SetScore'](L[F], L[this.seat]);
                        },
                        M['prototype']['_PendingAuto'] = function(L) {
                            if (void 0 === L && (L = !1), null == this['oplist'] || 0 == this['oplist']['length'])
                                return !1;
                            try {
                                var F = !1,
                                    s = !1,
                                    i = !1,
                                    M = !1,
                                    Z = !1,
                                    N = !1,
                                    e = !1,
                                    W = !1,
                                    D = this['operation_showing'];
                                this['operation_showing'] = !0;
                                var B = null,
                                    E = 0;
                                this['liqi_select'] = [];
                                for (var f = !0, z = 0; z < this['oplist']['length']; z++) {
                                    var d = this['oplist'][z],
                                        P = d.type;
                                    switch (P) {
                                        case mjcore['E_PlayOperation'].eat:
                                        case mjcore['E_PlayOperation'].peng:
                                        case mjcore['E_PlayOperation']['ming_gang']:
                                        case mjcore['E_PlayOperation'].rong:
                                        case mjcore['E_PlayOperation']['unveil']:
                                            F = !0;
                                            break;
                                        case mjcore['E_PlayOperation']['an_gang']:
                                        case mjcore['E_PlayOperation']['add_gang']:
                                        case mjcore['E_PlayOperation'].liqi:
                                        case mjcore['E_PlayOperation'].zimo:
                                        case mjcore['E_PlayOperation']['babei']:
                                        case mjcore['E_PlayOperation']['revealliqi']:
                                        case mjcore['E_PlayOperation']['reveal']:
                                        case mjcore['E_PlayOperation']['locktile']:
                                            s = !0;
                                        case mjcore['E_PlayOperation']['jiuzhongjiupai']:
                                            s = !0;
                                            break;
                                        case mjcore['E_PlayOperation']['huansanzhang']:
                                            i = !0;
                                            break;
                                        case mjcore['E_PlayOperation']['dingque']:
                                            M = !0,
                                                E = d['gap_type'];
                                            break;
                                        case mjcore['E_PlayOperation']['selecttile']:
                                            Z = !0;
                                    }
                                    if (P == mjcore['E_PlayOperation']['dapai'])
                                        W = !0, B = this['oplist'][z]['combination'];
                                    else if (P == mjcore['E_PlayOperation'].liqi) {
                                        W = !0,
                                            this['liqi_select'] = [];
                                        for (var _ = 0; _ < this['oplist'][z]['combination']['length']; _++)
                                            this['liqi_select'].push(mjcore['MJPai']['Create'](this['oplist'][z]['combination'][_]));
                                    } else
                                        P == mjcore['E_PlayOperation'].rong ? N = !0 : P == mjcore['E_PlayOperation'].zimo ? e = !0 : P == mjcore['E_PlayOperation']['huansanzhang'] && (L || y['DesktopMgr'].Inst['mainrole']['setHuanSanZhangDefaultTile'](d['change_tiles'], d['change_tile_states']));
                                    P != mjcore['E_PlayOperation']['dapai'] && P != mjcore['E_PlayOperation']['reveal'] && (f = !1);
                                }
                                var u = this['auto_hule'],
                                    l = this['auto_nofulu'],
                                    q = this['auto_moqie'];
                                if (this['anpai'] && f && q) {
                                    if (this['mainrole']['trans_liqi']['active'])
                                        return app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                            cancel_operation: !0
                                        }, function() {}), void 0;
                                    if (null != this['mainrole']['last_tile'])
                                        return this['Action_QiPai'](this['mainrole']['last_tile'].val, !0, !0, this['mainrole']['last_tile']['is_open']), !1;
                                }
                                if (u && (N || e))
                                    return Laya['timer'].once(800, this, function() {
                                        N ? app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                            type: mjcore['E_PlayOperation'].rong,
                                            index: 0
                                        }, function() {}) : e && app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                            type: mjcore['E_PlayOperation'].zimo,
                                            index: 0
                                        }, function() {});
                                    }), this['ClearOperationShow'](), !1;
                                if (M)
                                    uiscript['UI_Dingque'].Inst.show(E);
                                else if (i)
                                    L || uiscript['UI_HuanSanZhange'].Inst.show();
                                else if (F) {
                                    if (l && !N && !e)
                                        return app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                            cancel_operation: !0
                                        }, function() {}), this['ClearOperationShow'](), !1;
                                    D || uiscript['UIMgr'].Inst['ShowChipenghu'](this['oplist']);
                                } else if (s && (D || uiscript['UIMgr'].Inst['ShowLiqiZimo'](this['oplist'])), W) {
                                    if (q && !uiscript['UI_LiQiZiMo'].Inst['enable'] && null != this['mainrole']['last_tile'])
                                        return this['Action_QiPai'](this['mainrole']['last_tile'].val, !0, !0, this['mainrole']['last_tile']['is_open']), !1;
                                    if (!D && (this['mainrole']['can_discard'] = !0, B && B['length'] > 0)) {
                                        for (var o = [], z = 0; z < B['length']; z++)
                                            o.push(mjcore['MJPai']['Create'](B[z]));
                                        this['mainrole']['ChiTiSelect'](o);
                                    }
                                } else
                                    this['mainrole']['can_discard'] = !1;
                                if (Z) {
                                    if (q)
                                        return uiscript['UI_Astrology'].Inst['selectTile'](0), !1;
                                    D || uiscript['UI_Astrology'].Inst['showSelections']();
                                }
                            } catch (K) {
                                var Q = {};
                                Q['error'] = K['message'],
                                    Q['stack'] = K['stack'],
                                    Q['method'] = '_PendingAuto',
                                    Q.name = 'DesktopMgr',
                                    GameMgr.Inst['onFatalError'](Q);
                            }
                            return !0;
                        },
                        M['prototype']['OperationTimeOut'] = function() {
                            if (null != this['oplist'] && 0 != this['oplist']['length']) {
                                {
                                    var y = !1,
                                        L = !1,
                                        F = !1,
                                        s = !1,
                                        i = !1;
                                    this['operation_showing'];
                                }
                                this['operation_showing'] = !0;
                                for (var M = null, Z = 0; Z < this['oplist']['length']; Z++) {
                                    switch (this['oplist'][Z].type) {
                                        case mjcore['E_PlayOperation'].eat:
                                        case mjcore['E_PlayOperation'].peng:
                                        case mjcore['E_PlayOperation']['ming_gang']:
                                        case mjcore['E_PlayOperation'].rong:
                                            y = !0;
                                            break;
                                        case mjcore['E_PlayOperation']['an_gang']:
                                        case mjcore['E_PlayOperation']['add_gang']:
                                        case mjcore['E_PlayOperation'].liqi:
                                        case mjcore['E_PlayOperation'].zimo:
                                        case mjcore['E_PlayOperation']['babei']:
                                            L = !0;
                                    }
                                    (this['oplist'][Z].type == mjcore['E_PlayOperation']['dapai'] || this['oplist'][Z].type == mjcore['E_PlayOperation'].liqi) && (i = !0, this['oplist'][Z].type == mjcore['E_PlayOperation']['dapai'] && (M = this['oplist'][Z]['combination'])),
                                    this['oplist'][Z].type == mjcore['E_PlayOperation'].rong && (F = !0),
                                        this['oplist'][Z].type == mjcore['E_PlayOperation'].zimo && (s = !0);
                                }
                                if (y)
                                    F ? app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                        type: mjcore['E_PlayOperation'].rong,
                                        index: 0,
                                        timeuse: 1000000
                                    }, function() {}) : app['NetAgent']['sendReq2MJ']('FastTest', 'inputChiPengGang', {
                                        cancel_operation: !0,
                                        timeuse: 1000000
                                    }, function() {}), this['ClearOperationShow']();
                                else if (s)
                                    app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                        type: mjcore['E_PlayOperation'].zimo,
                                        index: 0,
                                        timeuse: 1000000
                                    }, function() {});
                                else if (i)
                                    if (this['mainrole']['during_liqi']) {
                                        for (var N = -1, Z = 0; Z < this['mainrole'].hand['length']; Z++)
                                            if (this['mainrole'].hand[Z]['valid']) {
                                                N = Z;
                                                break;
                                            }
                                        this['Action_LiQi'](this['mainrole'].hand[N].val, this['mainrole'].hand[N] === this['mainrole']['last_tile'], this['mainrole'].hand[N]['is_open']);
                                    } else {
                                        var e = null,
                                            W = !1,
                                            D = !1;
                                        if (null == e && this['mainrole']['last_tile'] && this['mainrole']['last_tile']['valid'] && (e = this['mainrole']['last_tile'].val, W = !0, D = this['mainrole']['last_tile']['is_open']), null == e)
                                            for (var Z = this['mainrole'].hand['length'] - 1; Z >= 0; Z--)
                                                if (this['mainrole'].hand[Z]['valid']) {
                                                    e = this['mainrole'].hand[Z].val,
                                                        W = !1,
                                                        D = this['mainrole'].hand[Z]['is_open'];
                                                    break;
                                                }
                                        this['Action_QiPai'](e, W, !0, D);
                                    }
                                else
                                    L && (app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                        cancel_operation: !0,
                                        timeuse: 1000000
                                    }, function() {}), this['ClearOperationShow']());
                            }
                        },
                        M['prototype']['WhenDoOperation'] = function() {
                            this['hangupCount'] = 0,
                                this['ClearOperationShow']();
                        },
                        M['prototype']['ClearOperationShow'] = function() {
                            this['operation_showing'] = !1,
                                this['oplist'] = [],
                                uiscript['UI_Huleshow'].Inst['enable'] = !1,
                                uiscript['UIMgr'].Inst['CloseLiuJu'](),
                                uiscript['UIMgr'].Inst['CloseWin'](),
                                uiscript['UIMgr'].Inst['CloseChipenghu'](),
                                uiscript['UIMgr'].Inst['CloseLiqiZimo'](),
                                uiscript['UI_Hu_Xuezhan'].Inst['enable'] = !1,
                                Laya['timer']['clearAll'](y['ActionOperation']),
                                uiscript['UI_ScoreChange'].Inst['enable'] = !1,
                                this['mainrole']['can_discard'] = !1,
                                uiscript['UI_DesktopInfo'].Inst['closeCountDown']();
                        },
                        M['prototype']['WhenLiqiInfo'] = function(y) {
                            var L = this;
                            y && Laya['timer'].once(300, this, function() {
                                var F = y.seat,
                                    s = y['score'];
                                L['players'][L['seat2LocalPosition'](F)]['ShowLiqi'](),
                                    L['players'][L['seat2LocalPosition'](F)]['SetScore'](s, L['mainrole']['score']),
                                    uiscript['UI_DesktopInfo'].Inst['setLiqibang'](y['liqibang']);
                            });
                        },
                        M['prototype']['WhenDoras'] = function(L, F) {
                            var s = this;
                            if (!(null == L || void 0 == L || 0 == L['length'] || L['length'] <= this.dora['length']) && L) {
                                for (var i = 0; i < L['length']; i++)
                                    this.dora['length'] > i ? this.dora[i] = mjcore['MJPai']['Create'](L[i]) : this.dora.push(mjcore['MJPai']['Create'](L[i])), uiscript['UI_DesktopInfo'].Inst['setDora'](i, this.dora[i]);
                                Laya['timer']['frameOnce'](1, this, function() {
                                        for (var y = 0; 4 > y; y++)
                                            s['players'][y]['OnDoraRefresh']();
                                    }),
                                    F || y['AudioMgr']['PlayAudio'](215);
                            }
                        },
                        M['prototype']['Action_QiPai'] = function(y, L, F, s) {
                            app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                    type: mjcore['E_PlayOperation']['dapai'],
                                    tile: y['toString'](),
                                    moqie: L,
                                    timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                    tile_state: s ? 1 : 0
                                }, function(y) {
                                    y ? app.Log['Error']('Action_QiPai 失败') : app.Log.info('Action_QiPai 成功');
                                }),
                                F ? this['ClearOperationShow']() : this['WhenDoOperation']();
                        },
                        M['prototype']['Action_AnPai'] = function(y, L, F, s) {
                            app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                    type: mjcore['E_PlayOperation']['reveal'],
                                    tile: y['toString'](),
                                    moqie: L,
                                    timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                    tile_state: s ? 1 : 0
                                }, function(y) {
                                    y ? app.Log['Error']('Action_AnPai 失败') : app.Log.info('Action_AnPai 成功');
                                }),
                                F ? this['ClearOperationShow']() : this['WhenDoOperation']();
                        },
                        M['prototype']['Action_LiQi'] = function(y, L, F) {
                            if (!this['liqi_select'] || 0 == this['liqi_select']['length'])
                                return !1;
                            for (var s = !1, i = 0; i < this['liqi_select']['length']; i++)
                                if (0 == mjcore['MJPai']['Distance'](this['liqi_select'][i], y)) {
                                    s = !0;
                                    break;
                                }
                            return s ? (app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                type: mjcore['E_PlayOperation'].liqi,
                                tile: y['toString'](),
                                moqie: L,
                                timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                tile_state: F ? 1 : 0
                            }, function(y) {
                                y ? app.Log['Error']('Action_LiQi 失败') : app.Log.info('Action_LiQi 成功');
                            }), this['WhenDoOperation'](), !0) : !1;
                        },
                        M['prototype']['Action_AnPaiLiQi'] = function(y, L, F) {
                            if (!this['liqi_select'] || 0 == this['liqi_select']['length'])
                                return !1;
                            for (var s = !1, i = 0; i < this['liqi_select']['length']; i++)
                                if (0 == mjcore['MJPai']['Distance'](this['liqi_select'][i], y)) {
                                    s = !0;
                                    break;
                                }
                            return s ? (app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                type: mjcore['E_PlayOperation']['revealliqi'],
                                tile: y['toString'](),
                                moqie: L,
                                timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                tile_state: F ? 1 : 0
                            }, function(y) {
                                y ? app.Log['Error']('Action_LiQi 失败') : app.Log.info('Action_LiQi 成功');
                            }), this['WhenDoOperation'](), !0) : !1;
                        },
                        M['prototype']['Action_HuanSanZhange'] = function(y, L) {
                            app['NetAgent']['sendReq2MJ']('FastTest', 'inputOperation', {
                                    type: mjcore['E_PlayOperation']['huansanzhang'],
                                    timeuse: uiscript['UI_DesktopInfo'].Inst['_timecd']['timeuse'],
                                    tile_states: L,
                                    change_tiles: y
                                }, function(y) {
                                    y ? app.Log['Error']('Action_HuanSanZhange 失败') : app.Log.info('Action_HuanSanZhange 成功');
                                }),
                                this['WhenDoOperation']();
                        },
                        M['prototype']['SetLastQiPai'] = function(y, L) {
                            this['lastqipai'] = L,
                                this['lastpai_seat'] = y,
                                this['effect_pai_canchi'] && (this['effect_pai_canchi']['destroy'](), this['effect_pai_canchi'] = null);
                        },
                        M['prototype']['ShowHuleEffect'] = function(L, F, s, i, M) {
                            var Z = this;
                            if (void 0 === M && (M = 0), null != L) {
                                F.y = 0;
                                var N = 'scene/effect_hupai_default.lh',
                                    e = 213;
                                if (s) {
                                    var W = cfg['item_definition'].view.get(s);
                                    W && (N = 'scene/' + W['res_name'] + '.lh', e = W['audio_id']);
                                }
                                var D = new game['EffectBase'](N);
                                if (this['trans_container_effect']['addChild'](D.root), D.root['transform']['position'] = F, D.root['active'] = !0, 'scene/ron_hl.lh' == N) {
                                    var B = this['seat2LocalPosition'](i);
                                    D.root['transform']['localRotationEuler'] = 0 == B ? new Laya['Vector3'](0, 0, 0) : 1 == B ? new Laya['Vector3'](0, 90, 0) : 2 == B ? new Laya['Vector3'](0, 180, 0) : new Laya['Vector3'](0, 270, 0);
                                } else if ('scene/effect_hupai_yanhua.lh' == N)
                                    Laya['timer'].once(600, this, function() {
                                        var y = new game['EffectBase']('scene/effect_hupai_yanhua_bang.lh');
                                        Z['desktop3D']['addChild'](y.root),
                                            y.root['transform']['position'] = new Laya['Vector3'](0, 0, 0),
                                            y.root['active'] = !0,
                                            Laya['timer'].once(2000, Z, function() {
                                                y['destroy']();
                                            });
                                    });
                                else if ('scene/ron_22chunjie.lh' == N) {
                                    var E = new game['EffectBase']('scene/ron_22chunjie_hongdi.lh');
                                    this['desktop3D']['addChild'](E.root),
                                        E['addLoadedListener'](Laya['Handler']['create'](this, function() {
                                            for (var y = game['Tools']['GetNodeByNameInChildren'](E.root, 'hongdi'), L = 0, F = y['_childs']; L < F['length']; L++) {
                                                var s = F[L];
                                                s['particleRender']['material']['renderQueue'] = 3001;
                                            }
                                        })),
                                        E.root['transform']['position'] = new Laya['Vector3'](0, 0, 0),
                                        E.root['active'] = !0,
                                        Laya['timer'].once(3000, this, function() {
                                            E['destroy']();
                                        });
                                }
                                var f = !1,
                                    z = L['model']['parent'],
                                    d = L['model']['transform']['rotation']['clone'](),
                                    P = L['model']['transform']['worldMatrix']['clone']();
                                D['addLoadedListener'](Laya['Handler']['create'](this, function() {
                                    if (!f) {
                                        y['AudioMgr']['PlayAudio'](e);
                                        var F = game['Tools']['GetNodeByNameInChildren'](D.root, 'pai');
                                        F && 1 == M && (F['destroyChildren'](), F['addChild'](L['model']), L['ResetAllTimer'] && L['ResetAllTimer'](), L['model']['transform']['rotation'] = d['clone'](), L['model']['transform']['worldMatrix'] = P['clone'](), Laya['timer'].once(1800, Z, function() {
                                            f || (z['addChild'](L['model']), L['model']['transform']['rotation'] = d['clone'](), L['model']['transform']['worldMatrix'] = P['clone']());
                                        }));
                                        var s = game['Tools']['GetNodeByNameInChildren'](D.root, 'pai_anim');
                                        !s || 1 != M && 0 != M || (s['destroyChildren'](), s['addChild'](L['model']), L['ResetAllTimer'] && L['ResetAllTimer'](), L['model']['transform']['rotation'] = d['clone'](), L['model']['transform']['worldMatrix'] = P['clone'](), Laya['timer'].once(1800, Z, function() {
                                                f || (z['addChild'](L['model']), L['model']['transform']['rotation'] = d['clone'](), L['model']['transform']['worldMatrix'] = P['clone']());
                                            })),
                                            Z['setSpecialHuleEffect'](N, D, L);
                                    }
                                }));
                                var _ = 2000;
                                'scene/ron_xiyuansi.lh' == N || 'scene/ron_beiyuan.lh' == N ? _ = 4600 : 'scene/ron_22chunjie.lh' == N ? _ = 3000 : 'scene/ron_2211saki.lh' == N && (_ = 3000),
                                    Laya['timer'].once(_, this, function() {
                                        f = !0,
                                            L && L['model'] && L['model']['transform'] && ('scene/ron_xiyuansi.lh' == N && (L['model']['getChildAt'](0)['getChildAt'](0) ? (L['model']['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 2000, L['model']['getChildAt'](0)['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 3001) : L['model']['meshRender'] && (L['model']['meshRender']['sharedMaterial']['renderQueue'] = 2000, L['model']['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 3001)), z['addChild'](L['model']), L['model']['transform']['rotation'] = d['clone'](), L['model']['transform']['worldMatrix'] = P['clone']()),
                                            D['destroy']();
                                    });
                            }
                        },
                        M['prototype']['setSpecialHuleEffect'] = function(y, L, F) {
                            if ('scene/ron_akagi.lh' == y) {
                                var s = game['Tools']['GetNodeByNameInChildren'](L.root, 'heidi');
                                s['transform']['position'] = new Laya['Vector3'](0, 0.101, 0.718);
                            }
                            if ('scene/ron_22summer.lh' == y) {
                                var i = game['Tools']['GetNodeByNameInChildren'](L.root, 'ya02');
                                i['meshRender']['material']['depthWrite'] = !0,
                                    i['meshRender']['material']['depthTest'] = 0,
                                    i['meshRender']['material']['renderQueue'] = 3005,
                                    i['meshRender']['material']['disableLight']();
                            }
                            if ('scene/ron_beiyuan.lh' == y) {
                                var M = game['Tools']['GetNodeByNameInChildren'](L.root, 'global');
                                M['transform']['rotation'] = new Laya['Quaternion'](0, 0, 0, 1),
                                    M['transform']['position'] = new Laya['Vector3'](0, 0, 0);
                                var Z = game['Tools']['GetNodeByNameInChildren'](L.root, 'plane1X1');
                                Z['meshRender']['material']['disableLight'](),
                                    Z['meshRender']['material']['renderQueue'] = 3002;
                                var N = game['Tools']['GetNodeByNameInChildren'](L.root, 'shiziguang02');
                                N['particleRender']['material']['depthTest'] = 0,
                                    N['particleRender']['material']['renderQueue'] = 3003;
                                for (var e = 0; e < N['_childs']['length']; e++)
                                    N['getChildAt'](e)['particleRender']['material']['depthTest'] = 0, N['getChildAt'](e)['particleRender']['material']['renderQueue'] = 3003;
                                var W = game['Tools']['GetNodeByNameInChildren'](L.root, 'suipian');
                                W['particleRender']['material']['depthTest'] = 0,
                                    W['particleRender']['material']['renderQueue'] = 3003,
                                    W = game['Tools']['GetNodeByNameInChildren'](L.root, 'xuehua01'),
                                    W['particleRender']['material']['depthTest'] = 0,
                                    W['particleRender']['material']['renderQueue'] = 3003,
                                    W = game['Tools']['GetNodeByNameInChildren'](L.root, 'xuehua02'),
                                    W['particleRender']['material']['depthTest'] = 0,
                                    W['particleRender']['material']['renderQueue'] = 3003,
                                    W = game['Tools']['GetNodeByNameInChildren'](L.root, 'suipian01'),
                                    W['particleRender']['material']['depthTest'] = 0,
                                    W['particleRender']['material']['renderQueue'] = 3003;
                            }
                            if ('scene/ron_xiyuansi.lh' == y) {
                                Laya['timer'].once(1800, this, function() {
                                    F['model']['getChildAt'](0)['getChildAt'](0) ? (F['model']['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 3003, F['model']['getChildAt'](0)['getChildAt'](0)['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 3004) : F['model']['meshRender'] && (F['model']['meshRender']['sharedMaterial']['renderQueue'] = 3003, F['model']['getChildAt'](0)['meshRender']['sharedMaterial']['renderQueue'] = 3004);
                                });
                                var Z = game['Tools']['GetNodeByNameInChildren'](L.root, 'plane1X1');
                                Z['meshRender']['material']['disableLight'](),
                                    Z['meshRender']['material']['renderQueue'] = 3002;
                                var D = game['LoadMgr']['getResImage']('extendRes/charactor/xiyuansiyiyu_0/full.png');
                                D && D['active'](),
                                    Z['meshRender']['material']['diffuseTexture'] = Laya['Texture2D'].load(game['LoadMgr']['getResImageSkin']('extendRes/charactor/xiyuansiyiyu_0/full.png'));
                                for (var B = game['Tools']['GetNodeByNameInChildren'](L.root, 'lizi'), e = 0; e < B['numChildren']; e++)
                                    B['getChildAt'](e)['particleRender']['material']['renderQueue'] = 3002, B['getChildAt'](e)['particleRender']['material']['depthTest'] = 0;
                                var M = game['Tools']['GetNodeByNameInChildren'](L.root, 'global');
                                M['transform']['rotation'] = new Laya['Quaternion'](0, 0, 0, 1),
                                    M['transform']['position'] = new Laya['Vector3'](0, 0, 0);
                                for (var e = 0; 3 > e; e++)
                                    M['getChildByName']('heidi01')['getChildAt'](e)['particleRender']['material']['renderQueue'] = 3002;
                                for (var e = 0; 3 > e; e++)
                                    M['getChildByName']('daoguang')['getChildByName']('lizi')['getChildAt'](e)['particleRender']['material']['renderQueue'] = 3002;
                                M['getChildByName']('baodian')['getChildByName']('shiziguang02')['particleRender']['material']['renderQueue'] = 3002;
                                for (var e = 0; 4 > e; e++)
                                    M['getChildByName']('baodian')['getChildByName']('shiziguang02')['getChildAt'](e)['particleRender']['material']['renderQueue'] = 3002;
                                for (var e = 4; 8 > e; e++) {
                                    var E = M['getChildByName']('quxian_amin01')['getChildAt'](e)['meshRender']['material'];
                                    E['renderQueue'] = 3002,
                                        E['disableLight']();
                                }
                            }
                        },
                        M['prototype']['ShowChiPengEffect'] = function() {
                            var L = this;
                            if (this['lastqipai']['model'] && this['lastqipai']['model']['transform']) {
                                this['effect_pai_canchi'] || (this['effect_pai_canchi'] = new game['EffectBase']('scene/' + game['GameUtility']['get_view_res_name'](game['EView']['mingpai_zhishi']) + '.lh'), this['trans_container_effect']['addChild'](this['effect_pai_canchi'].root), this['effect_pai_canchi'].root['active'] = !0),
                                    this['effect_pai_canchi'].root['transform']['worldMatrix'] = this['lastqipai']['model']['transform']['worldMatrix']['clone']();
                                var F = this['effect_pai_canchi'],
                                    s = this['lastqipai'];
                                if (this['lastqipai']['revealState'] == y['ERevealState']['reveal']) {
                                    var i = this['effect_pai_canchi'].root['transform']['localPosition']['clone']();
                                    i.y -= y['PAIMODEL_THICKNESS'],
                                        this['effect_pai_canchi'].root['transform']['localPosition'] = i;
                                }
                                Laya['timer']['frameLoop'](1, this['effect_pai_canchi'], function() {
                                    if (s['model']['activeInHierarchy'] && s['model']['active'] && s['model']['parent']['active']) {
                                        if (F.root['transform']['worldMatrix'] = s['model']['transform']['worldMatrix']['clone'](), s['revealState'] == y['ERevealState']['reveal']) {
                                            var i = F.root['transform']['localPosition']['clone']();
                                            i.y -= y['PAIMODEL_THICKNESS'],
                                                F.root['transform']['localPosition'] = i;
                                        }
                                        L['effect_pai_canchi'].root['active'] = !0;
                                    } else
                                        L['effect_pai_canchi'].root['active'] = !1;
                                });
                            }
                        },
                        M['prototype']['CloseChiPngEffect'] = function() {
                            this['effect_pai_canchi'] && (Laya['timer']['clearAll'](this['effect_pai_canchi']), this['effect_pai_canchi']['destroy'](), this['effect_pai_canchi'] = null);
                        },
                        M['prototype']['setChoosedPai'] = function(y) {
                            var L = !1;
                            if (L || !y || this['choosed_pai'] || (L = !0), L || y || !this['choosed_pai'] || (L = !0), !L && y && this['choosed_pai'] && 0 != mjcore['MJPai']['Distance'](this['choosed_pai'], y) && (L = !0), L && (this['choosed_pai'] = y ? y['Clone']() : null, M['bianjietishi'])) {
                                for (var F = 0; 4 > F; F++)
                                    this['players'][F]['OnChoosePai']();
                                uiscript['UI_TingPai'].Inst['onChooseTile'](y);
                            }
                        },
                        M['prototype']['setTingpai'] = function(L, F) {
                            for (var s = !1, i = [], M = 0; M < F['length']; M++)
                                i.push(mjcore['MJPai']['Create'](F[M].tile));
                            this['tingpais'][L]['length'] != i['length'] && (s = !0);
                            for (var M = 0; M < i['length'] && !s; M++)
                                0 != mjcore['MJPai']['Distance'](i[M], this['tingpais'][L][M]) && (s = !0);
                            if (s) {
                                this['tingpais'][L] = i;
                                for (var M = 0; M < y['DesktopMgr'].Inst['players']['length']; M++) {
                                    var Z = this['localPosition2Seat'](M);
                                    if (!(0 > Z)) {
                                        for (var N = 0; N < y['DesktopMgr'].Inst['players'][M]['container_qipai'].pais['length']; N++) {
                                            var e = y['DesktopMgr'].Inst['players'][M]['container_qipai'].pais[N];
                                            e['ispaopai'] = this['isPaoPai'](e.val),
                                                e['OnChoosedPai']();
                                        }
                                        for (var N = 0; N < y['DesktopMgr'].Inst['players'][M]['container_ming'].pais['length']; N++) {
                                            var e = y['DesktopMgr'].Inst['players'][M]['container_ming'].pais[N];
                                            e['ispaopai'] = this['isPaoPai'](e.val),
                                                e['OnChoosedPai']();
                                        }
                                        for (var N = 0; N < y['DesktopMgr'].Inst['players'][M]['container_babei'].pais['length']; N++) {
                                            var e = y['DesktopMgr'].Inst['players'][M]['container_babei'].pais[N];
                                            e['ispaopai'] = this['isPaoPai'](e.val),
                                                e['OnChoosedPai']();
                                        }
                                        var e = y['DesktopMgr'].Inst['players'][M]['container_qipai']['last_pai'];
                                        if (e && (e['ispaopai'] = this['isPaoPai'](e.val), e['OnChoosedPai']()), 0 == M)
                                            for (var W = y['DesktopMgr'].Inst['players'][M], N = 0; N < W.hand['length']; N++) {
                                                var e = W.hand[N];
                                                e['ispaopai'] = this['isPaoPai'](e.val),
                                                    e['OnChoosedPai']();
                                            }
                                        else
                                            for (var W = y['DesktopMgr'].Inst['players'][M], N = 0; N < W.hand['length']; N++) {
                                                var e = W.hand[N]['pai3D'];
                                                e['ispaopai'] = this['record_show_hand'] || e['is_open'] ? this['isPaoPai'](e.val) : !1,
                                                    e['OnChoosedPai']();
                                            }
                                    }
                                }
                            }
                        },
                        M['prototype']['isPaoPai'] = function(y) {
                            if (!this['record_show_paopai'])
                                return !1;
                            for (var L = 0; L < this['tingpais']['length']; L++)
                                for (var F = 0; F < this['tingpais'][L]['length']; F++)
                                    if (0 == mjcore['MJPai']['Distance'](this['tingpais'][L][F], y))
                                        return !0;
                            return !1;
                        },
                        M['prototype']['getPaiLeft'] = function(L) {
                            for (var F = 0, s = 0; 4 > s; s++) {
                                for (var i = this['players'][s], M = 0; M < i['container_babei'].pais['length']; M++)
                                    0 == mjcore['MJPai']['Distance'](i['container_babei'].pais[M].val, L) && F++;
                                for (var M = 0; M < i['container_ming'].pais['length']; M++)
                                    0 == mjcore['MJPai']['Distance'](i['container_ming'].pais[M].val, L) && F++;
                                for (var M = 0; M < i['container_qipai'].pais['length']; M++)
                                    i['container_qipai'].pais[M]['revealState'] != y['ERevealState']['reveal'] && 0 == mjcore['MJPai']['Distance'](i['container_qipai'].pais[M].val, L) && F++;
                                i['container_qipai']['last_pai'] && i['container_qipai']['last_pai']['revealState'] != y['ERevealState']['reveal'] && 0 == mjcore['MJPai']['Distance'](i['container_qipai']['last_pai'].val, L) && F++,
                                    i['pai_xuezhan_mid_zimo'] && 0 == mjcore['MJPai']['Distance'](i['pai_xuezhan_mid_zimo'], L) && F++;
                            }
                            for (var s = 0; s < this['mainrole'].hand['length']; s++)
                                0 == mjcore['MJPai']['Distance'](this['mainrole'].hand[s].val, L) && F++;
                            for (var s = 0; s < this.dora['length']; s++)
                                this.dora[s] && 0 == mjcore['MJPai']['Distance'](this.dora[s], L) && F++;
                            var Z = 4 - F;
                            return 0 > Z ? 0 : Z > 4 ? 4 : Z;
                        },
                        M['prototype']['get_gang_count'] = function() {
                            for (var y = 0, L = 0; L < this['players']['length']; L++) {
                                var F = this['localPosition2Seat'](L);
                                if (F >= 0)
                                    for (var s = this['players'][L]['container_ming']['mings'], i = 0; i < s['length']; i++)
                                        (s[i].type == mjcore['E_Ming']['gang_an'] || s[i].type == mjcore['E_Ming']['gang_ming']) && y++;
                            }
                            return y;
                        },
                        M['prototype']['get_babei_count'] = function() {
                            for (var y = 0, L = 0; L < this['players']['length']; L++) {
                                var F = this['localPosition2Seat'](L);
                                F >= 0 && (y += this['players'][L]['container_babei'].pais['length']);
                            }
                            return y;
                        },
                        M['prototype']['fetchLinks'] = function() {
                            app['NetAgent']['sendReq2MJ']('FastTest', 'fetchGamePlayerState', {}, function(y, L) {
                                if (y || L['error'])
                                    uiscript['UIMgr'].Inst['showNetReqError']('fetchGamePlayerState', y, L);
                                else {
                                    app.Log.log(JSON['stringify'](L)),
                                        M['player_link_state'] = [];
                                    for (var F = 0; F < L['state_list']['length']; F++)
                                        M['player_link_state'].push(L['state_list'][F]);
                                    uiscript['UI_DesktopInfo'].Inst['refreshLinks']();
                                }
                            });
                        },
                        M['prototype']['onShowHandChange'] = function(y) {
                            if (this['record_show_hand'] = y, Laya['LocalStorage']['setItem']('record_show_hand', y ? '1' : '0'), this['gameing'])
                                for (var L = 1; 4 > L; L++)
                                    this['players'][L]['onShowHandChange'](y);
                        },
                        M['prototype']['onShowPaopaiChange'] = function(L) {
                            if (this['record_show_paopai'] = L, Laya['LocalStorage']['setItem']('record_show_paopai', L ? '1' : '0'), this['gameing']) {
                                this['mainrole']['onShowPaopaiChange']();
                                for (var F = 1; 4 > F; F++)
                                    this['players'][F]['onShowPaopaiChange']();
                                for (var F = 0; F < y['DesktopMgr'].Inst['players']['length']; F++) {
                                    var s = this['localPosition2Seat'](F);
                                    if (!(0 > s)) {
                                        for (var i = 0; i < y['DesktopMgr'].Inst['players'][F]['container_qipai'].pais['length']; i++) {
                                            var M = y['DesktopMgr'].Inst['players'][F]['container_qipai'].pais[i];
                                            M['ispaopai'] = this['isPaoPai'](M.val),
                                                M['OnChoosedPai']();
                                        }
                                        for (var i = 0; i < y['DesktopMgr'].Inst['players'][F]['container_ming'].pais['length']; i++) {
                                            var M = y['DesktopMgr'].Inst['players'][F]['container_ming'].pais[i];
                                            M['ispaopai'] = this['isPaoPai'](M.val),
                                                M['OnChoosedPai']();
                                        }
                                        for (var i = 0; i < y['DesktopMgr'].Inst['players'][F]['container_babei'].pais['length']; i++) {
                                            var M = y['DesktopMgr'].Inst['players'][F]['container_babei'].pais[i];
                                            M['ispaopai'] = this['isPaoPai'](M.val),
                                                M['OnChoosedPai']();
                                        }
                                        var M = y['DesktopMgr'].Inst['players'][F]['container_qipai']['last_pai'];
                                        M && (M['ispaopai'] = this['isPaoPai'](M.val), M['OnChoosedPai']());
                                    }
                                }
                            }
                        },
                        M['prototype']['onRoundEnd'] = function(L, F) {
                            var s = y['DesktopMgr'].Inst['seat2LocalPosition'](L);
                            this['players'][s]['OnRoundEnd'](F);
                        },
                        M['prototype']['onMuyuChange'] = function(L, F) {
                            var s = this;
                            if (void 0 === F && (F = !0), this['is_muyu_mode']()) {
                                var i = !1;
                                if (this['muyu_info'] && this['muyu_info'].id == L.id || (i = !0), this['muyu_effect'] && !this['muyu_effect']['destroyed'])
                                    if (F) {
                                        if (i) {
                                            var M,
                                                Z;
                                            if (this['muyu_info'] ? (M = this['muyu_effect']['clone'](), this['muyu_effect'].root['parent']['addChild'](M.root), Z = this['muyu_effect'], this['muyu_effect'] = M) : M = this['muyu_effect'], this['muyu_info']) {
                                                Z['effect_root']['getChildByName']('muyu_chuxian')['active'] = !1;
                                                var N = Z['effect_root']['getChildByName']('muyu_xiaoshi');
                                                N['active'] = !0;
                                                var e = N['getChildByName']('mianpian')['getChildByName']('shuzi'),
                                                    W = e['meshRender']['material'];
                                                W['renderQueue'] = 3001,
                                                    W['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + this['muyu_info']['count'] + '.png'),
                                                    Laya['timer'].once(1000, null, function() {
                                                        Z['destroy']();
                                                    });
                                            }
                                            M['addLoadedListener'](Laya['Handler']['create'](this, function() {
                                                    var F = s['seat2LocalPosition'](L.seat);
                                                    M.root['transform']['worldMatrix'] = s['players'][F]['trans_muyu']['transform']['worldMatrix'],
                                                        M.root['transform']['rotation'] = s['players'][F]['trans_muyu']['transform']['rotation']['clone'](),
                                                        M.root['active'] = !0,
                                                        M['effect_root']['getChildByName']('muyu_xiaoshi')['active'] = !1;
                                                    var i = M['effect_root']['getChildByName']('muyu_chuxian');
                                                    i['active'] = !0,
                                                        i['getChildByName']('baodian')['active'] = !0;
                                                    var Z = i['getChildByName']('mianpian');
                                                    Z['active'] = !0,
                                                        Z['getChildByName']('shuzi_anim')['active'] = !1;
                                                    var N = Z['getChildByName']('shuzi');
                                                    N['active'] = !0;
                                                    var e = N['meshRender']['material'];
                                                    e['renderQueue'] = 3001,
                                                        e['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + L['count'] + '.png'),
                                                        y['AudioMgr']['PlayAudio'](246);
                                                })),
                                                this['muyu_info'] = L;
                                        } else if (L['count'] != this['muyu_info']['count']) {
                                            var D = this['muyu_effect']['effect_root'];
                                            D['getChildByName']('muyu_xiaoshi')['active'] = !1;
                                            var B = D['getChildByName']('muyu_chuxian'),
                                                E = B['getChildByName']('mianpian');
                                            E['getChildByName']('shuzi_anim')['active'] = !1;
                                            var f = E['getChildByName']('shuzi'),
                                                z = E['getChildByName']('shuzi_anim'),
                                                d = z['getChildByName']('shuzi_up'),
                                                P = z['getChildByName']('shuzi_down');
                                            Laya['timer']['clearAll'](f),
                                                f['active'] = !1;
                                            var _ = f['meshRender']['material'];
                                            _['renderQueue'] = 3001,
                                                _['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + L['count'] + '.png');
                                            var u = d['meshRender']['material'];
                                            u['renderQueue'] = 3001,
                                                u['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + this['muyu_info']['count'] + '.png');
                                            var l = P['meshRender']['material'];
                                            l['renderQueue'] = 3002,
                                                l['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + L['count'] + '.png'),
                                                P['active'] = !1,
                                                z['active'] = !0,
                                                this['muyu_info'] = L,
                                                Laya['timer'].once(210, f, function() {
                                                    f['active'] = !0,
                                                        z['active'] = !1;
                                                });
                                        }
                                    } else {
                                        this['muyu_info'] = L;
                                        var q = this['seat2LocalPosition'](this['muyu_info'].seat);
                                        this['muyu_effect'].root['active'] = !0,
                                            this['muyu_effect'].root['transform']['worldMatrix'] = this['players'][q]['trans_muyu']['transform']['worldMatrix'],
                                            this['muyu_effect'].root['transform']['rotation'] = this['players'][q]['trans_muyu']['transform']['rotation']['clone'](),
                                            this['muyu_effect'].root['active'] = !0,
                                            this['muyu_effect']['effect_root']['getChildByName']('muyu_xiaoshi')['active'] = !1;
                                        var B = this['muyu_effect']['effect_root']['getChildByName']('muyu_chuxian');
                                        B['active'] = !0,
                                            B['getChildByName']('baodian')['active'] = !1;
                                        var E = B['getChildByName']('mianpian');
                                        E['active'] = !0,
                                            E['getChildByName']('shuzi_anim')['active'] = !1;
                                        var e = E['getChildByName']('shuzi');
                                        e['active'] = !0;
                                        var W = e['meshRender']['material'];
                                        W['renderQueue'] = 3001,
                                            W['albedoTexture'] = Laya['loader']['getRes']('scene/Assets/Resource/effect/texture/muyu_shuzi_' + L['count'] + '.png');
                                    }
                            }
                        },
                        M['prototype']['getMindVoicePriority'] = function(y) {
                            switch (y) {
                                case 'ingame_yiman':
                                    return 100;
                                case 'ingame_beiman':
                                    return 90;
                                case 'ingame_lianda':
                                    return 50;
                                case 'ingame_baopai':
                                    return 30;
                                case 'ingame_remain10':
                                    return 20;
                            }
                            return 0;
                        },
                        M['prototype']['addMindVoice'] = function(y, L) {
                            (!this['mind_voice_type'] || this['getMindVoicePriority'](this['mind_voice_type']) < this['getMindVoicePriority'](L)) && (this['mind_voice_seat'] = y, this['mind_voice_type'] = L);
                        },
                        M['prototype']['playMindVoice'] = function() {
                            var L = this;
                            M['bianjietishi'] && (this['gameing'] && (this.mode == s.play || this.mode == s['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play']) && this['mind_voice_type'] && !this['during_playing_mind_voice'] && (this['during_playing_mind_voice'] = !0, y['AudioMgr']['PlayCharactorSound_Teshu'](this['player_datas'][this['mind_voice_seat']]['character'], this['mind_voice_type'], Laya['Handler']['create'](this, function() {
                                L['during_playing_mind_voice'] = !1;
                            }))), this['mind_voice_type'] = null, this['mind_voice_seat'] = -1);
                        },
                        M['prototype']['clearMindVoice'] = function() {
                            this['mind_voice_type'] = null,
                                this['mind_voice_seat'] = -1;
                        },
                        M['prototype']['getLastActionNames'] = function(y) {
                            for (var L = [], F = this['actionList']['length'], s = Math.max(F - y, this['action_index']); F > s; s++)
                                L.push(this['actionList'][s].name);
                            return L;
                        },
                        M['prototype']['isLastPaiMingPai'] = function() {
                            for (var y = 0; y < this['players']['length']; y++)
                                for (var L = 0; L < this['players'][y]['container_ming'].pais['length']; L++)
                                    if (this['lastqipai'] == this['players'][y]['container_ming'].pais[L])
                                        return !0;
                            return !1;
                        },
                        M['prototype']['setRevealScore'] = function(y, L) {
                            if (this['anpai']) {
                                var F = (1000 * y)['toString']();
                                if (0 == y)
                                    for (var s = 0; s < this['score_reveal']['length']; s++)
                                        if (2 == s) {
                                            this['score_reveal'][s]['active'] = !0;
                                            var i = new Laya['Vector4']();
                                            i.z = 0,
                                                i.w = -0.9,
                                                i.x = 1,
                                                i.y = 0.1,
                                                this['score_reveal'][s]['meshRender']['material']['tilingOffset'] = i;
                                        } else
                                            this['score_reveal'][s]['active'] = !1;
                                else
                                    for (var M = this['last_anpai_score']['toString'](), s = 0; s < this['score_reveal']['length']; s++)
                                        if (s < F['length']) {
                                            var Z = s < M['length'] ? Number(M[s]) : 0;
                                            L ? this['show_reveal_score_anim'](s, Z, Number(F[s])) : this['show_reveal_score_anim'](s, Number(F[s]), Number(F[s]));
                                        } else
                                            this['score_reveal'][s]['active'] = !1;
                                this['last_anpai_score'] = 1000 * y;
                            }
                        },
                        M['prototype']['show_reveal_score_anim'] = function(L, F, s) {
                            var i = this,
                                M = 24,
                                Z = 40,
                                N = 3,
                                e = 0.2,
                                W = 0.8,
                                D = 2000,
                                B = s - F;
                            if (this['score_reveal'][L]['active'] = !0, F == s) {
                                var E = new Laya['Vector4'](),
                                    f = F / 10;
                                return f > 0.9 && (f -= 1),
                                    E.w = -(0.9 - f),
                                    E.z = 0,
                                    E.x = 1,
                                    E.y = 0.1,
                                    this['score_reveal'][L]['meshRender']['material']['tilingOffset'] = E,
                                    void 0;
                            }
                            B += 10,
                                0 >= B && (B += 10);
                            var z = 0,
                                d = Laya['timer']['currTimer'],
                                P = Laya['timer']['currTimer'],
                                _ = 0,
                                u = !1,
                                l = 0,
                                q = function() {
                                    var s = Laya['timer']['currTimer'] - d;
                                    l % 9 == 0 && y['AudioMgr']['PlayAudio'](222),
                                        l++,
                                        Laya['timer']['currTimer'] - P > D ? (_ = B, Laya['timer']['clear'](i, q)) : (B / 2 > _ && M > z ? z += Z * s / 1000 : _ >= B / 2 && W > B - _ && (z -= Z * s / 1000, z = Math.max(N, z)), u ? (_ -= z * s / 1000, B > _ && (_ = B, Laya['timer']['clear'](i, q))) : (_ += z * s / 1000, _ > B + e && (u = !0)));
                                    var E = new Laya['Vector4'](),
                                        f = (_ + F) / 10;
                                    f > 0.9 && (f -= 1),
                                        E.w = -(0.9 - f),
                                        E.z = 0,
                                        E.x = 1,
                                        E.y = 0.1,
                                        i['score_reveal'][L]['meshRender']['material']['tilingOffset'] = E,
                                        d = Laya['timer']['currTimer'];
                                };
                            Laya['timer']['frameLoop'](1, this, q);
                        },
                        M['prototype']['onRevealStateChange'] = function(y, L) {
                            this['players'][this['seat2LocalPosition'](y)]['trans_reveal']['active'] = L;
                        },
                        M['prototype']['is_field_spell_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['field_spell_mode'] ? !0 : !1;
                        },
                        M['prototype']['is_field_spell_extra_dora'] = function() {
                            if (!this['is_field_spell_mode']() || !this['field_spell'])
                                return !1;
                            var y = Math['floor'](this['field_spell'] / 100) % 100;
                            return 3 == y;
                        },
                        M['prototype']['is_zhanxing_mode'] = function() {
                            return this['game_config'] && this['game_config'].mode && this['game_config'].mode['detail_rule'] && this['game_config'].mode['detail_rule']['zhanxing'] ? !0 : !1;
                        },
                        M.Inst = null,
                        M['player_link_state'] = [L.NULL, L.NULL, L.NULL, L.NULL],
                        M['click_prefer'] = 0,
                        M['double_click_pass'] = 0,
                        M['en_mjp'] = !1,
                        M['bianjietishi'] = !0,
                        M['_is_yuren_type'] = !1,
                        M;
                }
                (Laya['Script']);
            y['DesktopMgr'] = i;
        }
        (view || (view = {}));



        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            var F = this;
                            app.Log.log('ActionLiuJu play data:' + JSON['stringify'](L)),
                                y['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close']();
                            var s = 0;
                            if (L.liqi ? (s = 1000, y['ActionLiqi'].play(L.liqi)) : s = 500, L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0), L.type == mjcore['E_LiuJu']['sanjiahule']) {
                                y['BgmListMgr']['stopBgm']();
                                var i = L.seat;
                                Laya['timer'].once(s, this, function() {
                                        for (var L = [], F = 0; 4 > F; F++)
                                            y['DesktopMgr'].Inst['localPosition2Seat'](F) != i && L.push(F);
                                        uiscript['UI_Huleshow'].Inst['showRong'](L);
                                    }),
                                    s += 1500,
                                    Laya['timer'].once(s, this, function() {
                                        for (var F = 0; F < L['allplayertiles']['length']; F++)
                                            if (F != i) {
                                                for (var s = L['allplayertiles'][F]['split']('|'), M = [], Z = 0; Z < s['length']; Z++)
                                                    M.push(mjcore['MJPai']['Create'](s[Z]));
                                                M = M.sort(mjcore['MJPai']['Distance']),
                                                    y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['Huangpai'](!0, M, !1);
                                            }
                                    }),
                                    s += 1000,
                                    Laya['timer'].once(s, this, function() {
                                        F['showEnd'](L),
                                            y['DesktopMgr'].Inst['ActionRunComplete']();
                                    });
                            } else
                                Laya['timer'].once(s, this, function() {
                                    if (y['BgmListMgr']['stopBgm'](), L['hules_history'])
                                        for (var s = 0, i = L['hules_history']; s < i['length']; s++) {
                                            var M = i[s],
                                                Z = y['DesktopMgr'].Inst['seat2LocalPosition'](M.seat);
                                            y['DesktopMgr'].Inst['players'][Z]['onXuezhanEnd'](M.hand, !1);
                                        }
                                    var N = 500;
                                    if (L.type == mjcore['E_LiuJu']['jiuzhongjiupai']) {
                                        for (var Z = L.seat, e = L['tiles'], W = [], D = 0; D < e['length']; D++)
                                            W.push(mjcore['MJPai']['Create'](e[D]));
                                        W = W.sort(mjcore['MJPai']['Distance']),
                                            y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](Z)]['Huangpai'](!0, W, !1);
                                    }
                                    if (L.type == mjcore['E_LiuJu']['sijializhi'] && L['allplayertiles'] && L['allplayertiles']['length'] > 0) {
                                        for (var B = 0; B < L['allplayertiles']['length']; B++) {
                                            for (var E = L['allplayertiles'][B]['split']('|'), W = [], D = 0; D < E['length']; D++)
                                                W.push(mjcore['MJPai']['Create'](E[D]));
                                            W = W.sort(mjcore['MJPai']['Distance']),
                                                y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](B)]['Huangpai'](!0, W, !1);
                                        }
                                        N = 1000;
                                    }
                                    Laya['timer'].once(N, F, function() {
                                        F['showEnd'](L),
                                            y['DesktopMgr'].Inst['ActionRunComplete']();
                                    });
                                });
                        },
                        F['fastplay'] = function(L) {
                            app.Log.log('ActionLiuJu fastplay data:' + JSON['stringify'](L)),
                                y['BgmListMgr']['stopBgm'](),
                                y['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close'](),
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1);
                            if (L.liqi && y['ActionLiqi']['fastplay'](L.liqi, 0), L.type == mjcore['E_LiuJu']['jiuzhongjiupai']) {
                                for (var F = L.seat, s = L['tiles'], i = [], M = 0; M < s['length']; M++)
                                    i.push(mjcore['MJPai']['Create'](s[M]));
                                i = i.sort(mjcore['MJPai']['Distance']),
                                    y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['Huangpai'](!0, i, !0);
                            }
                            if (L.type == mjcore['E_LiuJu']['sanjiahule'])
                                for (var F = L.seat, Z = 0; Z < L['allplayertiles']['length']; Z++)
                                    if (Z != F) {
                                        for (var N = L['allplayertiles'][Z]['split']('|'), i = [], M = 0; M < N['length']; M++)
                                            i.push(mjcore['MJPai']['Create'](N[M]));
                                        i = i.sort(mjcore['MJPai']['Distance']),
                                            y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](Z)]['Huangpai'](!0, i, !1);
                                    }
                            this['showEnd'](L);
                        },
                        F['record'] = function(y) {
                            return app.Log.log('ActionLiuJu record data:' + JSON['stringify'](y)),
                                this.play(y),
                                4000;
                        },
                        F['fastrecord'] = function(L) {
                            y['BgmListMgr']['stopBgm'](),
                                y['DesktopMgr'].Inst['gameing'] = !1,
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                this['showEnd'](L);
                        },
                        F['showEnd'] = function(L) {
                            var F = null;
                            y['DesktopMgr'].Inst['xuezhan'] && L['hules_history'] && L['hules_history']['length'] > 0 && (F = Laya['Handler']['create'](this, function() {
                                    uiscript['UIMgr'].Inst['ShowWin'](L, !1);
                                })),
                                uiscript['UIMgr'].Inst['ShowLiuJu'](L, F);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionLiuJu'] = L;
        }
        (view || (view = {}));

        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            app.Log.log('ActionUnveilTile play data:' + JSON['stringify'](L)),
                                y['DesktopMgr'].Inst['setScores'](L['scores']);
                            var F = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](L.seat)];
                            F['PlaySound']('act_unveil'),
                                L['operation'] && Laya['timer'].once(500, this, function() {
                                    y['ActionOperation'].play(L['operation']);
                                }),
                                y['DesktopMgr'].Inst['ActionRunComplete'](),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']);
                        },
                        F['fastplay'] = function(L) {
                            y['DesktopMgr'].Inst['setScores'](L['scores']),
                                L['operation'] && Laya['timer'].once(500, this, function() {
                                    y['ActionOperation'].play(L['operation']);
                                }),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang'], !1);
                        },
                        F['record'] = function(L, F) {
                            void 0 === F && (F = 0),
                                y['DesktopMgr'].Inst['setScores'](L['scores']);
                            var s = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](L.seat)];
                            if (s['PlaySound']('act_unveil'), y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && L['operations'])
                                for (var i = 0; i < L['operations']['length']; i++)
                                    y['ActionOperation'].ob(L['operations'][i], F, 450);
                            return uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']),
                                500;
                        },
                        F['fastrecord'] = function(L, F) {
                            void 0 === F && (F = -1),
                                y['DesktopMgr'].Inst['setScores'](L['scores']);
                            y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](L.seat)];
                            if (y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && L['operations'])
                                for (var s = 0; s < L['operations']['length']; s++)
                                    y['ActionOperation'].ob(L['operations'][s], F, 450);
                            if (y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && L['operations'])
                                for (var s = 0; s < L['operations']['length']; s++)
                                    y['ActionOperation'].ob(L['operations'][s], F, 450);
                            uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang'], !1);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionUnveilTile'] = L;
        }
        (view || (view = {}));


        ! function(y) {
            var L = function() {
                    function L(y) {
                        var L = this;
                        this['rounds'] = [],
                            this['locking'] = !1,
                            this['enable'] = !1,
                            this.me = y,
                            this.me['visible'] = !1,
                            this['scrollview'] = this.me['scriptMap']['capsui.CScrollView'],
                            this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, this['renderInfo'], null, !1)),
                            this['btn_up'] = this.me['getChildByName']('up'),
                            this['btn_down'] = this.me['getChildByName']('down'),
                            this['btn_up']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                L['locking'] || L['scrollview']['scrollDelta'](-100);
                            }, null, !1),
                            this['btn_down']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                L['locking'] || L['scrollview']['scrollDelta'](100);
                            }, null, !1),
                            this['scrollview'].me.on('ratechange', this, function() {
                                L['btn_up']['visible'] = L['scrollview'].rate > 0,
                                    L['btn_down']['visible'] = L['scrollview']['need_scroll'] && L['scrollview'].rate < 1;
                            }),
                            this['enable'] = !1;
                    }
                    return L['prototype'].show = function(L) {
                            var F = this;
                            this['enable'] = !0,
                                this['locking'] = !0,
                                this.me['visible'] = !0,
                                this['scrollview']['reset'](),
                                this['rounds'] = L;
                            for (var s = 0, i = 0; i < L['length']; i++) {
                                var M = this['caluH'](L[i]);
                                s += M,
                                    this['scrollview']['addItem'](1, M);
                            }
                            y['UIBase']['anim_alpha_in'](this.me, {
                                    y: 30
                                }, 120, 0, Laya['Handler']['create'](this, function() {
                                    F['locking'] = !1;
                                })),
                                this['btn_up']['visible'] = !1,
                                this['btn_down']['visible'] = this['scrollview']['need_scroll'];
                        },
                        L['prototype']['close'] = function() {
                            var L = this;
                            this['enable'] = !1,
                                this['locking'] = !0,
                                y['UIBase']['anim_alpha_out'](this.me, {
                                    y: 30
                                }, 120, 0, Laya['Handler']['create'](this, function() {
                                    L['locking'] = !1,
                                        L.me['visible'] = !1;
                                }));
                        },
                        L['prototype']['caluH'] = function(y) {
                            var L = y['actions'][y['actions']['length'] - 1];
                            if (view['DesktopMgr'].Inst['is_chuanma_mode']())
                                return 90 + 40 * view['DesktopMgr'].Inst['player_count'];
                            if (view['DesktopMgr'].Inst['xuezhan'] && L.data['hules_history'] && L.data['hules_history']['length'] > 0)
                                return 90 + 40 * view['DesktopMgr'].Inst['player_count'];
                            if ('RecordNoTile' == L.name) {
                                for (var F = L.data, s = [], i = 0; i < view['DesktopMgr'].Inst['player_count']; i++)
                                    s.push({
                                        old_score: F['scores'][0]['old_scores'][i],
                                        delta: 0
                                    });
                                for (var i = 0; i < F['scores']['length']; i++)
                                    for (var M = 0; M < view['DesktopMgr'].Inst['player_count']; M++)
                                        s[M]['delta'] += F['scores'][i]['delta_scores'][M];
                                for (var Z = [], i = 0; i < s['length']; i++)
                                    s[i]['delta'] > 0 && Z.push(i);
                                var N = 120 + (0 == Z['length'] ? 0 : 40 * (Z['length'] - 1));
                                return N;
                            }
                            return 'RecordLiuJu' == L.name ? 120 : L.data['hules'][0].zimo ? 120 : 180 + 40 * (L.data['hules']['length'] - 1);
                        },
                        L['prototype']['renderInfo'] = function(y) {
                            for (var L = this, F = y['index'], s = y['container'], i = this['rounds'][F], Z = 0; Z < i['actions']['length']; Z++)
                                if ('RecordNewRound' == i['actions'][Z].name) {
                                    if (view['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                        s['getChildByName']('container_title')['getChildByName']('chang').text = 'en' == GameMgr['client_language'] ? 'Round' : '第',
                                            s['getChildByName']('container_title')['getChildByName']('ju').text = (i['actions'][Z].data['ju_count'] + 1)['toString'](),
                                            s['getChildByName']('container_title')['getChildByName']('benchang')['visible'] = !1,
                                            s['getChildByName']('container_title')['getChildByName']('ben')['visible'] = !1;
                                        for (var N = 0, e = s['getChildByName']('container_title'), W = [3, 3, 0], D = 0; 3 > D; D++) {
                                            var B = e['getChildAt'](D);
                                            N += B['textField']['textWidth'] * B['scaleX'],
                                                N += W[D];
                                        }
                                        for (var E = e['width'] / 2 - N / 2, f = 0; 3 > f; f++) {
                                            var B = e['getChildAt'](f);
                                            B.x = E,
                                                E += B['textField']['textWidth'] * B['scaleX'] + W[f],
                                                B.y = 'haolong' == B.font ? 34 : 31;
                                        }
                                        break;
                                    }
                                    var z = void 0;
                                    z = 'chs' == GameMgr['client_language'] ? ['东', '南', '西', '北'] : 'jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language'] ? ['東', '南', '西', '北'] : 'kr' == GameMgr['client_language'] ? ['동', '남', '서', '북'] : ['East', 'South', 'West', 'North'],
                                        s['getChildByName']('container_title')['getChildByName']('benchang')['visible'] = !0,
                                        s['getChildByName']('container_title')['getChildByName']('ben')['visible'] = !0,
                                        s['getChildByName']('container_title')['getChildByName']('chang').text = z[i['actions'][Z].data['chang'] % 4],
                                        s['getChildByName']('container_title')['getChildByName']('ju').text = (i['actions'][Z].data.ju + 1)['toString'](),
                                        s['getChildByName']('container_title')['getChildByName']('ben').text = i['actions'][Z].data.ben['toString']();
                                    for (var N = 0, e = s['getChildByName']('container_title'), W = [3, 3, 50, 3, 0], d = 0; d < e['numChildren']; d++) {
                                        var B = e['getChildAt'](d);
                                        N += B['textField']['textWidth'] * B['scaleX'],
                                            N += W[d];
                                    }
                                    for (var E = e['width'] / 2 - N / 2, P = 0; P < e['numChildren']; P++) {
                                        var B = e['getChildAt'](P);
                                        B.x = E,
                                            E += B['textField']['textWidth'] * B['scaleX'] + W[P],
                                            B.y = 'haolong' == B.font ? 34 : 31;
                                    }
                                    break;
                                }
                            var _ = i['actions'][i['actions']['length'] - 1],
                                u = _.data,
                                l = s,
                                q = s['getChildByName']('line'),
                                o = s['getChildByName']('liuju'),
                                K = s['getChildByName']('win'),
                                Q = s['getChildByName']('lose');
                            q['visible'] = !1,
                                o['visible'] = !1,
                                K['visible'] = !1,
                                Q['visible'] = !1;
                            var H = !0;
                            if (view['DesktopMgr'].Inst['xuezhan'] || view['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                for (var h = [], Z = 0; Z < view['DesktopMgr'].Inst['player_count']; Z++)
                                    h.push(0);
                                for (var p = !1, b = 0, c = i['actions']; b < c['length']; b++) {
                                    var v = c[b];
                                    if (('RecordHuleXueZhanEnd' == v.name || 'RecordNoTile' == v.name) && (p = v.data['hules_history'] && v.data['hules_history']['length'] > 0), 'RecordHuleXueZhanMid' == v.name || 'RecordHuleXueZhanEnd' == v.name) {
                                        for (var Z = 0; Z < view['DesktopMgr'].Inst['player_count']; Z++)
                                            h[Z] += v.data['delta_scores'][Z];
                                        p = !0;
                                    } else if ('RecordNoTile' == v.name) {
                                        for (var Z = 0; Z < v.data['scores']['length']; Z++)
                                            if (v.data['scores'][Z]['delta_scores'] && v.data['scores'][Z]['delta_scores']['length'] > 0)
                                                for (var S = 0; S < view['DesktopMgr'].Inst['player_count']; S++)
                                                    h[S] += v.data['scores'][Z]['delta_scores'][S];
                                    } else if ('RecordGangResult' == v.name || 'RecordGangResultEnd' == v.name)
                                        for (var Z = 0; Z < view['DesktopMgr'].Inst['player_count']; Z++)
                                            h[Z] += v.data['gang_infos']['delta_scores'][Z];
                                }
                                if (view['DesktopMgr'].Inst['is_chuanma_mode']() && (p = !0), l['height'] = p ? 90 + 40 * view['DesktopMgr'].Inst['player_count'] : 120, p) {
                                    H = !1,
                                        K['visible'] = !0;
                                    var T = K['getChildByName']('info');
                                    T['visible'] = !0,
                                        T.text = game['Tools']['strOfLocalization'](3257),
                                        T = Q['getChildByName']('chong'),
                                        T['visible'] = !1;
                                    for (var Z = 0; Z < view['DesktopMgr'].Inst['player_count']; Z++) {
                                        var w = K['getChildByName']('player'),
                                            k = w['getChildAt'](Z);
                                        k['visible'] = !0,
                                            k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](Z)['nickname'],
                                            k['getChildByName']('point').text = h[Z] >= 0 ? '+' + h[Z]['toString']() : h[Z]['toString']();
                                    }
                                    for (var I = K['getChildByName']('player'), Z = view['DesktopMgr'].Inst['player_count']; Z < I['numChildren']; Z++)
                                        I['getChildAt'](Z)['visible'] = !1;
                                } else;
                            }
                            if ('RecordNoTile' == _.name) {
                                if (H) {
                                    for (var m = [], Z = 0; Z < view['DesktopMgr'].Inst['player_count']; Z++)
                                        m.push({
                                            old_score: u['scores'][0]['old_scores'][Z],
                                            delta: 0
                                        });
                                    for (var Z = 0; Z < u['scores']['length']; Z++)
                                        for (var S = 0; S < view['DesktopMgr'].Inst['player_count']; S++)
                                            m[S]['delta'] += u['scores'][Z]['delta_scores'][S];
                                    for (var x = [], Z = 0; Z < m['length']; Z++)
                                        m[Z]['delta'] > 0 && x.push(Z);
                                    if (l['height'] = 120 + (0 == x['length'] ? 0 : 40 * (x['length'] - 1)), u['liujumanguan']) {
                                        K['visible'] = !0;
                                        var T = K['getChildByName']('info');
                                        T.text = game['Tools']['strOfLocalization'](2170),
                                            T['color'] = '#8d8fac';
                                        for (var I = K['getChildByName']('player'), Z = 0; Z < I['numChildren']; Z++) {
                                            var k = I['getChildAt'](Z);
                                            Z < x['length'] ? (k['visible'] = !0, k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](x[Z])['nickname'], k['getChildByName']('point').text = m[x[Z]]['delta'] > 0 ? '+' + m[x[Z]]['delta']['toString']() : m[x[Z]]['delta']['toString']()) : k['visible'] = !1;
                                        }
                                    } else if (K['visible'] = !0, K['getChildByName']('info').text = '', o['visible'] = !0, o.text = game['Tools']['strOfLocalization'](2171), u['scores'])
                                        for (var I = K['getChildByName']('player'), Z = 0; Z < I['numChildren']; Z++) {
                                            var k = I['getChildAt'](Z);
                                            Z < x['length'] ? (k['visible'] = !0, k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](x[Z])['nickname'], k['getChildByName']('point').text = m[x[Z]]['delta'] > 0 ? '+' + m[x[Z]]['delta']['toString']() : m[x[Z]]['delta']['toString']()) : k['visible'] = !1;
                                        }
                                }
                            } else if ('RecordLiuJu' == _.name && H) {
                                var g = ['', game['Tools']['strOfLocalization'](2172), game['Tools']['strOfLocalization'](2173), game['Tools']['strOfLocalization'](2174), game['Tools']['strOfLocalization'](2175), game['Tools']['strOfLocalization'](2176)];
                                o['visible'] = !0,
                                    o.text = g[u.type],
                                    l['height'] = 120;
                            } else if (!view['DesktopMgr'].Inst['xuezhan'] && !view['DesktopMgr'].Inst['is_chuanma_mode']())
                                if (_.data['hules'][0].zimo) {
                                    K['visible'] = !0;
                                    var T = K['getChildByName']('info');
                                    T.text = game['Tools']['strOfLocalization'](2177),
                                        T['color'] = '#ea3694';
                                    for (var I = K['getChildByName']('player'), Z = 0; Z < I['numChildren']; Z++) {
                                        var k = I['getChildAt'](Z);
                                        if (0 == Z) {
                                            k['visible'] = !0;
                                            var t = u['hules'][0].seat;
                                            k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](t)['nickname'];
                                            var j = u['delta_scores'][t];
                                            k['getChildByName']('point').text = (j > 0 ? '+' : '') + j['toString']();
                                        } else
                                            k['visible'] = !1;
                                    }
                                    l['height'] = 120;
                                } else {
                                    K['visible'] = !0;
                                    var T = K['getChildByName']('info');
                                    T.text = game['Tools']['strOfLocalization'](2178),
                                        T['color'] = '#ef3538';
                                    for (var I = K['getChildByName']('player'), Z = 0; Z < I['numChildren']; Z++) {
                                        var k = I['getChildAt'](Z);
                                        if (Z < u['hules']['length']) {
                                            k['visible'] = !0;
                                            var t = u['hules'][Z].seat;
                                            k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](t)['nickname'];
                                            var j = u['delta_scores'][t];
                                            k['getChildByName']('point').text = j > 0 ? '+' + j['toString']() : j['toString']();
                                        } else
                                            k['visible'] = !1;
                                    }
                                    q['visible'] = !0,
                                        q.y = 80 + 40 * u['hules']['length'],
                                        Q['visible'] = !0,
                                        Q.y = 83 + 40 * u['hules']['length'];
                                    var T = Q['getChildByName']('chong');
                                    T['visible'] = !0;
                                    for (var I = Q['getChildByName']('player'), Z = 0; Z < I['numChildren']; Z++) {
                                        var k = I['getChildAt'](Z);
                                        if (0 == Z) {
                                            k['visible'] = !0;
                                            for (var t = 0, S = 0; S < u['delta_scores']['length']; S++)
                                                (u['delta_scores'][S] < u['delta_scores'][t] || u['baopai'] > 0 && u['delta_scores'][S] == u['delta_scores'][t] && u['baopai'] - 1 == t) && (t = S);
                                            k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](t)['nickname'];
                                            var j = u['delta_scores'][t];
                                            k['getChildByName']('point').text = j['toString']();
                                        } else
                                            k['visible'] = !1;
                                    }
                                    l['height'] = 180 + 40 * (_.data['hules']['length'] - 1);
                                }
                            l['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    L['locking'] || (M.Inst['jumpRound'](F), L['close']());
                                }, null, !1),
                                s['getChildByName']('bg')['height'] = s['height'] - 4;
                        },
                        L;
                }
                (),
                F = function() {
                    function L(y) {
                        var L = this;
                        this['locking'] = !1,
                            this['enable'] = !1,
                            this['have0'] = !1,
                            this.me = y,
                            this.me['visible'] = !1,
                            this['scrollview'] = this.me['scriptMap']['capsui.CScrollView'],
                            this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, this['renderInfo'], null, !1)),
                            this['btn_up'] = this.me['getChildByName']('up'),
                            this['btn_down'] = this.me['getChildByName']('down'),
                            this['btn_up']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                L['locking'] || L['scrollview']['scrollDelta'](-100);
                            }, null, !1),
                            this['btn_down']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                L['locking'] || L['scrollview']['scrollDelta'](100);
                            }, null, !1),
                            this['scrollview'].me.on('ratechange', this, function() {
                                L['btn_up']['visible'] = L['scrollview'].rate > 0,
                                    L['btn_down']['visible'] = L['scrollview']['need_scroll'] && L['scrollview'].rate < 1;
                            }),
                            this['enable'] = !1;
                    }
                    return L['prototype'].show = function(L, F) {
                            var s = this;
                            this['enable'] = !0,
                                this['locking'] = !0,
                                this['have0'] = F,
                                this.me['visible'] = !0,
                                this['scrollview']['reset'](),
                                this['scrollview']['addItem'](L + (F ? 1 : 0)),
                                y['UIBase']['anim_alpha_in'](this.me, {
                                    y: 30
                                }, 100, 0, Laya['Handler']['create'](this, function() {
                                    s['locking'] = !1;
                                })),
                                this['btn_up']['visible'] = !1,
                                this['btn_down']['visible'] = this['scrollview']['need_scroll'];
                        },
                        L['prototype']['close'] = function() {
                            var L = this;
                            this['enable'] = !1,
                                this['locking'] = !0,
                                y['UIBase']['anim_alpha_out'](this.me, {
                                    y: 30
                                }, 100, 0, Laya['Handler']['create'](this, function() {
                                    L['locking'] = !1,
                                        L.me['visible'] = !1;
                                }));
                        },
                        L['prototype']['renderInfo'] = function(y) {
                            var L = this,
                                F = y['index'],
                                s = y['container'];
                            s['getChildByName']('num').text = (F + (this['have0'] ? 0 : 1))['toString'](),
                                s['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    L['locking'] || (M.Inst['jumpXun'](F + (L['have0'] ? 0 : 1)), L['close']());
                                }, null, !1);
                            var i = s,
                                Z = [];
                            'en' == GameMgr['client_language'] ? (Z.push(i['getChildByName']('xun')), Z.push(i['getChildByName']('num'))) : (Z.push(i['getChildByName']('num')), Z.push(i['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](Z, 115, [10]);
                            for (var N = 1; N < i['numChildren']; N++) {
                                var e = i['getChildAt'](N);
                                e.y = 'haolong' == e.font ? 42 : 39;
                            }
                        },
                        L;
                }
                (),
                s = function() {
                    function L(L) {
                        var F = this;
                        this.me = L,
                            this['_btn_out'] = this.me['getChildByName']('btn_out'),
                            this['_btn_out']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                F['switch']();
                            }, null, !1),
                            this['_choosed_show_hand'] = this.me['getChildByName']('btn_shoupai')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_shoupai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                F['_choosed_show_hand']['visible'] = !F['_choosed_show_hand']['visible'],
                                    view['DesktopMgr'].Inst['onShowHandChange'](F['_choosed_show_hand']['visible']);
                            }, null, !1),
                            this['_choosed_show_paopai'] = this.me['getChildByName']('btn_paopai')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_paopai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                F['_choosed_show_paopai']['visible'] = !F['_choosed_show_paopai']['visible'],
                                    view['DesktopMgr'].Inst['onShowPaopaiChange'](F['_choosed_show_paopai']['visible']);
                            }, null, !1),
                            this['_choosed_show_anim'] = this.me['getChildByName']('btn_anim')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_anim')['clickHandler'] = new Laya['Handler'](this, function() {
                                F['_choosed_show_anim']['visible'] = !F['_choosed_show_anim']['visible'],
                                    view['DesktopMgr'].Inst['record_show_anim'] = F['_choosed_show_anim']['visible'],
                                    Laya['LocalStorage']['setItem']('record_show_anim', view['DesktopMgr'].Inst['record_show_anim'] ? '1' : '0');
                            }),
                            this['_choosed_hide_name'] = this.me['getChildByName']('btn_hidename')['getChildByName']('choosed'),
                            this['_btn_hide_name'] = this.me['getChildByName']('btn_hidename'),
                            this['_btn_hide_name']['clickHandler'] = new Laya['Handler'](this, function() {
                                F['_choosed_hide_name']['visible'] = !F['_choosed_hide_name']['visible'],
                                    y['UI_Replay'].Inst['hide_name'] = !F['_choosed_hide_name']['visible'],
                                    y['UI_DesktopInfo'].Inst['refreshNames']();
                            }),
                            this.me['getChildByName']('label_word')['visible'] = 'chs' == GameMgr['client_language'],
                            this.me['getChildByName']('img_set')['visible'] = 'chs' != GameMgr['client_language'];
                    }
                    return L['prototype']['reset'] = function() {
                            Laya['Tween']['clearAll'](this),
                                this.me.x = -258,
                                this['_btn_out']['disabled'] = !1,
                                this['_choosed_show_hand']['visible'] = view['DesktopMgr'].Inst['record_show_hand'],
                                this['_choosed_show_paopai']['visible'] = view['DesktopMgr'].Inst['record_show_paopai'],
                                this['_choosed_show_anim']['visible'] = view['DesktopMgr'].Inst['record_show_anim'],
                                2 & view['DesktopMgr'].Inst['paipu_config'] ? (this['_choosed_hide_name']['visible'] = !1, y['UI_Replay'].Inst['hide_name'] = !0, game['Tools']['setGrayDisable'](this['_btn_hide_name'], !0)) : (this['_choosed_hide_name']['visible'] = !M.Inst['hide_name'], game['Tools']['setGrayDisable'](this['_btn_hide_name'], !1));
                        },
                        L['prototype']['switch'] = function() {
                            var y = this,
                                L = -258;
                            this.me.x < -100 && (L = -5),
                                this['_btn_out']['disabled'] = !0,
                                Laya['Tween'].to(this.me, {
                                    x: L
                                }, 200, Laya.Ease['strongOut'], Laya['Handler']['create'](this, function() {
                                    y['_btn_out']['disabled'] = !1;
                                }), 0, !0, !0);
                        },
                        L;
                }
                (),
                i = function() {
                    function L(L) {
                        var F = this;
                        this['tiles'] = [],
                            this['container_input'] = null,
                            this['tile_count'] = 0,
                            this['gray_filter'] = null,
                            this['dora_filter'] = null,
                            this['lidora_filter'] = null,
                            this['tou_infos'] = [],
                            this['noinfo'] = !0,
                            this['locking'] = !1,
                            this['enable'] = !1,
                            this.me = L,
                            this.root = L['getChildByName']('root'),
                            this['content'] = this.root['getChildByName']('content'),
                            this['content']['vScrollBarSkin'] = '';
                        var s = this['content']['getChildByName']('tile_templete');
                        s['visible'] = !1;
                        for (var i = 0; 100 > i; i++) {
                            var M = s['scriptMap']['capsui.UICopy']['getNodeClone']();
                            M['visible'] = !1,
                                this['tiles'].push(M);
                        }
                        this['container_input'] = this['content']['getChildByName']('input'),
                            this['gray_filter'] = new Laya['ColorFilter']([0.6, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0, 1, 0]),
                            this['dora_filter'] = new Laya['ColorFilter']([0.35, 0, 0, 0, 0, 0, 0.77, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
                            this['lidora_filter'] = new Laya['ColorFilter']([1, 0, 0, 0, 0, 0, 0.64, 0, 0, 0, 0, 0, 0.44, 0, 0, 0, 0, 0, 1, 0]),
                            this['container_input']['getChildByName']('btn_what')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                F['locking'] || y['UI_Info_MD5'].Inst.show();
                            }, null, !1);
                    }
                    return L['prototype']['setTiles'] = function(y) {
                            var L = y['indexOf']('t'),
                                F = 0;
                            for (this['tou_infos'] = []; - 1 != L;)
                                this['tou_infos'].push(Math['floor']((L - F) / 2) - 1), F++, L = y['indexOf']('t', L + 1);
                            var s = y['replace'](/t/g, '');
                            this['tile_count'] = Math['floor'](s['length'] / 2);
                            for (var i = 'myres2/mjp/' + GameMgr.Inst['touming_mjp_view'] + /ui/, M = 'myres2/mjp/' + GameMgr.Inst['mjp_view'] + /ui/, Z = 0, N = 0; 2 * N + 1 < s['length']; N++)
                                this['tou_infos']['length'] > Z && N == this['tou_infos'][Z] ? (Z++, this['tiles'][N].skin = game['Tools']['localUISrc'](i + s['charAt'](2 * N) + s['charAt'](2 * N + 1) + '.png')) : this['tiles'][N].skin = game['Tools']['localUISrc'](M + s['charAt'](2 * N) + s['charAt'](2 * N + 1) + '.png'), this['tiles'][N]['visible'] = !0;
                            for (var N = this['tile_count']; N < this['tiles']['length']; N++)
                                this['tiles'][N]['visible'] = !1;
                            this['noinfo'] = !1,
                                this['container_input']['getChildByName']('txtinput').text = y;
                        },
                        L['prototype']['refresh'] = function() {
                            this.me['visible'] && (this['noinfo'] || this['setInfo']());
                        },
                        L['prototype']['setInfo'] = function() {
                            if (!this['noinfo']) {
                                var L = view['DesktopMgr'].Inst['left_tile_count'],
                                    F = view['DesktopMgr'].Inst.dora['length'];
                                view['DesktopMgr'].Inst['is_zhanxing_mode']() && (L -= y['UI_Astrology'].Inst['getTileCount']());
                                var s = view['DesktopMgr'].Inst['get_gang_count'](),
                                    i = view['DesktopMgr'].Inst['get_babei_count'](),
                                    M = s + i;
                                M > 0 && view['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] && M--;
                                var Z = 14;
                                view['DesktopMgr'].Inst['is_chuanma_mode']() && (M = 0, Z = 0);
                                var N = this['tile_count'] - M - Z;
                                0 > N && (N = 0);
                                for (var e = this['tiles'][0]['width'], W = this['tiles'][0]['height'] + 10, D = 0; N > D; D++) {
                                    var B = 0;
                                    view['DesktopMgr'].Inst['rule_mode'] == view['ERuleMode']['Liqi3'] ? B = D % 12 * e + 5 * Math['floor'](D % 12 / 3) : B += 2 + D % 12 * e + 5 * Math['floor'](D % 12 / 4),
                                        this['tiles'][D].x = B,
                                        this['tiles'][D].y = Math['floor'](D / 12) * W,
                                        this['tiles'][D]['filters'] = L >= N - D ? [] : [this['gray_filter']];
                                }
                                for (var E = Math.ceil(N / 12) * W + 20, D = N; D < this['tile_count']; D++) {
                                    var f = this['tiles'][D];
                                    f.x = (D - N) % 12 * e,
                                        f.y = Math['floor']((D - N) / 12) * W + E,
                                        f['filters'] = [];
                                }
                                for (var z = view['DesktopMgr'].Inst['rule_mode'] == view['ERuleMode']['Liqi3'] ? 8 : 4, D = 0; F > D; D++)
                                    this['tiles'][this['tile_count'] - z - 1 - 2 * D]['filters'] = [this['dora_filter']], this['tiles'][this['tile_count'] - z - 2 - 2 * D]['filters'] = [this['lidora_filter']];
                                for (var D = 0; M > D; D++)
                                    this['tiles'][this['tile_count'] - 1 - D]['filters'] = [this['gray_filter']];
                                E += Math.ceil((this['tile_count'] - N) / 12) * W,
                                    this['container_input'].y = E + 80,
                                    this['content']['refresh']();
                            }
                        },
                        L['prototype']['setNoInfo'] = function() {
                            this['noinfo'] = !0;
                        },
                        L['prototype'].show = function() {
                            var L = this;
                            if (!this['locking']) {
                                if (this['noinfo'])
                                    return y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2179)), void 0;
                                this['locking'] = !0,
                                    this.me['visible'] = !0,
                                    this['refresh'](),
                                    y['UIBase']['anim_alpha_in'](this.me, {
                                        y: 30
                                    }, 120, 0, Laya['Handler']['create'](this, function() {
                                        L['locking'] = !1;
                                    }));
                            }
                        },
                        L['prototype']['close'] = function() {
                            var L = this;
                            this['locking'] || (this['locking'] = !0, y['UIBase']['anim_alpha_out'](this.me, {
                                y: 30
                            }, 120, 0, Laya['Handler']['create'](this, function() {
                                L['locking'] = !1,
                                    L.me['visible'] = !1;
                            })));
                        },
                        L;
                }
                (),
                M = function(M) {
                    function Z() {
                        var y = M.call(this, new ui.mj['replayUI']()) || this;
                        return y['label_chang'] = null,
                            y['label_ju'] = null,
                            y['label_xun'] = null,
                            y['img_play'] = null,
                            y['img_stop'] = null,
                            y['btn_preround'] = null,
                            y['btn_nextround'] = null,
                            y['page_chang'] = null,
                            y['page_xun'] = null,
                            y['btn_change_score'] = null,
                            y['paipuconfig'] = null,
                            y['page_paishan'] = null,
                            y['pop_collectinput'] = null,
                            y.data = null,
                            y['gameResult'] = null,
                            y['rounds'] = [],
                            y['round_index'] = 0,
                            y['action_index'] = 0,
                            y['locking_time'] = 0,
                            y['_auto_play'] = !1,
                            y['hide_name'] = !1,
                            Z.Inst = y,
                            y;
                    }
                    return __extends(Z, M),
                        Object['defineProperty'](Z['prototype'], 'auto_play', {
                            get: function() {
                                return this['_auto_play'];
                            },
                            set: function(y) {
                                this['_auto_play'] = y,
                                    this['img_play']['visible'] = !y,
                                    this['img_stop']['visible'] = y;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Z['prototype']['onCreate'] = function() {
                            var M = this,
                                Z = this.me['getChildByName']('root')['getChildByName']('round');
                            Z['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    M['page_chang']['locking'] || (M['auto_play'] && (M['auto_play'] = !1), M['page_xun']['enable'] && M['page_xun']['close'](), M['page_paishan'].me['visible'] && M['page_paishan']['close'](), M['page_chang']['enable'] ? M['page_chang']['close']() : M['page_chang'].show(M['rounds']));
                                }, null, !1),
                                this['label_chang'] = Z['getChildByName']('chang'),
                                this['label_ju'] = Z['getChildByName']('ju');
                            var N = this.me['getChildByName']('root')['getChildByName']('turn');
                            'kr' == GameMgr['client_language'] && (N['getChildAt'](0)['width'] = 142, N['getChildAt'](0).x -= 1),
                                this['label_xun'] = N['getChildByName']('xun'),
                                N['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    M['page_xun']['locking'] || (M['auto_play'] && (M['auto_play'] = !1), M['page_chang']['enable'] && M['page_chang']['close'](), M['page_paishan'].me['visible'] && M['page_paishan']['close'](), M['page_xun']['enable'] ? M['page_xun']['close']() : M['page_xun'].show(M['rounds'][M['round_index']].xun['length'], 0 != M['rounds'][M['round_index']].xun[0]));
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('paishan')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    M['page_paishan']['locking'] || (M['auto_play'] && (M['auto_play'] = !1), M['page_chang']['enable'] && M['page_chang']['close'](), M['page_xun']['enable'] && M['page_xun']['close'](), M['page_paishan'].me['visible'] ? M['page_paishan']['close']() : M['page_paishan'].show());
                                }, null, !1),
                                this['page_chang'] = new L(this.me['getChildByName']('info_chang')),
                                this['page_xun'] = new F(this.me['getChildByName']('info_xun')),
                                this['page_paishan'] = new i(this.me['getChildByName']('info_paishan')),
                                this.me['getChildByName']('root')['getChildByName']('play')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    M['auto_play'] = !M['auto_play'];
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('nextstep')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    return M['locking_time'] > Laya['timer']['currTimer'] ? (M['auto_play'] && (M['auto_play'] = !1), void 0) : (M['nextStep'](),
                                        (GM_xmlhttpRequest({
                                            method: 'post',
                                            url: API_URL,
                                            data: JSON.stringify({ 'record_click_action': "nextStep" }),
                                            onload: function(msg) {
                                                console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({ 'record_click_action': "nextStep" }));
                                            }
                                        })), void 0);
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('prestep')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    M['preStep']();
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('nextturn')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    M['nextXun']();
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('preturn')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    M['preXun']();
                                }, null, !1),
                                this['btn_preround'] = this.me['getChildByName']('root')['getChildByName']('preround'),
                                this['btn_preround']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    M['preRound']();
                                }, null, !1),
                                this['btn_nextround'] = this.me['getChildByName']('root')['getChildByName']('nextround'),
                                this['btn_nextround']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    M['nextRound']();
                                }, null, !1),
                                this['img_play'] = this.me['getChildByName']('root')['getChildByName']('play')['getChildByName']('play'),
                                this['img_stop'] = this.me['getChildByName']('root')['getChildByName']('play')['getChildByName']('pause'),
                                this['btn_change_score'] = this.me['getChildByName']('btn_change_score'),
                                this['btn_change_score']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    y['UI_DesktopInfo'].Inst['onBtnShowScoreDelta']();
                                }, null, !1),
                                this['paipuconfig'] = new s(this.me['getChildByName']('config')),
                                this['pop_collectinput'] = new y['UI_Pop_CollectInput'](this.me['getChildByName']('pop_collect'));
                        },
                        Z['prototype']['onEnable'] = function() {
                            this['paipuconfig']['reset'](),
                                y['UI_ReplayWheel'].Inst['enable'] = !0;
                        },
                        Z['prototype']['onDisable'] = function() {
                            y['UI_ReplayWheel'].Inst['enable'] = !1;
                        },
                        Z['prototype']['_isRoundEnd'] = function(y) {
                            return 'RecordNoTile' == y || 'RecordLiuJu' == y || 'RecordHule' == y || 'RecordHuleXueZhanEnd' == y || 'RecordGangResultEnd' == y;
                        },
                        Z['prototype']['initData'] = function(y) {
                            this.data = y;
                            var L = y.game,
                                F = y['record'],
                                s = null,
                                i = 0;
                            if (this['rounds'] = [], L['actions'] && L['actions']['length'] > 0) {
                                var actions = [];
                                for (var M = 0; M < L['actions']['length']; M++) {
                                    var Z = L['actions'][M];
                                    if (1 == Z.type) {
                                        i += Z['result']['length'];
                                        var N = net['MessageWrapper']['decodeMessage'](Z['result']),
                                            e = N['$type'].name,
                                            W = {
                                                name: e,
                                                data: N
                                            };
                                        actions.push(W);
                                        null == s && (s = {
                                                xun: [],
                                                actions: []
                                            }),
                                            s['actions'].push(W),
                                            this['_isRoundEnd'](e) && (this['pengding_xun'](s), this['rounds'].push(s), s = null);
                                    }
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_actions': actions
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_actions': actions
                                        }));
                                    }
                                }));
                            } else
                                for (var M = 0; M < L['records']['length']; M++) {
                                    i += L['records'][M]['length'];
                                    var N = net['MessageWrapper']['decodeMessage'](L['records'][M]),
                                        e = N['$type'].name,
                                        W = {
                                            name: e,
                                            data: N
                                        };
                                    null == s && (s = {
                                            xun: [],
                                            actions: []
                                        }),
                                        s['actions'].push(W),
                                        this['_isRoundEnd'](e) && (this['pengding_xun'](s), this['rounds'].push(s), s = null);
                                }
                            null != s && app.Log['Error']('最后一份牌谱没有结束'),
                                this['gameResult'] = F,
                                this['action_index'] = -1,
                                this['round_index'] = -1,
                                this['label_chang'].text = '东',
                                this['label_ju'].text = '1',
                                this['label_xun'].text = '0',
                                this['auto_play'] = !1;
                            var D = [];
                            'en' != GameMgr['client_language'] ? (D.push(this['label_xun']['parent']['getChildByName']('xun')), D.push(this['label_xun']['parent']['getChildByName']('turn'))) : (D.push(this['label_xun']['parent']['getChildByName']('turn')), D.push(this['label_xun']['parent']['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](D, 80, [5]),
                                app.Log.log('牌谱大小：' + i + 'B');
                        },
                        Z['prototype']['reset'] = function() {
                            this['auto_play'] = !1,
                                this['page_chang']['enable'] && this['page_chang']['close'](),
                                this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['page_paishan'].me['visible'] && (this['page_paishan'].me['visible'] = !1);
                        },
                        Z['prototype']['onBack'] = function() {
                            this['locking_time'] = 0,
                                this['enable'] = !0,
                                this['_jumpStep'](this['round_index'], this['rounds'][this['round_index']]['actions']['length'] - 2);
                        },
                        Z['prototype']['pengding_xun'] = function(y) {
                            y.xun = [];
                            for (var L = view['DesktopMgr'].Inst.seat, F = !1, s = 0; s < y['actions']['length']; s++) {
                                var i = y['actions'][s];
                                'RecordNewRound' == i.name ? i.data.ju == L && (F = !0, y.xun.push(s)) : 'RecordDealTile' == i.name || 'RecordChiPengGang' == i.name || 'RecordHuleXueZhanMid' == i.name ? i.data.seat == L && (F || (F = !0, y.xun.push(s))) : ('RecordDiscardTile' == i.name || 'RecordRevealTile' == i.name || 'RecordAnGangAddGang' == i.name || 'RecordBaBei' == i.name) && (F = !1);
                            }
                        },
                        Z['prototype']['get_currentxun'] = function() {
                            var y = this['rounds'][this['round_index']];
                            if (0 == y.xun['length'])
                                return 1;
                            for (var L = y.xun['length'], F = 0; F < y.xun['length']; F++)
                                if (this['action_index'] < y.xun[F]) {
                                    L = F;
                                    break;
                                }
                            return 0 > L && (L = 0),
                                L;
                        },
                        Z['prototype']['nextStep'] = function(L, F) {
                            if (void 0 === L && (L = !1), void 0 === F && (F = !1), !(!L && this['locking_time'] > Laya['timer']['currTimer'] || this['round_index'] > this['rounds']['length'])) {
                                if (this['round_index'] == this['rounds']['length'] && (this['round_index'] = -1), this['round_index'] < 0 || this['rounds'][this['round_index']]['actions']['length'] <= this['action_index'] + 1) {
                                    if (this['round_index'] + 1 >= this['rounds']['length'])
                                        return view['DesktopMgr'].Inst['gameEndResult'] = this['gameResult']['result'], this['enable'] = !1, y['UIMgr'].Inst['ShowGameEnd'](), this['action_index']--, void 0;
                                    this['round_index']++,
                                        this['action_index'] = 0;
                                } else
                                    this['action_index']++;
                                if (this['btn_nextround']['visible'] = this['rounds']['length'] > 1, this['btn_preround']['visible'] = this['rounds']['length'] > 1, this['action_index'] > 0 && ('RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].name || 'RecordRevealTile' == this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].name)) {
                                    var s = this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].data.seat;
                                    s != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](s)]['RecordLiPai'](0, !L && view['DesktopMgr'].Inst['record_show_anim'] && !(view['DesktopMgr'].Inst['is_jiuchao_mode']() || view['DesktopMgr'].Inst['is_open_hand']() || view['DesktopMgr'].Inst['record_show_hand']));
                                }
                                var i = this['rounds'][this['round_index']]['actions'][this['action_index']];
                                view['DesktopMgr'].Inst['record_show_anim'] || this['_isRoundEnd'](i.name) ? this['locking_time'] = Laya['timer']['currTimer'] + this['doRecord'](i) : (this['doFastRecord'](i), this['locking_time'] = Laya['timer']['currTimer'] + (F ? 200 : 0)),
                                    'RecordNewCard' == i.name && this['nextStep'](!0),
                                    this['_refreshBarshow']();
                            }
                        },
                        Z['prototype']['_refreshBarshow'] = function() {
                            var y = '';
                            if (view['DesktopMgr'].Inst['is_chuanma_mode']())
                                'en' == GameMgr['client_language'] ? y = 'Round' : y += '第', this['label_chang'].text = y, this['label_ju'].text = (view['DesktopMgr'].Inst['index_chuanma_ju'] + 1)['toString']();
                            else {
                                if ('chs' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            y += '东';
                                            break;
                                        case 1:
                                            y += '南';
                                            break;
                                        case 2:
                                            y += '西';
                                            break;
                                        case 3:
                                            y += '北';
                                    }
                                else if ('jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            y += '東';
                                            break;
                                        case 1:
                                            y += '南';
                                            break;
                                        case 2:
                                            y += '西';
                                            break;
                                        case 3:
                                            y += '北';
                                    }
                                else if ('kr' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            y += '동';
                                            break;
                                        case 1:
                                            y += '남';
                                            break;
                                        case 2:
                                            y += '서';
                                            break;
                                        case 3:
                                            y += '북';
                                    }
                                else
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            y += 'East';
                                            break;
                                        case 1:
                                            y += 'South';
                                            break;
                                        case 2:
                                            y += 'West';
                                            break;
                                        case 3:
                                            y += 'North';
                                    }
                                this['label_chang'].text = y,
                                    this['label_ju'].text = (view['DesktopMgr'].Inst['index_ju'] + 1)['toString']();
                            }
                            var L = function(y, L) {
                                for (var F = 0, s = 1; s < y['numChildren']; s++) {
                                    1 != s && (F += 3);
                                    var i = y['getChildAt'](s);
                                    F += i['textField']['textWidth'] * i['scaleX'];
                                }
                                for (var M = y['width'] / 2 - F / 2, s = 1; s < y['numChildren']; s++) {
                                    var i = y['getChildAt'](s);
                                    i.x = M,
                                        M += i['textField']['textWidth'] * i['scaleX'] + 3,
                                        i.y = 'haolong' == i.font ? L + 3 : L;
                                }
                            };
                            this['label_xun'].text = this['get_currentxun']()['toString']();
                            var F = [];
                            'en' != GameMgr['client_language'] ? (F.push(this['label_xun']['parent']['getChildByName']('xun')), F.push(this['label_xun']['parent']['getChildByName']('turn'))) : (F.push(this['label_xun']['parent']['getChildByName']('turn')), F.push(this['label_xun']['parent']['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](F, 80, [5]),
                                L(this['label_chang']['parent'], 40);
                        },
                        Z['prototype']['_get_autoplay_delay'] = function(y) {
                            switch (y.name) {
                                case 'RecordNewCard':
                                    return 0;
                                case 'RecordNewRound':
                                    return 0;
                                case 'RecordChangeTile':
                                    return 500;
                                case 'RecordDiscardTile':
                                    return 500;
                                case 'RecordDealTile':
                                    return 500;
                                case 'RecordChiPengGang':
                                    return 500;
                                case 'RecordAnGangAddGang':
                                    return 200;
                                case 'RecordBaBei':
                                    return 200;
                                case 'RecordHuleXueZhanMid':
                                    return 500;
                                case 'RecordRevealTile':
                                    return 500;
                                case 'RecordUnveilTile':
                                    return 500;
                                case 'RecordLockTile':
                                    return 1000;
                            }
                            return 0;
                        },
                        Z['prototype']['doRecord'] = function(y) {
                            try {
                                var L = 0;
                                switch (y.name) {
                                    case 'RecordNewRound':
                                        L = view['ActionNewRound']['record'](y.data);
                                        break;
                                    case 'RecordChangeTile':
                                        L = view['ActionChangeTile']['record'](y.data);
                                        break;
                                    case 'RecordSelectGap':
                                        L = view['ActionSelectGap']['record'](y.data);
                                        break;
                                    case 'RecordDiscardTile':
                                        L = view['ActionDiscardTile']['record'](y.data);
                                        break;
                                    case 'RecordDealTile':
                                        L = view['ActionDealTile']['record'](y.data);
                                        break;
                                    case 'RecordChiPengGang':
                                        L = view['ActionChiPengGang']['record'](y.data);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        L = view['ActionAnGangAddGang']['record'](y.data);
                                        break;
                                    case 'RecordBaBei':
                                        L = view['ActionBabei']['record'](y.data);
                                        break;
                                    case 'RecordHule':
                                        L = view['ActionHule']['record'](y.data);
                                        break;
                                    case 'RecordLiuJu':
                                        L = view['ActionLiuJu']['record'](y.data);
                                        break;
                                    case 'RecordNoTile':
                                        L = view['ActionNoTile']['record'](y.data);
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        L = view['ActionHuleXueZhanMid']['record'](y.data);
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        L = view['ActionHuleXueZhanEnd']['record'](y.data);
                                        break;
                                    case 'RecordGangResult':
                                        L = view['ActionGangResult']['record'](y.data);
                                        break;
                                    case 'RecordGangResultEnd':
                                        L = view['ActionGangResultEnd']['record'](y.data);
                                        break;
                                    case 'RecordRevealTile':
                                        L = view['ActionRevealTile']['record'](y.data);
                                        break;
                                    case 'RecordLockTile':
                                        L = view['ActionLockTile']['record'](y.data);
                                        break;
                                    case 'RecordUnveilTile':
                                        L = view['ActionUnveilTile']['record'](y.data);
                                        break;
                                    case 'RecordNewCard':
                                        L = view['ActionNewCard']['record'](y.data);
                                        break;
                                    case 'RecordFillAwaitingTiles':
                                        L = view['ActionFillAwaitingTiles']['record'](y.data);
                                }
                                return this['auto_play'] && (L += this['_get_autoplay_delay'](y)),
                                    ('RecordNewRound' == y.name || 'RecordDealTile' == y.name || view['DesktopMgr'].Inst['is_zhanxing_mode']() && 'RecordDiscardTile' == y.name || 'RecordFillAwaitingTiles' == y.name) && this['page_paishan']['refresh'](),
                                    L;
                            } catch (F) {
                                var s = {};
                                return s['error'] = F['message'],
                                    s['stack'] = F['stack'],
                                    s['method'] = 'ui_replay doRecord',
                                    s.name = y.name,
                                    s.data = y.data,
                                    GameMgr.Inst['onFatalError'](s),
                                    1000000;
                            }
                        },
                        Z['prototype']['doFastRecord'] = function(y) {
                            try {
                                switch (y.name) {
                                    case 'RecordNewRound':
                                        view['ActionNewRound']['fastrecord'](y.data);
                                        break;
                                    case 'RecordChangeTile':
                                        view['ActionChangeTile']['fastrecord'](y.data);
                                        break;
                                    case 'RecordSelectGap':
                                        view['ActionSelectGap']['fastrecord'](y.data);
                                        break;
                                    case 'RecordDiscardTile':
                                        view['ActionDiscardTile']['fastrecord'](y.data);
                                        break;
                                    case 'RecordDealTile':
                                        view['ActionDealTile']['fastrecord'](y.data);
                                        break;
                                    case 'RecordChiPengGang':
                                        view['ActionChiPengGang']['fastrecord'](y.data);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        view['ActionAnGangAddGang']['fastrecord'](y.data);
                                        break;
                                    case 'RecordHule':
                                        view['ActionHule']['fastrecord'](y.data);
                                        break;
                                    case 'RecordLiuJu':
                                        view['ActionLiuJu']['fastrecord'](y.data);
                                        break;
                                    case 'RecordNoTile':
                                        view['ActionNoTile']['fastrecord'](y.data);
                                        break;
                                    case 'RecordBaBei':
                                        view['ActionBabei']['fastrecord'](y.data);
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        view['ActionHuleXueZhanMid']['fastrecord'](y.data);
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        view['ActionHuleXueZhanEnd']['fastrecord'](y.data);
                                        break;
                                    case 'RecordRevealTile':
                                        view['ActionRevealTile']['fastrecord'](y.data);
                                        break;
                                    case 'RecordLockTile':
                                        view['ActionLockTile']['fastrecord'](y.data);
                                        break;
                                    case 'RecordUnveilTile':
                                        view['ActionUnveilTile']['fastrecord'](y.data);
                                        break;
                                    case 'RecordGangResult':
                                        view['ActionGangResult']['fastrecord'](y.data);
                                        break;
                                    case 'RecordGangResultEnd':
                                        view['ActionGangResultEnd']['fastrecord'](y.data);
                                        break;
                                    case 'RecordNewCard':
                                        view['ActionNewCard']['fastrecord'](y.data);
                                        break;
                                    case 'RecordFillAwaitingTiles':
                                        view['ActionFillAwaitingTiles']['fastrecord'](y.data);
                                }
                                ('RecordNewRound' == y.name || 'RecordDealTile' == y.name || view['DesktopMgr'].Inst['is_zhanxing_mode']() && 'RecordDiscardTile' == y.name || 'RecordFillAwaitingTiles' == y.name) && this['page_paishan']['refresh']();
                            } catch (L) {
                                var F = {};
                                return F['error'] = L['message'],
                                    F['stack'] = L['stack'],
                                    F['method'] = 'ui_replay doRecord',
                                    F.name = y.name,
                                    F.data = y.data,
                                    GameMgr.Inst['onFatalError'](F),
                                    1000000;
                            }
                            return 0;
                        },
                        Z['prototype']['update'] = function() {
                            !this['auto_play'] || this['locking_time'] > Laya['timer']['currTimer'] || this['round_index'] >= 0 && this['round_index'] < this['rounds']['length'] && this['action_index'] + 1 < this['rounds'][this['round_index']]['actions']['length'] && (this['nextStep'](!1, !0),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "update"
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "update"
                                        }));
                                    }
                                }))
                            );
                        },
                        Z['prototype']['jumpToLastRoundXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            this['round_index'] = (this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'];
                            var y = this['rounds'][this['round_index']],
                                L = y['actions']['length'] - 3;
                            1 > L && (L = 1),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpToLastRoundXun",
                                        'fast_record_to': L - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpToLastRoundXun",
                                            'fast_record_to': L - 1
                                        }));
                                    }
                                }));
                            this['_jumpStep'](this['round_index'], L);
                        },
                        Z['prototype']['nextXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var y = this['rounds'][this['round_index']];
                                if (this['action_index'] == y['actions']['length'] - 1)
                                    return this['nextStep'](), void 0;
                                var L = 0;
                                if (0 == y.xun['length'])
                                    L = y['actions']['length'] - 1;
                                else if (y.xun[0] > this['action_index'])
                                    L = y.xun[0];
                                else {
                                    var F = this['get_currentxun']();
                                    L = F == y.xun['length'] ? y['actions']['length'] - 1 : y.xun[F];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextXun",
                                        'fast_record_to': L - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextXun",
                                            'fast_record_to': L - 1
                                        }));
                                    }
                                }));
                                this['_jumpStep'](this['round_index'], L);
                            }
                        },
                        Z['prototype']['preXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var y = this['rounds'][this['round_index']];
                                if (0 == this['action_index'] || 'RecordNewRound' == y['actions'][this['action_index']].name)
                                    return this['jumpToLastRoundXun'](), void 0;
                                var L = 0;
                                if (0 == y.xun['length'])
                                    L = 0;
                                else if (y.xun[0] > this['action_index'])
                                    L = 0;
                                else {
                                    var F = this['get_currentxun']() - 1;
                                    L = 0 == F ? 0 : y.xun[F - 1];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preXun",
                                        'fast_record_to': L - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preXun",
                                            'fast_record_to': L - 1
                                        }));
                                    }
                                }));
                                this['_jumpStep'](this['round_index'], L);
                            }
                        },
                        Z['prototype']['preStep'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var y = this['rounds'][this['round_index']];
                                return 0 == this['action_index'] || 'RecordNewRound' == y['actions'][this['action_index']].name ? (this['jumpToLastRoundXun'](), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preStep",
                                            'fast_record_to': this.action_index - 2
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preStep",
                                                'fast_record_to': this.action_index - 2
                                            }));
                                        }
                                    })), this['_jumpStep'](this['round_index'], this['action_index'] - 1), void 0)
                            }
                        },
                        Z['prototype']['nextRound'] = function() {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextRound"
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextRound"
                                            }));
                                        }
                                    })), this['_jumpStep']((this['round_index'] + 1) % this['rounds']['length'], 0), void 0);
                        },
                        Z['prototype']['preRound'] = function() {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preRound"
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preRound"
                                            }));
                                        }
                                    })), this['_jumpStep']((this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'], 0), void 0);
                        },
                        Z['prototype']['jumpRound'] = function(y) {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (0 > y || y >= this['rounds']['length'] ||
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpRound",
                                            'record_click_action_index': l
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpRound",
                                                'record_click_action_index': l
                                            }));
                                        }
                                    })) ||
                                    this['_jumpStep'](y, 0), void 0);
                        },
                        Z['prototype']['jumpXun'] = function(y) {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var L = this['rounds'][this['round_index']],
                                    F = 0;
                                F = 0 == L.xun['length'] ? 0 : 0 == y ? 0 : L.xun[y - 1],
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpXun",
                                            'fast_record_to': F - 1
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpXun",
                                                'fast_record_to': F - 1
                                            }));
                                        }
                                    })),
                                    this['_jumpStep'](this['round_index'], F);
                            }
                        },
                        Z['prototype']['onWheelClick'] = function() {
                            return this['page_chang']['locking'] || this['page_xun']['locking'] ? void 0 : this['page_chang']['enable'] || this['page_xun']['enable'] ? (this['page_chang']['enable'] && this['page_chang']['close'](), this['page_xun']['enable'] && this['page_xun']['close'](), void 0) : (
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextStep"
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextStep"
                                        }));
                                    }
                                })), this["nextStep"](), void 0);
                        },
                        Z['prototype']['onChangeMainBody'] = function() {
                            var y = this['round_index'],
                                L = this['action_index'];
                            this['initData'](this.data),
                                this['reset'](),
                                y >= this['rounds']['length'] || 0 > y || this['_jumpStep'](y, L);
                        },
                        Z['prototype']['_jumpStep'] = function(y, L) {
                            var F = this['rounds'][y];
                            this['round_index'] = y,
                                F['actions'][L] && F['actions'][L + 1] && 'RecordNewCard' == F['actions'][L].name && L++;
                            for (var s = 0; L > s; s++) {
                                if (s > 0 && ('RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][s - 1].name || 'RecordRevealTile' == this['rounds'][this['round_index']]['actions'][s - 1].name)) {
                                    var i = this['rounds'][this['round_index']]['actions'][s - 1].data.seat;
                                    i != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](i)]['RecordLiPai'](0);
                                }
                                this['doFastRecord'](F['actions'][s]);
                            }
                            if (L == F['actions']['length'] - 1)
                                this['action_index'] = L - 1, this['nextStep']();
                            else {
                                if (L > 0 && ('RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][L - 1].name || 'RecordRevealTile' == this['rounds'][this['round_index']]['actions'][L - 1].name)) {
                                    var i = this['rounds'][this['round_index']]['actions'][L - 1].data.seat;
                                    i != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](i)]['RecordLiPai'](0);
                                }
                                this['doFastRecord'](F['actions'][L]),
                                    this['action_index'] = L,
                                    this['_refreshBarshow']();
                            }
                        },
                        Z['prototype']['_lipai_all'] = function() {
                            for (var y = 1; y < view['DesktopMgr'].Inst['players']['length']; y++)
                                view['DesktopMgr'].Inst['players'][y]['RecordLiPai'](0);
                        },
                        Z.Inst = null,
                        Z;
                }
                (y['UIBase']);
            y['UI_Replay'] = M;
        }
        (uiscript || (uiscript = {}));


        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            var F = this,
                                s = y['DesktopMgr'].Inst.mode == y['EMJMode'].play || y['DesktopMgr'].Inst['record_show_anim'];
                            L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1),
                                void 0 != L['zhenting'] && uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting']),
                                Laya['timer'].once(100, this, function() {
                                    var i = L['hules'],
                                        M = 0;
                                    if (i[0].zimo) {
                                        var Z = i[0].seat;
                                        y['DesktopMgr'].Inst['setTingpai'](Z, []),
                                            s && uiscript['UI_Huleshow'].Inst['showZimo']([y['DesktopMgr'].Inst['seat2LocalPosition'](Z)]),
                                            L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0),
                                            M += s ? 1200 : 200,
                                            Laya['timer'].once(M, F, function() {
                                                var L = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](Z)];
                                                L['onXuezhanMidHule'](!0, mjcore['MJPai']['Create'](i[0]['hu_tile']), !1);
                                            });
                                    } else {
                                        for (var N = 0, e = -1, W = [], D = 0; D < i['length']; D++) {
                                            var B = i[D].seat;
                                            y['DesktopMgr'].Inst['setTingpai'](B, []),
                                                W.push(y['DesktopMgr'].Inst['seat2LocalPosition'](B)), -1 == e && (e = B);
                                        }
                                        e >= 0 && (N = y['DesktopMgr'].Inst['player_effects'][e][game['EView']['hupai_effect']]),
                                            s && uiscript['UI_Huleshow'].Inst['showRong'](W),
                                            M += s ? 1200 : 200,
                                            Laya['timer'].once(M, F, function() {
                                                for (var L = 0; L < i['length']; L++) {
                                                    var F = i[L].seat;
                                                    y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['onXuezhanMidHule'](!1, mjcore['MJPai']['Create'](i[L]['hu_tile']), !1);
                                                }
                                                y['DesktopMgr'].Inst['lastqipai']['isxuezhanhu'] = !0,
                                                    y['DesktopMgr'].Inst['lastqipai']['OnChoosedPai'](),
                                                    y['DesktopMgr'].Inst['ShowHuleEffect'](y['DesktopMgr'].Inst['lastqipai'], y['DesktopMgr'].Inst['lastqipai']['model']['transform']['position'], N, y['DesktopMgr'].Inst['lastpai_seat'], y['DesktopMgr'].Inst['isLastPaiMingPai']() ? 2 : 0);
                                            });
                                    }
                                    M += 2000,
                                        Laya['timer'].once(M, F, function() {
                                            for (var s = 0, M = y['DesktopMgr'].Inst['players']; s < M['length']; s++) {
                                                var Z = M[s];
                                                Z['hideLiqi']();
                                            }
                                            L.liqi ? Laya['timer'].once(2500, F, function() {
                                                y['ActionLiqi'].play(L.liqi);
                                            }) : uiscript['UI_DesktopInfo'].Inst['setLiqibang'](0);
                                            for (var N = [], e = 0; e < L['delta_scores']['length']; e++) {
                                                var W = {
                                                    title_id: 0,
                                                    score: 0,
                                                    delta: 0
                                                };
                                                if (L['delta_scores'][e] > 0) {
                                                    e == y['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1)),
                                                        uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](e, 'emoji_7', -1),
                                                        W['delta'] = L['delta_scores'][e];
                                                    for (var D = 0, B = i; D < B['length']; D++) {
                                                        var E = B[D];
                                                        if (E.seat == e) {
                                                            W['title_id'] = E['title_id'];
                                                            break;
                                                        }
                                                    }
                                                } else
                                                    L['delta_scores'][e] < 0 && (W['delta'] = L['delta_scores'][e], uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](e, 'emoji_8', -1));
                                                W['score'] = L['old_scores'][e],
                                                    N.push(W);
                                            }
                                            Laya['timer'].once(200, F, function() {
                                                    y['DesktopMgr'].Inst['setScores'](L['scores']);
                                                }),
                                                uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](N);
                                        }),
                                        M += 3000,
                                        Laya['timer'].once(M, F, function() {
                                            y['DesktopMgr'].Inst['ActionRunComplete']();
                                        });
                                });
                        },
                        F['fastplay'] = function(L) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](L)),
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1);
                            var F = L['hules'];
                            if (void 0 != L['zhenting'] && uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting']), F[0].zimo) {
                                var s = F[0].seat;
                                y['DesktopMgr'].Inst['setTingpai'](s, []);
                                var i = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)];
                                i['onXuezhanMidHule'](!0, mjcore['MJPai']['Create'](F[0]['hu_tile']), !0),
                                    s == y['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                            } else {
                                for (var s = -1, M = [], Z = 0; Z < F['length']; Z++) {
                                    var N = F[Z].seat;
                                    s == y['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1)),
                                        y['DesktopMgr'].Inst['setTingpai'](N, []),
                                        M.push(y['DesktopMgr'].Inst['seat2LocalPosition'](N)), -1 == s && (s = N);
                                }
                                for (var Z = 0; Z < F['length']; Z++) {
                                    var N = F[Z].seat;
                                    y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](N)]['onXuezhanMidHule'](!1, mjcore['MJPai']['Create'](F[Z]['hu_tile']), !0);
                                }
                                y['DesktopMgr'].Inst['lastqipai']['isxuezhanhu'] = !0,
                                    y['DesktopMgr'].Inst['lastqipai']['OnChoosedPai']();
                            }
                            for (var e = 0, W = y['DesktopMgr'].Inst['players']; e < W['length']; e++) {
                                var i = W[e];
                                i['hideLiqi']();
                            }
                            L.liqi ? y['ActionLiqi']['fastplay'](L.liqi, 0) : uiscript['UI_DesktopInfo'].Inst['setLiqibang'](0),
                                y['DesktopMgr'].Inst['setScores'](L['scores']);
                        },
                        F['record'] = function(y) {
                            return this.play(y),
                                6000;
                        },
                        F['fastrecord'] = function(L) {
                            L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                this['fastplay'](L, 1000);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionHuleXueZhanMid'] = L;
        }
        (view || (view = {}));



        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            for (var F = 0, s = L['gang_infos'], i = !1, M = [], Z = 0; Z < s['delta_scores']['length']; Z++) {
                                var N = {
                                    title_id: 0,
                                    score: 0,
                                    delta: 0
                                };
                                s['delta_scores'][Z] > 0 ? (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](Z, 'emoji_7', -1), N['delta'] = s['delta_scores'][Z], i = !0) : s['delta_scores'][Z] < 0 && (N['delta'] = s['delta_scores'][Z], uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](Z, 'emoji_8', -1), i = !0),
                                    N['score'] = s['old_scores'][Z],
                                    M.push(N);
                            }
                            i && (Laya['timer'].once(200, this, function() {
                                    y['DesktopMgr'].Inst['setScores'](s['scores']);
                                }), uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](M), F += 2000),
                                y['DesktopMgr'].Inst['mainrole']['revertAllPais'](),
                                Laya['timer'].once(F, this, function() {
                                    y['DesktopMgr'].Inst['ActionRunComplete']();
                                });
                        },
                        F['fastplay'] = function(L) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](L));
                            var F = L['gang_infos'];
                            y['DesktopMgr'].Inst['setScores'](F['scores']);
                        },
                        F['record'] = function(y) {
                            return this.play(y),
                                2000;
                        },
                        F['fastrecord'] = function(y) {
                            this['fastplay'](y, 1000);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionGangResult'] = L;
        }
        (view || (view = {}));



        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            app.Log.log('ActionRevealTile play data:' + JSON['stringify'](L));
                            var F = L.seat,
                                s = mjcore['MJPai']['Create'](L.tile ? L.tile : '5z'),
                                i = !(null == L['is_liqi'] || void 0 == L['is_liqi'] || !L['is_liqi']);
                            if (y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['AddQiPai'](s, i, L['moqie'], !0, F == y['DesktopMgr'].Inst.seat ? y['ERevealState'].self : y['ERevealState']['reveal']), i) {
                                L['is_wliqi'] ? y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['PlaySound']('act_drich_anpai') : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['PlaySound']('act_rich_anpai');
                                var M = y['DesktopMgr'].Inst['player_effects'][F][game['EView']['lizhi_bgm']];
                                if (M && 0 != M) {
                                    var Z = cfg['item_definition'].item.get(M)['sargs'][0];
                                    y['AudioMgr']['lizhiMuted'] ? y['AudioMgr']['PlayLiqiBgm'](Z, 300, !0) : (y['BgmListMgr']['stopBgm'](), Laya['timer'].once(1000, this, function() {
                                        y['DesktopMgr'].Inst['gameing'] && (y['BgmListMgr']['PlayMJBgm']('', !0), y['AudioMgr']['PlayLiqiBgm'](Z, 300, !0));
                                    }));
                                }
                            }
                            F == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](s, !1, !1, L['moqie']) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['onDiscardTile'](L['moqie'], L.tile, !1, !1),
                                L['operation'] && Laya['timer'].once(500, this, function() {
                                    y['ActionOperation'].play(L['operation']);
                                }),
                                void 0 != L['zhenting'] && void 0 == L['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](L['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting'])),
                                F == y['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](L, !1),
                                Laya['timer'].once(500, this, function() {
                                    i ? y['DesktopMgr'].Inst['clearMindVoice']() : y['DesktopMgr'].Inst['playMindVoice']();
                                }),
                                y['DesktopMgr'].Inst['setScores'](L['scores']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']),
                                y['DesktopMgr'].Inst['onRevealStateChange'](F, !0);
                        },
                        F['fastplay'] = function(L, F) {
                            app.Log.log('ActionRevealTile fastplay data:' + JSON['stringify'](L) + ' usetime:' + F);
                            var s = L.seat,
                                i = mjcore['MJPai']['Create'](L.tile ? L.tile : '5z'),
                                M = !(null == L['is_liqi'] || void 0 == L['is_liqi'] || !L['is_liqi']);
                            y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['AddQiPai'](i, M, L['moqie'], !1, s == y['DesktopMgr'].Inst.seat ? y['ERevealState'].self : y['ERevealState']['reveal']),
                                s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](i, !1, !0, L['moqie']) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['onDiscardTile'](L['moqie'], L.tile, !1, !0),
                                L['operation'] && -1 != F && Laya['timer'].once(500, this, function() {
                                    y['ActionOperation'].play(L['operation'], F);
                                }),
                                void 0 != L['zhenting'] && void 0 == L['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](L['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting'])),
                                s == y['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](L, !0),
                                y['DesktopMgr'].Inst['setScores'](L['scores']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang'], !1),
                                y['DesktopMgr'].Inst['onRevealStateChange'](s, !0);
                        },
                        F['record'] = function(L, F) {
                            void 0 === F && (F = 0),
                                app.Log.log('ActionRevealTile record data:' + JSON['stringify'](L));
                            var s = L.seat,
                                i = mjcore['MJPai']['Create'](L.tile),
                                M = !(null == L['is_liqi'] || void 0 == L['is_liqi'] || !L['is_liqi']),
                                Z = y['DesktopMgr'].Inst['record_show_hand'] || s == y['DesktopMgr'].Inst.seat ? y['ERevealState'].self : y['ERevealState']['reveal'];
                            if (y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['AddQiPai'](i, M, L['moqie'], !0, Z), M && (L['is_wliqi'] ? y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['PlaySound']('act_drich_anpai') : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['PlaySound']('act_rich_anpai'), uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](s, 'emoji_9', 2000)), s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](i, !1, !1, L['moqie']) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['recordDiscardTile'](i, L['moqie'], !1, !1), L['tingpais'] && y['DesktopMgr'].Inst['setTingpai'](L.seat, L['tingpais']), y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && L['operations'])
                                for (var N = 0; N < L['operations']['length']; N++)
                                    y['ActionOperation'].ob(L['operations'][N], F, 450);
                            return y['DesktopMgr'].Inst['setScores'](L['scores']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']),
                                y['DesktopMgr'].Inst['onRevealStateChange'](s, !0),
                                1000;
                        },
                        F['fastrecord'] = function(L, F) {
                            void 0 === F && (F = -1),
                                app.Log.log('ActionRevealTile fastrecord data:' + JSON['stringify'](L));
                            var s = L.seat,
                                i = mjcore['MJPai']['Create'](L.tile ? L.tile : '5z'),
                                M = !(null == L['is_liqi'] || void 0 == L['is_liqi'] || !L['is_liqi']),
                                Z = y['DesktopMgr'].Inst['record_show_hand'] || s == y['DesktopMgr'].Inst.seat ? y['ERevealState'].self : y['ERevealState']['reveal'];
                            if (y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['AddQiPai'](i, M, L['moqie'], !1, Z), s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](i, !1, !0, L['moqie']) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['recordDiscardTile'](i, L['moqie'], !1, !0), L['tingpais'] && y['DesktopMgr'].Inst['setTingpai'](L.seat, L['tingpais']), y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && F >= 0 && L['operations'])
                                for (var N = 0; N < L['operations']['length']; N++)
                                    y['ActionOperation'].ob(L['operations'][N], F, 450);
                            y['DesktopMgr'].Inst['setScores'](L['scores']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang'], !1),
                                y['DesktopMgr'].Inst['onRevealStateChange'](s, !0);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionRevealTile'] = L;
        }
        (view || (view = {}));



        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            var F = this;
                            app.Log.log('ActionChangeTile play data:' + JSON['stringify'](L));
                            for (var s = function(F) {
                                    var s = y['DesktopMgr'].Inst['players'][F],
                                        M = [];
                                    if (0 == F) {
                                        s['onHuanSanZhang_Remove'](L['out_tiles'], L['out_tile_states'], !1);
                                        for (var Z = 0; 3 > Z; Z++)
                                            M.push(mjcore['MJPai']['Create'](L['out_tiles'][Z]));
                                    } else {
                                        s['onHuanSanZhang_Remove']();
                                        for (var Z = 0; 3 > Z; Z++)
                                            M.push(mjcore['MJPai']['Create']('5z'));
                                    }
                                    s['ShowHuanSanZhang'](M, L['change_type']),
                                        Laya['timer'].once(2500, i, function() {
                                            0 == F ? s['onHuanSanZhang_Add'](L['in_tiles'], L['in_tile_states'], !1) : s['onHuanSanZhang_Add']();
                                        });
                                }, i = this, M = 0; M < y['DesktopMgr'].Inst['players']['length']; M++) s(M);
                            uiscript['UI_HuanSanZhange'].Inst['enable'] && uiscript['UI_HuanSanZhange'].Inst['close'](),
                                uiscript['UI_HuanSanZhange_ChangeType'].Inst.show(L['change_type']),
                                Laya['timer'].once(2500, this, function() {
                                    y['DesktopMgr'].Inst['is_dora3_mode']() && uiscript['UI_DesktopInfo'].Inst['openDora3BeginShine'](),
                                        Laya['timer'].once(200, F, function() {
                                            if (L['doras'] && L['doras']['length'] > 0)
                                                for (var F = 0; F < L['doras']['length']; F++)
                                                    y['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](L['doras'][F])), uiscript['UI_DesktopInfo'].Inst['setDora'](F, y['DesktopMgr'].Inst.dora[F]);
                                            for (var F = 0; 4 > F; F++)
                                                y['DesktopMgr'].Inst['players'][F]['OnDoraRefresh']();
                                            if (y['DesktopMgr'].Inst['index_ju'] == y['DesktopMgr'].Inst.seat) {
                                                var s = {
                                                    tingpais: L['tingpais0'],
                                                    operation: L['operation']
                                                };
                                                uiscript['UI_TingPai'].Inst['setData0'](s);
                                            } else {
                                                var s = {
                                                    tingpais: L['tingpais1']
                                                };
                                                uiscript['UI_TingPai'].Inst['setData1'](s, !1);
                                            }
                                            y['DesktopMgr'].Inst['ActionRunComplete']();
                                        }),
                                        void 0 != L['operation'] && y['ActionOperation'].play(L['operation']);
                                });
                        },
                        F['fastplay'] = function(L, F) {
                            app.Log.log('ActionChangeTile fastplay data:' + JSON['stringify'](L));
                            for (var s = 0; s < y['DesktopMgr'].Inst['players']['length']; s++) {
                                var i = y['DesktopMgr'].Inst['players'][s];
                                0 == s ? (i['onHuanSanZhang_Remove'](L['out_tiles'], L['out_tile_states'], !0), i['onHuanSanZhang_Add'](L['in_tiles'], L['in_tile_states'], !0)) : (i['onHuanSanZhang_Add'](), i['onHuanSanZhang_Remove']());
                            }
                            if (uiscript['UI_HuanSanZhange'].Inst['enable'] && uiscript['UI_HuanSanZhange'].Inst['close'](), L['doras'] && L['doras']['length'] > 0)
                                for (var s = 0; s < L['doras']['length']; s++)
                                    y['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](L['doras'][s])), uiscript['UI_DesktopInfo'].Inst['setDora'](s, y['DesktopMgr'].Inst.dora[s]);
                            for (var s = 0; 4 > s; s++)
                                y['DesktopMgr'].Inst['players'][s]['OnDoraRefresh']();
                            if (y['DesktopMgr'].Inst['index_ju'] == y['DesktopMgr'].Inst.seat) {
                                var M = {
                                    tingpais: L['tingpais0'],
                                    operation: L['operation']
                                };
                                uiscript['UI_TingPai'].Inst['setData0'](M);
                            } else {
                                var M = {
                                    tingpais: L['tingpais1']
                                };
                                uiscript['UI_TingPai'].Inst['setData1'](M, !1);
                            }
                            L['operation'] && -1 != F && Laya['timer'].once(100, this, function() {
                                y['ActionOperation'].play(L['operation'], F + 100);
                            });
                        },
                        F['record'] = function(L, F) {
                            void 0 === F && (F = 0),
                                app.Log.log('ActionChangeTile record data:' + JSON['stringify'](L));
                            for (var s = function(F) {
                                    var s = y['DesktopMgr'].Inst['players'][F],
                                        M = L['change_tile_infos'][y['DesktopMgr'].Inst['localPosition2Seat'](F)];
                                    0 == F ? s['onHuanSanZhang_Remove'](M['out_tiles'], M['out_tile_states'], !1) : s['recordHuanSanZhang_Remove'](M['out_tiles'], M['out_tile_states']);
                                    for (var Z = [], N = 0; 3 > N; N++)
                                        Z.push(mjcore['MJPai']['Create'](M['out_tiles'][N]));
                                    s['ShowHuanSanZhang'](Z, L['change_type']),
                                        Laya['timer'].once(2500, i, function() {
                                            0 == F ? s['onHuanSanZhang_Add'](M['in_tiles'], M['in_tile_states'], !1) : s['recordHuanSanZhang_Add'](M['in_tiles'], M['in_tile_states']);
                                        });
                                }, i = this, M = 0; M < y['DesktopMgr'].Inst['players']['length']; M++) s(M);
                            return uiscript['UI_HuanSanZhange'].Inst['enable'] && uiscript['UI_HuanSanZhange'].Inst['close'](),
                                uiscript['UI_HuanSanZhange_ChangeType'].Inst.show(L['change_type']),
                                Laya['timer'].once(2500, this, function() {
                                    if (y['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                        var s = L['operations'][y['DesktopMgr'].Inst['localPosition2Seat'](y['DesktopMgr'].Inst.seat)];
                                        y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && s && y['ActionOperation'].ob(s, F, 1000);
                                    } else {
                                        if (L['doras'] && L['doras']['length'] > 0)
                                            for (var i = 0; i < L['doras']['length']; i++)
                                                y['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](L['doras'][i])), uiscript['UI_DesktopInfo'].Inst['setDora'](i, y['DesktopMgr'].Inst.dora[i]);
                                        else
                                            L.dora && '' != L.dora && (y['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](L.dora)), uiscript['UI_DesktopInfo'].Inst['setDora'](0, y['DesktopMgr'].Inst.dora[0]));
                                        for (var i = 0; 4 > i; i++)
                                            y['DesktopMgr'].Inst['players'][i]['OnDoraRefresh']();
                                        if (L['tingpai'])
                                            for (var i = 0; i < L['tingpai']['length']; i++)
                                                L['tingpai'][i].seat != y['DesktopMgr'].Inst['index_ju'] && y['DesktopMgr'].Inst['setTingpai'](L['tingpai'][i].seat, L['tingpai'][i]['tingpais1']);
                                        y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && L['operation'] && y['ActionOperation'].ob(L['operation'], F, 1000);
                                    }
                                }),
                                3000;
                        },
                        F['fastrecord'] = function(L, F) {
                            void 0 === F && (F = -1);
                            for (var s = 0; s < y['DesktopMgr'].Inst['players']['length']; s++) {
                                var i = y['DesktopMgr'].Inst['players'][s],
                                    M = L['change_tile_infos'][y['DesktopMgr'].Inst['localPosition2Seat'](s)];
                                0 == s ? (i['onHuanSanZhang_Remove'](M['out_tiles'], M['out_tile_states'], !0), i['onHuanSanZhang_Add'](M['in_tiles'], M['in_tile_states'], !0)) : (i['recordHuanSanZhang_Remove'](M['out_tiles'], M['out_tile_states']), i['recordHuanSanZhang_Add'](M['in_tiles'], M['in_tile_states']));
                            }
                            if (uiscript['UI_HuanSanZhange'].Inst['enable'] && uiscript['UI_HuanSanZhange'].Inst['close'](), L['doras'] && L['doras']['length'] > 0)
                                for (var s = 0; s < L['doras']['length']; s++)
                                    y['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](L['doras'][s])), uiscript['UI_DesktopInfo'].Inst['setDora'](s, y['DesktopMgr'].Inst.dora[s]);
                            else
                                L.dora && '' != L.dora && (y['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](L.dora)), uiscript['UI_DesktopInfo'].Inst['setDora'](0, y['DesktopMgr'].Inst.dora[0]));
                            for (var s = 0; 4 > s; s++)
                                y['DesktopMgr'].Inst['players'][s]['OnDoraRefresh']();
                            if (L['tingpai'])
                                for (var s = 0; s < L['tingpai']['length']; s++)
                                    L['tingpai'][s].seat != y['DesktopMgr'].Inst['index_ju'] && y['DesktopMgr'].Inst['setTingpai'](L['tingpai'][s].seat, L['tingpai'][s]['tingpais1']);
                            y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && F >= 0 && L['operation'] && y['ActionOperation'].ob(L['operation'], F, 1000);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionChangeTile'] = L;
        }
        (view || (view = {}));



        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            var F = this;
                            app.Log.log('ActionSelectGap play data:' + JSON['stringify'](L));
                            for (var s = 0; s < L['gap_types']['length']; s++) {
                                var i = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)];
                                i['SetGapType'](L['gap_types'][s]);
                            }
                            uiscript['UI_DesktopInfo'].Inst['setGapType'](L['gap_types'], !0),
                                uiscript['UI_Dingque'].Inst['enable'] && uiscript['UI_Dingque'].Inst['close'](),
                                Laya['timer'].once(500, this, function() {
                                    y['DesktopMgr'].Inst['is_dora3_mode']() && uiscript['UI_DesktopInfo'].Inst['openDora3BeginShine'](),
                                        Laya['timer'].once(200, F, function() {
                                            if (y['DesktopMgr'].Inst['index_ju'] == y['DesktopMgr'].Inst.seat) {
                                                var F = {
                                                    tingpais: L['tingpais0'],
                                                    operation: L['operation']
                                                };
                                                uiscript['UI_TingPai'].Inst['setData0'](F);
                                            } else {
                                                var F = {
                                                    tingpais: L['tingpais1']
                                                };
                                                uiscript['UI_TingPai'].Inst['setData1'](F, !1);
                                            }
                                            y['DesktopMgr'].Inst['ActionRunComplete']();
                                        }),
                                        void 0 != L['operation'] && y['ActionOperation'].play(L['operation']);
                                });
                        },
                        F['fastplay'] = function(L, F) {
                            app.Log.log('ActionChangeTile fastplay data:' + JSON['stringify'](L));
                            for (var s = 0; s < L['gap_types']['length']; s++) {
                                var i = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)];
                                i['SetGapType'](L['gap_types'][s]);
                            }
                            if (uiscript['UI_DesktopInfo'].Inst['setGapType'](L['gap_types']), uiscript['UI_Dingque'].Inst['enable'] && uiscript['UI_Dingque'].Inst['close'](), y['DesktopMgr'].Inst['index_ju'] == y['DesktopMgr'].Inst.seat) {
                                var M = {
                                    tingpais: L['tingpais0'],
                                    operation: L['operation']
                                };
                                uiscript['UI_TingPai'].Inst['setData0'](M);
                            } else {
                                var M = {
                                    tingpais: L['tingpais1']
                                };
                                uiscript['UI_TingPai'].Inst['setData1'](M, !1);
                            }
                            L['operation'] && -1 != F && Laya['timer'].once(100, this, function() {
                                y['ActionOperation'].play(L['operation'], F + 100);
                            });
                        },
                        F['record'] = function(L, F) {
                            void 0 === F && (F = 0),
                                app.Log.log('ActionChangeTile record data:' + JSON['stringify'](L));
                            for (var s = 0; s < L['gap_types']['length']; s++) {
                                var i = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)];
                                i['SetGapType'](L['gap_types'][s]);
                            }
                            return uiscript['UI_DesktopInfo'].Inst['setGapType'](L['gap_types'], !0),
                                uiscript['UI_Dingque'].Inst['enable'] && uiscript['UI_Dingque'].Inst['close'](),
                                Laya['timer'].once(500, this, function() {
                                    if (L['tingpai'])
                                        for (var s = 0; s < L['tingpai']['length']; s++)
                                            L['tingpai'][s].seat != y['DesktopMgr'].Inst['index_ju'] && y['DesktopMgr'].Inst['setTingpai'](L['tingpai'][s].seat, L['tingpai'][s]['tingpais1']);
                                    y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && L['operation'] && y['ActionOperation'].ob(L['operation'], F, 1000);
                                }),
                                1300;
                        },
                        F['fastrecord'] = function(L, F) {
                            void 0 === F && (F = -1);
                            for (var s = 0; s < L['gap_types']['length']; s++) {
                                var i = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)];
                                i['SetGapType'](L['gap_types'][s]);
                            }
                            if (uiscript['UI_DesktopInfo'].Inst['setGapType'](L['gap_types']), uiscript['UI_Dingque'].Inst['enable'] && uiscript['UI_Dingque'].Inst['close'](), L['tingpai'])
                                for (var s = 0; s < L['tingpai']['length']; s++)
                                    L['tingpai'][s].seat != y['DesktopMgr'].Inst['index_ju'] && y['DesktopMgr'].Inst['setTingpai'](L['tingpai'][s].seat, L['tingpai'][s]['tingpais1']);
                            y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && F >= 0 && L['operation'] && y['ActionOperation'].ob(L['operation'], F, 1000);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionSelectGap'] = L;
        }
        (view || (view = {}));



        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            app.Log.log('ActionLiqi play data:' + JSON['stringify'](L)),
                                Laya['timer'].once(300, this, function() {
                                    var F = L.seat,
                                        s = L['score'],
                                        i = y['DesktopMgr'].Inst['seat2LocalPosition'](F);
                                    L['failed'] ? y['DesktopMgr'].Inst['players'][i]['ShowLiqiFailed']() : y['DesktopMgr'].Inst['players'][i]['ShowLiqi'](),
                                        y['DesktopMgr'].Inst['players'][i]['SetScore'](s, y['DesktopMgr'].Inst['mainrole']['score']),
                                        uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']);
                                });
                        },
                        F['fastplay'] = function(L) {
                            app.Log.log('ActionLiqi fastplay data:' + JSON['stringify'](L));
                            var F = L.seat,
                                s = L['score'],
                                i = y['DesktopMgr'].Inst['seat2LocalPosition'](F);
                            L['failed'] ? y['DesktopMgr'].Inst['players'][i]['ShowLiqiFailed'](!1) : y['DesktopMgr'].Inst['players'][i]['ShowLiqi'](!1),
                                y['DesktopMgr'].Inst['players'][i]['SetScore'](s, y['DesktopMgr'].Inst['mainrole']['score']),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang'], !1);
                        },
                        F['record'] = function(y) {
                            return app.Log.log('ActionLiqi record data:' + JSON['stringify'](y)),
                                this.play(y),
                                0;
                        },
                        F['fastrecord'] = function(y) {
                            app.Log.log('ActionLiqi fastrecord data:' + JSON['stringify'](y)),
                                this['fastplay'](y, 0);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionLiqi'] = L;
        }
        (view || (view = {}));



        ! function(y) {
            var L = function() {
                    function y(L) {
                        this.me = L,
                            y['scene_entrance'] = 'chs' != GameMgr['client_language'] ? 'scene/entrance_' + GameMgr['client_language'] + '.ls' : 'scene/entrance.ls';
                    }
                    return y['prototype'].show = function() {
                            this['scene'] = Laya['loader']['getRes'](y['scene_entrance']),
                                this.me['addChild'](this['scene']),
                                this['scene']['visible'] = !0;
                        },
                        y['prototype']['close'] = function() {
                            Laya['timer']['clearAll'](this),
                                this['scene']['visible'] = !1,
                                this['scene']['destroy'](!0);
                        },
                        y['scene_entrance'] = '',
                        y;
                }
                (),
                F = function() {
                    function y(y) {
                        this.me = y,
                            this['round'] = this.me['getChildByName']('round'),
                            this.word = this.me['getChildByName']('word'),
                            this.icon = this.me['getChildByName']('icon'),
                            this.me['visible'] = !1;
                    }
                    return y['prototype'].show = function(y) {
                            var L = this;
                            if (!this.me['visible']) {
                                this.me['visible'] = !0;
                                var F = Laya['timer']['currTimer'];
                                if (Laya['timer']['frameLoop'](1, this, function() {
                                        L['round']['rotation'] = (Laya['timer']['currTimer'] - F) / 2000 * 360;
                                    }), this.word.text = game['Tools']['strOfLocalization'](2053), 0 == y)
                                    this.icon['visible'] = !1, this.word.y = 150;
                                else
                                    switch (this.icon['visible'] = !0, this.word.y = 195, y) {
                                        case 1:
                                        case 4:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/weixin.png');
                                            break;
                                        case 2:
                                        case 5:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/weibo.png');
                                            break;
                                        case 3:
                                        case 6:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/QQ.png');
                                            break;
                                        case 7:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/yostar.png');
                                            break;
                                        case 8:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/google.png');
                                            break;
                                        case 9:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/facebook.png');
                                            break;
                                        case 10:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/tiwtter.png');
                                            break;
                                        case 13:
                                            this.icon.skin = game['Tools']['localUISrc']('myres/entrance/facebook.png');
                                            break;
                                        default:
                                            this.icon['visible'] = !1,
                                                this.word.y = 150;
                                    }
                            }
                        },
                        y['prototype']['close'] = function() {
                            Laya['timer']['clearAll'](this),
                                this.me['visible'] = !1;
                        },
                        y;
                }
                (),
                s = function() {
                    function L(L) {
                        var F = this;
                        this['saveflag'] = !0,
                            this['locking'] = !1,
                            this['last_mail_time'] = -1,
                            this.me = L,
                            this.me['visible'] = !1,
                            this.root = this.me['getChildByName']('jpenroot'),
                            this.root['getChildByName']('btn_close')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                F['locking'] || F['close']();
                            }, null, !1),
                            this['input_account'] = this.root['getChildByName']('container_mail')['getChildByName']('txtinput'),
                            this['label_account_no'] = this.root['getChildByName']('container_mail')['getChildByName']('no'),
                            this['input_account'].on('input', this, function() {
                                F['label_account_no']['visible'] && (F['label_account_no']['visible'] = !1),
                                    '' != F['input_code'].text && '' != F['input_account'].text && game['Tools']['setGrayDisable'](F['btn_regist'], !1);
                            }),
                            this['input_code'] = this.root['getChildByName']('container_yanzhengma')['getChildByName']('txtinput'),
                            this['input_code'].on('input', this, function() {
                                '' != F['input_code'].text && '' != F['input_account'].text && game['Tools']['setGrayDisable'](F['btn_regist'], !1);
                            }),
                            this['btn_getcode'] = this.root['getChildByName']('sendbutton')['getChildByName']('btn'),
                            this['btn_getcode']['clickHandler'] = new Laya['Handler'](this, function() {
                                var y = F['input_account'].text,
                                    L = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                                L.test(y) ? (Yo['request']({
                                    account: y,
                                    lang: 'jp' == GameMgr['client_type'] ? 'ja' : 'kr' == GameMgr['client_type'] || 'kr' == GameMgr['client_language'] ? 'kr' : 'en'
                                }).then(function(y) {
                                    y ? 0 === y['result'] ? M.Inst['showInfo'](game['Tools']['strOfLocalization'](2688)) : '50003' === y['result'] ? M.Inst['showError'](game['Tools']['strOfLocalization'](2684)) : '50004' === y['result'] ? M.Inst['showError'](game['Tools']['strOfLocalization'](2685)) : M.Inst['showError'](game['Tools']['strOfLocalization'](2683)) : M.Inst['showError'](game['Tools']['strOfLocalization'](2683));
                                }), F['last_mail_time'] = Laya['timer']['currTimer'], F['refresh_code_state']()) : F['label_account_no']['visible'] = !0;
                            }),
                            this['btn_regist'] = this.root['getChildByName']('btn_enter'),
                            this['btn_regist']['clickHandler'] = new Laya['Handler'](this, function() {
                                if (!F['locking']) {
                                    app.Log.log('btn mail login');
                                    var y = M.Inst['login_index'],
                                        L = F['input_account'].text;
                                    Yo['submit']({
                                            account: F['input_account'].text,
                                            code: F['input_code'].text
                                        }).then(function(F) {
                                            y == M.Inst['login_index'] && (F ? (app.Log.log('mail login submit result:' + F['result']), 0 === F['result'] ? (game['LocalStorage']['setItem']('mail_account', L), M['onSocioBack'](7, F['token'], F.uid)) : '50016' === F['result'] ? (M.Inst['showError'](game['Tools']['strOfLocalization'](2686)), M.Inst['showContainerLogin']()) : '50009' === F['result'] ? (M.Inst['showError'](game['Tools']['strOfLocalization'](2687)), M.Inst['showContainerLogin']()) : (M.Inst['showError'](game['Tools']['strOfLocalization'](2689)), M.Inst['showContainerLogin']())) : (app.Log.log('mail login submit result: no'), M.Inst['showError'](game['Tools']['strOfLocalization'](2689)), M.Inst['showContainerLogin']()));
                                        }),
                                        1 == F['saveflag'] ? (game['LocalStorage']['setItem']('useremail', F['input_account'].text), game['LocalStorage']['setItem']('saveflag', 'true')) : (game['LocalStorage']['setItem']('useremail', ''), game['LocalStorage']['setItem']('saveflag', 'false')),
                                        F['close'](),
                                        M.Inst['showLoginLoading'](7);
                                }
                            }),
                            this['label_info'] = this.root['getChildByName']('sendbutton')['getChildByName']('label');
                        var s = this.root['getChildByName']('checkxieyi');
                        this['checkbox'] = s['getChildByName']('checkbox'),
                            s['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                F['checkbox']['visible'] = !F['checkbox']['visible'],
                                    F['btn_regist']['visible'] = F['checkbox']['visible'] && F['age_checkbox']['visible'];
                            });
                        var i;
                        if ('jp' == GameMgr['client_type'] ? (s['getChildByName']('en')['visible'] = !1, s['getChildByName']('kr')['visible'] = !1, i = s['getChildByName']('jp')) : 'kr' == GameMgr['client_language'] ? (s['getChildByName']('jp')['visible'] = !1, s['getChildByName']('en')['visible'] = !1, i = s['getChildByName']('kr')) : (s['getChildByName']('jp')['visible'] = !1, s['getChildByName']('kr')['visible'] = !1, i = s['getChildByName']('en')), s['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                F['checkbox']['visible'] = !F['checkbox']['visible'],
                                    F['btn_regist']['visible'] = 'kr' == GameMgr['client_type'] ? F['checkbox']['visible'] && F['age_checkbox']['visible'] : F['checkbox']['visible'];
                            }), i['getChildByName']('guize')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                'jp' == GameMgr['client_type'] ? y['UI_User_Xieyi_enjp'].Inst.show('docs/jp_liyongguiyue.txt') : 'en' == GameMgr['client_type'] ? y['UI_User_Xieyi_enjp'].Inst.show('docs/term_of_service.txt') : 'kr' == GameMgr['client_type'] && y['UI_User_Xieyi_enjp'].Inst.show('docs/kr_liyongguiyue.txt');
                            }, null, !1), i['getChildByName']('yinsi')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                'jp' == GameMgr['client_type'] ? y['UI_User_Xieyi_enjp'].Inst.show('docs/jp_yinsixieyi.txt') : 'en' == GameMgr['client_type'] ? y['UI_User_Xieyi_enjp'].Inst.show('docs/privacy_policy.txt') : 'kr' == GameMgr['client_type'] && y['UI_User_Xieyi_enjp'].Inst.show('docs/kr_yinsixieyi.txt');
                            }, null, !1), this.age = this.root['getChildByName']('age'), this['age_checkbox'] = this.age['getChildByName']('checkbox'), this.age['visible'] = 'kr' == GameMgr['client_type'], 'kr' == GameMgr['client_type']) {
                            this.age['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                F['age_checkbox']['visible'] = !F['age_checkbox']['visible'],
                                    F['btn_regist']['visible'] = F['checkbox']['visible'] && F['age_checkbox']['visible'];
                            });
                            var Z = this.root['getChildByName']('bg');
                            Z['getChildAt'](0)['height'] += 30,
                                Z['getChildAt'](1)['height'] += 30,
                                this['btn_regist'].y += 30;
                        }
                    }
                    return L['prototype']['onchangecheck'] = function(y) {
                            this['checkbox']['visible'] = y,
                                this['btn_regist']['visible'] = y,
                                this.root['getChildByName']('checkxieyi')['visible'] = y;
                        },
                        L['prototype'].show = function() {
                            var L = this;
                            this['locking'] = !0,
                                this.me['visible'] = !0,
                                y['UIBase']['anim_pop_out'](this.root, Laya['Handler']['create'](this, function() {
                                    L['locking'] = !1;
                                })),
                                this['input_account'].text = '',
                                this['label_account_no']['visible'] = !1,
                                this['input_code'].text = '',
                                this['checkbox']['visible'] = !0,
                                this['age_checkbox']['visible'] = !0,
                                this['btn_regist']['visible'] = !0;
                            var F = game['LocalStorage']['getItem']('saveflag'),
                                s = game['LocalStorage']['getItem']('useremail');
                            'true' == F && (this['input_account'].text = s, app.Log.log(s)),
                                game['Tools']['setGrayDisable'](this['btn_regist'], !0),
                                Laya['timer']['clearAll'](this),
                                this['refresh_code_state'](),
                                Laya['timer'].loop(100, this, function() {
                                    L['refresh_code_state']();
                                });
                        },
                        L['prototype']['refresh_code_state'] = function() {
                            var y = 100000000;
                            game['Tools']['setGrayDisable'](this['btn_getcode'], !0),
                                this['last_mail_time'] > 0 && (y = Laya['timer']['currTimer'] - this['last_mail_time']),
                                60000 > y ? (this['label_info']['underline'] = !1, y = Math.ceil((60000 - y) / 1000), this['label_info'].text = game['Tools']['strOfLocalization'](2682, [y['toString']()]), this['label_info']['underline'] = !1, game['Tools']['setGrayDisable'](this['btn_getcode'], !0)) : (this['label_info'].text = game['Tools']['strOfLocalization'](2720), this['label_info']['underline'] = !0, game['Tools']['setGrayDisable'](this['btn_getcode'], !1));
                        },
                        L['prototype']['close'] = function() {
                            var L = this;
                            this['locking'] = !0,
                                y['UIBase']['anim_pop_hide'](this.root, Laya['Handler']['create'](this, function() {
                                    L['locking'] = !1,
                                        L.me['visible'] = !1,
                                        Laya['timer']['clearAll'](L);
                                }));
                        },
                        L;
                }
                (),
                i = function() {
                    function L(L) {
                        this['start_time'] = Laya['timer']['currTimer'],
                            this.data = null,
                            this.me = L,
                            this.info = this.me['getChildByName']('info'),
                            this['label_time'] = this.me['getChildByName']('time'),
                            this.img = this.me['getChildByName']('img'),
                            this.me['getChildByName']('btn')['clickHandler'] = new Laya['Handler'](this, function() {
                                y['UI_Entrance_Choose_Route'].Inst.show();
                            });
                    }
                    return L['prototype']['onEnable'] = function() {
                            var y = this;
                            Laya['timer']['clearAll'](this),
                                this['update_data'](),
                                Laya['timer'].loop(100, this, function() {
                                    y['update_data']();
                                }),
                                Laya['timer']['frameLoop'](1, this, function() {
                                    y['refresh']();
                                });
                        },
                        L['prototype']['update'] = function() {
                            this['update_data']();
                        },
                        L['prototype']['update_data'] = function() {
                            var y = game['LobbyNetMgr'].Inst['GetLinkInfos'](),
                                L = game['LobbyNetMgr'].Inst['choosed_index'];
                            this.data = y[L],
                                this.info.text = game['Tools']['strOfLocalization'](3150) + (L + 1)['toString']();
                        },
                        L['prototype']['refresh'] = function() {
                            var y = this.data,
                                L = y['delay'];
                            y['connect'] == game['EConnectState']['connecting'] ? (this.img['visible'] = !1, this['label_time']['visible'] = !0, this['label_time'].text = 1 > L ? '--' : Math['floor'](L / 2) + 'ms', this['label_time']['fontSize'] = 30, this['label_time']['color'] = y['delay'] < 300 ? '#32dd5b' : y['delay'] < 800 ? '#ffe154' : '#e03737') : y['connect'] == game['EConnectState']['tryconnect'] ? (this.img['visible'] = !0, this['label_time']['visible'] = !1, this.img.skin = y['fetch'] == game['EFetchState']['success'] ? game['Tools']['localUISrc']('myres/entrance/connecting.png') : game['Tools']['localUISrc']('myres/entrance/fetching.png'), this.img['rotation'] = 0.5 * (Laya['timer']['currTimer'] - this['start_time'])) : (this.img['visible'] = !1, this['label_time']['visible'] = !0, this['label_time']['fontSize'] = 25, this['label_time']['color'] = '#7e818b', this['label_time'].text = y['in_maintenance'] ? game['Tools']['strOfLocalization'](3149) : y['fetch'] == game['EFetchState']['error'] ? game['Tools']['strOfLocalization'](3147) : game['Tools']['strOfLocalization'](3148));
                        },
                        L['prototype']['onClose'] = function() {
                            Laya['timer']['clearAll'](this);
                        },
                        L;
                }
                (),
                M = function(M) {
                    function Z() {
                        var y = M.call(this, new ui['entrance']['entranceUI']()) || this;
                        return y['scene'] = null,
                            y['login_type_tabs'] = [],
                            y['txt_account'] = null,
                            y['txt_password'] = null,
                            y['btn_login_cd'] = 0,
                            y['login_loading'] = null,
                            y['route_info'] = null,
                            y['btn_add2desktop'] = null,
                            y['container_language'] = null,
                            y['label_language'] = null,
                            y['page_maillogin'] = null,
                            y['container_extendInfo'] = null,
                            y['xieyiflag'] = 0,
                            y['login_index'] = 0,
                            y['login_type_tab_index'] = -1,
                            y['login_account_input_info'] = {},
                            Z.Inst = y,
                            y;
                    }
                    return __extends(Z, M),
                        Z['trySocio'] = function(L) {
                            var F = Laya['LocalStorage']['getItem']('_pre_sociotype'),
                                s = -1;
                            F && '' != F && (s = parseInt(F));
                            var i = !0;
                            if (s === L)
                                if (L >= 1 && 6 >= L) {
                                    var M = Laya['LocalStorage']['getItem']('_pre_code');
                                    M && '' != M && (i = !1, this['onSocioBack'](L, M, null));
                                } else if (7 == L);
                            else if (L >= 8 && 10 >= L) {
                                var Z = game['LocalStorage']['getItem']('yostar_token');
                                Z || (Z = '');
                                var N = game['LocalStorage']['getItem']('yostar_uid');
                                N || (N = ''),
                                    '' != Z && '' != N && (i = !1, this['onSocioBack'](L, Z, N));
                            }
                            if (i)
                                if (GameMgr['inConch']) {
                                    var e = Laya['PlatformClass']['createClass']('layaair.majsoul.mjmgr');
                                    1 == L ? e.call('wxLogin') : 2 == L ? e.call('weiboLogin') : 3 == L && e.call('qqLogin');
                                } else if (GameMgr['iniOSWebview']) {
                                var W = '';
                                switch (L) {
                                    case 1:
                                        W = 'wxLogin';
                                        break;
                                    case 2:
                                        W = 'wbLogin';
                                        break;
                                    case 3:
                                        W = 'qqLogin';
                                }
                                if (W) {
                                    var D = this,
                                        B = function(y) {
                                            D['onSocioBack'](L + 3, y, null);
                                        };
                                    Laya['Browser']['window']['wkbridge']['callNative'](W, '', B);
                                }
                            } else {
                                var E = window['location'].href;
                                if (-1 != E['indexOf']('?') && (E = E['split']('?')[0]), 1 == L) {
                                    var f = 'https://open.weixin.qq.com/connect/qrconnect?';
                                    f += 'appid=wx2a0c2449cab74448',
                                        f += '&response_type=code',
                                        f += '&redirect_uri=' + encodeURI('https://www.majsoul.com/0?xdsfdl=1-' + E),
                                        f += '&scope=snsapi_login',
                                        Laya['Browser']['window']['location'].href = f;
                                } else if (2 == L) {
                                    var f = 'https://api.weibo.com/oauth2/authorize?';
                                    f += 'client_id=399644784',
                                        f += '&redirect_uri=https://www.majsoul.com/0?xdsfdl=2-' + E,
                                        Laya['Browser']['window']['location'].href = f;
                                } else if (3 == L) {
                                    var f = 'https://graph.qq.com/oauth2.0/authorize?';
                                    f += 'response_type=code',
                                        f += '&client_id=101480027',
                                        f += '&redirect_uri=' + encodeURI('https://www.majsoul.com/0'),
                                        f += GameMgr.Inst['link_url']['indexOf']('majsoul.com/1') >= 0 ? '&state=xdsfdl4' : '&state=xdsfdl3',
                                        Laya['Browser']['window']['location'].href = f;
                                } else if (7 == L)
                                    this.Inst && this.Inst['showMailLogin']();
                                else if (8 == L) {
                                    var z = GameMgr.Inst['link_url']['replace']('index.html', '') + 'redirect/';
                                    z += GameMgr['inRelease'] ? GameMgr['client_type'] : 'tt',
                                        z += '/yo_google.html',
                                        'kr' == GameMgr['client_type'] ? Yo['googleKrAuth']({
                                            redirect_uri: z,
                                            openNewWindow: !1
                                        }) : 'jp' == GameMgr['client_type'] ? Yo['googleJaAuth']({
                                            redirect_uri: z,
                                            openNewWindow: !1
                                        }) : Yo['googleAuth']({
                                            redirect_uri: z,
                                            openNewWindow: !1
                                        });
                                } else if (9 == L) {
                                    var z = GameMgr.Inst['link_url']['replace']('index.html', '') + 'redirect/';
                                    z += GameMgr['inRelease'] ? GameMgr['client_type'] : 'tt',
                                        z += '/yo_facebook.html',
                                        'kr' == GameMgr['client_type'] ? Yo['facebookKrAuth']({
                                            redirect_uri: z,
                                            openNewWindow: !1
                                        }) : Yo['facebookAuth']({
                                            redirect_uri: z,
                                            openNewWindow: !1
                                        });
                                } else if (10 == L) {
                                    var z = GameMgr.Inst['link_url']['replace']('index.html', '') + 'redirect/';
                                    z += GameMgr['inRelease'] ? GameMgr['client_type'] : 'tt',
                                        z += '/yo_tiwtter.html',
                                        'jp' == GameMgr['client_type'] ? Yo['twitterJaAuth']({
                                            redirect_uri: z,
                                            openNewWindow: !1
                                        }) : 'kr' == GameMgr['client_type'] ? Yo['twitterKrAuth']({
                                            redirect_uri: z,
                                            openNewWindow: !1
                                        }) : Yo['twitterAuth']({
                                            redirect_uri: z,
                                            openNewWindow: !1
                                        });
                                } else if (13 == L) {
                                    var d = function() {
                                        Laya['LocalStorage']['setItem']('fblogin', '1');
                                        var y = 'https://www.facebook.com/dialog/oauth?';
                                        y += 'client_id=511764882872601',
                                            y += '&redirect_uri=' + encodeURI(GameMgr.Inst['link_url']),
                                            y += '&response_type=token',
                                            Laya['Browser']['window']['location'].href = y;
                                    };
                                    void 0 != window.FB && null != window.FB ? window.FB['getLoginStatus'](function(L) {
                                        L && 'connected' == L['status'] ? y['UI_Entrance']['onSocioBack'](13, L['authResponse']['accessToken'], null) : d();
                                    }) : d();
                                } else
                                    14 == L && game['DmmSDK']['login']();
                            }
                        },
                        Z['onSocioBack'] = function(y, L, F) {
                            app.Log.log('!!!!!!!!!!!!!!! ' + y + ' ' + L),
                                this.Inst && this.Inst['_onSocioBack'](y, L, F);
                        },
                        Z['prototype']['onCreate'] = function() {
                            var M = this,
                                N = this.me['getChildByName']('root');
                            this['container_login'] = this.me['getChildByName']('root')['getChildByName']('container_login');
                            var e = function(y) {
                                    var L = {
                                        container: y,
                                        input: y['getChildByName']('txtinput'),
                                        lb: y['getChildByName']('lb')
                                    };
                                    return L['input'].text = '',
                                        L.lb['visible'] = !0,
                                        L['input'].on('focus', M, function() {
                                            L.lb['visible'] = !1;
                                        }),
                                        L['input'].on('blur', M, function() {
                                            L.lb['visible'] = !L['input'].text || '' == L['input'].text;
                                        }),
                                        L['input'].on('input', M, function() {}),
                                        L;
                                },
                                W = this['container_login']['getChildByName']('chs');
                            this['route_info'] = new i(W['getChildByName']('img_lb')),
                                this['txt_account'] = e(W['getChildByName']('container_account')),
                                this['txt_password'] = e(W['getChildByName']('container_mima')),
                                this['txt_account']['input'].on(laya['events']['Event']['KEY_DOWN'], this['txt_account']['input'], function(y) {
                                    y['keyCode'] === Laya['Keyboard']['ENTER'] && M['_btn_login']();
                                }),
                                this['txt_password']['input'].on(laya['events']['Event']['KEY_DOWN'], this['txt_account']['input'], function(y) {
                                    y['keyCode'] === Laya['Keyboard']['ENTER'] && M['_btn_login']();
                                }),
                                this['login_type_tabs'] = [];
                            for (var D = function(y) {
                                    var L = W['getChildByName']('container_tabs')['getChildByName']('tab' + y);
                                    B['login_type_tabs'].push({
                                            btn: L,
                                            word: L['getChildByName']('word'),
                                            choosen: L['getChildByName']('chosen')
                                        }),
                                        B['login_type_tabs'][y].btn['clickHandler'] = new Laya['Handler'](B, function() {
                                            M['login_type_tab_index'] != y && M['change_chs_login_tab'](y);
                                        });
                                }, B = this, E = 0; 2 > E; E++)
                                D(E);
                            this['container_extendInfo'] = N['getChildByName']('extendinfo'),
                                this['container_extendInfo']['visible'] = !1,
                                W['getChildByName']('btn_regist')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    y['UI_Entrance_Mail_Regist'].Inst.show();
                                }, null, !1),
                                W['getChildByName']('btn_forgetpassword')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    y['UI_Entrance_Reset_Password'].Inst.show();
                                }, null, !1),
                                W['getChildByName']('btn_find_account')['clickHandler'] = new Laya['Handler'](this, function() {
                                    Laya['Browser']['window']['location'].href = game['Tools']['getFinalUrl']('https://www.maj-soul.com/find-account/');
                                }),
                                W['getChildByName']('btn_find_account')['visible'] = 'chs' == GameMgr['client_type'],
                                this['btn_add2desktop'] = this.me['getChildByName']('root')['getChildByName']('btn_add2desktop'),
                                this['btn_add2desktop']['visible'] = (Laya['Browser']['onAndriod'] || Laya['Browser']['onAndroid'] || Laya['Browser']['onIOS']) && !GameMgr['inConch'] && !GameMgr['inConch'],
                                this['btn_add2desktop']['clickHandler'] = new Laya['Handler'](this, function() {
                                    y['UI_Add2Desktop'].Inst && y['UI_Add2Desktop'].Inst.show();
                                }),
                                W['getChildByName']('btn_enter')['clickHandler'] = Laya['Handler']['create'](this, this['_btn_login'], null, !1),
                                this['login_loading'] = new F(N['getChildByName']('loading_login')),
                                this['page_maillogin'] = new s(this.me['getChildByName']('mail_login')),
                                this['scene'] = new L(this.me['getChildByName']('scene')),
                                this['container_social'] = this['container_login']['getChildByName']('social'),
                                this['social_btns'] = [];
                            for (var E = 0; 4 > E; E++)
                                this['social_btns'].push(this['container_social']['getChildByName']('btn' + E)), this['social_btns'][E]['visible'] = !1;
                            var f = 55,
                                z = 395,
                                d = [];
                            'chs' == GameMgr['client_type'] && (d = [{
                                    img: 'myres/entrance/weibo.png',
                                    type: 2
                                }, {
                                    img: 'myres/entrance/QQ.png',
                                    type: 3
                                }, {
                                    img: 'myres/entrance/weixin.png',
                                    type: 1
                                }]),
                                'chs_t' == GameMgr['client_type'] && (d = [{
                                    img: 'myres/entrance/facebook.png',
                                    type: 13
                                }]),
                                'jp' == GameMgr['client_type'] && (d = [{
                                    img: 'myres/entrance/google.png',
                                    type: 8
                                }, {
                                    img: 'myres/entrance/tiwtter.png',
                                    type: 10
                                }]),
                                ('en' == GameMgr['client_type'] || 'kr' == GameMgr['client_type']) && (d = [{
                                    img: 'myres/entrance/google.png',
                                    type: 8
                                }, {
                                    img: 'myres/entrance/facebook.png',
                                    type: 9
                                }, {
                                    img: 'myres/entrance/tiwtter.png',
                                    type: 10
                                }]);
                            for (var P = function(y) {
                                    var L = _['social_btns'][y];
                                    y < d['length'] ? (L['visible'] = !0, L['getChildAt'](0).skin = game['Tools']['localUISrc'](d[y].img), L['clickHandler'] = new Laya['Handler'](_, function() {
                                        Z['trySocio'](d[y].type);
                                    }), L.x = 1 == d['length'] ? (z - f) / 2 + 50 : (z - f) * y / (d['length'] - 1) + f) : L['visible'] = !1;
                                }, _ = this, E = 0; E < this['social_btns']['length']; E++)
                                P(E);
                            2 == d['length'] && (this['social_btns'][0].x = 1 * (z - f) / 3 + f, this['social_btns'][1].x = 2 * (z - f) / 3 + f),
                                this.me['getChildByName']('infos')['visible'] = 'chs' == GameMgr['client_type'],
                                this.me['getChildByName']('root')['getChildByName']('loading_login')['getChildByName']('btn_cancel')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    M['login_loading'].me['visible'] && (game['LobbyNetMgr'].Inst['Close'](), Laya['LocalStorage']['setItem']('_pre_sociotype', ''), M['showContainerLogin'](), M['btn_login_cd'] = Laya['timer']['currTimer'] + 500, Laya['timer'].once(500, M, function() {
                                        game['LobbyNetMgr'].Inst['OpenConnect'](null);
                                    }));
                                }, null, !1);
                            var u = this.me['getChildByName']('root')['getChildByName']('container_login')['getChildByName']('dmm');
                            u['getChildByName']('btn_enter')['clickHandler'] = new Laya['Handler'](this, function() {
                                Z['trySocio'](14);
                            });
                            var l = u['getChildByName']('checksave'),
                                q = l['getChildByName']('checkbox');
                            q['visible'] = 'false' != Laya['LocalStorage']['getItem']('autologin'),
                                l['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                    q['visible'] = !q['visible'],
                                        Laya['LocalStorage']['setItem']('autologin', q['visible'] ? 'true' : 'false');
                                });
                            var o = N['getChildByName']('btn_kefu');
                            o['visible'] = 'chs_t' == GameMgr['client_type'],
                                o['clickHandler'] = new Laya['Handler'](this, function() {
                                    game['Tools']['setGrayDisable'](o, !0),
                                        Laya['timer'].once(1000, null, function() {
                                            game['Tools']['setGrayDisable'](o, !1);
                                        });
                                    var y = 'https://ykf-webchat.7moor.com/wapchat.html?';
                                    y += 'fromUrl=' + game['Tools']['getFinalUrl']('https://www.maj-soul.com'),
                                        y += '&urlTitle=网页',
                                        'chs' == GameMgr['client_language'] ? (y += '&accessId=4eb5a8b0-aafc-11ea-b418-397d5a9a3f68', y += '&language=ZHCN') : (y += '&accessId=4184be70-95b1-11ea-b027-616616b0ded6', y += '&language=EN');
                                    var L = {};
                                    L['登陆状态'] = '未登录',
                                        y += '&customField=' + JSON['stringify'](L),
                                        game['Tools']['open_new_window'](y);
                                }),
                                this['container_language'] = this.me['getChildByName']('container_language');
                            var K = this['container_language']['getChildByName']('btn');
                            this['label_language'] = K['getChildByName']('info'),
                                K['clickHandler'] = new Laya['Handler'](this, function() {
                                    y['UI_Entrance_Change_Language'].Inst.show();
                                });
                        },
                        Z['prototype']['ModelJpEn'] = function() {
                            function y(y) {
                                1 == y && Z['trySocio'](7);
                            }
                            var L = this['container_login']['getChildByName']('jpen'),
                                F = L['getChildByName']('btn_enter');
                            F['clickHandler'] = Laya['Handler']['create'](this, function() {
                                y(!0);
                            }, null, !1);
                            var s = L['getChildByName']('checksave'),
                                i = s['getChildByName']('checkbox');
                            i['visible'] = 'false' != Laya['LocalStorage']['getItem']('autologin'),
                                s['getChildByName']('btn_check')['clickHandler'] = new Laya['Handler'](this, function() {
                                    i['visible'] = !i['visible'],
                                        Laya['LocalStorage']['setItem']('autologin', i['visible'] ? 'true' : 'false');
                                });
                        },
                        Z['prototype'].show = function() {
                            var y = this;
                            GameMgr.Inst['postNewInfo2Server']('enter_entrance', {
                                    load_time: Date.now() - GameMgr.Inst['last_load_start_time']
                                }),
                                GameMgr['inDmm'] ? (this['container_social']['visible'] = !1, this['container_login']['getChildByName']('dmm')['visible'] = !0, this['container_login']['getChildByName']('chs')['visible'] = !1, this['container_login']['getChildByName']('jpen')['visible'] = !1) : (this['container_social']['visible'] = !0, this['container_login']['getChildByName']('dmm')['visible'] = !1, 'chs' == GameMgr['client_type'] || 'chs_t' == GameMgr['client_type'] ? (this['container_social'].x = 40, this['container_social'].y = 475, this['container_login']['getChildByName']('chs')['visible'] = !0, this['container_login']['getChildByName']('jpen')['visible'] = !1, this['route_info']['onEnable']()) : (this['container_login']['getChildByName']('chs')['visible'] = !1, this['container_login']['getChildByName']('jpen')['visible'] = !0, this['ModelJpEn']())), -1 != GameMgr.Inst['beinvited_roomid'] ? (this['container_extendInfo']['visible'] = !0, this['container_extendInfo']['getChildAt'](0).text = game['Tools']['strOfLocalization'](2054) + ':' + GameMgr.Inst['beinvited_roomid']) : '' != GameMgr.Inst['outsee_paipuid'] ? (this['container_extendInfo']['visible'] = !0, this['container_extendInfo']['getChildAt'](0).text = game['Tools']['strOfLocalization'](2055)) : this['container_extendInfo']['visible'] = !1;
                            var L = this['login_index'];
                            if (!GameMgr.Inst['in_emergence'] && GameMgr.Inst['fb_login_info'] && 'connected' == GameMgr.Inst['fb_login_info']['status'])
                                this['showLoginLoading'](13), Laya['timer'].once(500, this, function() {
                                    if (L == y['login_index']) {
                                        var F = GameMgr.Inst['fb_login_info']['authResponse'];
                                        y['_loginby_sociocode'](L, 13, F['accessToken']);
                                    }
                                });
                            else if (GameMgr.Inst['in_emergence'] || '1' != Laya['LocalStorage']['getItem']('fblogin')) {
                                this.me['getChildByName']('root')['getChildByName']('version').text = game['ResourceVersion']['version'];
                                var F = Laya['LocalStorage']['getItem']('_pre_sociotype'),
                                    s = Laya['LocalStorage']['getItem']('ssssoooodd');
                                s || (s = '');
                                var i = -1;
                                if (F && '' != F && (i = parseInt(F)), GameMgr.Inst['in_emergence'] && (i = -1), app.Log.log('sociotype:' + i), 0 > i || i > 14)
                                    this['showContainerLogin']();
                                else if (0 == i)
                                    '' != s ? (this['showLoginLoading'](0), Laya['timer'].once(600, this, function() {
                                        L == y['login_index'] && y['_try_socio_check'](L, i, s);
                                    })) : this['showContainerLogin']();
                                else if (i >= 1 && 6 >= i) {
                                    var M = Laya['LocalStorage']['getItem']('_pre_code');
                                    M || (M = ''),
                                        '' != M || '' != s ? (this['showLoginLoading'](i), Laya['timer'].once(500, this, function() {
                                            L == y['login_index'] && (M && '' != M ? y['_loginby_sociocode'](L, i, M) : y['_try_socio_check'](L, i, s));
                                        })) : this['showContainerLogin']();
                                } else if (i >= 7 && 10 >= i && 'chs' != GameMgr['client_type'] && 'chs_t' != GameMgr['client_type'] && Yo && Yo['login']) {
                                    var Z = game['LocalStorage']['getItem']('yostar_token');
                                    Z || (Z = '');
                                    var N = game['LocalStorage']['getItem']('yostar_uid');
                                    N || (N = ''),
                                        '' != N && '' != Z ? (this['showLoginLoading'](i), Laya['timer'].once(500, this, function() {
                                            L == y['login_index'] && y['_login_2_yostar'](L, i, Z, N);
                                        })) : this['showContainerLogin']();
                                } else if (13 == i || 14 == i) {
                                    var e = Laya['LocalStorage']['getItem']('_pre_code');
                                    e || (e = ''),
                                        '' != e || '' != s ? (this['showLoginLoading'](i), Laya['timer'].once(500, this, function() {
                                            L == y['login_index'] && (e && '' != e ? y['_loginby_sociocode'](L, i, e) : y['_try_socio_check'](L, i, s));
                                        })) : this['showContainerLogin']();
                                } else
                                    this['showContainerLogin']();
                            } else {
                                this['showLoginLoading'](13);
                                var W = Laya['timer']['currTimer'],
                                    D = this,
                                    B = function() {
                                        if (null != window.FB && void 0 != window.FB) {
                                            if (FB['getLoginStatus'](function(y) {
                                                    GameMgr.Inst['fb_login_info'] = y;
                                                }), L != D['login_index'])
                                                return;
                                            var y = GameMgr.Inst['fb_login_info']['authResponse'];
                                            D['_loginby_sociocode'](L, 13, y['accessToken']),
                                                Laya['timer']['clear'](D, B);
                                        } else
                                            Laya['timer']['currTimer'] > W + 5000 && Laya['timer']['clear'](D, B);
                                    };
                                Laya['LocalStorage']['setItem']('fblogin', '0'),
                                    Laya['timer']['frameLoop'](1, D, B);
                            }
                            if ('chs_t' == GameMgr['client_type'] || 'en' == GameMgr['client_type'])
                                switch (this['container_language']['visible'] = !0, GameMgr['client_language']) {
                                    case 'chs':
                                        this['label_language'].text = '中文(简体)';
                                        break;
                                    case 'chs_t':
                                        this['label_language'].text = '中文(繁體)';
                                        break;
                                    case 'jp':
                                        this['label_language'].text = '日本語';
                                        break;
                                    case 'en':
                                        this['label_language'].text = 'English';
                                        break;
                                    case 'kr':
                                        this['label_language'].text = game['Tools']['strOfLocalization'](3615);
                                        break;
                                    default:
                                        this['label_language'].text = '';
                                }
                            else
                                this['container_language']['visible'] = !1;
                            this['scene'].show(),
                                this['enable'] = !0;
                        },
                        Z['prototype']['_onSocioBack'] = function(y, L, F) {
                            var s = this,
                                i = this['login_index'];
                            this['showLoginLoading'](y),
                                Laya['timer'].once(500, this, function() {
                                    i == s['login_index'] && (L && '' != L ? (Laya['LocalStorage']['setItem']('_pre_sociotype', 'false' == Laya['LocalStorage']['getItem']('autologin') ? '' : y['toString']()), F ? s['_login_2_yostar'](i, y, L, F) : (Laya['LocalStorage']['setItem']('_pre_code', L), s['_loginby_sociocode'](i, y, L))) : s['showContainerLogin']());
                                });
                        },
                        Z['prototype']['showContainerLogin'] = function() {
                            if (-1 == this['login_type_tab_index']) {
                                var y = game['LocalStorage']['getItem']('login_type_tab'),
                                    L = game['LocalStorage']['getItem']('account'),
                                    F = game['LocalStorage']['getItem']('password');
                                if (this['login_account_input_info'] = {}, L && F && '' != L && '' != F) {
                                    var s = 0;
                                    y && '' != y && (s = parseInt(y)),
                                        this['login_account_input_info'][s] = {
                                            account: L,
                                            password: F
                                        },
                                        this['change_chs_login_tab'](s);
                                } else
                                    this['change_chs_login_tab'](0);
                            } else
                                this['change_chs_login_tab'](this['login_type_tab_index']);
                            this['container_login']['visible'] = !0,
                                this['login_loading']['close'](),
                                this['login_index']++;
                        },
                        Z['prototype']['showLoginLoading'] = function(y) {
                            this['container_login']['visible'] = !1,
                                this['login_loading'].show(y);
                        },
                        Z['prototype']['change_chs_login_tab'] = function(y) {
                            this['login_type_tab_index'] >= 0 && (this['login_account_input_info'][this['login_type_tab_index']] = {
                                    account: this['txt_account']['input'].text,
                                    password: this['txt_password']['input'].text
                                }),
                                y || (y = 0),
                                this['login_type_tab_index'] = y;
                            for (var L = 0; L < this['login_type_tabs']['length']; L++)
                                this['login_type_tabs'][L].word['color'] = L == y ? '#446fdb' : '#84827b', this['login_type_tabs'][L]['choosen']['visible'] = L == y;
                            switch (y) {
                                case 0:
                                    this['txt_account'].lb.text = game['Tools']['strOfLocalization'](3138),
                                        this['txt_account']['input']['restrict'] = '',
                                        this['txt_account']['input']['maxChars'] = 50;
                                    break;
                                case 1:
                                    this['txt_account'].lb.text = game['Tools']['strOfLocalization'](3132),
                                        this['txt_account']['input']['restrict'] = '0-9',
                                        this['txt_account']['input']['maxChars'] = 11;
                                    break;
                                default:
                                case 0:
                                    this['txt_account'].lb.text = '',
                                        this['txt_account']['input']['restrict'] = '',
                                        this['txt_account']['input']['maxChars'] = 50;
                            }
                            var F = this['login_account_input_info'][y],
                                s = '',
                                i = '';
                            F && (s = F['account'], i = F['password']),
                                s && '' != s ? (this['txt_account']['input'].text = s, this['txt_account'].lb['visible'] = !1) : (this['txt_account']['input'].text = '', this['txt_account'].lb['visible'] = !0),
                                i && '' != i ? (this['txt_password']['input'].text = i, this['txt_password'].lb['visible'] = !1) : (this['txt_password']['input'].text = '', this['txt_password'].lb['visible'] = !0);
                        },
                        Z['prototype']['_btn_login'] = function() {
                            var L = this;
                            if (!this['showEmergency']()) {
                                var F = this['txt_account']['input'].text,
                                    s = this['txt_password']['input'].text;
                                if (!F || '' == F)
                                    return this['showInfo'](game['Tools']['strOfLocalization'](2056)), void 0;
                                if (!s || '' == s)
                                    return this['showInfo'](game['Tools']['strOfLocalization'](2057)), void 0;
                                if (!(Laya['timer']['currTimer'] < this['btn_login_cd'])) {
                                    if (this['multiLogin']())
                                        return this['showInfo'](game['Tools']['strOfLocalization'](2058)), void 0;
                                    this['btn_login_cd'] = Laya['timer']['currTimer'] + 1000,
                                        this['showLoginLoading'](0);
                                    var i = this['login_index'];
                                    game['LobbyNetMgr'].Inst['OpenConnect'](Laya['Handler']['create'](this, function(M) {
                                        Laya['timer'].once(800, L, function() {
                                            i == L['login_index'] && (M.open ? Z.Inst['_try_login_account'](i, F, s) : (M['maintenance'] ? y['UI_Entrance_Maintenance'].Inst.show(M['maintenance']) : L['showInfo'](M.info), L['showContainerLogin'](), L['btn_login_cd'] = 0));
                                        });
                                    }));
                                }
                            }
                        },
                        Z['prototype']['_try_regist_account'] = function(y, L, F, s) {
                            var i = this;
                            this['showEmergency']() || app['NetAgent']['sendReq2Lobby']('Lobby', 'signup', {
                                account: y,
                                password: GameMgr['encodeP'](F),
                                code: L,
                                type: s,
                                device: GameMgr.Inst['get_device_info'](),
                                client_version_string: GameMgr.Inst['getClientVersion']()
                            }, function(L, M) {
                                if (L)
                                    i['showError'](game['Tools']['strOfLocalization'](2059), L), app.Log['Error'](L['message']);
                                else if (M['error'])
                                    i['showError'](game['Tools']['strOfLocalization'](2060), M['error'].code), app.Log['Error'](game['Tools']['strOfLocalization'](2219, [JSON['stringify'](M)]));
                                else {
                                    var Z = s - 1;
                                    i['login_account_input_info'][Z] = {
                                            account: y,
                                            password: F
                                        },
                                        i['change_chs_login_tab'](Z),
                                        i['_try_login_account'](i['login_index'], y, F);
                                }
                            });
                        },
                        Z['prototype']['_try_login_account'] = function(L, F, s) {
                            var i = this;
                            if (L == this['login_index']) {
                                if (this['multiLogin']())
                                    return this['showInfo'](game['Tools']['strOfLocalization'](2058)), this['showContainerLogin'](), void 0;
                                var M = GameMgr.Inst['get_device_info'](),
                                    Z = game['Tools']['get_platform_currency']();
                                game['LocalStorage']['setItem']('account', F),
                                    game['LocalStorage']['setItem']('password', s),
                                    game['LocalStorage']['setItem']('login_type_tab', this['login_type_tab_index']['toString']()),
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'login', {
                                        account: F,
                                        password: GameMgr['encodeP'](s),
                                        reconnect: !1,
                                        device: M,
                                        random_key: GameMgr['device_id'],
                                        client_version: {
                                            resource: game['ResourceVersion']['version']
                                        },
                                        gen_access_token: !0,
                                        currency_platforms: Z,
                                        type: this['login_type_tab_index'],
                                        client_version_string: GameMgr.Inst['getClientVersion']()
                                    }, function(M, Z) {
                                        if (L == i['login_index'])
                                            if (i['btn_login_cd'] = 0, M)
                                                i['showError'](game['Tools']['strOfLocalization'](2061), M), i['showContainerLogin']();
                                            else if (Z['error']) {
                                            if (156 == Z['error'].code)
                                                return y['UI_Entrance_Mail_Regist'].Inst['enable'] && (y['UI_Entrance_Mail_Regist'].Inst['close'](), i['showLoginLoading'](0)), i['onLoginQueueError'](Laya['Handler']['create'](i, function() {
                                                    i['_try_login_account'](i['login_index'], F, s);
                                                })), void 0;
                                            503 == Z['error'].code ? i['onLoginErrorProhibition'](Z['error']) : i['showError']('', Z['error'].code),
                                                i['showContainerLogin']();
                                        } else
                                            Laya['LocalStorage']['setItem']('_pre_sociotype', '0'), game['LocalStorage']['setItem']('account', F), game['LocalStorage']['setItem']('password', s), game['LocalStorage']['setItem']('login_type_tab', i['login_type_tab_index']['toString']()), GameMgr.Inst['account'] = F, GameMgr.Inst['password'] = s, GameMgr.Inst['sociotype'] = 0, GameMgr['country'] = Z['country'], GameMgr.Inst['account_id'] = Z['account_id'], GameMgr.Inst['account_data'] = Z['account'], y['UI_User_Xieyi_enjp'].init(Laya['Handler']['create'](i, function() {
                                                y['UI_User_Xieyi_enjp']['needCheckVersion'] ? y['UI_User_Xieyi_Update'].Inst.show(Laya['Handler']['create'](i, function() {
                                                    i['_onLoginSuccess'](0, Z);
                                                })) : i['_onLoginSuccess'](0, Z);
                                            }));
                                    });
                            }
                        },
                        Z['prototype']['_login_2_yostar'] = function(L, F, s, i) {
                            var M = this;
                            if (!this['showEmergency']() && L == this['login_index']) {
                                app.Log.log('login_2_yostar sociotype:' + F + ' token:' + s + ' uid:' + i);
                                var Z = this,
                                    N = function(L, F) {
                                        switch (void 0 === F && (F = 0), F = Math['floor'](F / 1000), L) {
                                            case 1:
                                                Z['showError'](game['Tools']['strOfLocalization'](2677));
                                                break;
                                            case 2:
                                                Z['showError'](game['Tools']['strOfLocalization'](2678));
                                                break;
                                            case 3:
                                                Z['showError'](game['Tools']['strOfLocalization'](2679));
                                                break;
                                            case 4:
                                                Z['showError'](game['Tools']['strOfLocalization'](2680));
                                                break;
                                            case 5:
                                                'kr' == GameMgr['client_type'] ? (y['UI_Entrance_Account_Deleted'].Inst['setYoInfo'](i, s), y['UI_Entrance_Account_Deleted'].Inst.show(game['Tools']['strOfLocalization'](8026, [game['Tools']['time2YearMounthDate'](F, '-') + ' ' + game['Tools']['time2HourMinute'](F)]))) : Z['showError'](game['Tools']['strOfLocalization'](8031, [game['Tools']['time2YearMounthDate'](F, '-') + ' ' + game['Tools']['time2HourMinute'](F)]));
                                                break;
                                            default:
                                                Z['showError'](game['Tools']['strOfLocalization'](2676));
                                        }
                                        Laya['LocalStorage']['setItem']('_pre_sociotype', ''),
                                            Z['showContainerLogin']();
                                    };
                                Yo['login'] && Yo['login']({
                                    uid: i,
                                    token: s
                                }).then(function(e) {
                                    L == M['login_index'] && (e ? (app.Log.log('yo login data.result:' + e['result']), 0 == e['result'] ? 'kr' == GameMgr['client_type'] && 1 != e['kr_kmc_status'] ? (Laya['LocalStorage']['setItem']('_pre_sociotype', ''), Z['showContainerLogin'](), y['UI_ShiMingRenZheng_KR'].Inst.show(game['Tools']['strOfLocalization'](2 == e['kr_kmc_status'] ? 8043 : 8044), Laya['Handler']['create'](M, function() {
                                        Yo['kmcStart']({
                                            accessToken: e['accessToken']
                                        }).then(function() {});
                                    }))) : (game['LocalStorage']['setItem']('yostar_token', s), game['LocalStorage']['setItem']('yostar_uid', i), GameMgr.Inst['yostar_accessToken'] = e['accessToken'], GameMgr.Inst['yostar_uid'] = i, GameMgr.Inst['yostar_login_info'] = e, Z['_loginby_sociocode'](L, F, e['accessToken'], i)) : N(e['result'], e['reborn_before_ms'])) : (app.Log.log('yo login data.result: no'), N(-1)));
                                });
                            }
                        },
                        Z['prototype']['_loginby_sociocode'] = function(L, F, s, i) {
                            var M = this;
                            if (void 0 === i && (i = ''), !this['showEmergency']() && L == this['login_index']) {
                                if (app.Log.log('_loginby_sociocode0 sociotype:' + F + ', code:' + s + ', uid:' + i), !game['LobbyNetMgr'].Inst.isOK)
                                    return game['LobbyNetMgr'].Inst['OpenConnect'](Laya['Handler']['create'](this, function(Z) {
                                        L == M['login_index'] && (Z.open ? M['_loginby_sociocode'](L, F, s, i) : (Z['maintenance'] ? y['UI_Entrance_Maintenance'].Inst.show(Z['maintenance']) : M['showInfo'](Z.info), M['showContainerLogin']()));
                                    })), void 0;
                                Laya['LocalStorage']['setItem']('_pre_code', ''),
                                    Laya['LocalStorage']['setItem']('_pre_sociotype', ''),
                                    app.Log.log('_loginby_sociocode1 sociotype' + F + ' code:' + s + ' uid:' + i);
                                var Z = {
                                    type: F,
                                    code: s
                                };
                                i && (Z.uid = i),
                                    Z['client_version_string'] = GameMgr.Inst['getClientVersion'](),
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'oauth2Auth', Z, function(y, s) {
                                        L == M['login_index'] && (y ? (app.Log.log('oauth2Auth err:' + y), M['showError'](game['Tools']['strOfLocalization'](2059), y), app.Log['Error'](y['message']), M['showContainerLogin']()) : (app.Log.log('oauth2Auth res: ' + JSON['stringify'](s)), s['error'] ? (M['showError'](game['Tools']['strOfLocalization'](2062), s['error'].code), M['showContainerLogin']()) : M['_try_socio_check'](L, F, s['access_token'])));
                                    });
                            }
                        },
                        Z['prototype']['_try_socio_check'] = function(L, F, s) {
                            var i = this;
                            if (!this['showEmergency']() && L == this['login_index'])
                                return this['multiLogin']() ? (this['showInfo'](game['Tools']['strOfLocalization'](2058)), this['showContainerLogin'](), void 0) : game['LobbyNetMgr'].Inst.isOK ? (Laya['timer'].once(800, this, function() {
                                    L == i['login_index'] && (app.Log.log('_try_socio_check sociotype' + F + ' access_token:' + s), app['NetAgent']['sendReq2Lobby']('Lobby', 'oauth2Check', {
                                        type: F,
                                        access_token: s
                                    }, function(y, M) {
                                        L == i['login_index'] && (y ? (i['showError'](game['Tools']['strOfLocalization'](2059), y), app.Log['Error'](y['message']), i['showContainerLogin']()) : (app.Log.log('oauth2Check res: ' + JSON['stringify'](M)), M['error'] ? (i['showError'](game['Tools']['strOfLocalization'](2062), M['error'].code), i['showContainerLogin']()) : M['has_account'] ? i['_try_login_socio'](L, F, s) : i['_try_regist_socio'](L, F, s)));
                                    }));
                                }), void 0) : (game['LobbyNetMgr'].Inst['OpenConnect'](Laya['Handler']['create'](this, function(M) {
                                    L == i['login_index'] && (M.open ? i['_try_socio_check'](L, F, s) : (M['maintenance'] ? y['UI_Entrance_Maintenance'].Inst.show(M['maintenance']) : i['showInfo'](M.info), i['showContainerLogin']()));
                                })), void 0);
                        },
                        Z['prototype']['_try_regist_socio'] = function(y, L, F) {
                            var s = this;
                            if (!this['showEmergency']() && y == this['login_index']) {
                                app.Log.log('_try_regist_socio sociotype' + L + ' access_token:' + F);
                                var i = Laya['LocalStorage']['getItem']('__ad_s');
                                i && (GameMgr.Inst['_ad_str'] = i);
                                var M = {};
                                M.type = L,
                                    M['access_token'] = F,
                                    M['device'] = GameMgr.Inst['get_device_info'](),
                                    GameMgr.Inst['_ad_str'] && (M['advertise_str'] = GameMgr.Inst['_ad_str']),
                                    7 == L && (M['email'] = game['LocalStorage']['getItem']('mail_account')),
                                    M['client_version_string'] = GameMgr.Inst['getClientVersion'](),
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'oauth2Signup', M, function(i, M) {
                                        y == s['login_index'] && (i ? (app.Log.log('oauth2Signup err:' + i), s['showError'](game['Tools']['strOfLocalization'](2059), i), app.Log['Error'](i['message']), s['showContainerLogin']()) : (app.Log.log('oauth2Signup res: ' + JSON['stringify'](M)), M['error'] ? (s['showError'](game['Tools']['strOfLocalization'](2060), M['error'].code), app.Log['Error'](game['Tools']['strOfLocalization'](2219, [JSON['stringify'](M)])), s['showContainerLogin']()) : (app['PlayerBehaviorStatistic']['fb_trace_force'](app['EBehaviorType']['CompleteRegistration']), app['PlayerBehaviorStatistic']['google_trace_force'](app['EBehaviorType']['G_Role_create']), app['PlayerBehaviorStatistic']['tw_trace_force'](app['EBehaviorType']['TW_Signup']), s['_try_login_socio'](y, L, F))));
                                    });
                            }
                        },
                        Z['prototype']['_try_login_socio'] = function(L, F, s) {
                            var i = this;
                            if (L == this['login_index']) {
                                if (this['multiLogin']())
                                    return this['showError'](game['Tools']['strOfLocalization'](2058)), this['showContainerLogin'](), void 0;
                                app.Log.log('_try_login_socio sociotype' + F + ' access_token:' + s);
                                var M = GameMgr.Inst['get_device_info'](),
                                    Z = game['Tools']['get_platform_currency']();
                                app['NetAgent']['sendReq2Lobby']('Lobby', 'oauth2Login', {
                                    type: F,
                                    access_token: s,
                                    reconnect: !1,
                                    device: M,
                                    random_key: GameMgr['device_id'],
                                    client_version: {
                                        resource: game['ResourceVersion']['version']
                                    },
                                    currency_platforms: Z,
                                    client_version_string: GameMgr.Inst['getClientVersion']()
                                }, function(M, Z) {
                                    L == i['login_index'] && (i['btn_login_cd'] = 0, M ? (app.Log.log('oauth2Login err:' + M), i['showError'](game['Tools']['strOfLocalization'](2061), M), i['showContainerLogin']()) : (app.Log.log('oauth2Login res: ' + JSON['stringify'](Z)), Z['error'] ? (156 == Z['error'].code ? i['onLoginQueueError'](Laya['Handler']['create'](i, function() {
                                        i['_try_login_socio'](i['login_index'], F, s);
                                    })) : 503 == Z['error'].code ? i['onLoginErrorProhibition'](Z['error']) : i['showError']('', Z['error'].code), i['showContainerLogin']()) : (Laya['LocalStorage']['setItem']('_pre_sociotype', 'false' == Laya['LocalStorage']['getItem']('autologin') ? '' : F['toString']()), Laya['LocalStorage']['setItem']('ssssoooodd', s), GameMgr.Inst['sociotype'] = F, GameMgr.Inst['access_token'] = s, GameMgr['country'] = Z['country'], GameMgr.Inst['account_id'] = Z['account_id'], GameMgr.Inst['account_data'] = Z['account'], y['UI_User_Xieyi_enjp'].init(Laya['Handler']['create'](i, function() {
                                        y['UI_User_Xieyi_enjp']['needCheckVersion'] ? y['UI_User_Xieyi_Update'].Inst.show(Laya['Handler']['create'](i, function() {
                                            i['_onLoginSuccess'](F, Z);
                                        })) : i['_onLoginSuccess'](F, Z);
                                    })))));
                                });
                            }
                        },
                        Z['prototype']['_onLoginPengdingPhone'] = function() {},
                        Z['prototype']['_onLoginSuccess'] = function(L, F, s) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(F),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(F));
                                }
                            }));
                            var i = this;
                            if (void 0 === s && (s = !1), app.Log.log('登陆：' + JSON['stringify'](F)), GameMgr.Inst['account_id'] = F['account_id'], GameMgr.Inst['account_data'] = F['account'], y['UI_ShiMingRenZheng']['renzhenged'] = F['is_id_card_authed'], GameMgr.Inst['account_numerical_resource'] = {}, F['account']['platform_diamond'])
                                for (var M = F['account']['platform_diamond'], Z = 0; Z < M['length']; Z++)
                                    GameMgr.Inst['account_numerical_resource'][M[Z].id] = M[Z]['count'];
                            if (F['account']['skin_ticket'] && (GameMgr.Inst['account_numerical_resource']['100004'] = F['account']['skin_ticket']), F['account']['platform_skin_ticket'])
                                for (var N = F['account']['platform_skin_ticket'], Z = 0; Z < N['length']; Z++)
                                    GameMgr.Inst['account_numerical_resource'][N[Z].id] = N[Z]['count'];
                            GameMgr.Inst['account_refresh_time'] = Laya['timer']['currTimer'],
                                F['game_info'] && (GameMgr.Inst['ingame'] = !0, GameMgr.Inst['mj_server_location'] = F['game_info']['location'], GameMgr.Inst['mj_game_token'] = F['game_info']['connect_token'], GameMgr.Inst['mj_game_uuid'] = F['game_info']['game_uuid']),
                                F['access_token'] && (Laya['LocalStorage']['setItem']('_pre_sociotype', 'false' == Laya['LocalStorage']['getItem']('autologin') ? '' : L['toString']()), Laya['LocalStorage']['setItem']('ssssoooodd', F['access_token']), GameMgr.Inst['sociotype'] = L, GameMgr.Inst['access_token'] = F['access_token']);
                            var e = this,
                                W = function() {
                                    GameMgr.Inst['onLoadStart']('login'),
                                        Laya['LocalStorage']['removeItem']('__ad_s'),
                                        y['UI_Loading'].Inst.show('load_lobby'),
                                        e['enable'] = !1,
                                        e['scene']['close'](),
                                        y['UI_Entrance_Mail_Regist'].Inst['close'](),
                                        e['login_loading']['close'](),
                                        y['UIMgr'].Inst['openLobbyUI'](Laya['Handler']['create'](e, function() {
                                            GameMgr.Inst['afterLogin'](),
                                                e['route_info']['onClose'](),
                                                GameMgr.Inst['account_data']['anti_addiction'] && y['UIMgr'].Inst['ShowPreventAddiction'](),
                                                e['destroy'](),
                                                e['disposeRes'](),
                                                y['UI_Add2Desktop'].Inst && (y['UI_Add2Desktop'].Inst['destroy'](), y['UI_Add2Desktop'].Inst = null);
                                        }), Laya['Handler']['create'](e, function(L) {
                                            return y['UI_Loading'].Inst['setProgressVal'](0.2 * L);
                                        }, null, !1));
                                },
                                D = Laya['Handler']['create'](this, function() {
                                    0 != GameMgr.Inst['account_data']['frozen_state'] ? app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchRefundOrder', {}, function(L, F) {
                                        L ? (app.Log.log('fetchRefundOrder err:' + L), i['showError'](game['Tools']['strOfLocalization'](2061), L), i['showContainerLogin']()) : (y['UI_Refund']['orders'] = F['orders'], y['UI_Refund']['clear_deadline'] = F['clear_deadline'], y['UI_Refund']['message'] = F['message'], W());
                                    }) : W();
                                });
                            if (y['UI_Loading']['Loading_Images'] = [], GameMgr.Inst['account_data']['loading_image'])
                                for (var B = 0, E = GameMgr.Inst['account_data']['loading_image']; B < E['length']; B++) {
                                    var f = E[B];
                                    y['UI_Loading']['Loading_Images'].push(f);
                                }
                            y['UI_Loading']['loadNextCG'](),
                                'chs' != GameMgr['client_type'] || F['account']['phone_verify'] ? D.run() : (y['UI_Entrance_Mail_Regist'].Inst['close'](), this['login_loading']['close'](), this['container_login']['visible'] = !1, y['UI_Bind_Phone1'].Inst.show(!0, Laya['Handler']['create'](this, function() {
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchPhoneLoginBind', {}, function(L, F) {
                                        L || F['error'] ? i['showError'](L, F['error']) : 0 == F['phone_login'] ? y['UI_Create_Phone_Account'].Inst.show(D) : y['UI_Canot_Create_Phone_Account'].Inst.show(D);
                                    });
                                })));
                        },
                        Z['prototype']['showMailLogin'] = function() {
                            this['page_maillogin'].show();
                        },
                        Z['prototype']['showInfo'] = function(L) {
                            var F = '';
                            L && (F += L),
                                y['UI_Entrance_Error'].Inst.show(F, 0, !1);
                        },
                        Z['prototype']['showError'] = function(L, F, s) {
                            void 0 === F && (F = -1),
                                void 0 === s && (s = '');
                            var i = '';
                            L && (i += L), -1 != F && (i['length'] > 0 && (i += ','), i += cfg.info['error'].get(F) ? cfg.info['error'].get(F)[GameMgr['client_language']] : game['Tools']['strOfLocalization'](2063)),
                                s && (i += ', info:' + s),
                                y['UI_Entrance_Error'].Inst.show(i, F, !1);
                        },
                        Z['prototype']['updateServer'] = function() {
                            this['route_info']['update']();
                        },
                        Z['prototype']['multiLogin'] = function() {
                            var y = Laya['LocalStorage']['getItem']('dolllt');
                            return y && '' != y ? game['Tools']['currentTime'] < parseFloat(y) + 1.5 && parseFloat(y) < game['Tools']['currentTime'] + 1800 : !1;
                        },
                        Z['prototype']['disposeRes'] = function() {
                            Laya['Loader']['clearTextureRes']('res/atlas/' + game['Tools']['localUISrc']('myres/entrance.atlas'));
                            var y = '';
                            y = 'chs' != GameMgr['client_language'] ? 'scene/Assets/Resource/entrance/icon_color_' + GameMgr['client_language'] + '.png' : 'scene/Assets/Resource/entrance/icon_color.png';
                            var L = [];
                            L.push(y),
                                L.push('scene/Assets/Resource/entrance/Materials/icon_color.lmat'),
                                L.push('scene/Assets/Resource/entrance/Materials/blackmask.lmat');
                            for (var F = 0; F < L['length']; F++) {
                                var s = Laya['loader']['getRes'](L[F]);
                                s && s['dispose'](!0);
                            }
                        },
                        Z['prototype']['showEmergency'] = function() {
                            return GameMgr.Inst['in_emergence'] && this['showInfo'](GameMgr.Inst['emergence_notice']),
                                GameMgr.Inst['in_emergence'];
                        },
                        Z['prototype']['onLoginErrorProhibition'] = function(L) {
                            var F = 0;
                            L['u32_params'] && L['u32_params']['length'] >= 1 && (F = L['u32_params'][0]),
                                6 == F ? 'kr' == GameMgr['client_type'] || 'chs_t' == GameMgr['client_type'] ? y['UI_Entrance_Account_Deleted'].Inst.show(game['Tools']['strOfLocalization']('kr' == GameMgr['client_type'] ? 8026 : 8035, [game['Tools']['time2YearMounthDate'](L['u32_params'][1]) + ' ' + game['Tools']['time2HourMinute'](L['u32_params'][1], 'chs_t' == GameMgr['client_type'])])) : this['showError'](game['Tools']['strOfLocalization'](8031, [game['Tools']['time2YearMounthDate'](L['u32_params'][1]) + ' ' + game['Tools']['time2HourMinute'](L['u32_params'][1])])) : y['UI_Entrance_Prohibition'].Inst.show(L);
                        },
                        Z['prototype']['onLoginQueueError'] = function(L) {
                            var F = this;
                            this['queue_finish_handler'] = Laya['Handler']['create'](this, this['onLoginQueueFinished']),
                                app['NetAgent']['AddListener2Lobby']('NotifyLoginQueueFinished', this['queue_finish_handler']),
                                this['retry_handler'] = L,
                                this['page_maillogin']['locking'] = !0,
                                app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchQueueInfo', {}, function(L, s) {
                                    F['page_maillogin']['locking'] = !1,
                                        L || s['error'] ? (F['onCancelQueue'](), L ? y['UI_Entrance_Error'].Inst.show(game['Tools']['strOfLocalization'](3766), 0, !1) : F['showError'](L, s['error'])) : F['retry_handler'] && y['UI_Entrance_Queue'].Inst.show(s['remain'], s.rank);
                                });
                        },
                        Z['prototype']['onCancelQueue'] = function() {
                            this['retry_handler'] = null,
                                game['LobbyNetMgr'].Inst['Close'](),
                                this['btn_login_cd'] = Laya['timer']['currTimer'] + 500,
                                Laya['timer'].once(500, this, function() {
                                    game['LobbyNetMgr'].Inst['OpenConnect'](null);
                                }),
                                this['onLoginQueueFinished']();
                        },
                        Z['prototype']['onLoginQueueFinished'] = function() {
                            var L = this;
                            this['showContainerLogin'](),
                                app['NetAgent']['RemoveListener2Lobby']('NotifyLoginQueueFinished', this['queue_finish_handler']),
                                y['UI_Entrance_Queue'].Inst['enable'] && y['UI_Entrance_Queue'].Inst['close'](),
                                this['retry_handler'] && Laya['timer'].once(200, this, function() {
                                    L['retry_handler'] && (L['retry_handler'].run(), L['retry_handler'] = null);
                                });
                        },
                        Z.Inst = null,
                        Z;
                }
                (y['UIBase']);
            y['UI_Entrance'] = M;
        }
        (uiscript || (uiscript = {}));


        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            app.Log.log('ActionBabei play data:' + JSON['stringify'](L)),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1);
                            var F = L.seat,
                                s = mjcore['MJPai']['Create']('4z');
                            y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['AddBabei'](s, L['moqie'], !0),
                                y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['PlaySound']('act_babei');
                            var i = !1;
                            L['tile_state'] && L['tile_state'] > 0 && (i = !0),
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0),
                                F == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['onBabei'](s, i, !1) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['onBabei'](L['moqie'], i, !1),
                                L['operation'] && Laya['timer'].once(500, this, function() {
                                    y['ActionOperation'].play(L['operation']);
                                }),
                                void 0 != L['zhenting'] && void 0 == L['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](L['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting'])),
                                F == y['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](L, !1),
                                y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                        },
                        F['fastplay'] = function(L, F) {
                            app.Log.log('ActionBabei fastplay data:' + JSON['stringify'](L) + ' usetime:' + F),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !0);
                            var s = L.seat,
                                i = mjcore['MJPai']['Create']('4z');
                            y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['AddBabei'](i, L['moqie'], !1);
                            var M = !1;
                            L['tile_state'] && L['tile_state'] > 0 && (M = !0),
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['onBabei'](i, M, !0) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['onBabei'](L['moqie'], M, !0),
                                L['operation'] && -1 != F && Laya['timer'].once(500, this, function() {
                                    y['ActionOperation'].play(L['operation'], F);
                                }),
                                void 0 != L['zhenting'] && void 0 == L['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](L['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting'])),
                                s == y['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](L, !0),
                                y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                        },
                        F['record'] = function(L, F) {
                            void 0 === F && (F = 0),
                                app.Log.log('ActionBabei record data:' + JSON['stringify'](L)),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !0);
                            var s = L.seat,
                                i = mjcore['MJPai']['Create']('4z');
                            y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['AddBabei'](i, L['moqie'], !0),
                                y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['PlaySound']('act_babei');
                            var M = !1;
                            if (L['tile_state'] && L['tile_state'] > 0 && (M = !0), L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0), s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['onBabei'](i, M, !1) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['recordBabei'](i, L['moqie'], M, !1), L['tingpais'] && y['DesktopMgr'].Inst['setTingpai'](L.seat, L['tingpais']), y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && L['operations'])
                                for (var Z = 0; Z < L['operations']['length']; Z++)
                                    y['ActionOperation'].ob(L['operations'][Z], F, 450);
                            return y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0,
                                1000;
                        },
                        F['fastrecord'] = function(L, F) {
                            void 0 === F && (F = -1),
                                app.Log.log('ActionBabei fastrecord data:' + JSON['stringify'](L)),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !0);
                            var s = L.seat,
                                i = mjcore['MJPai']['Create']('4z');
                            y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['AddBabei'](i, L['moqie'], !1);
                            var M = !1;
                            if (L['tile_state'] && L['tile_state'] > 0 && (M = !0), L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1), s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['onBabei'](i, M, !0) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['recordBabei'](i, L['moqie'], M, !0), L['tingpais'] && y['DesktopMgr'].Inst['setTingpai'](L.seat, L['tingpais']), y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && F >= 0 && L['operations'])
                                for (var Z = 0; Z < L['operations']['length']; Z++)
                                    y['ActionOperation'].ob(L['operations'][Z], F, 450);
                            y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionBabei'] = L;
        }
        (view || (view = {}));



        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            var F = this,
                                s = y['DesktopMgr'].Inst.mode == y['EMJMode'].play || y['DesktopMgr'].Inst['record_show_anim'];
                            L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1),
                                y['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close'](),
                                y['BgmListMgr']['stopBgm']();
                            var i = !1;
                            Laya['timer'].once(100, this, function() {
                                var M = L['hules'],
                                    Z = 0;
                                if (M[0].zimo) {
                                    for (var N = M[0].seat, e = [], W = 0; W < M[0].hand['length']; W++)
                                        e.push(mjcore['MJPai']['Create'](M[0].hand[W]));
                                    if (e = e.sort(mjcore['MJPai']['Distance']), uiscript['UI_Huleshow'].Inst['showZimo']([y['DesktopMgr'].Inst['seat2LocalPosition'](N)]), L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0), Z += 1400, s && (M[0]['title'] && '' != M[0]['title'] || M[0]['title_id']) && (Laya['timer'].once(Z, F, function() {
                                            uiscript['UI_HuCutIn'].show(y['DesktopMgr'].Inst['player_datas'][N]['avatar_id']),
                                                i = !0;
                                        }), Z += 2000), Laya['timer'].once(Z, F, function() {
                                            N == y['DesktopMgr'].Inst.seat && y['DesktopMgr'].Inst['mainrole']['HulePrepare'](e, M[0]['hu_tile'], M[0].zimo),
                                                y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](N)].Hule(e, mjcore['MJPai']['Create'](M[0]['hu_tile']), M[0].zimo);
                                        }), s) {
                                        var D = 0,
                                            B = M[0].seat;
                                        B >= 0 && (D = y['DesktopMgr'].Inst['player_effects'][B][game['EView']['hupai_effect']]),
                                            Z += '305215' == D || '305219' == D ? 5000 : '308021' == D ? 3800 : '305217' == D ? 3800 : 2800;
                                    } else
                                        Z += 500;
                                    N == y['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                                } else {
                                    if (Laya['timer'].once(Z, F, function() {
                                            for (var L = [], F = 0; F < M['length']; F++)
                                                L.push(y['DesktopMgr'].Inst['seat2LocalPosition'](M[F].seat));
                                            uiscript['UI_Huleshow'].Inst['showRong'](L);
                                        }), Z += 1500, s)
                                        for (var E = function(L) {
                                                var s = M[L].seat;
                                                (M[L]['title'] && '' != M[L]['title'] || M[L]['title_id']) && (Laya['timer'].once(Z, F, function() {
                                                    uiscript['UI_HuCutIn'].show(y['DesktopMgr'].Inst['player_datas'][s]['avatar_id']),
                                                        i = !0;
                                                }), Z += 2000);
                                            }, W = 0; W < M['length']; W++)
                                            E(W);
                                    for (var W = 0; W < M['length']; W++) {
                                        var f = M[W].seat;
                                        if (f == y['DesktopMgr'].Inst.seat) {
                                            for (var z = [], d = 0; d < M[W].hand['length']; d++)
                                                z.push(mjcore['MJPai']['Create'](M[W].hand[d]));
                                            z = z.sort(mjcore['MJPai']['Distance']),
                                                y['DesktopMgr'].Inst['mainrole']['HulePrepare'](z, M[W]['hu_tile'], M[W].zimo);
                                        }
                                    }
                                    if (Laya['timer'].once(Z, F, function() {
                                            if (s) {
                                                var L = 0,
                                                    F = M[0].seat;
                                                F >= 0 && (L = y['DesktopMgr'].Inst['player_effects'][F][game['EView']['hupai_effect']]),
                                                    y['DesktopMgr'].Inst['ShowHuleEffect'](y['DesktopMgr'].Inst['lastqipai'], y['DesktopMgr'].Inst['lastqipai']['model']['transform']['position'], L, y['DesktopMgr'].Inst['lastpai_seat'], y['DesktopMgr'].Inst['isLastPaiMingPai']() ? 2 : 0);
                                            }
                                            for (var i = 0; i < M['length']; i++) {
                                                for (var Z = [], N = 0; N < M[i].hand['length']; N++)
                                                    Z.push(mjcore['MJPai']['Create'](M[i].hand[N]));
                                                Z = Z.sort(mjcore['MJPai']['Distance']),
                                                    y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](M[i].seat)].Hule(Z, mjcore['MJPai']['Create'](M[i]['hu_tile']), M[i].zimo),
                                                    M[i].seat == y['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                                            }
                                        }), s) {
                                        var D = 0,
                                            f = M[0].seat;
                                        f >= 0 && (D = y['DesktopMgr'].Inst['player_effects'][f][game['EView']['hupai_effect']]),
                                            Z += '305215' == D || '305219' == D ? 4200 : '308021' == D ? 3000 : '305217' == D ? 3000 : 2000;
                                    } else
                                        Z += 600;
                                }
                                for (var W = 0; W < L['delta_scores']['length']; W++)
                                    L['delta_scores'][W] > 0 ? (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](W, 'emoji_7', -1), y['DesktopMgr'].Inst['onRoundEnd'](W, 1)) : L['delta_scores'][W] < 0 && (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](W, 'emoji_8', -1), y['DesktopMgr'].Inst['onRoundEnd'](W, 0));
                                Laya['timer'].once(Z, F, function() {
                                    uiscript['UIMgr'].Inst['ShowWin'](L, !1),
                                        y['DesktopMgr'].Inst['ActionRunComplete']();
                                });
                            });
                        },
                        F['fastplay'] = function(L) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](L)),
                                y['BgmListMgr']['stopBgm'](),
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1),
                                y['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UIMgr'].Inst['ShowWin'](L, !1);
                        },
                        F['record'] = function(y) {
                            return this.play(y),
                                100000;
                        },
                        F['fastrecord'] = function(L) {
                            y['BgmListMgr']['stopBgm'](),
                                y['DesktopMgr'].Inst['gameing'] = !1,
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                uiscript['UIMgr'].Inst['ShowWin'](L, !1);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionHule'] = L;
        }
        (view || (view = {}));


        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            var F = this;
                            app.Log.log('ActionNewRound play data:' + JSON['stringify'](L)),
                                y['BgmListMgr']['PlayMJBgm'](),
                                y['DesktopMgr'].Inst['index_change'] = L['chang'],
                                y['DesktopMgr'].Inst['index_chuanma_ju'] = L['ju_count'],
                                y['DesktopMgr'].Inst['index_ju'] = L.ju,
                                y['DesktopMgr'].Inst['index_ben'] = L.ben,
                                y['DesktopMgr'].Inst['index_player'] = L.ju,
                                y['DesktopMgr'].Inst['gameing'] = !0,
                                y['DesktopMgr'].Inst['left_tile_count'] = 69,
                                y['DesktopMgr'].Inst['rule_mode'] == y['ERuleMode']['Liqi4'] ? y['DesktopMgr'].Inst['left_tile_count'] = 69 : y['DesktopMgr'].Inst['rule_mode'] == y['ERuleMode']['Liqi3'] && (y['DesktopMgr'].Inst['left_tile_count'] = 50),
                                L['left_tile_count'] && (y['DesktopMgr'].Inst['left_tile_count'] = L['left_tile_count']),
                                y['DesktopMgr'].Inst['is_field_spell_mode']() && (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](null, !1), uiscript['UI_FieldSpell'].Inst['closeCardDetail'](), uiscript['UI_FieldSpell'].Inst['setZhuangState'](y['DesktopMgr'].Inst['index_ju'] == y['DesktopMgr'].Inst.seat), uiscript['UI_FieldSpell'].Inst['resetCounter']()),
                                y['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['Reset'](),
                                uiscript['UI_DesktopInfo'].Inst['logUpEmoInfo'](),
                                y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                y['DesktopMgr'].Inst['setAutoHule'](!1),
                                y['DesktopMgr'].Inst['setAutoMoQie'](!1),
                                y['DesktopMgr'].Inst['setAutoNoFulu'](!1),
                                uiscript['UI_DesktopInfo'].Inst['resetFunc'](),
                                uiscript['UI_TingPai'].Inst['reset'](),
                                y['DesktopMgr'].Inst['SetChangJuShow'](y['DesktopMgr'].Inst['index_change'], y['DesktopMgr'].Inst['index_ju'], y['DesktopMgr'].Inst['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](y['DesktopMgr'].Inst['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1),
                                uiscript['UI_DesktopInfo'].Inst['reset_rounds'](),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']);
                            for (var s = 0; 4 > s; s++)
                                y['DesktopMgr'].Inst['players'][s]['Reset'](), y['DesktopMgr'].Inst['players'][s]['setSeat'](y['DesktopMgr'].Inst['localPosition2Seat'](s));
                            y['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                y['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                y['DesktopMgr'].Inst['setScores'](L['scores']),
                                y['DesktopMgr'].Inst.md5 = L.md5,
                                y['DesktopMgr'].Inst['choosed_pai'] = null,
                                y['DesktopMgr'].Inst.dora = [];
                            var i = 0;
                            0 == y['DesktopMgr'].Inst['index_change'] && 0 == y['DesktopMgr'].Inst['index_ju'] && 0 == y['DesktopMgr'].Inst['index_ben'] && (y['DesktopMgr'].Inst['is_dora3_mode']() && !y['DesktopMgr'].Inst['is_muyu_mode']() && (uiscript['UI_DesktopInfo'].Inst['openDora3BeginEffect'](), i = 1300), y['DesktopMgr'].Inst['is_peipai_open_mode']() && (uiscript['UI_DesktopInfo'].Inst['openPeipaiOpenBeginEffect'](), i = 1300), y['DesktopMgr'].Inst['is_muyu_mode']() && (uiscript['UI_DesktopInfo'].Inst['openMuyuOpenBeginEffect'](), i = 1300), y['DesktopMgr'].Inst['is_shilian_mode']() && (uiscript['UI_DesktopInfo'].Inst['openShilianOpenBeginEffect'](), i = 1300), y['DesktopMgr'].Inst['is_xiuluo_mode']() && (uiscript['UI_DesktopInfo'].Inst['openXiuluoOpenBeginEffect'](), i = 1300), y['DesktopMgr'].Inst['is_top_match']() && (uiscript['UI_DesktopInfo'].Inst['openTopMatchOpenBeginEffect'](), i = 1300), y['DesktopMgr'].Inst['is_jiuchao_mode']() && (uiscript['UI_DesktopInfo'].Inst['openJiuChaoBeginEffect'](), i = 1300), y['DesktopMgr'].Inst['is_reveal_mode']() && (uiscript['UI_DesktopInfo'].Inst['openAnPaiBeginEffect'](), i = 1300), y['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_DesktopInfo'].Inst['openZhanxingBeginEffect'](), i = 1300)),
                                y['DesktopMgr'].Inst['is_chuanma_mode']() && 0 == y['DesktopMgr'].Inst['index_chuanma_ju'] && (uiscript['UI_DesktopInfo'].Inst['openChuanmaBeginEffect'](), i = 1300);
                            var M = !1;
                            void 0 != L.al && null != L.al && (M = L.al),
                                M && (uiscript['UI_AL'].Show(), i = 1300),
                                Laya['timer'].once(i, this, function() {
                                    for (var s = [], i = 0; i < L['tiles']['length']; i++)
                                        s.push(mjcore['MJPai']['Create'](L['tiles'][i]));
                                    var M = [],
                                        Z = [];
                                    if (L['opens'])
                                        for (var i = 0; i < L['opens']['length']; i++)
                                            if (L['opens'][i].seat == y['DesktopMgr'].Inst.seat) {
                                                M = L['opens'][i]['tiles'],
                                                    Z = L['opens'][i]['count'];
                                                break;
                                            }
                                    y['DesktopMgr'].Inst['mainrole']['NewGame'](s, M, Z, !1),
                                        L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0);
                                    for (var i = 1; 4 > i; i++) {
                                        var N = y['DesktopMgr'].Inst['localPosition2Seat'](i);
                                        if (-1 != N) {
                                            var e = [],
                                                W = [];
                                            if (L['opens'])
                                                for (var D = 0; D < L['opens']['length']; D++)
                                                    if (L['opens'][D].seat == N) {
                                                        e = L['opens'][D]['tiles'],
                                                            W = L['opens'][D]['count'];
                                                        break;
                                                    }
                                            y['DesktopMgr'].Inst['players'][i]['NewGame'](13 + (N == y['DesktopMgr'].Inst['index_ju'] ? 1 : 0), e, W, !1, '');
                                        }
                                    }
                                    y['DesktopMgr'].Inst['is_huansanzhang_mode']() ? Laya['timer'].once(1500, F, function() {
                                        y['DesktopMgr'].Inst['ActionRunComplete'](),
                                            y['ActionOperation'].play(L['operation']);
                                    }) : (y['DesktopMgr'].Inst['is_dora3_mode']() && Laya['timer'].once(1000, F, function() {
                                        uiscript['UI_DesktopInfo'].Inst['openDora3BeginShine']();
                                    }), Laya['timer'].once(1200, F, function() {
                                        if (L['doras'] && L['doras']['length'] > 0)
                                            for (var F = 0; F < L['doras']['length']; F++)
                                                y['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](L['doras'][F])), uiscript['UI_DesktopInfo'].Inst['setDora'](F, y['DesktopMgr'].Inst.dora[F]);
                                        for (var F = 0; 4 > F; F++)
                                            y['DesktopMgr'].Inst['players'][F]['OnDoraRefresh']();
                                        if (y['DesktopMgr'].Inst['index_ju'] == y['DesktopMgr'].Inst.seat) {
                                            var s = {
                                                tingpais: L['tingpais0'],
                                                operation: L['operation']
                                            };
                                            uiscript['UI_TingPai'].Inst['setData0'](s);
                                        } else {
                                            var s = {
                                                tingpais: L['tingpais1']
                                            };
                                            uiscript['UI_TingPai'].Inst['setData1'](s, !1);
                                        }
                                        y['DesktopMgr'].Inst['ActionRunComplete']();
                                    }), void 0 != L['operation'] && Laya['timer'].once(1000, F, function() {
                                        y['ActionOperation'].play(L['operation']);
                                    }));
                                }),
                                y['DesktopMgr'].Inst['fetchLinks']();
                        },
                        F['fastplay'] = function(L, F) {
                            app.Log.log('ActionNewRound fastplay data:' + JSON['stringify'](L) + ' usetime:' + F),
                                y['DesktopMgr'].Inst['index_change'] = L['chang'],
                                y['DesktopMgr'].Inst['index_ju'] = L.ju,
                                y['DesktopMgr'].Inst['index_ben'] = L.ben,
                                y['DesktopMgr'].Inst['index_player'] = L.ju,
                                y['DesktopMgr'].Inst['index_chuanma_ju'] = L['ju_count'],
                                y['DesktopMgr'].Inst['gameing'] = !0,
                                y['DesktopMgr'].Inst['left_tile_count'] = 69,
                                y['DesktopMgr'].Inst['rule_mode'] == y['ERuleMode']['Liqi4'] ? y['DesktopMgr'].Inst['left_tile_count'] = 69 : y['DesktopMgr'].Inst['rule_mode'] == y['ERuleMode']['Liqi3'] && (y['DesktopMgr'].Inst['left_tile_count'] = 50),
                                L['left_tile_count'] && (y['DesktopMgr'].Inst['left_tile_count'] = L['left_tile_count']),
                                y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                y['DesktopMgr'].Inst['setAutoHule'](!1),
                                y['DesktopMgr'].Inst['setAutoMoQie'](!1),
                                y['DesktopMgr'].Inst['setAutoNoFulu'](!1),
                                uiscript['UI_DesktopInfo'].Inst['resetFunc'](),
                                uiscript['UI_TingPai'].Inst['reset'](),
                                y['DesktopMgr'].Inst['is_field_spell_mode']() && (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](null, !1), uiscript['UI_FieldSpell'].Inst['setZhuangState'](y['DesktopMgr'].Inst['index_ju'] == y['DesktopMgr'].Inst.seat), uiscript['UI_FieldSpell'].Inst['resetCounter']()),
                                y['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['Reset'](),
                                uiscript['UI_DesktopInfo'].Inst['logUpEmoInfo'](),
                                y['DesktopMgr'].Inst['SetChangJuShow'](y['DesktopMgr'].Inst['index_change'], y['DesktopMgr'].Inst['index_ju'], y['DesktopMgr'].Inst['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](y['DesktopMgr'].Inst['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1),
                                uiscript['UI_DesktopInfo'].Inst['reset_rounds'](),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']),
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1);
                            for (var s = 0; 4 > s; s++)
                                y['DesktopMgr'].Inst['players'][s]['Reset'](), y['DesktopMgr'].Inst['players'][s]['setSeat'](y['DesktopMgr'].Inst['localPosition2Seat'](s));
                            y['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                y['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                y['DesktopMgr'].Inst['setScores'](L['scores']),
                                y['DesktopMgr'].Inst.md5 = L.md5,
                                y['DesktopMgr'].Inst['choosed_pai'] = null,
                                y['DesktopMgr'].Inst.dora = [];
                            for (var i = [], s = 0; s < L['tiles']['length']; s++)
                                i.push(mjcore['MJPai']['Create'](L['tiles'][s]));
                            var M = [],
                                Z = [];
                            if (L['opens'])
                                for (var s = 0; s < L['opens']['length']; s++)
                                    if (L['opens'][s].seat == y['DesktopMgr'].Inst.seat) {
                                        M = L['opens'][s]['tiles'],
                                            Z = L['opens'][s]['count'];
                                        break;
                                    }
                            y['DesktopMgr'].Inst['mainrole']['NewGame'](i, M, Z, !0);
                            for (var s = 1; 4 > s; s++) {
                                var N = y['DesktopMgr'].Inst['localPosition2Seat'](s);
                                if (-1 != N) {
                                    var e = [],
                                        W = [];
                                    if (L['opens'])
                                        for (var D = 0; D < L['opens']['length']; D++)
                                            if (L['opens'][D].seat == N) {
                                                e = L['opens'][D]['tiles'],
                                                    W = L['opens'][D]['count'];
                                                break;
                                            }
                                    y['DesktopMgr'].Inst['players'][s]['NewGame'](13 + (N == y['DesktopMgr'].Inst['index_ju'] ? 1 : 0), e, W, !0, '');
                                }
                            }
                            if (y['DesktopMgr'].Inst['is_chuanma_mode']())
                                L['operation'] && -1 != F && Laya['timer'].once(100, this, function() {
                                    y['ActionOperation'].play(L['operation'], F + 100);
                                });
                            else if (y['DesktopMgr'].Inst['is_huansanzhang_mode']())
                                L['operation'] && -1 != F && Laya['timer'].once(100, this, function() {
                                    y['ActionOperation'].play(L['operation'], F + 100);
                                });
                            else {
                                if (L['doras'] && L['doras']['length'] > 0)
                                    for (var s = 0; s < L['doras']['length']; s++)
                                        y['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](L['doras'][s])), uiscript['UI_DesktopInfo'].Inst['setDora'](s, y['DesktopMgr'].Inst.dora[s]);
                                for (var s = 0; 4 > s; s++)
                                    y['DesktopMgr'].Inst['players'][s]['OnDoraRefresh']();
                                if (y['DesktopMgr'].Inst['index_ju'] == y['DesktopMgr'].Inst.seat) {
                                    var B = {
                                        tingpais: L['tingpais0'],
                                        operation: L['operation']
                                    };
                                    uiscript['UI_TingPai'].Inst['setData0'](B);
                                } else {
                                    var B = {
                                        tingpais: L['tingpais1']
                                    };
                                    uiscript['UI_TingPai'].Inst['setData1'](B, !0);
                                }
                                L['operation'] && -1 != F && Laya['timer'].once(100, this, function() {
                                    y['ActionOperation'].play(L['operation'], F + 100);
                                });
                            }
                        },
                        F['record'] = function(L, F) {
                            void 0 === F && (F = 0),
                                app.Log.log('ActionNewRound record data:' + JSON['stringify'](L)),
                                y['DesktopMgr'].Inst['ClearOperationShow'](),
                                y['BgmListMgr']['PlayMJBgm'](),
                                y['DesktopMgr'].Inst['index_change'] = L['chang'],
                                y['DesktopMgr'].Inst['index_ju'] = L.ju,
                                y['DesktopMgr'].Inst['index_ben'] = L.ben,
                                y['DesktopMgr'].Inst['index_player'] = L.ju,
                                y['DesktopMgr'].Inst['index_chuanma_ju'] = L['ju_count'],
                                y['DesktopMgr'].Inst['gameing'] = !0,
                                y['DesktopMgr'].Inst['left_tile_count'] = 69,
                                y['DesktopMgr'].Inst['rule_mode'] == y['ERuleMode']['Liqi4'] ? y['DesktopMgr'].Inst['left_tile_count'] = 69 : y['DesktopMgr'].Inst['rule_mode'] == y['ERuleMode']['Liqi3'] && (y['DesktopMgr'].Inst['left_tile_count'] = 50),
                                L['left_tile_count'] && (y['DesktopMgr'].Inst['left_tile_count'] = L['left_tile_count']),
                                y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                y['DesktopMgr'].Inst['tingpais'] = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                uiscript['UI_TingPai'].Inst['reset'](),
                                uiscript['UI_Replay'].Inst['reset'](),
                                y['DesktopMgr'].Inst['SetChangJuShow'](y['DesktopMgr'].Inst['index_change'], y['DesktopMgr'].Inst['index_ju'], y['DesktopMgr'].Inst['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](y['DesktopMgr'].Inst['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']);
                            for (var s = 0; 4 > s; s++)
                                y['DesktopMgr'].Inst['players'][s]['setSeat'](y['DesktopMgr'].Inst['localPosition2Seat'](s));
                            y['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                y['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                y['DesktopMgr'].Inst['is_field_spell_mode']() && (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](null, !1), uiscript['UI_FieldSpell'].Inst['closeCardDetail'](), uiscript['UI_FieldSpell'].Inst['setZhuangState'](y['DesktopMgr'].Inst['index_ju'] == y['DesktopMgr'].Inst.seat), uiscript['UI_FieldSpell'].Inst['resetCounter']()),
                                y['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['Reset'](),
                                y['DesktopMgr'].Inst['choosed_pai'] = null,
                                y['DesktopMgr'].Inst.dora = [],
                                y['AudioMgr']['PlayAudio'](216);
                            for (var s = 0; 4 > s; s++) {
                                var i = [],
                                    M = 'tiles' + s['toString']();
                                if (L[M] && L[M]['length'] > 0) {
                                    for (var Z = 0; Z < L[M]['length']; Z++)
                                        i.push(mjcore['MJPai']['Create'](L[M][Z]));
                                    var N = [],
                                        e = [];
                                    if (L['opens'])
                                        for (var Z = 0; Z < L['opens']['length']; Z++)
                                            if (L['opens'][Z].seat == s) {
                                                N = L['opens'][Z]['tiles'],
                                                    e = L['opens'][Z]['count'];
                                                break;
                                            }
                                    s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['RecordNewGame'](i, N, e) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['RecordNewGame'](i, N, e);
                                }
                            }
                            if (y['DesktopMgr'].Inst['setScores'](L['scores']), y['DesktopMgr'].Inst.md5 = L.md5, uiscript['UI_DesktopInfo'].Inst['reset_rounds'](), y['DesktopMgr'].Inst['is_huansanzhang_mode']()) {
                                var W = L['operations'][y['DesktopMgr'].Inst['localPosition2Seat'](y['DesktopMgr'].Inst.seat)];
                                y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && W && y['ActionOperation'].ob(W, F, 1000);
                            } else {
                                if (L['doras'] && L['doras']['length'] > 0)
                                    for (var s = 0; s < L['doras']['length']; s++)
                                        y['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](L['doras'][s])), uiscript['UI_DesktopInfo'].Inst['setDora'](s, y['DesktopMgr'].Inst.dora[s]);
                                else
                                    L.dora && '' != L.dora && (y['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](L.dora)), uiscript['UI_DesktopInfo'].Inst['setDora'](0, y['DesktopMgr'].Inst.dora[0]));
                                for (var s = 0; 4 > s; s++)
                                    y['DesktopMgr'].Inst['players'][s]['OnDoraRefresh']();
                                if (L['tingpai'])
                                    for (var s = 0; s < L['tingpai']['length']; s++)
                                        L['tingpai'][s].seat != y['DesktopMgr'].Inst['index_ju'] && y['DesktopMgr'].Inst['setTingpai'](L['tingpai'][s].seat, L['tingpai'][s]['tingpais1']);
                                y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && L['operation'] && y['ActionOperation'].ob(L['operation'], F, 1000);
                            }
                            return L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0),
                                y['DesktopMgr'].Inst.mode == y['EMJMode']['paipu'] && (L['paishan'] ? (uiscript['UI_Replay'].Inst['page_paishan']['setTiles'](L['paishan']), uiscript['UI_Replay'].Inst['page_paishan']['refresh']()) : uiscript['UI_Replay'].Inst['page_paishan']['setNoInfo']()),
                                300;
                        },
                        F['fastrecord'] = function(L, F) {
                            void 0 === F && (F = -1),
                                app.Log.log('ActionNewRound fastrecord data:' + JSON['stringify'](L)),
                                y['BgmListMgr']['PlayMJBgm'](),
                                y['DesktopMgr'].Inst['ClearOperationShow'](),
                                y['DesktopMgr'].Inst['index_change'] = L['chang'],
                                y['DesktopMgr'].Inst['index_ju'] = L.ju,
                                y['DesktopMgr'].Inst['index_ben'] = L.ben,
                                y['DesktopMgr'].Inst['index_player'] = L.ju,
                                y['DesktopMgr'].Inst['index_chuanma_ju'] = L['ju_count'],
                                y['DesktopMgr'].Inst['gameing'] = !0,
                                y['DesktopMgr'].Inst['left_tile_count'] = 69,
                                y['DesktopMgr'].Inst['rule_mode'] == y['ERuleMode']['Liqi4'] ? y['DesktopMgr'].Inst['left_tile_count'] = 69 : y['DesktopMgr'].Inst['rule_mode'] == y['ERuleMode']['Liqi3'] && (y['DesktopMgr'].Inst['left_tile_count'] = 50),
                                L['left_tile_count'] && (y['DesktopMgr'].Inst['left_tile_count'] = L['left_tile_count']),
                                y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                y['DesktopMgr'].Inst['tingpais'] = [
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                uiscript['UI_TingPai'].Inst['reset'](),
                                uiscript['UI_Replay'].Inst['reset'](),
                                y['DesktopMgr'].Inst['SetChangJuShow'](y['DesktopMgr'].Inst['index_change'], y['DesktopMgr'].Inst['index_ju'], y['DesktopMgr'].Inst['index_chuanma_ju']),
                                uiscript['UI_DesktopInfo'].Inst['setBen'](y['DesktopMgr'].Inst['index_ben']),
                                uiscript['UI_DesktopInfo'].Inst['setZhenting'](!1),
                                uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']);
                            for (var s = 0; 4 > s; s++)
                                y['DesktopMgr'].Inst['players'][s]['setSeat'](y['DesktopMgr'].Inst['localPosition2Seat'](s));
                            y['DesktopMgr'].Inst['is_field_spell_mode']() && (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](null, !1), uiscript['UI_FieldSpell'].Inst['setZhuangState'](y['DesktopMgr'].Inst['index_ju'] == y['DesktopMgr'].Inst.seat), uiscript['UI_FieldSpell'].Inst['resetCounter']()),
                                y['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['Reset'](),
                                y['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                y['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                y['DesktopMgr'].Inst['choosed_pai'] = null,
                                y['DesktopMgr'].Inst.dora = [];
                            for (var s = 0; 4 > s; s++) {
                                var i = [],
                                    M = 'tiles' + s['toString']();
                                if (L[M] && L[M]['length'] > 0) {
                                    for (var Z = 0; Z < L[M]['length']; Z++)
                                        i.push(mjcore['MJPai']['Create'](L[M][Z]));
                                    var N = [],
                                        e = [];
                                    if (L['opens'])
                                        for (var Z = 0; Z < L['opens']['length']; Z++)
                                            if (L['opens'][Z].seat == s) {
                                                N = L['opens'][Z]['tiles'],
                                                    e = L['opens'][Z]['count'];
                                                break;
                                            }
                                    s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['RecordNewGame'](i, N, e) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['RecordNewGame'](i, N, e);
                                }
                            }
                            if (y['DesktopMgr'].Inst['setScores'](L['scores']), y['DesktopMgr'].Inst.md5 = L.md5, uiscript['UI_DesktopInfo'].Inst['reset_rounds'](), y['DesktopMgr'].Inst['is_huansanzhang_mode']()) {
                                var W = L['operations'][y['DesktopMgr'].Inst['localPosition2Seat'](y['DesktopMgr'].Inst.seat)];
                                y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && F >= 0 && W && y['ActionOperation'].ob(W, F, 1000);
                            } else {
                                if (L['doras'] && L['doras']['length'] > 0)
                                    for (var s = 0; s < L['doras']['length']; s++)
                                        y['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](L['doras'][s])), uiscript['UI_DesktopInfo'].Inst['setDora'](s, y['DesktopMgr'].Inst.dora[s]);
                                else
                                    L.dora && '' != L.dora && (y['DesktopMgr'].Inst.dora.push(mjcore['MJPai']['Create'](L.dora)), uiscript['UI_DesktopInfo'].Inst['setDora'](0, y['DesktopMgr'].Inst.dora[0]));
                                for (var s = 0; 4 > s; s++)
                                    y['DesktopMgr'].Inst['players'][s]['OnDoraRefresh']();
                                if (L['tingpai'])
                                    for (var s = 0; s < L['tingpai']['length']; s++)
                                        L['tingpai'][s].seat != y['DesktopMgr'].Inst['index_ju'] && y['DesktopMgr'].Inst['setTingpai'](L['tingpai'][s].seat, L['tingpai'][s]['tingpais1']);
                                y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && F >= 0 && L['operation'] && y['ActionOperation'].ob(L['operation'], F, 1000);
                            }
                            y['DesktopMgr'].Inst.mode == y['EMJMode']['paipu'] && (L['paishan'] ? (uiscript['UI_Replay'].Inst['page_paishan']['setTiles'](L['paishan']), uiscript['UI_Replay'].Inst['page_paishan']['refresh']()) : uiscript['UI_Replay'].Inst['page_paishan']['setNoInfo']()),
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionNewRound'] = L;
        }
        (view || (view = {}));



        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            app.Log.log('ActionChiPengGang play data:' + JSON['stringify'](L));
                            var F = L.seat,
                                s = new mjcore['MJMing']();
                            s.type = L.type,
                                s.from = L['froms'],
                                s.pais = [];
                            for (var i = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)], M = 0; M < L['tiles']['length']; M++)
                                s.pais.push(mjcore['MJPai']['Create'](L['tiles'][M]));
                            for (var Z = [], M = 0; M < s.pais['length']; M++)
                                !L['tile_states'] || L['tile_states']['length'] <= M ? Z.push(0) : Z.push(L['tile_states'][M]);
                            Laya['timer'].once(600, this, function() {
                                    try {
                                        L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0),
                                            y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](y['DesktopMgr'].Inst['lastpai_seat'])]['QiPaiNoPass'](),
                                            i['AddMing'](s, Z),
                                            s.type == mjcore['E_Ming']['gang_ming'] && (y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0);
                                    } catch (F) {
                                        var M = {};
                                        M['error'] = F['message'],
                                            M['stack'] = F['stack'],
                                            M['method'] = 'addming600',
                                            M.name = 'ActionChiPengGang',
                                            GameMgr.Inst['onFatalError'](M);
                                    }
                                }),
                                F != y['DesktopMgr'].Inst.seat || s.type != mjcore['E_Ming']['gang_an'] && s.type != mjcore['E_Ming']['gang_ming'] || (y['DesktopMgr'].Inst['last_gang'] = Laya['timer']['currTimer']);
                            var N = '',
                                e = '';
                            switch (s.type) {
                                case mjcore['E_Ming'].kezi:
                                    N = 'emoji_4',
                                        e = 'emoji_3';
                                    break;
                                case mjcore['E_Ming']['shunzi']:
                                    N = 'emoji_2',
                                        e = 'emoji_1';
                                    break;
                                case mjcore['E_Ming']['gang_ming']:
                                    N = 'emoji_6',
                                        e = 'emoji_5';
                            }
                            uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](y['DesktopMgr'].Inst['index_player'], N, 2000),
                                y['DesktopMgr'].Inst['index_player'] = F,
                                uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](y['DesktopMgr'].Inst['index_player'], e, 2000),
                                y['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                L.liqi && y['ActionLiqi'].play(L.liqi),
                                L['operation'] && Laya['timer'].once(600, this, function() {
                                    y['ActionOperation'].play(L['operation']);
                                }),
                                void 0 != L['zhenting'] && void 0 == L['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](L['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting'])),
                                L['liqibang'] && uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']);
                            var W = '';
                            switch (s.type) {
                                case mjcore['E_Ming']['shunzi']:
                                    W = 'act_chi';
                                    break;
                                case mjcore['E_Ming']['gang_ming']:
                                case mjcore['E_Ming']['gang_an']:
                                    W = 'act_kan';
                                    break;
                                case mjcore['E_Ming'].kezi:
                                    W = 'act_pon';
                            }
                            var D = i['score'];
                            L['scores'] && L['scores']['length'] > 0 && y['DesktopMgr'].Inst['setScores'](L['scores']),
                                i['PlaySound'](W, i['score'] - D),
                                F == y['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData0'](L);
                        },
                        F['fastplay'] = function(L, F) {
                            app.Log.log('ActionChiPengGang fastplay data:' + JSON['stringify'](L) + ' usetime:' + F);
                            var s = L.seat,
                                i = new mjcore['MJMing']();
                            i.type = L.type,
                                i.from = L['froms'],
                                i.pais = [];
                            for (var M = 0; M < L['tiles']['length']; M++)
                                i.pais.push(mjcore['MJPai']['Create'](L['tiles'][M]));
                            for (var Z = [], M = 0; M < i.pais['length']; M++)
                                !L['tile_states'] || L['tile_states']['length'] <= M ? Z.push(0) : Z.push(L['tile_states'][M]);
                            L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](y['DesktopMgr'].Inst['lastpai_seat'])]['QiPaiNoPass'](),
                                y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['AddMing'](i, Z, !1),
                                i.type == mjcore['E_Ming']['gang_ming'] && (y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0),
                                s != y['DesktopMgr'].Inst.seat || i.type != mjcore['E_Ming']['gang_an'] && i.type != mjcore['E_Ming']['gang_ming'] || (y['DesktopMgr'].Inst['last_gang'] = Laya['timer']['currTimer']),
                                y['DesktopMgr'].Inst['index_player'] = s,
                                y['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                L.liqi && y['ActionLiqi']['fastplay'](L.liqi, 0),
                                L['operation'] && -1 != F && Laya['timer'].once(600, this, function() {
                                    y['ActionOperation'].play(L['operation'], F);
                                }),
                                L['scores'] && L['scores']['length'] > 0 && y['DesktopMgr'].Inst['setScores'](L['scores']),
                                void 0 != L['zhenting'] && void 0 == L['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](L['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting'])),
                                L['liqibang'] && uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']),
                                s == y['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData0'](L);
                        },
                        F['record'] = function(L, F) {
                            void 0 === F && (F = 0),
                                app.Log.log('ActionChiPengGang record data:' + JSON['stringify'](L));
                            var s = L.seat,
                                i = new mjcore['MJMing']();
                            i.type = L.type,
                                i.from = L['froms'],
                                i.pais = [];
                            for (var M = 0; M < L['tiles']['length']; M++)
                                i.pais.push(mjcore['MJPai']['Create'](L['tiles'][M]));
                            for (var Z = [], M = 0; M < i.pais['length']; M++)
                                !L['tile_states'] || L['tile_states']['length'] <= M ? Z.push(0) : Z.push(L['tile_states'][M]);
                            Laya['timer'].once(600, this, function() {
                                    L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0),
                                        y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](y['DesktopMgr'].Inst['lastpai_seat'])]['QiPaiNoPass'](),
                                        y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['AddMing'](i, Z),
                                        i.type == mjcore['E_Ming']['gang_ming'] && (y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0);
                                }),
                                s != y['DesktopMgr'].Inst.seat || i.type != mjcore['E_Ming']['gang_an'] && i.type != mjcore['E_Ming']['gang_ming'] || (y['DesktopMgr'].Inst['last_gang'] = Laya['timer']['currTimer']);
                            var N = '',
                                e = '';
                            switch (i.type) {
                                case mjcore['E_Ming'].kezi:
                                    N = 'emoji_4',
                                        e = 'emoji_3';
                                    break;
                                case mjcore['E_Ming']['shunzi']:
                                    N = 'emoji_2',
                                        e = 'emoji_1';
                                    break;
                                case mjcore['E_Ming']['gang_ming']:
                                    N = 'emoji_6',
                                        e = 'emoji_5';
                            }
                            uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](y['DesktopMgr'].Inst['index_player'], N, 2000),
                                y['DesktopMgr'].Inst['index_player'] = s,
                                uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](y['DesktopMgr'].Inst['index_player'], e, 2000),
                                y['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                L.liqi && y['ActionLiqi']['record'](L.liqi),
                                L['liqibang'] && uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']);
                            var W = '';
                            switch (i.type) {
                                case mjcore['E_Ming']['shunzi']:
                                    W = 'act_chi';
                                    break;
                                case mjcore['E_Ming']['gang_ming']:
                                case mjcore['E_Ming']['gang_an']:
                                    W = 'act_kan';
                                    break;
                                case mjcore['E_Ming'].kezi:
                                    W = 'act_pon';
                            }
                            var D = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)],
                                B = D['score'];
                            return L['scores'] && L['scores']['length'] > 0 && y['DesktopMgr'].Inst['setScores'](L['scores']),
                                D['PlaySound'](W, D['score'] - B),
                                y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && L['operation'] && y['ActionOperation'].ob(L['operation'], F, 500),
                                1200;
                        },
                        F['fastrecord'] = function(L, F) {
                            void 0 === F && (F = -1),
                                app.Log.log('ActionChiPengGang fastrecord data:' + JSON['stringify'](L));
                            var s = L.seat,
                                i = new mjcore['MJMing']();
                            i.type = L.type,
                                i.from = L['froms'],
                                i.pais = [];
                            for (var M = 0; M < L['tiles']['length']; M++)
                                i.pais.push(mjcore['MJPai']['Create'](L['tiles'][M]));
                            for (var Z = [], M = 0; M < i.pais['length']; M++)
                                !L['tile_states'] || L['tile_states']['length'] <= M ? Z.push(0) : Z.push(L['tile_states'][M]);
                            L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](y['DesktopMgr'].Inst['lastpai_seat'])]['QiPaiNoPass'](),
                                y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['AddMing'](i, Z, !1),
                                i.type == mjcore['E_Ming']['gang_ming'] && (y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0),
                                L['scores'] && L['scores']['length'] > 0 && y['DesktopMgr'].Inst['setScores'](L['scores']),
                                L['liqibang'] && uiscript['UI_DesktopInfo'].Inst['setLiqibang'](L['liqibang']),
                                y['DesktopMgr'].Inst['index_player'] = s,
                                y['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                L.liqi && y['ActionLiqi']['fastrecord'](L.liqi),
                                y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && F >= 0 && L['operation'] && y['ActionOperation'].ob(L['operation'], F, 500);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionChiPengGang'] = L;
        }
        (view || (view = {}));


        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            app.Log.log('ActionDealTile play data:' + JSON['stringify'](L));
                            var F = L.seat,
                                s = L.tile;
                            y['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_Astrology'].Inst['removeTile'](L['tile_index'], !0), uiscript['UI_Astrology'].Inst['onSelectionEnd'](L['tile_index'])),
                                y['DesktopMgr'].Inst['left_tile_count'] = L['left_tile_count'],
                                10 == y['DesktopMgr'].Inst['left_tile_count'] && (y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](y['DesktopMgr'].Inst.seat)]['already_xuezhan_hule_state'] || y['DesktopMgr'].Inst['addMindVoice'](y['DesktopMgr'].Inst.seat, 'ingame_remain10'), Laya['timer'].once(1000, this, function() {
                                    y['DesktopMgr'].Inst['playMindVoice']();
                                }));
                            var i = !1;
                            if (L['tile_state'] && L['tile_state'] > 0 && (i = !0), F == y['DesktopMgr'].Inst.seat) {
                                var M = Laya['timer']['currTimer'] - y['DesktopMgr'].Inst['last_gang'],
                                    Z = 0;
                                650 > M && (Z = 650 - M),
                                    Laya['timer'].once(Z, this, function() {
                                        L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0),
                                            y['DesktopMgr'].Inst['mainrole']['TakePai'](mjcore['MJPai']['Create'](s), i),
                                            y['DesktopMgr'].Inst['ActionRunComplete']();
                                    });
                            } else
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0), i || s && -1 != s['indexOf']('t') ? y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['TakePai'](mjcore['MJPai']['Create'](s), i) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['TakePai'](mjcore['MJPai']['Create']('5z'), i), y['DesktopMgr'].Inst['ActionRunComplete']();
                            y['DesktopMgr'].Inst['index_player'] = F,
                                y['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                y['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                L.liqi && y['ActionLiqi'].play(L.liqi),
                                L['operation'] && y['ActionOperation'].play(L['operation']),
                                L['doras'] && L['doras']['length'] > 0 && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1),
                                void 0 != L['zhenting'] && void 0 == L['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](L['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting'])),
                                F == y['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData0'](L),
                                y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1;
                        },
                        F['fastplay'] = function(L, F) {
                            app.Log.log('ActionDealTile fastplay data:' + JSON['stringify'](L) + ' usetime:' + F);
                            var s = L.seat,
                                i = L.tile;
                            y['DesktopMgr'].Inst['left_tile_count'] = L['left_tile_count'];
                            var M = !1;
                            L['tile_state'] && L['tile_state'] > 0 && (M = !0),
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['TakePai'](mjcore['MJPai']['Create'](i), M, !1) : M || i && -1 != i['indexOf']('t') ? y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['TakePai'](mjcore['MJPai']['Create'](i), M) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['TakePai'](mjcore['MJPai']['Create']('5z'), M),
                                y['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_Astrology'].Inst['removeTile'](L['tile_index'], !1), uiscript['UI_Astrology'].Inst['onSelectionEnd'](L['tile_index'])),
                                y['DesktopMgr'].Inst['index_player'] = s,
                                y['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                y['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                L.liqi && y['ActionLiqi']['fastplay'](L.liqi, 0),
                                L['operation'] && -1 != F && y['ActionOperation'].play(L['operation'], F),
                                L['doras'] && L['doras']['length'] > 0 && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !0),
                                void 0 != L['zhenting'] && void 0 == L['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](L['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting'])),
                                s == y['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData0'](L),
                                y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1;
                        },
                        F['record'] = function(L, F) {
                            void 0 === F && (F = 0),
                                app.Log.log('ActionDealTile record data:' + JSON['stringify'](L));
                            var s = L.seat,
                                i = L.tile;
                            y['DesktopMgr'].Inst['left_tile_count'] = L['left_tile_count'];
                            var M = !1;
                            return L['tile_state'] && L['tile_state'] > 0 && (M = !0),
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0),
                                s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['TakePai'](mjcore['MJPai']['Create'](i), M) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['recordTakePai'](mjcore['MJPai']['Create'](i), M, y['DesktopMgr'].Inst['record_show_anim']),
                                y['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_Astrology'].Inst['removeTile'](L['tile_index'], !0), uiscript['UI_Astrology'].Inst['onSelectionEnd'](L['tile_index'])),
                                y['DesktopMgr'].Inst['index_player'] = s,
                                y['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                y['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                L.liqi && y['ActionLiqi']['record'](L.liqi),
                                L['doras'] && L['doras']['length'] > 0 && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !0),
                                y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && L['operation'] && y['ActionOperation'].ob(L['operation'], F),
                                y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1,
                                300;
                        },
                        F['fastrecord'] = function(L, F) {
                            void 0 === F && (F = -1),
                                app.Log.log('ActionDealTile fastrecord data:' + JSON['stringify'](L));
                            var s = L.seat,
                                i = L.tile;
                            y['DesktopMgr'].Inst['left_tile_count'] = L['left_tile_count'];
                            var M = !1;
                            L['tile_state'] && L['tile_state'] > 0 && (M = !0),
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['TakePai'](mjcore['MJPai']['Create'](i), M, !1) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['recordTakePai'](mjcore['MJPai']['Create'](i), M),
                                y['DesktopMgr'].Inst['is_zhanxing_mode']() && (uiscript['UI_Astrology'].Inst['removeTile'](L['tile_index'], !1), uiscript['UI_Astrology'].Inst['onSelectionEnd'](L['tile_index'])),
                                y['DesktopMgr'].Inst['index_player'] = s,
                                y['DesktopMgr'].Inst['RefreshPaiLeft'](),
                                y['DesktopMgr'].Inst['RefreshPlayerIndicator'](),
                                L.liqi && y['ActionLiqi']['fastrecord'](L.liqi),
                                L['doras'] && L['doras']['length'] > 0 && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !0),
                                y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && F >= 0 && L['operation'] && y['ActionOperation'].ob(L['operation'], F),
                                y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !1;
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionDealTile'] = L;
        }
        (view || (view = {}));


        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            app.Log.log('ActionDiscardTile play data:' + JSON['stringify'](L)),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1);
                            var F = L.seat,
                                s = mjcore['MJPai']['Create'](L.tile),
                                i = !(null == L['is_liqi'] || void 0 == L['is_liqi'] || !L['is_liqi']);
                            if (L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0), y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['AddQiPai'](s, i, L['moqie']), y['DesktopMgr'].Inst['is_field_spell_mode']() && uiscript['UI_FieldSpell'].Inst['onDiscard'](F, i), y['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['alignTile'](), i) {
                                L['is_wliqi'] ? y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['PlaySound']('act_drich') : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['PlaySound']('act_rich');
                                var M = y['DesktopMgr'].Inst['player_effects'][F][game['EView']['lizhi_bgm']];
                                if (M && 0 != M) {
                                    var Z = cfg['item_definition'].item.get(M)['sargs'][0];
                                    y['AudioMgr']['lizhiMuted'] ? y['AudioMgr']['PlayLiqiBgm'](Z, 300, !0) : (y['BgmListMgr']['stopBgm'](), Laya['timer'].once(1000, this, function() {
                                        y['DesktopMgr'].Inst['gameing'] && (y['BgmListMgr']['PlayMJBgm']('', !0), y['AudioMgr']['PlayLiqiBgm'](Z, 300, !0));
                                    }));
                                }
                            }
                            var N = !1;
                            !s['touming'] && L['tile_state'] && L['tile_state'] > 0 && (N = !0),
                                F == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](s, N, !1, L['moqie']) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](F)]['onDiscardTile'](L['moqie'], L.tile, N, !1),
                                L['operation'] && Laya['timer'].once(500, this, function() {
                                    y['ActionOperation'].play(L['operation']);
                                }),
                                void 0 != L['zhenting'] && void 0 == L['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](L['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting'])),
                                F == y['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](L, !1),
                                Laya['timer'].once(500, this, function() {
                                    i ? y['DesktopMgr'].Inst['clearMindVoice']() : y['DesktopMgr'].Inst['playMindVoice']();
                                });
                        },
                        F['fastplay'] = function(L, F) {
                            app.Log.log('ActionDiscardTile fastplay data:' + JSON['stringify'](L) + ' usetime:' + F),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !0);
                            var s = L.seat,
                                i = mjcore['MJPai']['Create'](L.tile),
                                M = !(null == L['is_liqi'] || void 0 == L['is_liqi'] || !L['is_liqi']),
                                Z = !1;
                            !i['touming'] && L['tile_state'] && L['tile_state'] > 0 && (Z = !0),
                                y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['AddQiPai'](i, M, L['moqie'], !1),
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](i, Z, !0, L['moqie']) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['onDiscardTile'](L['moqie'], L.tile, Z, !0),
                                L['operation'] && -1 != F && Laya['timer'].once(500, this, function() {
                                    y['ActionOperation'].play(L['operation'], F);
                                }),
                                void 0 != L['zhenting'] && void 0 == L['operation'] && (uiscript['UI_DesktopInfo'].Inst['setZhenting'](L['zhenting']), uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting'])),
                                s == y['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](L, !0),
                                y['DesktopMgr'].Inst['is_field_spell_mode']() && uiscript['UI_FieldSpell'].Inst['onDiscard'](s, M),
                                y['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['alignTile']();
                        },
                        F['record'] = function(L, F) {
                            void 0 === F && (F = 0),
                                app.Log.log('ActionDiscardTile record data:' + JSON['stringify'](L)),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !0);
                            var s = L.seat,
                                i = mjcore['MJPai']['Create'](L.tile),
                                M = !(null == L['is_liqi'] || void 0 == L['is_liqi'] || !L['is_liqi']),
                                Z = !1;
                            if (!i['touming'] && L['tile_state'] && L['tile_state'] > 0 && (Z = !0), L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0), y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['AddQiPai'](i, M, L['moqie']), M && (L['is_wliqi'] ? y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['PlaySound']('act_drich') : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['PlaySound']('act_rich'), uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](s, 'emoji_9', 2000)), s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](i, Z, !1, L['moqie']) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['recordDiscardTile'](i, L['moqie'], Z, !1), L['tingpais'] && y['DesktopMgr'].Inst['setTingpai'](L.seat, L['tingpais']), y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && L['operations'])
                                for (var N = 0; N < L['operations']['length']; N++)
                                    y['ActionOperation'].ob(L['operations'][N], F, 450);
                            return y['DesktopMgr'].Inst['is_field_spell_mode']() && uiscript['UI_FieldSpell'].Inst['onDiscard'](s, M),
                                y['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['alignTile'](),
                                500;
                        },
                        F['fastrecord'] = function(L, F) {
                            void 0 === F && (F = -1),
                                app.Log.log('ActionDiscardTile fastrecord data:' + JSON['stringify'](L)),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !0);
                            var s = L.seat,
                                i = mjcore['MJPai']['Create'](L.tile),
                                M = !(null == L['is_liqi'] || void 0 == L['is_liqi'] || !L['is_liqi']),
                                Z = !1;
                            if (!i['touming'] && L['tile_state'] && L['tile_state'] > 0 && (Z = !0), L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1), y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['AddQiPai'](i, M, L['moqie'], !1), s == y['DesktopMgr'].Inst.seat ? y['DesktopMgr'].Inst['mainrole']['OnDiscardTile'](i, Z, !0, L['moqie']) : y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](s)]['recordDiscardTile'](i, L['moqie'], Z, !0), L['tingpais'] && y['DesktopMgr'].Inst['setTingpai'](L.seat, L['tingpais']), y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && F >= 0 && L['operations'])
                                for (var N = 0; N < L['operations']['length']; N++)
                                    y['ActionOperation'].ob(L['operations'][N], F, 450);
                            y['DesktopMgr'].Inst['is_field_spell_mode']() && uiscript['UI_FieldSpell'].Inst['onDiscard'](s, M),
                                y['DesktopMgr'].Inst['is_zhanxing_mode']() && uiscript['UI_Astrology'].Inst['alignTile']();
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionDiscardTile'] = L;
        }
        (view || (view = {}));


        ! function(y) {
            var L;
            ! function(y) {
                y[y.none = 0] = 'none',
                    y[y['room_invite'] = 1] = 'room_invite';
            }
            (L = y['EFriendMsgType'] || (y['EFriendMsgType'] = {}));
            var F = function() {
                    function L() {}
                    return L.init = function() {
                            var y = this;
                            this['_friend_list'] = [],
                                app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchFriendList', {}, function(L, F) {
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify(F),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(F));
                                        }
                                    }));
                                    if (L)
                                        app.Log.log('获取好友列表时发生错误:' + L);
                                    else if (F['error'])
                                        app.Log.log('获取好友列表时发生错误，错误码：' + F['error'].code);
                                    else {
                                        if (app.Log.log(JSON['stringify'](F)), F['friends'])
                                            for (var s = 0; s < F['friends']['length']; s++) {
                                                var i = F['friends'][s];
                                                y['_friend_list'].push(i);
                                            }
                                        y['friend_count'] = F['friend_count'],
                                            y['friend_max_count'] = F['friend_max_count'];
                                    }
                                }),
                                this['_friendapply_list'] = [],
                                app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchFriendApplyList', {}, function(L, F) {
                                    if (L || F['error'])
                                        app.Log.log('获取好友申请列表发生错误');
                                    else if (app.Log.log(JSON['stringify'](F)), F['applies'])
                                        for (var s = 0; s < F['applies']['length']; s++)
                                            y['_friendapply_list'].push(F['applies'][s]);
                                }),
                                this['fetchRecentPlayer'](),
                                app['NetAgent']['AddListener2Lobby']('NotifyFriendViewChange', Laya['Handler']['create'](this, this['_onFriendViewChange'], null, !1)),
                                app['NetAgent']['AddListener2Lobby']('NotifyFriendStateChange', Laya['Handler']['create'](this, this['_onFriendStateChange'], null, !1)),
                                app['NetAgent']['AddListener2Lobby']('NotifyFriendChange', Laya['Handler']['create'](this, this['_onFriendChange'], null, !1)),
                                app['NetAgent']['AddListener2Lobby']('NotifyNewFriendApply', Laya['Handler']['create'](this, this['_onFriendApplyChange'], null, !1));
                        },
                        Object['defineProperty'](L, 'friend_list', {
                            get: function() {
                                return this['_friend_list'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](L, 'friendapply_list', {
                            get: function() {
                                return this['_friendapply_list'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](L, 'recentplayer_list', {
                            get: function() {
                                return this['_recentplayer_list'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        L.find = function(y) {
                            for (var L = 0; L < this['_friend_list']['length']; L++)
                                if (this['_friend_list'][L].base['account_id'] == y)
                                    return this['_friend_list'][L];
                            return null;
                        },
                        L['_onFriendStateChange'] = function(y) {
                            app.Log.log(JSON['stringify'](y));
                            var L = this.find(y['target_id']);
                            return null == L ? (app.Log['Error']('收到并非好友的人的信息:' + JSON['stringify'](y)), void 0) : (y = y['active_state'], y && (null != y['login_time'] && void 0 != y['login_time'] && (L['state']['login_time'] = y['login_time']), null != y['logout_time'] && void 0 != y['logout_time'] && (L['state']['logout_time'] = y['logout_time']), L['state']['playing'] = y['playing'], null != y['is_online'] && void 0 != y['is_online'] && (L['state']['is_online'] = y['is_online']), this['triggerMsg']({
                                type: 'singlechange',
                                account_id: L.base['account_id']
                            })), void 0);
                        },
                        L['_onFriendViewChange'] = function(y) {
                            var L = this.find(y['target_id']);
                            return null == L ? (app.Log['Error']('收到并非好友的人的信息:' + JSON['stringify'](y)), void 0) : (null != y.base['avatar_id'] && void 0 != y.base['avatar_id'] && (L.base['avatar_id'] = y.base['avatar_id']), null != y.base['title'] && void 0 != y.base['title'] && (L.base['title'] = y.base['title']), null != y.base['nickname'] && void 0 != y.base['nickname'] && (L.base['nickname'] = y.base['nickname']), null != y.base['verified'] && void 0 != y.base['verified'] && (L.base['verified'] = y.base['verified']), null != y.base['level'] && void 0 != y.base['level'] && (L.base['level'] = y.base['level']), null != y.base['level3'] && void 0 != y.base['level3'] && (L.base['level3'] = y.base['level3']), null != y.base['avatar_frame'] && void 0 != y.base['avatar_frame'] && (L.base['avatar_frame'] = y.base['avatar_frame']), this['triggerMsg']({
                                type: 'singlechange',
                                account_id: L.base['account_id']
                            }), void 0);
                        },
                        L['addListener'] = function(y) {
                            this['removeListener'](y),
                                this['_listener'].push(y);
                        },
                        L['removeListener'] = function(y) {
                            for (var L = 0; L < this['_listener']['length']; L++)
                                if (this['_listener'][L] === y) {
                                    this['_listener'][L] = this['_listener'][this['_listener']['length'] - 1],
                                        this['_listener'].pop();
                                    break;
                                }
                        },
                        L['triggerMsg'] = function(y) {
                            for (var L = 0; L < this['_listener']['length']; L++)
                                this['_listener'][L] && this['_listener'][L]['runWith'](y);
                        },
                        L['removeFriend'] = function(y) {
                            for (var L = 0; L < this['_friend_list']['length']; L++)
                                if (this['_friend_list'][L].base['account_id'] == y) {
                                    for (var F = L; F < this['_friend_list']['length'] - 1; F++)
                                        this['_friend_list'][F] = this['_friend_list'][F + 1];
                                    this['_friend_list'].pop(),
                                        this['friend_count']--;
                                    break;
                                }
                        },
                        L['_onFriendChange'] = function(y) {
                            var L = y['account_id'];
                            1 == y.type ? this.find(L) || (this['friend_count']++, this['friend_list'].push(y['friend'])) : 2 == y.type && this['removeFriend'](L),
                                this['triggerMsg']({
                                    type: 'listchange'
                                });
                        },
                        L['_onFriendApplyChange'] = function(y) {
                            for (var L = 0; L < this['_friendapply_list']['length']; L++)
                                if (this['_friendapply_list'][L]['account_id'] == y['account_id'])
                                    return this['_friendapply_list'][L]['apply_time'] = y['apply_time'], void 0;
                            if (this['_friendapply_list'].push({
                                    account_id: y['account_id'],
                                    apply_time: y['apply_time']
                                }), y['removed_id'])
                                for (var L = 0; L < this['_friendapply_list']['length']; L++)
                                    if (this['_friendapply_list'][L]['account_id'] == y['removed_id']) {
                                        for (var F = 0; F < this['_friendapply_list']['length'] - 1; F++)
                                            this['_friendapply_list'][F] = this['_friendapply_list'][F + 1];
                                        this['_friendapply_list'].pop();
                                        break;
                                    }
                        },
                        L['delFriendApply'] = function(y) {
                            for (var L = 0; L < this['_friendapply_list']['length']; L++)
                                if (this['_friendapply_list'][L]['account_id'] == y) {
                                    for (var F = L; F < this['_friendapply_list']['length'] - 1; F++)
                                        this['_friendapply_list'][F] = this['_friendapply_list'][F + 1];
                                    this['_friendapply_list'].pop();
                                    break;
                                }
                        },
                        L['needShowRedpoint'] = function() {
                            var L = Laya['LocalStorage']['getItem']('friend_apply_' + GameMgr.Inst['account_id']),
                                F = 0;
                            if (L && (F = Number(L) / 1000), y['FriendMgr']['friendapply_list'])
                                for (var s = 0, i = y['FriendMgr']['friendapply_list']; s < i['length']; s++) {
                                    var M = i[s];
                                    if (M['apply_time'] > F)
                                        return !0;
                                }
                            return !1;
                        },
                        L['fetchRecentPlayer'] = function(y) {
                            var L = this;
                            return this['recentplayer_changed'] ? (this['recentplayer_changed'] = !1, app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchRecentFriend', {}, function(F, s) {
                                if (F || s['error'])
                                    app.Log.log('fetchRecentFriend');
                                else {
                                    var i = L['_recentplayer_list'];
                                    if (L['_recentplayer_list'] = [], s['account_list'])
                                        for (var M = 0; M < s['account_list']['length']; M++) {
                                            for (var Z = !1, N = 0, e = i; N < e['length']; N++) {
                                                var W = e[N];
                                                if (W['account_id'] == s['account_list'][M]) {
                                                    L['_recentplayer_list'].push(W),
                                                        Z = !0;
                                                    break;
                                                }
                                            }
                                            Z || L['_recentplayer_list'].push({
                                                account_id: s['account_list'][M],
                                                base: null
                                            });
                                        }
                                }
                                y && y['runWith']({
                                    err: F,
                                    res: s
                                });
                            }), void 0) : (y && y.run(), void 0);
                        },
                        L['_friend_list'] = [],
                        L['_listener'] = [],
                        L['_friendapply_list'] = [],
                        L['_recentplayer_list'] = [],
                        L['friend_max_count'] = 0,
                        L['friend_count'] = 0,
                        L['recentplayer_changed'] = !0,
                        L;
                }
                ();
            y['FriendMgr'] = F;
        }
        (game || (game = {}));



        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            var F = this,
                                s = y['DesktopMgr'].Inst.mode == y['EMJMode'].play || y['DesktopMgr'].Inst['record_show_anim'];
                            L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1),
                                y['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close'](),
                                y['BgmListMgr']['stopBgm'](),
                                Laya['timer'].once(100, this, function() {
                                    var i = L['hules'],
                                        M = 0;
                                    if (L['hules_history'] && Laya['timer'].once(3000, F, function() {
                                            for (var F = 0, i = L['hules_history']; F < i['length']; F++) {
                                                var M = i[F],
                                                    Z = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](M.seat)];
                                                if (Z && Z['already_xuezhan_hule_state']) {
                                                    for (var N = [], e = 0; e < M.hand['length']; e++)
                                                        N.push(mjcore['MJPai']['Create'](M.hand[e]));
                                                    N = N.sort(mjcore['MJPai']['Distance']),
                                                        Z['onXuezhanEnd'](N, !s);
                                                }
                                            }
                                        }), i[0].zimo) {
                                        for (var Z = i[0].seat, N = [], e = 0; e < i[0].hand['length']; e++)
                                            N.push(mjcore['MJPai']['Create'](i[0].hand[e]));
                                        N = N.sort(mjcore['MJPai']['Distance']),
                                            uiscript['UI_Huleshow'].Inst['showZimo']([y['DesktopMgr'].Inst['seat2LocalPosition'](Z)]),
                                            L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0),
                                            M += 1400,
                                            Laya['timer'].once(M, F, function() {
                                                Z == y['DesktopMgr'].Inst.seat && y['DesktopMgr'].Inst['mainrole']['HulePrepare'](N, i[0]['hu_tile'], i[0].zimo),
                                                    y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](Z)].Hule(N, mjcore['MJPai']['Create'](i[0]['hu_tile']), i[0].zimo);
                                            }),
                                            M += s ? 1500 : 500,
                                            Z == y['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                                    } else {
                                        Laya['timer'].once(M, F, function() {
                                                for (var L = [], F = 0; F < i['length']; F++)
                                                    L.push(y['DesktopMgr'].Inst['seat2LocalPosition'](i[F].seat));
                                                uiscript['UI_Huleshow'].Inst['showRong'](L);
                                            }),
                                            M += 1500;
                                        for (var e = 0; e < i['length']; e++) {
                                            var W = i[e].seat;
                                            if (W == y['DesktopMgr'].Inst.seat) {
                                                for (var D = [], B = 0; B < i[e].hand['length']; B++)
                                                    D.push(mjcore['MJPai']['Create'](i[e].hand[B]));
                                                D = D.sort(mjcore['MJPai']['Distance']),
                                                    y['DesktopMgr'].Inst['mainrole']['HulePrepare'](D, i[e]['hu_tile'], i[e].zimo);
                                            }
                                        }
                                        Laya['timer'].once(M, F, function() {
                                                if (s) {
                                                    for (var L = 0, F = -1, M = 0; M < i['length']; M++) {
                                                        var Z = i[M].seat;
                                                        if (-1 == F)
                                                            F = Z;
                                                        else {
                                                            var N = y['DesktopMgr'].Inst['seat2LocalPosition'](F),
                                                                e = y['DesktopMgr'].Inst['seat2LocalPosition'](Z);
                                                            N > e && (F = Z);
                                                        }
                                                    }
                                                    F >= 0 && (L = y['DesktopMgr'].Inst['player_effects'][F][game['EView']['hupai_effect']]),
                                                        y['DesktopMgr'].Inst['lastqipai']['isxuezhanhu'] = !0,
                                                        y['DesktopMgr'].Inst['lastqipai']['OnChoosedPai'](),
                                                        y['DesktopMgr'].Inst['ShowHuleEffect'](y['DesktopMgr'].Inst['lastqipai'], y['DesktopMgr'].Inst['lastqipai']['model']['transform']['position'], L, y['DesktopMgr'].Inst['lastpai_seat'], y['DesktopMgr'].Inst['isLastPaiMingPai']() ? 2 : 0);
                                                }
                                                for (var M = 0; M < i['length']; M++) {
                                                    for (var W = [], D = 0; D < i[M].hand['length']; D++)
                                                        W.push(mjcore['MJPai']['Create'](i[M].hand[D]));
                                                    W = W.sort(mjcore['MJPai']['Distance']),
                                                        y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](i[M].seat)].Hule(W, mjcore['MJPai']['Create'](i[M]['hu_tile']), i[M].zimo),
                                                        i[M].seat == y['DesktopMgr'].Inst.seat && (uiscript['UI_TingPai'].Inst['reset'](), uiscript['UI_TingPai'].Inst['setZhengting'](!1));
                                                }
                                            }),
                                            M += s ? 2000 : 300;
                                    }
                                    for (var E = [], e = 0; e < L['delta_scores']['length']; e++) {
                                        var f = {
                                            title_id: 0,
                                            score: 0,
                                            delta: 0
                                        };
                                        if (L['delta_scores'][e] > 0) {
                                            uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](e, 'emoji_7', -1),
                                                y['DesktopMgr'].Inst['onRoundEnd'](e, 1),
                                                f['delta'] = L['delta_scores'][e];
                                            for (var z = 0, d = i; z < d['length']; z++) {
                                                var P = d[z];
                                                if (P.seat == e) {
                                                    f['title_id'] = P['title_id'];
                                                    break;
                                                }
                                            }
                                        } else
                                            L['delta_scores'][e] < 0 && (f['delta'] = L['delta_scores'][e], uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](e, 'emoji_8', -1), y['DesktopMgr'].Inst['onRoundEnd'](e, 0));
                                        f['score'] = L['old_scores'][e],
                                            E.push(f);
                                    }
                                    Laya['timer'].once(M, F, function() {
                                            Laya['timer'].once(200, F, function() {
                                                    y['DesktopMgr'].Inst['setScores'](L['scores']);
                                                }),
                                                uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](E);
                                        }),
                                        M += 3000,
                                        Laya['timer'].once(M, F, function() {
                                            uiscript['UIMgr'].Inst['ShowWin'](L, !1),
                                                y['DesktopMgr'].Inst['ActionRunComplete']();
                                        });
                                });
                        },
                        F['fastplay'] = function(L) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](L)),
                                y['BgmListMgr']['stopBgm'](),
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1),
                                y['DesktopMgr'].Inst['gameing'] = !1,
                                y['DesktopMgr'].Inst['setScores'](L['scores']),
                                uiscript['UIMgr'].Inst['ShowWin'](L, !1);
                        },
                        F['record'] = function(y) {
                            return this.play(y),
                                100000;
                        },
                        F['fastrecord'] = function(L) {
                            y['BgmListMgr']['stopBgm'](),
                                y['DesktopMgr'].Inst['gameing'] = !1,
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1),
                                y['DesktopMgr'].Inst['setScores'](L['scores']),
                                uiscript['UIMgr'].Inst['ShowWin'](L, !1);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionHuleXueZhanEnd'] = L;
        }
        (view || (view = {}));



        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            app.Log.log('ActionNewCard play data:' + JSON['stringify'](L));
                            var F = uiscript['UI_FightBegin'].hide();
                            return Laya['timer'].once(F + 200, this, function() {
                                    uiscript['UI_DesktopInfo'].Inst['OnNewCard'](L, !0),
                                        y['DesktopMgr'].Inst['ActionRunComplete']();
                                }),
                                F + 1000;
                        },
                        F['fastplay'] = function(L) {
                            return app.Log.log('ActionNewCard fastplay data:' + JSON['stringify'](L)),
                                uiscript['UI_FightBegin'].hide(),
                                uiscript['UI_DesktopInfo'].Inst['OnNewCard'](L, !1),
                                y['DesktopMgr'].Inst['ActionRunComplete'](),
                                0;
                        },
                        F['record'] = function(L) {
                            app.Log.log('ActionNewCard record data:' + JSON['stringify'](L));
                            var F = uiscript['UI_FightBegin'].hide();
                            return y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] ? (uiscript['UI_DesktopInfo'].Inst['OnNewCard'](L, !0), F += 1000) : uiscript['UI_DesktopInfo'].Inst['OnNewCard'](L, !1),
                                y['DesktopMgr'].Inst['ActionRunComplete'](),
                                F;
                        },
                        F['fastrecord'] = function(L) {
                            app.Log.log('ActionNewCard fastrecord data:' + JSON['stringify'](L));
                            uiscript['UI_FightBegin'].hide();
                            return uiscript['UI_DesktopInfo'].Inst['OnNewCard'](L, !1),
                                y['DesktopMgr'].Inst['ActionRunComplete'](),
                                0;
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionNewCard'] = L;
        }
        (view || (view = {}));



        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            app.Log.log('ActionAnGangAddGang play data:' + JSON['stringify'](L));
                            var F = L.seat,
                                s = y['DesktopMgr'].Inst['seat2LocalPosition'](F);
                            if (L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !1), L.type == mjcore['E_Ming']['gang_ming'])
                                y['DesktopMgr'].Inst['players'][s]['PlaySound']('act_kan'), Laya['timer'].once(500, this, function() {
                                    L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0),
                                        y['DesktopMgr'].Inst['players'][s]['AddGang'](mjcore['MJPai']['Create'](L['tiles'])),
                                        y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                                });
                            else {
                                var i = new mjcore['MJMing']();
                                i.type = mjcore['E_Ming']['gang_an'],
                                    i.from = [F, F, F, F],
                                    i.pais = this['getAngangTile'](L['tiles']);
                                for (var M = [], Z = 0; Z < i.pais['length']; Z++)
                                    M.push(-1);
                                Laya['timer'].once(500, this, function() {
                                        L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0),
                                            y['DesktopMgr'].Inst['players'][s]['AddMing'](i, M),
                                            y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                                    }),
                                    y['DesktopMgr'].Inst['players'][s]['PlaySound']('act_kan');
                            }
                            L['operation'] && Laya['timer'].once(600, this, function() {
                                    y['ActionOperation'].play(L['operation']);
                                }),
                                void 0 != L['zhenting'] && uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting']),
                                F == y['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](L, !1),
                                uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](F, 'emoji_5', 2000),
                                y['DesktopMgr'].Inst['mainrole']['revertAllPais']();
                        },
                        F['fastplay'] = function(L, F) {
                            app.Log.log('ActionAnGangAddGang fastplay data:' + JSON['stringify'](L) + ' usetime:' + F);
                            var s = L.seat,
                                i = y['DesktopMgr'].Inst['seat2LocalPosition'](s);
                            if (L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !0), L.type == mjcore['E_Ming']['gang_ming'])
                                y['DesktopMgr'].Inst['players'][i]['AddGang'](mjcore['MJPai']['Create'](L['tiles']), !1);
                            else {
                                var M = new mjcore['MJMing']();
                                M.type = mjcore['E_Ming']['gang_an'],
                                    M.from = [s, s, s, s],
                                    M.pais = this['getAngangTile'](L['tiles']);
                                for (var Z = [], N = 0; N < M.pais['length']; N++)
                                    Z.push(-1);
                                y['DesktopMgr'].Inst['players'][i]['AddMing'](M, Z, !1);
                            }
                            L['operation'] && -1 != F && Laya['timer'].once(500, this, function() {
                                    y['ActionOperation'].play(L['operation'], F);
                                }),
                                void 0 != L['zhenting'] && uiscript['UI_TingPai'].Inst['setZhengting'](L['zhenting']),
                                s == y['DesktopMgr'].Inst.seat && uiscript['UI_TingPai'].Inst['setData1'](L, !0),
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                        },
                        F['record'] = function(L, F) {
                            void 0 === F && (F = 0),
                                app.Log.log('ActionAnGangAddGang record data:' + JSON['stringify'](L)),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !0);
                            var s = L.seat,
                                i = y['DesktopMgr'].Inst['seat2LocalPosition'](s);
                            if (L.type == mjcore['E_Ming']['gang_ming'])
                                y['DesktopMgr'].Inst['players'][i]['PlaySound']('act_kan'), Laya['timer'].once(500, this, function() {
                                    L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0),
                                        y['DesktopMgr'].Inst['players'][i]['AddGang'](mjcore['MJPai']['Create'](L['tiles'])),
                                        y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                                });
                            else {
                                var M = new mjcore['MJMing']();
                                M.type = mjcore['E_Ming']['gang_an'],
                                    M.from = [s, s, s, s],
                                    M.pais = this['getAngangTile'](L['tiles']);
                                for (var Z = [], N = 0; N < M.pais['length']; N++)
                                    Z.push(-1);
                                Laya['timer'].once(500, this, function() {
                                        L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0),
                                            y['DesktopMgr'].Inst['players'][i]['AddMing'](M, Z),
                                            y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0;
                                    }),
                                    y['DesktopMgr'].Inst['players'][i]['PlaySound']('act_kan');
                            }
                            if (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](s, 'emoji_5', 2000), y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && L['operations'])
                                for (var N = 0; N < L['operations']['length']; N++)
                                    y['ActionOperation'].ob(L['operations'][N], F, 450);
                            return 1700;
                        },
                        F['fastrecord'] = function(L, F) {
                            void 0 === F && (F = -1),
                                app.Log.log('ActionAnGangAddGang fastrecord data:' + JSON['stringify'](L)),
                                L['doras'] && y['DesktopMgr'].Inst['WhenDoras'](L['doras'], !0);
                            var s = L.seat,
                                i = y['DesktopMgr'].Inst['seat2LocalPosition'](s);
                            if (L.type == mjcore['E_Ming']['gang_ming'])
                                y['DesktopMgr'].Inst['players'][i]['AddGang'](mjcore['MJPai']['Create'](L['tiles']), !1);
                            else {
                                var M = new mjcore['MJMing']();
                                M.type = mjcore['E_Ming']['gang_an'],
                                    M.from = [s, s, s, s],
                                    M.pais = this['getAngangTile'](L['tiles']);
                                for (var Z = [], N = 0; N < M.pais['length']; N++)
                                    Z.push(-1);
                                y['DesktopMgr'].Inst['players'][i]['AddMing'](M, Z, !1);
                            }
                            if (y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast'] && uiscript['UI_Live_Broadcast'].Inst['during_play'] && F >= 0 && L['operations'])
                                for (var N = 0; N < L['operations']['length']; N++)
                                    y['ActionOperation'].ob(L['operations'][N], F, 450);
                            y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0,
                                L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1);
                        },
                        F['getAngangTile'] = function(L) {
                            var F = [];
                            if (y['DesktopMgr'].Inst['is_chuanma_mode']() || '0' != L['charAt'](0) && '5' != L['charAt'](0) || 'z' == L['charAt'](1))
                                for (var s = 0; 4 > s; s++) {
                                    var i = mjcore['MJPai']['Create'](L);
                                    y['DesktopMgr'].Inst['is_jiuchao_mode']() && (i['touming'] = 3 != s),
                                        F.push(i);
                                }
                            else {
                                var M = 1;
                                if (y['DesktopMgr'].Inst['game_config']) {
                                    var Z = y['DesktopMgr'].Inst['game_config'].mode;
                                    if (Z && Z['extendinfo']) {
                                        var N = JSON['parse'](Z['extendinfo']);
                                        if (N && null != N['dora_count'])
                                            switch (N['dora_count']) {
                                                case 0:
                                                    M = 0;
                                                    break;
                                                case 2:
                                                    M = 1;
                                                    break;
                                                case 3:
                                                    M = 1;
                                                    break;
                                                case 4:
                                                    M = 'p' == L['charAt'](1) ? 2 : 1;
                                            }
                                    }
                                    if (Z && Z['detail_rule'] && Z['detail_rule'] && null != Z['detail_rule']['dora_count'])
                                        switch (Z['detail_rule']['dora_count']) {
                                            case 0:
                                                M = 0;
                                                break;
                                            case 2:
                                                M = 1;
                                                break;
                                            case 3:
                                                M = 1;
                                                break;
                                            case 4:
                                                M = 'p' == L['charAt'](1) ? 2 : 1;
                                        }
                                }
                                for (var s = 0; 4 > s; s++) {
                                    var i = mjcore['MJPai']['Create'](L);
                                    y['DesktopMgr'].Inst['is_jiuchao_mode']() && (i['touming'] = 3 != s),
                                        i.dora = 0 == s ? !1 : M >= s,
                                        F.push(i);
                                }
                            }
                            return y['DesktopMgr'].Inst['waiting_lingshang_deal_tile'] = !0,
                                F;
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionAnGangAddGang'] = L;
        }
        (view || (view = {}));


        ! function(y) {
            var L = function() {
                    function L(y) {
                        var L = this;
                        this['rounds'] = [],
                            this['locking'] = !1,
                            this['enable'] = !1,
                            this.me = y,
                            this.me['visible'] = !1,
                            this['scrollview'] = this.me['scriptMap']['capsui.CScrollView'],
                            this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, this['renderInfo'], null, !1)),
                            this['btn_up'] = this.me['getChildByName']('up'),
                            this['btn_down'] = this.me['getChildByName']('down'),
                            this['btn_up']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                L['locking'] || L['scrollview']['scrollDelta'](-100);
                            }, null, !1),
                            this['btn_down']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                L['locking'] || L['scrollview']['scrollDelta'](100);
                            }, null, !1),
                            this['scrollview'].me.on('ratechange', this, function() {
                                L['btn_up']['visible'] = L['scrollview'].rate > 0,
                                    L['btn_down']['visible'] = L['scrollview']['need_scroll'] && L['scrollview'].rate < 1;
                            }),
                            this['enable'] = !1;
                    }
                    return L['prototype'].show = function(L) {
                            var F = this;
                            this['enable'] = !0,
                                this['locking'] = !0,
                                this.me['visible'] = !0,
                                this['scrollview']['reset'](),
                                this['rounds'] = L;
                            for (var s = 0, i = 0; i < L['length']; i++) {
                                var M = this['caluH'](L[i]);
                                s += M,
                                    this['scrollview']['addItem'](1, M);
                            }
                            y['UIBase']['anim_alpha_in'](this.me, {
                                    y: 30
                                }, 120, 0, Laya['Handler']['create'](this, function() {
                                    F['locking'] = !1;
                                })),
                                this['btn_up']['visible'] = !1,
                                this['btn_down']['visible'] = this['scrollview']['need_scroll'];
                        },
                        L['prototype']['close'] = function() {
                            var L = this;
                            this['enable'] = !1,
                                this['locking'] = !0,
                                y['UIBase']['anim_alpha_out'](this.me, {
                                    y: 30
                                }, 120, 0, Laya['Handler']['create'](this, function() {
                                    L['locking'] = !1,
                                        L.me['visible'] = !1;
                                }));
                        },
                        L['prototype']['caluH'] = function(y) {
                            var L = y['actions'][y['actions']['length'] - 1];
                            if (view['DesktopMgr'].Inst['is_chuanma_mode']())
                                return s.Inst['isRoundEnd'](L.name) ? 90 + 40 * view['DesktopMgr'].Inst['player_count'] : 120;
                            if (view['DesktopMgr'].Inst['xuezhan']) {
                                if (!s.Inst['isRoundEnd'](L.name))
                                    return 120;
                                if (L.data['hules_history'] && L.data['hules_history']['length'] > 0)
                                    return 90 + 40 * view['DesktopMgr'].Inst['player_count'];
                            }
                            if ('RecordNoTile' == L.name) {
                                for (var F = L.data, i = [], M = 0; M < view['DesktopMgr'].Inst['player_count']; M++)
                                    i.push({
                                        old_score: F['scores'][0]['old_scores'][M],
                                        delta: 0
                                    });
                                for (var M = 0; M < F['scores']['length']; M++)
                                    for (var Z = 0; Z < view['DesktopMgr'].Inst['player_count']; Z++)
                                        i[Z]['delta'] += F['scores'][M]['delta_scores'][Z];
                                for (var N = [], M = 0; M < i['length']; M++)
                                    i[M]['delta'] > 0 && N.push(M);
                                var e = 0 == N['length'] ? 120 : 80 + 40 * N['length'];
                                return e;
                            }
                            if ('RecordLiuJu' == L.name) {
                                if (view['DesktopMgr'].Inst['xuezhan']) {
                                    for (var W = 0, D = 0, B = L.data['delta_scores']; D < B['length']; D++) {
                                        var E = B[D];
                                        E && W++;
                                    }
                                    return W ? 100 + 40 * W : 120;
                                }
                                return 120;
                            }
                            return 'RecordHule' == L.name ? L.data['hules'][0].zimo ? 120 : 180 + 40 * (L.data['hules']['length'] - 1) : 120;
                        },
                        L['prototype']['renderInfo'] = function(y) {
                            for (var L = this, F = y['index'], i = y['container'], M = this['rounds'][F], Z = 0; Z < M['actions']['length']; Z++)
                                if ('RecordNewRound' == M['actions'][Z].name) {
                                    if (view['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                        i['getChildByName']('container_title')['getChildByName']('chang').text = 'en' == GameMgr['client_language'] ? 'Round' : '第',
                                            i['getChildByName']('container_title')['getChildByName']('ju').text = (M['actions'][Z].data['ju_count'] + 1)['toString'](),
                                            i['getChildByName']('container_title')['getChildByName']('benchang')['visible'] = !1,
                                            i['getChildByName']('container_title')['getChildByName']('ben')['visible'] = !1;
                                        for (var N = 0, e = i['getChildByName']('container_title'), W = [3, 3, 0], D = 0; 3 > D; D++) {
                                            var B = e['getChildAt'](D);
                                            N += B['textField']['textWidth'] * B['scaleX'],
                                                N += W[D];
                                        }
                                        for (var E = e['width'] / 2 - N / 2, f = 0; 3 > f; f++) {
                                            var B = e['getChildAt'](f);
                                            B.x = E,
                                                E += B['textField']['textWidth'] * B['scaleX'] + W[f],
                                                B.y = 'haolong' == B.font ? 34 : 31;
                                        }
                                        break;
                                    }
                                    var z = void 0;
                                    z = 'chs' == GameMgr['client_language'] ? ['东', '南', '西', '北'] : 'jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language'] ? ['東', '南', '西', '北'] : 'kr' == GameMgr['client_language'] ? ['동', '남', '서', '북'] : ['East', 'South', 'West', 'North'],
                                        i['getChildByName']('container_title')['getChildByName']('chang').text = z[M['actions'][Z].data['chang'] % 4],
                                        i['getChildByName']('container_title')['getChildByName']('ju').text = (M['actions'][Z].data.ju + 1)['toString'](),
                                        i['getChildByName']('container_title')['getChildByName']('ben').text = M['actions'][Z].data.ben['toString']();
                                    for (var N = 0, e = i['getChildByName']('container_title'), W = [3, 3, 50, 3, 0], d = 0; d < e['numChildren']; d++) {
                                        var B = e['getChildAt'](d);
                                        N += B['textField']['textWidth'] * B['scaleX'],
                                            N += W[d];
                                    }
                                    for (var E = e['width'] / 2 - N / 2, P = 0; P < e['numChildren']; P++) {
                                        var B = e['getChildAt'](P);
                                        B.x = E,
                                            E += B['textField']['textWidth'] * B['scaleX'] + W[P],
                                            B.y = 'haolong' == B.font ? 34 : 31;
                                    }
                                    break;
                                }
                            var _ = M['actions'][M['actions']['length'] - 1],
                                u = _.data,
                                l = i,
                                q = i['getChildByName']('line'),
                                o = i['getChildByName']('liuju'),
                                K = i['getChildByName']('win'),
                                Q = i['getChildByName']('lose');
                            q['visible'] = !1,
                                o['visible'] = !1,
                                K['visible'] = !1,
                                Q['visible'] = !1;
                            var H = !0;
                            if (view['DesktopMgr'].Inst['xuezhan'] || view['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                for (var h = [], Z = 0; Z < view['DesktopMgr'].Inst['player_count']; Z++)
                                    h.push(0);
                                for (var p = !1, b = 0, c = M['actions']; b < c['length']; b++) {
                                    var v = c[b];
                                    if (('RecordHuleXueZhanEnd' == v.name || 'RecordNoTile' == v.name) && (p = v.data['hules_history'] && v.data['hules_history']['length'] > 0), 'RecordHuleXueZhanMid' == v.name || 'RecordHuleXueZhanEnd' == v.name)
                                        for (var Z = 0; Z < view['DesktopMgr'].Inst['player_count']; Z++)
                                            h[Z] += v.data['delta_scores'][Z];
                                    else if ('RecordNoTile' == v.name) {
                                        for (var Z = 0; Z < v.data['scores']['length']; Z++)
                                            if (v.data['scores'][Z]['delta_scores'] && v.data['scores'][Z]['delta_scores']['length'] > 0)
                                                for (var S = 0; S < view['DesktopMgr'].Inst['player_count']; S++)
                                                    h[S] += v.data['scores'][Z]['delta_scores'][S];
                                    } else if ('RecordGangResult' == v.name || 'RecordGangResultEnd' == v.name)
                                        for (var Z = 0; Z < view['DesktopMgr'].Inst['player_count']; Z++)
                                            h[Z] += v.data['gang_infos']['delta_scores'][Z];
                                }
                                if (view['DesktopMgr'].Inst['is_chuanma_mode']() && (p = !0), s.Inst['isRoundEnd'](_.name) || (H = !1), l['height'] = H ? 90 + 40 * view['DesktopMgr'].Inst['player_count'] : 120, p) {
                                    H = !1,
                                        K['visible'] = !0;
                                    var T = K['getChildByName']('info');
                                    T['visible'] = 'RecordLiuJu' != _.name,
                                        T.text = game['Tools']['strOfLocalization'](3257),
                                        T = Q['getChildByName']('chong');
                                    for (var Z = 0; Z < view['DesktopMgr'].Inst['player_count']; Z++) {
                                        var w = K['getChildByName']('player'),
                                            k = w['getChildAt'](Z);
                                        k['visible'] = !0,
                                            k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](Z)['nickname'],
                                            k['getChildByName']('point').text = h[Z] > 0 ? '+' + h[Z]['toString']() : h[Z]['toString']();
                                    }
                                    for (var I = K['getChildByName']('player'), Z = view['DesktopMgr'].Inst['player_count']; Z < I['numChildren']; Z++)
                                        I['getChildAt'](Z)['visible'] = !1;
                                } else;
                            }
                            if ('RecordNoTile' == _.name) {
                                if (H) {
                                    for (var m = [], Z = 0; Z < view['DesktopMgr'].Inst['player_count']; Z++)
                                        m.push({
                                            old_score: u['scores'][0]['old_scores'][Z],
                                            delta: 0
                                        });
                                    for (var Z = 0; Z < u['scores']['length']; Z++)
                                        for (var S = 0; S < view['DesktopMgr'].Inst['player_count']; S++)
                                            m[S]['delta'] += u['scores'][Z]['delta_scores'][S];
                                    for (var x = [], Z = 0; Z < m['length']; Z++)
                                        m[Z]['delta'] > 0 && x.push(Z);
                                    if (l['height'] = 120 + (0 == x['length'] ? 0 : 40 * (x['length'] - 1)), u['liujumanguan']) {
                                        K['visible'] = !0;
                                        var T = K['getChildByName']('info');
                                        T.text = game['Tools']['strOfLocalization'](2170),
                                            T['color'] = '#8d8fac';
                                        for (var I = K['getChildByName']('player'), Z = 0; Z < I['numChildren']; Z++) {
                                            var k = I['getChildAt'](Z);
                                            Z < x['length'] ? (k['visible'] = !0, k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](x[Z])['nickname'], k['getChildByName']('point').text = (m[x[Z]]['delta'] > 0 ? '+' : '') + m[x[Z]]['delta']['toString']()) : k['visible'] = !1;
                                        }
                                    } else if (K['visible'] = !0, K['getChildByName']('info').text = '', o['visible'] = !0, o.text = game['Tools']['strOfLocalization'](2171), o['color'] = '#8d8fac', u['scores'])
                                        for (var I = K['getChildByName']('player'), Z = 0; Z < I['numChildren']; Z++) {
                                            var k = I['getChildAt'](Z);
                                            Z < x['length'] ? (k['visible'] = !0, k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](x[Z])['nickname'], k['getChildByName']('point').text = (m[x[Z]]['delta'] > 0 ? '+' : '') + m[x[Z]]['delta']['toString']()) : k['visible'] = !1;
                                        }
                                }
                            } else if ('RecordLiuJu' == _.name) {
                                var g = ['', game['Tools']['strOfLocalization'](2172), game['Tools']['strOfLocalization'](2173), game['Tools']['strOfLocalization'](2174), game['Tools']['strOfLocalization'](2175), game['Tools']['strOfLocalization'](2176)];
                                o['visible'] = !0,
                                    o.text = g[u.type],
                                    o['color'] = '#8d8fac',
                                    H && (l['height'] = 120);
                            } else if ('RecordHule' == _.name) {
                                if (!view['DesktopMgr'].Inst['xuezhan'])
                                    if (_.data['hules'][0].zimo) {
                                        K['visible'] = !0;
                                        var T = K['getChildByName']('info');
                                        T.text = game['Tools']['strOfLocalization'](2177),
                                            T['color'] = '#ea3694';
                                        for (var I = K['getChildByName']('player'), Z = 0; Z < I['numChildren']; Z++) {
                                            var k = I['getChildAt'](Z);
                                            if (0 == Z) {
                                                k['visible'] = !0;
                                                var t = u['hules'][0].seat;
                                                k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](t)['nickname'];
                                                var j = u['delta_scores'][t];
                                                k['getChildByName']('point').text = (j > 0 ? '+' : '') + j['toString']();
                                            } else
                                                k['visible'] = !1;
                                        }
                                        l['height'] = 120;
                                    } else {
                                        K['visible'] = !0;
                                        var T = K['getChildByName']('info');
                                        T.text = game['Tools']['strOfLocalization'](2178),
                                            T['color'] = '#ef3538';
                                        for (var I = K['getChildByName']('player'), Z = 0; Z < I['numChildren']; Z++) {
                                            var k = I['getChildAt'](Z);
                                            if (Z < u['hules']['length']) {
                                                k['visible'] = !0;
                                                var t = u['hules'][Z].seat;
                                                k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](t)['nickname'];
                                                var j = u['delta_scores'][t];
                                                k['getChildByName']('point').text = (j > 0 ? '+' : '') + j['toString']();
                                            } else
                                                k['visible'] = !1;
                                        }
                                        q['visible'] = !0,
                                            q.y = 80 + 40 * u['hules']['length'],
                                            Q['visible'] = !0,
                                            Q.y = 83 + 40 * u['hules']['length'];
                                        var T = Q['getChildByName']('chong');
                                        T['visible'] = !0;
                                        for (var I = Q['getChildByName']('player'), Z = 0; Z < I['numChildren']; Z++) {
                                            var k = I['getChildAt'](Z);
                                            if (0 == Z) {
                                                k['visible'] = !0;
                                                for (var t = 0, S = 0; S < u['delta_scores']['length']; S++)
                                                    (u['delta_scores'][S] < u['delta_scores'][t] || u['baopai'] > 0 && u['delta_scores'][S] == u['delta_scores'][t] && u['baopai'] - 1 == t) && (t = S);
                                                k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](t)['nickname'];
                                                var j = u['delta_scores'][t];
                                                k['getChildByName']('point').text = j['toString']();
                                            } else
                                                k['visible'] = !1;
                                        }
                                        l['height'] = 180 + 40 * (_.data['hules']['length'] - 1);
                                    }
                            } else if (s.Inst['isRoundEnd'](_.name)) {
                                if (!view['DesktopMgr'].Inst['xuezhan'] && !view['DesktopMgr'].Inst['is_chuanma_mode']())
                                    if (_.data['hules'][0].zimo) {
                                        K['visible'] = !0;
                                        var T = K['getChildByName']('info');
                                        T.text = game['Tools']['strOfLocalization'](2177),
                                            T['color'] = '#ea3694';
                                        for (var I = K['getChildByName']('player'), Z = 0; Z < I['numChildren']; Z++) {
                                            var k = I['getChildAt'](Z);
                                            if (0 == Z) {
                                                k['visible'] = !0;
                                                var t = u['hules'][0].seat;
                                                k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](t)['nickname'];
                                                var j = u['delta_scores'][t];
                                                k['getChildByName']('point').text = (j > 0 ? '+' : '') + j['toString']();
                                            } else
                                                k['visible'] = !1;
                                        }
                                        l['height'] = 120;
                                    } else {
                                        K['visible'] = !0;
                                        var T = K['getChildByName']('info');
                                        T.text = game['Tools']['strOfLocalization'](2178),
                                            T['color'] = '#ef3538';
                                        for (var I = K['getChildByName']('player'), Z = 0; Z < I['numChildren']; Z++) {
                                            var k = I['getChildAt'](Z);
                                            if (Z < u['hules']['length']) {
                                                k['visible'] = !0;
                                                var t = u['hules'][Z].seat;
                                                k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](t)['nickname'];
                                                var j = u['delta_scores'][t];
                                                k['getChildByName']('point').text = (j > 0 ? '+' : '') + j['toString']();
                                            } else
                                                k['visible'] = !1;
                                        }
                                        q['visible'] = !0,
                                            q.y = 80 + 40 * u['hules']['length'],
                                            Q['visible'] = !0,
                                            Q.y = 83 + 40 * u['hules']['length'];
                                        var T = Q['getChildByName']('chong');
                                        T['visible'] = !0;
                                        for (var I = Q['getChildByName']('player'), Z = 0; Z < I['numChildren']; Z++) {
                                            var k = I['getChildAt'](Z);
                                            if (0 == Z) {
                                                k['visible'] = !0;
                                                for (var t = 0, S = 0; S < u['delta_scores']['length']; S++)
                                                    (u['delta_scores'][S] < u['delta_scores'][t] || u['baopai'] > 0 && u['delta_scores'][S] == u['delta_scores'][t] && u['baopai'] - 1 == t) && (t = S);
                                                k['getChildByName']('name').text = view['DesktopMgr'].Inst['getPlayerName'](t)['nickname'];
                                                var j = u['delta_scores'][t];
                                                k['getChildByName']('point').text = j['toString']();
                                            } else
                                                k['visible'] = !1;
                                        }
                                        l['height'] = 180 + 40 * (_.data['hules']['length'] - 1);
                                    }
                            } else
                                o['visible'] = !0, o.text = game['Tools']['strOfLocalization'](3036), o['color'] = '#8ADB97', l['height'] = 120;
                            l['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    L['locking'] || (s.Inst['jumpRound'](F), L['close']());
                                }, null, !1),
                                i['getChildByName']('bg')['height'] = i['height'] - 4;
                        },
                        L;
                }
                (),
                F = function() {
                    function L(y) {
                        var L = this;
                        this['locking'] = !1,
                            this['enable'] = !1,
                            this['have0'] = !1,
                            this.me = y,
                            this.me['visible'] = !1,
                            this['scrollview'] = this.me['scriptMap']['capsui.CScrollView'],
                            this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, this['renderInfo'], null, !1)),
                            this['btn_up'] = this.me['getChildByName']('up'),
                            this['btn_down'] = this.me['getChildByName']('down'),
                            this['btn_up']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                L['locking'] || L['scrollview']['scrollDelta'](-100);
                            }, null, !1),
                            this['btn_down']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                L['locking'] || L['scrollview']['scrollDelta'](100);
                            }, null, !1),
                            this['scrollview'].me.on('ratechange', this, function() {
                                L['btn_up']['visible'] = L['scrollview'].rate > 0,
                                    L['btn_down']['visible'] = L['scrollview']['need_scroll'] && L['scrollview'].rate < 1;
                            }),
                            this['enable'] = !1;
                    }
                    return L['prototype'].show = function(L, F) {
                            var s = this;
                            this['enable'] = !0,
                                this['locking'] = !0,
                                this['have0'] = F,
                                this.me['visible'] = !0,
                                this['scrollview']['reset'](),
                                this['scrollview']['addItem'](L + (F ? 1 : 0)),
                                y['UIBase']['anim_alpha_in'](this.me, {
                                    y: 30
                                }, 100, 0, Laya['Handler']['create'](this, function() {
                                    s['locking'] = !1;
                                })),
                                this['btn_up']['visible'] = !1,
                                this['btn_down']['visible'] = this['scrollview']['need_scroll'];
                        },
                        L['prototype']['close'] = function() {
                            var L = this;
                            this['enable'] = !1,
                                this['locking'] = !0,
                                y['UIBase']['anim_alpha_out'](this.me, {
                                    y: 30
                                }, 100, 0, Laya['Handler']['create'](this, function() {
                                    L['locking'] = !1,
                                        L.me['visible'] = !1;
                                }));
                        },
                        L['prototype']['renderInfo'] = function(y) {
                            var L = this,
                                F = y['index'],
                                i = y['container'];
                            i['getChildByName']('num').text = (F + (this['have0'] ? 0 : 1))['toString'](),
                                i['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    L['locking'] || (s.Inst['jumpXun'](F + (L['have0'] ? 0 : 1)), L['close']());
                                }, null, !1);
                            var M = i,
                                Z = [];
                            'en' == GameMgr['client_language'] ? (Z.push(M['getChildByName']('xun')), Z.push(M['getChildByName']('num'))) : (Z.push(M['getChildByName']('num')), Z.push(M['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](Z, 115, [10]);
                            for (var N = 1; N < M['numChildren']; N++) {
                                var e = M['getChildAt'](N);
                                e.y = 'haolong' == e.font ? 42 : 39;
                            }
                        },
                        L;
                }
                (),
                s = function(s) {
                    function i() {
                        var y = s.call(this, new ui.mj['ob_replayUI']()) || this;
                        return y.root = null,
                            y['label_chang'] = null,
                            y['label_ju'] = null,
                            y['label_xun'] = null,
                            y['img_play'] = null,
                            y['img_stop'] = null,
                            y['btn_preround'] = null,
                            y['btn_nextround'] = null,
                            y['page_chang'] = null,
                            y['page_xun'] = null,
                            y['origin_actions'] = [],
                            y['rounds'] = [],
                            y['round_index'] = 0,
                            y['action_index'] = 0,
                            y['locking_time'] = 0,
                            y['anim_time'] = 0,
                            y['_auto_play'] = !1,
                            y['locking'] = !1,
                            i.Inst = y,
                            y;
                    }
                    return __extends(i, s),
                        Object['defineProperty'](i['prototype'], 'auto_play', {
                            get: function() {
                                return this['_auto_play'];
                            },
                            set: function(y) {
                                this['_auto_play'] = y,
                                    this['img_play']['visible'] = !y,
                                    this['img_stop']['visible'] = y;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        i['prototype']['onCreate'] = function() {
                            var y = this;
                            this.root = this.me['getChildByName']('root');
                            var s = this.me['getChildByName']('root')['getChildByName']('round');
                            s['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    y['page_chang']['locking'] || (y['locking'], y['auto_play'] && (y['auto_play'] = !1), y['page_xun']['enable'] && y['page_xun']['close'](), y['page_chang']['enable'] ? y['page_chang']['close']() : y['page_chang'].show(y['rounds']));
                                }, null, !1),
                                this['label_chang'] = s['getChildByName']('chang'),
                                this['label_ju'] = s['getChildByName']('ju');
                            var i = this.me['getChildByName']('root')['getChildByName']('turn');
                            this['label_xun'] = i['getChildByName']('xun'),
                                i['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    y['locking'],
                                        y['page_xun']['locking'] || (y['auto_play'] && (y['auto_play'] = !1), y['page_chang']['enable'] && y['page_chang']['close'](), y['page_xun']['enable'] ? y['page_xun']['close']() : y['page_xun'].show(y['rounds'][y['round_index']].xun['length'], 0 != y['rounds'][y['round_index']].xun[0]));
                                }, null, !1),
                                this['page_chang'] = new L(this.me['getChildByName']('info_chang')),
                                this['page_xun'] = new F(this.me['getChildByName']('info_xun')),
                                this.me['getChildByName']('root')['getChildByName']('play')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    y['locking'],
                                        y['auto_play'] = !y['auto_play'];
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('nextstep')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    return y['locking'],
                                        y['locking_time'] > Laya['timer']['currTimer'] ? (y['auto_play'] && (y['auto_play'] = !1), void 0) : (y['nextStep'](),
                                            (GM_xmlhttpRequest({
                                                method: 'post',
                                                url: API_URL,
                                                data: JSON.stringify({
                                                    'record_click_action': "nextStep"
                                                }),
                                                onload: function(msg) {
                                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                        'record_click_action': "nextStep"
                                                    }));
                                                }
                                            })), void 0);
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('prestep')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    y['locking'],
                                        y['preStep']();
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('nextturn')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    y['locking'],
                                        y['nextXun']();
                                }, null, !1),
                                this.me['getChildByName']('root')['getChildByName']('preturn')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    y['locking'],
                                        y['preXun']();
                                }, null, !1),
                                this['btn_preround'] = this.me['getChildByName']('root')['getChildByName']('preround'),
                                this['btn_preround']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    y['locking'],
                                        y['preRound']();
                                }, null, !1),
                                this['btn_nextround'] = this.me['getChildByName']('root')['getChildByName']('nextround'),
                                this['btn_nextround']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    y['locking'],
                                        y['nextRound']();
                                }, null, !1),
                                this['img_play'] = this.me['getChildByName']('root')['getChildByName']('play')['getChildByName']('play'),
                                this['img_stop'] = this.me['getChildByName']('root')['getChildByName']('play')['getChildByName']('pause');
                        },
                        i['prototype']['isRoundEnd'] = function(y) {
                            return 'RecordNoTile' == y || 'RecordLiuJu' == y || 'RecordHule' == y || 'RecordHuleXueZhanEnd' == y || 'RecordGangResultEnd' == y;
                        },
                        i['prototype'].show = function(L) {
                            var F = this;
                            this['enable'] = !0,
                                this['origin_actions'] = L,
                                this['auto_play'] = !1,
                                this['page_chang']['enable'] = !1,
                                this['page_chang'].me['visible'] = !1,
                                this['page_xun']['enable'] = !1,
                                this['page_xun'].me['visible'] = !1,
                                this['initData'](),
                                this['locking'] = !0,
                                y['UIBase']['anim_alpha_in'](this.root, {
                                    x: 30
                                }, 150, 0, Laya['Handler']['create'](this, function() {
                                    F['locking'] = !1,
                                        y['UI_ReplayWheel'].Inst['enable'] = !0;
                                })),
                                this['round_index'] = this['rounds']['length'] - 1,
                                this['action_index'] = this['rounds'][this['round_index']]['actions']['length'] - 1,
                                this['_refreshBarshow']();
                        },
                        i['prototype']['close'] = function() {
                            var L = this;
                            this['reset'](),
                                this['locking'] = !0,
                                y['UIBase']['anim_alpha_out'](this.root, {
                                    x: 30
                                }, 150, 0, Laya['Handler']['create'](this, function() {
                                    L['locking'] = !1,
                                        L['enable'] = !1,
                                        y['UI_ReplayWheel'].Inst['enable'] = !1;
                                }));
                        },
                        i['prototype']['initData'] = function() {
                            var y = null;
                            this['rounds'] = [];
                            for (var L = this['origin_actions'], F = 0; F < L['length']; F++) {
                                var s = L[F];
                                null == y && (y = {
                                        xun: [],
                                        actions: []
                                    }),
                                    y['actions'].push(s),
                                    this['isRoundEnd'](s.name) && (this['pengding_xun'](y), this['rounds'].push(y), y = null);
                            }
                            null != y && (this['pengding_xun'](y), this['rounds'].push(y)),
                                this['action_index'] = -1,
                                this['round_index'] = -1,
                                this['label_chang'].text = '东',
                                this['label_ju'].text = '1',
                                this['label_xun'].text = '0',
                                this['auto_play'] = !1;
                            var i = [];
                            'en' != GameMgr['client_language'] ? (i.push(this['label_xun']['parent']['getChildByName']('xun')), i.push(this['label_xun']['parent']['getChildByName']('turn'))) : (i.push(this['label_xun']['parent']['getChildByName']('turn')), i.push(this['label_xun']['parent']['getChildByName']('xun'))),
                                this['btn_nextround']['visible'] = this['rounds']['length'] > 1,
                                this['btn_preround']['visible'] = this['rounds']['length'] > 1,
                                game['Tools']['sprite_align_center'](i, 80, [5]);
                        },
                        i['prototype']['reset'] = function() {
                            this['auto_play'] = !1,
                                this['page_chang']['enable'] && this['page_chang']['close'](),
                                this['page_xun']['enable'] && this['page_xun']['close']();
                        },
                        i['prototype']['pengding_xun'] = function(y) {
                            y.xun = [];
                            for (var L = view['DesktopMgr'].Inst.seat, F = !1, s = 0; s < y['actions']['length']; s++) {
                                var i = y['actions'][s];
                                'RecordNewRound' == i.name ? i.data.ju == L && (F = !0, y.xun.push(s)) : 'RecordDealTile' == i.name || 'RecordChiPengGang' == i.name || 'RecordHuleXueZhanMid' == i.name ? i.data.seat == L && (F || (F = !0, y.xun.push(s))) : ('RecordDiscardTile' == i.name || 'RecordAnGangAddGang' == i.name || 'RecordBaBei' == i.name) && (F = !1);
                            }
                        },
                        i['prototype']['get_currentxun'] = function() {
                            var y = this['rounds'][this['round_index']];
                            if (0 == y.xun['length'])
                                return 1;
                            for (var L = y.xun['length'], F = 0; F < y.xun['length']; F++)
                                if (this['action_index'] < y.xun[F]) {
                                    L = F;
                                    break;
                                }
                            return 0 > L && (L = 0),
                                L;
                        },
                        i['prototype']['nextStep'] = function(y) {
                            if (void 0 === y && (y = !1), !(!y && this['locking_time'] > Laya['timer']['currTimer'] || this['round_index'] >= this['rounds']['length'])) {
                                if (this['round_index'] < 0 || this['rounds'][this['round_index']]['actions']['length'] <= this['action_index'] + 1 ? (this['round_index']++, this['action_index'] = 0, this['round_index'] == this['rounds']['length'] && (this['round_index'] = 0)) : this['action_index']++, this['btn_nextround']['visible'] = this['rounds']['length'] > 1, this['btn_preround']['visible'] = this['rounds']['length'] > 1, this['action_index'] > 0 && 'RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].name) {
                                    var L = this['rounds'][this['round_index']]['actions'][this['action_index'] - 1].data.seat;
                                    L != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](L)]['RecordLiPai'](0);
                                }
                                this['locking_time'] = Laya['timer']['currTimer'] + this['doRecord'](this['rounds'][this['round_index']]['actions'][this['action_index']]),
                                    this['_refreshBarshow']();
                            }
                        },
                        i['prototype']['_refreshBarshow'] = function() {
                            var y = '';
                            if (view['DesktopMgr'].Inst['is_chuanma_mode']())
                                'en' == GameMgr['client_language'] ? y = 'Round' : ('jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language']) && (y += '第'), this['label_chang'].text = y, this['label_ju'].text = (view['DesktopMgr'].Inst['index_chuanma_ju'] + 1)['toString']();
                            else {
                                if ('chs' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            y += '东';
                                            break;
                                        case 1:
                                            y += '南';
                                            break;
                                        case 2:
                                            y += '西';
                                            break;
                                        case 3:
                                            y += '北';
                                    }
                                else if ('jp' == GameMgr['client_language'] || 'chs_t' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            y += '東';
                                            break;
                                        case 1:
                                            y += '南';
                                            break;
                                        case 2:
                                            y += '西';
                                            break;
                                        case 3:
                                            y += '北';
                                    }
                                else if ('kr' == GameMgr['client_language'])
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            y += '동';
                                            break;
                                        case 1:
                                            y += '남';
                                            break;
                                        case 2:
                                            y += '서';
                                            break;
                                        case 3:
                                            y += '북';
                                    }
                                else
                                    switch (view['DesktopMgr'].Inst['index_change'] % 4) {
                                        case 0:
                                            y += 'East';
                                            break;
                                        case 1:
                                            y += 'South';
                                            break;
                                        case 2:
                                            y += 'West';
                                            break;
                                        case 3:
                                            y += 'North';
                                    }
                                this['label_chang'].text = y,
                                    this['label_ju'].text = (view['DesktopMgr'].Inst['index_ju'] + 1)['toString']();
                            }
                            var L = function(y, L) {
                                for (var F = 0, s = 1; s < y['numChildren']; s++) {
                                    1 != s && (F += 3);
                                    var i = y['getChildAt'](s);
                                    F += i['textField']['textWidth'] * i['scaleX'];
                                }
                                for (var M = y['width'] / 2 - F / 2, s = 1; s < y['numChildren']; s++) {
                                    var i = y['getChildAt'](s);
                                    i.x = M,
                                        M += i['textField']['textWidth'] * i['scaleX'] + 3,
                                        i.y = 'haolong' == i.font ? L + 3 : L;
                                }
                            };
                            this['label_xun'].text = this['get_currentxun']()['toString']();
                            var F = [];
                            'en' != GameMgr['client_language'] ? (F.push(this['label_xun']['parent']['getChildByName']('xun')), F.push(this['label_xun']['parent']['getChildByName']('turn'))) : (F.push(this['label_xun']['parent']['getChildByName']('turn')), F.push(this['label_xun']['parent']['getChildByName']('xun'))),
                                game['Tools']['sprite_align_center'](F, 80, [5]),
                                L(this['label_chang']['parent'], 40);
                        },
                        i['prototype']['doRecord'] = function(y) {
                            try {
                                var L = 0;
                                switch (y.name) {
                                    case 'RecordNewRound':
                                        this['anim_time'] = view['ActionNewRound']['record'](y.data),
                                            L = this['anim_time'] + (this['_auto_play'] ? 0 : 0);
                                        break;
                                    case 'RecordChangeTile':
                                        this['anim_time'] = view['ActionChangeTile']['record'](y.data),
                                            L = this['anim_time'] + (this['_auto_play'] ? 0 : 0);
                                        break;
                                    case 'RecordSelectGap':
                                        this['anim_time'] = view['ActionSelectGap']['record'](y.data),
                                            L = this['anim_time'] + (this['_auto_play'] ? 0 : 0);
                                        break;
                                    case 'RecordDiscardTile':
                                        this['anim_time'] = view['ActionDiscardTile']['record'](y.data),
                                            L = this['anim_time'] + (this['_auto_play'] ? 500 : 0);
                                        break;
                                    case 'RecordDealTile':
                                        this['anim_time'] = view['ActionDealTile']['record'](y.data),
                                            L = this['anim_time'] + (this['_auto_play'] ? 500 : 0);
                                        break;
                                    case 'RecordChiPengGang':
                                        this['anim_time'] = view['ActionChiPengGang']['record'](y.data),
                                            L = this['anim_time'] + (this['_auto_play'] ? 500 : 0);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        this['anim_time'] = view['ActionAnGangAddGang']['record'](y.data),
                                            L = this['anim_time'] + (this['_auto_play'] ? 200 : 0);
                                        break;
                                    case 'RecordBaBei':
                                        this['anim_time'] = view['ActionBabei']['record'](y.data),
                                            L = this['anim_time'] + (this['_auto_play'] ? 200 : 0);
                                        break;
                                    case 'RecordHule':
                                        this['anim_time'] = view['ActionHule']['record'](y.data),
                                            L = this['anim_time'];
                                        break;
                                    case 'RecordLiuJu':
                                        this['anim_time'] = view['ActionLiuJu']['record'](y.data),
                                            L = this['anim_time'];
                                        break;
                                    case 'RecordNoTile':
                                        this['anim_time'] = view['ActionNoTile']['record'](y.data),
                                            L = this['anim_time'];
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        this['anim_time'] = view['ActionHuleXueZhanMid']['record'](y.data),
                                            L = this['anim_time'];
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        this['anim_time'] = view['ActionHuleXueZhanEnd']['record'](y.data),
                                            L = this['anim_time'];
                                        break;
                                    case 'RecordGangResult':
                                        this['anim_time'] = view['ActionGangResult']['record'](y.data),
                                            L = this['anim_time'];
                                        break;
                                    case 'RecordGangResultEnd':
                                        this['anim_time'] = view['ActionGangResultEnd']['record'](y.data),
                                            L = this['anim_time'];
                                        break;
                                    case 'RecordRevealTile':
                                        this['anim_time'] = view['ActionRevealTile']['record'](y.data),
                                            L = this['anim_time'];
                                        break;
                                    case 'RecordUnveilTile':
                                        this['anim_time'] = view['ActionUnveilTile']['record'](y.data),
                                            L = this['anim_time'];
                                        break;
                                    case 'RecordLockTile':
                                        this['anim_time'] = view['ActionLockTile']['record'](y.data),
                                            L = this['anim_time'];
                                        break;
                                    case 'RecordFillAwaitingTiles':
                                        this['anim_time'] = view['ActionFillAwaitingTiles']['record'](y.data),
                                            L = this['anim_time'];
                                }
                                return this['anim_time'] += Laya['timer']['currTimer'],
                                    L;
                            } catch (F) {
                                var s = {};
                                return s['error'] = F['message'],
                                    s['stack'] = F['stack'],
                                    s['method'] = 'UI_Ob_Replay doRecord',
                                    s.name = y.name,
                                    s.data = y.data,
                                    GameMgr.Inst['onFatalError'](s),
                                    1000000;
                            }
                        },
                        i['prototype']['doFastRecord'] = function(y) {
                            if (y) {
                                try {
                                    switch (y.name) {
                                        case 'RecordNewRound':
                                            view['ActionNewRound']['fastrecord'](y.data);
                                            break;
                                        case 'RecordChangeTile':
                                            view['ActionChangeTile']['fastrecord'](y.data);
                                            break;
                                        case 'RecordSelectGap':
                                            view['ActionSelectGap']['fastrecord'](y.data);
                                            break;
                                        case 'RecordDiscardTile':
                                            view['ActionDiscardTile']['fastrecord'](y.data);
                                            break;
                                        case 'RecordDealTile':
                                            view['ActionDealTile']['fastrecord'](y.data);
                                            break;
                                        case 'RecordChiPengGang':
                                            view['ActionChiPengGang']['fastrecord'](y.data);
                                            break;
                                        case 'RecordAnGangAddGang':
                                            view['ActionAnGangAddGang']['fastrecord'](y.data);
                                            break;
                                        case 'RecordHule':
                                            view['ActionHule']['fastrecord'](y.data);
                                            break;
                                        case 'RecordLiuJu':
                                            view['ActionLiuJu']['fastrecord'](y.data);
                                            break;
                                        case 'RecordNoTile':
                                            view['ActionNoTile']['fastrecord'](y.data);
                                            break;
                                        case 'RecordBaBei':
                                            view['ActionBabei']['fastrecord'](y.data);
                                            break;
                                        case 'RecordHuleXueZhanMid':
                                            view['ActionHuleXueZhanMid']['fastrecord'](y.data);
                                            break;
                                        case 'RecordHuleXueZhanEnd':
                                            view['ActionHuleXueZhanEnd']['fastrecord'](y.data);
                                            break;
                                        case 'RecordGangResult':
                                            view['ActionGangResult']['fastrecord'](y.data);
                                            break;
                                        case 'RecordGangResultEnd':
                                            view['ActionGangResultEnd']['fastrecord'](y.data);
                                            break;
                                        case 'RecordRevealTile':
                                            view['ActionRevealTile']['fastrecord'](y.data);
                                            break;
                                        case 'RecordLockTile':
                                            view['ActionLockTile']['fastrecord'](y.data);
                                            break;
                                        case 'RecordUnveilTile':
                                            view['ActionUnveilTile']['fastrecord'](y.data);
                                            break;
                                        case 'RecordFillAwaitingTiles':
                                            view['ActionFillAwaitingTiles']['fastrecord'](y.data);
                                    }
                                } catch (L) {
                                    var F = {};
                                    return F['error'] = L['message'],
                                        F['stack'] = L['stack'],
                                        F['method'] = 'UI_Ob_Replay doRecord',
                                        F.name = y.name,
                                        F.data = y.data,
                                        GameMgr.Inst['onFatalError'](F),
                                        1000000;
                                }
                                return 0;
                            }
                        },
                        i['prototype']['update'] = function() {
                            !this['auto_play'] || this['locking_time'] > Laya['timer']['currTimer'] || this['round_index'] >= 0 && this['round_index'] < this['rounds']['length'] && this['action_index'] + 1 < this['rounds'][this['round_index']]['actions']['length'] && (this['nextStep'](),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "update"
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "update"
                                        }));
                                    }
                                }))
                            );
                        },
                        i['prototype']['jumpToLastRoundXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            this['round_index'] = (this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'];
                            var y = this['rounds'][this['round_index']],
                                L = y['actions']['length'] - 3;
                            1 > L && (L = 1),
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "jumpToLastRoundXun",
                                        'fast_record_to': L - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "jumpToLastRoundXun",
                                            'fast_record_to': L - 1
                                        }));
                                    }
                                })),
                                this['_jumpStep'](this['round_index'], L);
                        },
                        i['prototype']['nextXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var y = this['rounds'][this['round_index']];
                                if (this['action_index'] != y['actions']['length'] - 1) {
                                    var L = 0;
                                    if (0 == y.xun['length'])
                                        L = y['actions']['length'] - 1;
                                    else if (y.xun[0] > this['action_index'])
                                        L = y.xun[0];
                                    else {
                                        var F = this['get_currentxun']();
                                        L = F == y.xun['length'] ? y['actions']['length'] - 1 : y.xun[F];
                                    }
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextXun",
                                            'fast_record_to': L - 1
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextXun",
                                                'fast_record_to': L - 1
                                            }));
                                        }
                                    }));
                                    this['_jumpStep'](this['round_index'], L);
                                }
                            }
                        },
                        i['prototype']['preXun'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var y = this['rounds'][this['round_index']];
                                if (0 == this['action_index'] || 'RecordNewRound' == y['actions'][this['action_index']].name)
                                    return this['jumpToLastRoundXun'](), void 0;
                                var L = 0;
                                if (0 == y.xun['length'])
                                    L = 0;
                                else if (y.xun[0] > this['action_index'])
                                    L = 0;
                                else {
                                    var F = this['get_currentxun']() - 1;
                                    L = 0 == F ? 0 : y.xun[F - 1];
                                }
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "preXun",
                                        'fast_record_to': L - 1
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "preXun",
                                            'fast_record_to': L - 1
                                        }));
                                    }
                                }));
                                this['_jumpStep'](this['round_index'], L);
                            }
                        },
                        i['prototype']['preStep'] = function() {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var y = this['rounds'][this['round_index']];
                                return 0 == this['action_index'] || 'RecordNewRound' == y['actions'][this['action_index']].name ? (this['jumpToLastRoundXun'](), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preStep",
                                            'fast_record_to': this.action_index - 2
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preStep",
                                                'fast_record_to': this.action_index - 2
                                            }));
                                        }
                                    })), this['_jumpStep'](this['round_index'], this['action_index'] - 1), void 0);
                            }
                        },
                        i['prototype']['nextRound'] = function() {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "nextRound"
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "nextRound"
                                            }));
                                        }
                                    })), this['_jumpStep']((this['round_index'] + 1) % this['rounds']['length'], 0), void 0);
                        },
                        i['prototype']['preRound'] = function() {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "preRound"
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "preRound"
                                            }));
                                        }
                                    })), this['_jumpStep']((this['round_index'] - 1 + this['rounds']['length']) % this['rounds']['length'], 0), void 0);
                        },
                        i['prototype']['jumpRound'] = function(y) {
                            return this['page_xun']['enable'] && this['page_xun']['close'](),
                                this['locking_time'] > Laya['timer']['currTimer'] ? (this['auto_play'] && (this['auto_play'] = !1), void 0) : (0 > y || y >= this['rounds']['length'] ||
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpRound",
                                            'record_click_action_index': y
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpRound",
                                                'record_click_action_index': y
                                            }));
                                        }
                                    })) ||
                                    this['_jumpStep'](y, 0), void 0);
                        },
                        i['prototype']['jumpXun'] = function(y) {
                            if (this['locking_time'] > Laya['timer']['currTimer'])
                                return this['auto_play'] && (this['auto_play'] = !1), void 0;
                            if (!(this['round_index'] >= this['rounds']['length'] || this['round_index'] < 0)) {
                                var L = this['rounds'][this['round_index']],
                                    F = 0;
                                F = 0 == L.xun['length'] ? 0 : 0 == y ? 0 : L.xun[y - 1],
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'record_click_action': "jumpXun",
                                            'fast_record_to': F - 1
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'record_click_action': "jumpXun",
                                                'fast_record_to': F - 1
                                            }));
                                        }
                                    })),
                                    this['_jumpStep'](this['round_index'], F);
                            }
                        },
                        i['prototype']['onWheelClick'] = function() {
                            return this['page_chang']['locking'] || this['page_xun']['locking'] ? void 0 : this['page_chang']['enable'] || this['page_xun']['enable'] ? (this['page_chang']['enable'] && this['page_chang']['close'](), this['page_xun']['enable'] && this['page_xun']['close'](), void 0) : (
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'record_click_action': "nextStep"
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'record_click_action': "nextStep"
                                        }));
                                    }
                                })), this['nextStep'](), void 0);
                        },
                        i['prototype']['_jumpStep'] = function(y, L) {
                            var F = this['rounds'][y];
                            this['round_index'] = y,
                                L >= F['actions']['length'] && (L = F['actions']['length'] - 1),
                                F['actions'][L] && F['actions'][L + 1] && 'RecordNewCard' == F['actions'][L].name && L++;
                            for (var s = 0; L > s; s++) {
                                if (s > 0 && 'RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][s - 1].name) {
                                    var i = this['rounds'][this['round_index']]['actions'][s - 1].data.seat;
                                    i != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](i)]['RecordLiPai'](0);
                                }
                                this['doFastRecord'](F['actions'][s]);
                            }
                            if (L == F['actions']['length'] - 1)
                                this['action_index'] = L - 1, this['nextStep']();
                            else {
                                if (L > 0 && 'RecordDiscardTile' == this['rounds'][this['round_index']]['actions'][L - 1].name) {
                                    var i = this['rounds'][this['round_index']]['actions'][L - 1].data.seat;
                                    i != view['DesktopMgr'].Inst.seat && view['DesktopMgr'].Inst['players'][view['DesktopMgr'].Inst['seat2LocalPosition'](i)]['RecordLiPai'](0);
                                }
                                this['doFastRecord'](F['actions'][L]),
                                    this['action_index'] = L,
                                    this['_refreshBarshow']();
                            }
                        },
                        i['prototype']['onChangeMainBody'] = function() {
                            var y = this['round_index'],
                                L = this['action_index'];
                            this['initData'](),
                                this['reset'](),
                                y >= this['rounds']['length'] || 0 > y || this['_jumpStep'](y, L);
                        },
                        i.Inst = null,
                        i;
                }
                (y['UIBase']);
            y['UI_Ob_Replay'] = s;
        }
        (uiscript || (uiscript = {}));



        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            for (var F = 0, s = L['gang_infos'], i = [], M = 0; M < s['delta_scores']['length']; M++) {
                                var Z = {
                                    title_id: 0,
                                    score: 0,
                                    delta: 0
                                };
                                s['delta_scores'][M] > 0 ? (uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](M, 'emoji_7', -1), Z['delta'] = s['delta_scores'][M]) : s['delta_scores'][M] < 0 && (Z['delta'] = s['delta_scores'][M], uiscript['UI_DesktopInfo'].Inst['changeHeadEmo'](M, 'emoji_8', -1)),
                                    Z['score'] = s['old_scores'][M],
                                    i.push(Z);
                            }
                            if (Laya['timer'].once(200, this, function() {
                                    y['DesktopMgr'].Inst['setScores'](s['scores']);
                                }), uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](i), F += 2000, s['hules_history'] && s['hules_history']['length'] > 0) {
                                for (var N = 0, e = s['hules_history']; N < e['length']; N++) {
                                    var W = e[N],
                                        D = y['DesktopMgr'].Inst['seat2LocalPosition'](W.seat);
                                    y['DesktopMgr'].Inst['players'][D]['onXuezhanEnd'](W.hand, !1);
                                }
                                Laya['timer'].once(F, this, function() {
                                    uiscript['UIMgr'].Inst['ShowWin'](s, !1);
                                });
                            } else
                                Laya['timer'].once(F, this, function() {
                                    y['DesktopMgr'].Inst.mode == y['EMJMode']['paipu'] ? uiscript['UI_Replay'].Inst['nextStep'](!0) : uiscript['UIMgr'].Inst['ShowGameEnd']();
                                });
                            Laya['timer'].once(F, this, function() {
                                y['DesktopMgr'].Inst['ActionRunComplete']();
                            });
                        },
                        F['fastplay'] = function(L) {
                            app.Log.log('ActionHule fastplay data:' + JSON['stringify'](L));
                            var F = L['gang_infos'];
                            F['hules_history'] && F['hules_history']['length'] > 0 ? uiscript['UIMgr'].Inst['ShowWin'](F, !1) : y['DesktopMgr'].Inst.mode == y['EMJMode']['paipu'] ? uiscript['UI_Replay'].Inst['nextStep'](!0) : uiscript['UIMgr'].Inst['ShowGameEnd']();
                        },
                        F['record'] = function(y) {
                            return this.play(y),
                                5100;
                        },
                        F['fastrecord'] = function(L) {
                            L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                this['fastplay'](L, 1000);
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionGangResultEnd'] = L;
        }
        (view || (view = {}));



        ! function(y) {
            var L = function(L) {
                    function F() {
                        return null !== L && L['apply'](this, arguments) || this;
                    }
                    return __extends(F, L),
                        F.play = function(L) {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify(L),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(L));
                                }
                            }));
                            var F = this;
                            app.Log.log('ActionNotile play data:' + JSON['stringify'](L));
                            for (var s = 0, i = 1; 4 > i; i++) {
                                var M = y['DesktopMgr'].Inst['players'][i]['discardcd'] - Laya['timer']['currTimer'];
                                M > s && (s = M);
                            }
                            s += 1000,
                                Laya['timer'].once(s, this, function() {
                                    y['BgmListMgr']['stopBgm']();
                                    var s = L['players'];
                                    y['DesktopMgr'].Inst['gameing'] = !1,
                                        uiscript['UI_OtherPlayerInfo'].Inst['close'](),
                                        uiscript['UI_TingPai'].Inst['reset'](),
                                        uiscript['UI_TingPai'].Inst['setZhengting'](!1),
                                        L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !0);
                                    for (var i = 0; i < s['length']; i++) {
                                        for (var M = y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](i)], Z = [], N = 0; N < s[i].hand['length']; N++)
                                            Z.push(mjcore['MJPai']['Create'](s[i].hand[N]));
                                        Z = Z.sort(mjcore['MJPai']['Distance']),
                                            y['DesktopMgr'].Inst['is_chuanma_mode']() ? M['onChuanmaNoTile'](Z, !1) : M['already_xuezhan_hule_state'] ? M['onXuezhanEnd'](Z, !1) : M['Huangpai'](s[i]['tingpai'], Z, !1);
                                    }
                                    Laya['timer'].once(1000, F, function() {
                                        var i,
                                            M = !1,
                                            Z = !1;
                                        if (y['DesktopMgr'].Inst['xuezhan'] || y['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                            var N = !1;
                                            if (L['scores'] && L['scores']['length'] > 0) {
                                                for (var e = 0; e < L['scores']['length']; e++) {
                                                    if (L['scores'][e]['hasOwnProperty']('delta_scores'))
                                                        for (var W = 0; W < y['DesktopMgr'].Inst['player_count'] && W < L['scores'][e]['delta_scores']['length']; W++)
                                                            0 != L['scores'][e]['delta_scores'][W] && (N = !0);
                                                    if (L['scores'][e]['hasOwnProperty']('taxes'))
                                                        for (var W = 0; W < y['DesktopMgr'].Inst['player_count'] && W < L['scores'][e]['taxes']['length']; W++)
                                                            0 != L['scores'][e]['taxes'][W] && (Z = !0);
                                                }
                                                i = L['scores'][0]['lines'];
                                            }
                                            var D = !1;
                                            L['liujumanguan'] && (D = !0),
                                                L['hules_history'] && L['hules_history']['length'] > 0 && (D = !0),
                                                M = !Z && !N && !D;
                                        }
                                        uiscript['UI_Huleshow'].Inst['showLiuJu'](s, Laya['Handler']['create'](F, function() {
                                            if (y['DesktopMgr'].Inst['xuezhan'] || y['DesktopMgr'].Inst['is_chuanma_mode']()) {
                                                var s = !1,
                                                    M = [],
                                                    N = [];
                                                if (L['scores'] && L['scores']['length'] > 0) {
                                                    for (var e = 0; e < y['DesktopMgr'].Inst['player_count']; e++)
                                                        M.push({
                                                            score: y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](e)]['score'],
                                                            title_id: 0,
                                                            delta: 0
                                                        }), N.push({
                                                            score: 0,
                                                            title_id: 0,
                                                            delta: 0
                                                        });
                                                    for (var e = 0; e < L['scores']['length']; e++) {
                                                        if (L['liujumanguan'] && (M[L['scores'][e].seat]['title_id'] = -1), L['scores'][e]['hasOwnProperty']('delta_scores'))
                                                            for (var W = 0; W < y['DesktopMgr'].Inst['player_count'] && W < L['scores'][e]['delta_scores']['length']; W++)
                                                                M[W]['delta'] += L['scores'][e]['delta_scores'][W];
                                                        if (L['scores'][e]['hasOwnProperty']('taxes'))
                                                            for (var W = 0; W < y['DesktopMgr'].Inst['player_count'] && W < L['scores'][e]['taxes']['length']; W++)
                                                                N[W]['delta'] += L['scores'][e]['taxes'][W];
                                                    }
                                                    if (y['DesktopMgr'].Inst['is_chuanma_mode']())
                                                        for (var e = 0; e < y['DesktopMgr'].Inst['player_count']; e++)
                                                            0 != M[e]['delta'] && (s = !0), N[e]['score'] = M[e]['score'] + M[e]['delta'];
                                                    else
                                                        for (var e = 0; e < y['DesktopMgr'].Inst['player_count']; e++)
                                                            0 != M[e]['delta'] && (s = !0);
                                                }
                                                if (y['DesktopMgr'].Inst['is_chuanma_mode']() && Z) {
                                                    var D = F,
                                                        B = function() {
                                                            var y = !1;
                                                            L['liujumanguan'] && (y = !0, uiscript['UIMgr'].Inst['ShowWin'](L['scores'], !0)),
                                                                L['hules_history'] && L['hules_history']['length'] > 0 && (y = !0, uiscript['UIMgr'].Inst['ShowHistoryWin'](L)),
                                                                y ? uiscript['UI_Hu_Xuezhan'].Inst['close']() : D['onXuezhanNoWinNext']();
                                                        };
                                                    s ? (uiscript['UI_Huleshow'].Inst['enable'] = !1, uiscript['UI_Hu_Xuezhan'].Inst['showTaxes'](M, N, Laya['Handler']['create'](null, B))) : uiscript['UI_Hu_Xuezhan'].Inst['showTaxes'](null, N, Laya['Handler']['create'](null, B)),
                                                        y['DesktopMgr'].Inst['ActionRunComplete']();
                                                } else {
                                                    var E = F,
                                                        B = function() {
                                                            var y = !1;
                                                            L['liujumanguan'] && (y = !0, uiscript['UIMgr'].Inst['ShowWin'](L['scores'], !0)),
                                                                L['hules_history'] && L['hules_history']['length'] > 0 && (y = !0, uiscript['UIMgr'].Inst['ShowHistoryWin'](L)),
                                                                y ? uiscript['UI_Hu_Xuezhan'].Inst['close']() : E['onXuezhanNoWinNext']();
                                                        };
                                                    s ? (uiscript['UI_Huleshow'].Inst['enable'] = !1, uiscript['UI_Hu_Xuezhan'].Inst['showScoreChange'](M, Laya['Handler']['create'](null, B), y['DesktopMgr'].Inst['is_chuanma_mode'](), i)) : B(),
                                                        y['DesktopMgr'].Inst['ActionRunComplete']();
                                                }
                                            } else {
                                                if (L['liujumanguan'])
                                                    uiscript['UIMgr'].Inst['ShowWin'](L['scores'], !0);
                                                else {
                                                    var f = [];
                                                    if (L['scores'] && L['scores']['length'] > 0) {
                                                        for (var e = 0; e < y['DesktopMgr'].Inst['player_count']; e++)
                                                            f.push({
                                                                old_score: L['scores'][0]['old_scores'][e],
                                                                delta: 0
                                                            });
                                                        for (var e = 0; e < L['scores']['length']; e++)
                                                            if (L['scores'][e]['hasOwnProperty']('delta_scores'))
                                                                for (var W = 0; W < y['DesktopMgr'].Inst['player_count'] && W < L['scores'][e]['delta_scores']['length']; W++)
                                                                    f[W]['delta'] += L['scores'][e]['delta_scores'][W];
                                                    } else
                                                        for (var e = 0; e < y['DesktopMgr'].Inst['player_count']; e++)
                                                            f.push({
                                                                old_score: y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](e)]['score'],
                                                                delta: 0
                                                            });
                                                    uiscript['UI_ScoreChange'].Inst.show(f);
                                                }
                                                y['DesktopMgr'].Inst['ActionRunComplete']();
                                            }
                                        }), M);
                                    });
                                });
                        },
                        F['fastplay'] = function(L) {
                            app.Log.log('ActionNewRound fastplay data:' + JSON['stringify'](L));
                            y['BgmListMgr']['stopBgm']();
                            var F = L['players'];
                            y['DesktopMgr'].Inst['gameing'] = !1,
                                uiscript['UI_OtherPlayerInfo'].Inst['close']();
                            var s = [!1, !1, !1, !1];
                            uiscript['UI_TingPai'].Inst['reset'](),
                                uiscript['UI_TingPai'].Inst['setZhengting'](!1);
                            for (var i = 0; i < y['DesktopMgr'].Inst['player_count']; i++) {
                                for (var M = [], Z = 0; Z < F[i].hand['length']; Z++)
                                    M.push(mjcore['MJPai']['Create'](F[i].hand[Z]));
                                M = M.sort(mjcore['MJPai']['Distance']),
                                    y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](i)]['Huangpai'](F[i]['tingpai'], M, !0),
                                    s[y['DesktopMgr'].Inst['seat2LocalPosition'](i)] = F[i]['tingpai'];
                            }
                            if (L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1), L['liujumanguan'])
                                uiscript['UIMgr'].Inst['ShowWin'](L['scores'], !0);
                            else {
                                var N = [];
                                if (L['scores'] && L['scores']['length'] > 0) {
                                    for (var i = 0; i < y['DesktopMgr'].Inst['player_count']; i++)
                                        N.push({
                                            old_score: L['scores'][0]['old_scores'][i],
                                            delta: 0
                                        });
                                    for (var i = 0; i < L['scores']['length']; i++)
                                        if (L['scores'][i]['hasOwnProperty']('delta_scores'))
                                            for (var Z = 0; Z < y['DesktopMgr'].Inst['player_count'] && Z < L['scores'][i]['delta_scores']['length']; Z++)
                                                N[Z]['delta'] += L['scores'][i]['delta_scores'][Z];
                                } else
                                    for (var i = 0; i < y['DesktopMgr'].Inst['player_count']; i++)
                                        N.push({
                                            old_score: y['DesktopMgr'].Inst['players'][y['DesktopMgr'].Inst['seat2LocalPosition'](i)]['score'],
                                            delta: 0
                                        });
                                uiscript['UI_ScoreChange'].Inst.show(N);
                            }
                        },
                        F['record'] = function(y) {
                            return app.Log.log('ActionNewRound record data:' + JSON['stringify'](y)),
                                this.play(y),
                                8000;
                        },
                        F['fastrecord'] = function(L) {
                            y['BgmListMgr']['stopBgm'](),
                                y['DesktopMgr'].Inst['gameing'] = !1;
                            for (var F = [], s = 0; s < L['players']['length']; s++)
                                F.push({
                                    seat: s
                                });
                            L.muyu && y['DesktopMgr'].Inst['onMuyuChange'](L.muyu, !1),
                                uiscript['UI_Huleshow'].Inst['showLiuJu'](F, null);
                        },
                        F['onXuezhanNoWinNext'] = function() {
                            var L = this;
                            if (y['DesktopMgr'].Inst.mode == y['EMJMode'].play)
                                null != y['DesktopMgr'].Inst['gameEndResult'] ? (uiscript['UI_Huleshow'].Inst['enable'] = !1, uiscript['UI_Hu_Xuezhan'].Inst['enable'] = !1, uiscript['UIMgr'].Inst['ShowGameEnd']()) : (y['DesktopMgr'].Inst['Reset'](), Laya['timer'].once(200, this, function() {
                                    y['DesktopMgr'].Inst['timestoped'] ? y['DesktopMgr'].Inst['handles_after_timerun'].push(Laya['Handler']['create'](L, function() {
                                        app['NetAgent']['sendReq2MJ']('FastTest', 'confirmNewRound', {}, function() {});
                                    })) : app['NetAgent']['sendReq2MJ']('FastTest', 'confirmNewRound', {}, function() {});
                                }));
                            else if (y['DesktopMgr'].Inst.mode == y['EMJMode']['paipu'])
                                uiscript['UI_Replay'].Inst['nextStep'](!0);
                            else if (y['DesktopMgr'].Inst.mode == y['EMJMode']['live_broadcast']) {
                                uiscript['UI_Huleshow'].Inst['enable'] = !1,
                                    uiscript['UI_Live_Broadcast'].Inst['onScoreChangeConfirm']();
                            }
                        },
                        F;
                }
                (y['ActionBase']);
            y['ActionNoTile'] = L;
        }
        (view || (view = {}));


        ! function(y) {
            var L,
                F = function() {
                    function L(L) {
                        var F = this;
                        this['_show_hand'] = !1,
                            this['_show_paopai'] = !1,
                            this['_show_replay'] = !1,
                            this.me = L,
                            this['_btn_out'] = this.me['getChildByName']('btn_out'),
                            this['_btn_out']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                F['switch']();
                            }, null, !1),
                            this.me['getChildByName']('btn_shoupai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                F['_show_hand'] = !F['_show_hand'],
                                    F['_choosed_show_hand']['visible'] = F['_show_hand'],
                                    view['DesktopMgr'].Inst['onShowHandChange'](F['_show_hand']);
                            }, null, !1),
                            this['_choosed_show_hand'] = this.me['getChildByName']('btn_shoupai')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_paopai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                F['_show_paopai'] = !F['_show_paopai'],
                                    F['_choosed_show_paopai']['visible'] = F['_show_paopai'],
                                    view['DesktopMgr'].Inst['onShowPaopaiChange'](F['_show_paopai']);
                            }, null, !1),
                            this['_choosed_show_paopai'] = this.me['getChildByName']('btn_paopai')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_showbar')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                y['UI_Ob_Replay'].Inst['locking'] || y['UI_Ob_Replay'].Inst['anim_time'] > Laya['timer']['currTimer'] || 'RecordHuleXueZhanEnd' != s.Inst['last_action_name'] && 'RecordHule' != s.Inst['last_action_name'] && 'RecordLiuJu' != s.Inst['last_action_name'] && 'RecordNoTile' != s.Inst['last_action_name'] && ('RecordNewRound' == s.Inst['last_action_name'] && s.Inst['during_do_cd'] || (F['_show_replay'] = !F['_show_replay'], F['_choosed_show_replay']['visible'] = F['_show_replay'], F['_show_replay'] ? s.Inst['enterReplay']() : s.Inst['closeReplay']()));
                            }, null, !1),
                            this['_choosed_show_replay'] = this.me['getChildByName']('btn_showbar')['getChildByName']('choosed'),
                            this.me['getChildByName']('label_word')['visible'] = 'chs' == GameMgr['client_language'],
                            this.me['getChildByName']('img_set')['visible'] = 'chs' != GameMgr['client_language'];
                    }
                    return L['prototype']['reset'] = function() {
                            Laya['Tween']['clearAll'](this),
                                this['_show_hand'] = !1,
                                this.me.x = -258,
                                this['_btn_out']['disabled'] = !1,
                                this['_choosed_show_hand']['visible'] = this['_show_hand'],
                                this['_show_paopai'] = !1,
                                this['_choosed_show_paopai']['visible'] = this['_show_paopai'],
                                this['_show_replay'] = !1,
                                this['_choosed_show_replay']['visible'] = this['_show_replay'];
                        },
                        L['prototype']['switch'] = function() {
                            var y = this,
                                L = -258;
                            this.me.x < -100 && (L = -5),
                                this['_btn_out']['disabled'] = !0,
                                Laya['Tween'].to(this.me, {
                                    x: L
                                }, 200, Laya.Ease['strongOut'], Laya['Handler']['create'](this, function() {
                                    y['_btn_out']['disabled'] = !1;
                                }), 0, !0, !0);
                        },
                        L;
                }
                ();
            ! function(y) {
                y[y.none = 0] = 'none',
                    y[y['gameing'] = 1] = 'gameing',
                    y[y['replay'] = 2] = 'replay';
            }
            (L || (L = {}));
            var s = function(s) {
                    function i() {
                        var y = s.call(this, new ui.mj['live_broadcastUI']()) || this;
                        return y['state'] = L.none,
                            y['segments'] = [],
                            y['_time0'] = 0,
                            y['_time_start'] = 0,
                            y['segment_index'] = 0,
                            y['unit_index'] = 0,
                            y['during_asknew'] = !1,
                            y['retry_loadtime'] = 0,
                            y['segment_end_millisecond'] = 0,
                            y['guanzhanconfig'] = null,
                            y['do_unit_cd'] = 0,
                            y['time_stop_length'] = 0,
                            y['time_stop_start_time'] = 0,
                            y['_last_action_name'] = '',
                            y['have_gameend'] = !1,
                            y['is_realtime'] = !1,
                            y['pending_units'] = [],
                            i.Inst = y,
                            app['NetAgent']['AddListener2MJ']('NotifyObserveData', Laya['Handler']['create'](y, function(L) {
                                y['pending_units'].push(L);
                            })),
                            y;
                    }
                    return __extends(i, s),
                        i['fetchInfo'] = function(L, F) {
                            app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameLiveInfo', {
                                game_uuid: L
                            }, function(s, i) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify(i),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(i));
                                    }
                                }));
                                s || i['error'] ? (y['UIMgr'].Inst['showNetReqError']('fetchGameLiveInfo', s, i), F && F['runWith']({
                                    success: !1
                                })) : (app.Log.log('fetchGameLiveInfo res:' + JSON['stringify'](i)), i['left_start_seconds'] ? y['UI_WaitOb'].Inst.show(L, i['left_start_seconds'], F) : F && F['runWith']({
                                    success: !0,
                                    data: i
                                }));
                            });
                        },
                        i['goToWatch'] = function(L, F, s) {
                            var M = this;
                            app.Log.log('goToWatch res:' + JSON['stringify'](F)),
                                y['UI_Loading'].Inst.show('enter_mj'),
                                game['Scene_Lobby'].Inst['active'] && (game['Scene_Lobby'].Inst['active'] = !1),
                                GameMgr.Inst['onLoadStart']('ob');
                            for (var Z = F['live_head'], N = [null, null, null, null], e = 0; e < Z['players']['length']; e++) {
                                for (var W = -1, D = 0; D < Z['seat_list']['length']; D++)
                                    if (Z['seat_list'][D] == Z['players'][e]['account_id']) {
                                        W = D;
                                        break;
                                    } -
                                1 != W ? N[W] = Z['players'][e] : app.Log['Error']('goToWatch ' + JSON['stringify'](Z['players'][e]) + '未找到位置');
                            }
                            var B = game['Tools']['strOfLocalization'](2003),
                                E = Z['game_config'].mode;
                            E['extendinfo'] && (B = game['Tools']['strOfLocalization'](2004)),
                                E['detail_rule'] && E['detail_rule']['ai_level'] && (1 === E['detail_rule']['ai_level'] && (B = game['Tools']['strOfLocalization'](2003)), 2 === E['detail_rule']['ai_level'] && (B = game['Tools']['strOfLocalization'](2004)));
                            for (var e = 0; e < N['length']; e++)
                                null == N[e] && (N[e] = {
                                    nickname: B,
                                    avatar_id: game['GameUtility']['get_default_ai_skin'](),
                                    level: {
                                        id: '10101'
                                    },
                                    level3: {
                                        id: '20101'
                                    },
                                    character: {
                                        charid: game['GameUtility']['get_default_ai_character'](),
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: game['GameUtility']['get_default_ai_skin'](),
                                        is_upgraded: !1
                                    }
                                });
                            game['Scene_MJ'].Inst['openMJRoom']({
                                mode: E
                            }, N, Laya['Handler']['create'](this, function() {
                                view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](Z['game_config'])), N, s, view['EMJMode']['live_broadcast'], Laya['Handler']['create'](M, function() {
                                    y['UI_Loading'].Inst['setProgressVal'](0.7),
                                        Laya['timer'].once(1000, M, function() {
                                            GameMgr.Inst['EnterMJ'](),
                                                y['UI_Loading'].Inst['setProgressVal'](0.8),
                                                i.Inst['startLive'](L);
                                        });
                                }));
                            }), Laya['Handler']['create'](this, function(L) {
                                return y['UI_Loading'].Inst['setProgressVal'](0.7 * L);
                            }, null, !1));
                        },
                        Object['defineProperty'](i['prototype'], 'during_do_cd', {
                            get: function() {
                                return this['enable'] ? Laya['timer']['currTimer'] < this['do_unit_cd'] : y['UI_Live_Broadcast1'].Inst['during_do_cd'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](i['prototype'], 'during_play', {
                            get: function() {
                                return this['enable'] ? this['state'] == L['gameing'] : y['UI_Live_Broadcast1'].Inst['during_play'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](i['prototype'], 'last_action_name', {
                            get: function() {
                                return this['enable'] ? this['_last_action_name'] : y['UI_Live_Broadcast1'].Inst['last_action_name'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        i['prototype']['onCreate'] = function() {
                            this['guanzhanconfig'] = new F(this.me['getChildByName']('config'));
                        },
                        i['prototype']['onDisable'] = function() {
                            Laya['timer']['clearAll'](this),
                                this['pending_units'] = [];
                        },
                        i['prototype']['_doRecord'] = function(y, L, F) {
                            switch (view['DesktopMgr'].Inst['ClearOperationShow'](), this['_last_action_name'] = y, y) {
                                case 'RecordNewRound':
                                    return view['ActionNewRound']['record'](L, F);
                                case 'RecordChangeTile':
                                    return view['ActionChangeTile']['record'](L, F);
                                case 'RecordSelectGap':
                                    return view['ActionSelectGap']['record'](L, F);
                                case 'RecordDiscardTile':
                                    return view['ActionDiscardTile']['record'](L, F);
                                case 'RecordDealTile':
                                    return view['ActionDealTile']['record'](L, F);
                                case 'RecordChiPengGang':
                                    return view['ActionChiPengGang']['record'](L, F);
                                case 'RecordAnGangAddGang':
                                    return view['ActionAnGangAddGang']['record'](L, F);
                                case 'RecordHule':
                                    return view['ActionHule']['record'](L);
                                case 'RecordLiuJu':
                                    return view['ActionLiuJu']['record'](L);
                                case 'RecordNoTile':
                                    return view['ActionNoTile']['record'](L);
                                case 'RecordBaBei':
                                    return view['ActionBabei']['record'](L);
                                case 'RecordHuleXueZhanMid':
                                    return view['ActionHuleXueZhanMid']['record'](L);
                                case 'RecordHuleXueZhanEnd':
                                    return view['ActionHuleXueZhanEnd']['record'](L);
                                case 'RecordGangResult':
                                    return view['ActionGangResult']['record'](L);
                                case 'RecordGangResultEnd':
                                    return view['ActionGangResultEnd']['record'](L);
                                case 'RecordRevealTile':
                                    return view['ActionRevealTile']['record'](L);
                                case 'RecordLockTile':
                                    return view['ActionLockTile']['record'](L);
                                case 'RecordUnveilTile':
                                    return view['ActionUnveilTile']['record'](L);
                                case 'RecordNewCard':
                                    return view['ActionNewCard']['record'](L);
                                case 'RecordFillAwaitingTiles':
                                    return view['ActionFillAwaitingTiles']['record'](L);
                            }
                            return 0;
                        },
                        i['prototype']['_doFastRecord'] = function(y, L, F) {
                            try {
                                switch (this['_last_action_name'] = y, y) {
                                    case 'RecordNewRound':
                                        view['ActionNewRound']['fastrecord'](L, F);
                                        break;
                                    case 'RecordChangeTile':
                                        view['ActionChangeTile']['fastrecord'](L, F);
                                        break;
                                    case 'RecoreSelectGap':
                                        view['ActionSelectGap']['fastrecord'](L, F);
                                        break;
                                    case 'RecordDiscardTile':
                                        view['ActionDiscardTile']['fastrecord'](L, F);
                                        break;
                                    case 'RecordDealTile':
                                        view['ActionDealTile']['fastrecord'](L, F);
                                        break;
                                    case 'RecordChiPengGang':
                                        view['ActionChiPengGang']['fastrecord'](L, F);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        view['ActionAnGangAddGang']['fastrecord'](L, F);
                                        break;
                                    case 'RecordHule':
                                        view['ActionHule']['fastrecord'](L);
                                        break;
                                    case 'RecordLiuJu':
                                        view['ActionLiuJu']['fastrecord'](L);
                                        break;
                                    case 'RecordNoTile':
                                        view['ActionNoTile']['fastrecord'](L);
                                        break;
                                    case 'RecordBaBei':
                                        view['ActionBabei']['fastrecord'](L);
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        view['ActionHuleXueZhanMid']['fastrecord'](L);
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        view['ActionHuleXueZhanEnd']['fastrecord'](L);
                                        break;
                                    case 'RecordRevealTile':
                                        view['ActionRevealTile']['fastrecord'](L);
                                        break;
                                    case 'RecordLockTile':
                                        view['ActionLockTile']['fastrecord'](L);
                                        break;
                                    case 'RecordUnveilTile':
                                        view['ActionUnveilTile']['fastrecord'](L);
                                        break;
                                    case 'RecordNewCard':
                                        view['ActionNewCard']['fastrecord'](L);
                                        break;
                                    case 'RecordFillAwaitingTiles':
                                        view['ActionFillAwaitingTiles']['fastrecord'](L);
                                }
                            } catch (s) {
                                var i = {};
                                return i['error'] = s['message'],
                                    i['stack'] = s['stack'],
                                    i['method'] = 'ui_live_broadcast doFastRecord',
                                    i.name = y,
                                    i.data = L,
                                    GameMgr.Inst['onFatalError'](i),
                                    1000000;
                            }
                        },
                        i['prototype']['_doUnit'] = function(L, F, s) {
                            if (F) {
                                if (1 == L['category'])
                                    return (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'live_fast_action': L
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'live_fast_action': L
                                            }));
                                        }
                                    })), this['_doFastRecord'](L.name, L.data, s), view['DesktopMgr'].Inst['timestoped'] || (this['time_stop_length'] = 0), 0;
                                if ('GameNewRoundState' == L.name) {
                                    for (var i = 0; i < L.data['seat_states']['length']; i++)
                                        view['DesktopMgr']['player_link_state'][i] = L.data['seat_states'][i];
                                    y['UI_DesktopInfo'].Inst['refreshLinks']();
                                } else
                                    'NotifyGameEndResult' == L.name ? (view['DesktopMgr'].Inst['gameEndResult'] = L.data['result'], this['enable'] = !1, y['UIMgr'].Inst['ShowGameEnd']()) : 'NotifyPlayerConnectionState' == L.name ? y['UI_DesktopInfo'].Inst['onPlayerConnectionState'](L.data) : 'GameEndAction' == L.name ? 3 == L.data['state'] && y['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](16), Laya['Handler']['create'](this, function() {
                                        game['Scene_MJ'].Inst['ForceOut']();
                                    })) : 'NotifyGamePause' == L.name && (view['DesktopMgr'].Inst['setGameStop'](L.data['paused']), this['time_stop_start_time'] > 0 && (this['time_stop_length'] += L['timestamp'] - this['time_stop_start_time']), this['time_stop_start_time'] = view['DesktopMgr'].Inst['timestoped'] ? L['timestamp'] : -1);
                                return -1;
                            }
                            if (1 == L['category']) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify({
                                        'live_action': L
                                    }),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                            'live_action': L
                                        }));
                                    }
                                }));
                                var M = this['_doRecord'](L.name, L.data, s);
                                return view['DesktopMgr'].Inst['timestoped'] || (this['time_stop_length'] = 0),
                                    M;
                            }
                            if ('GameNewRoundState' == L.name) {
                                for (var i = 0; i < L.data['seat_states']['length']; i++)
                                    view['DesktopMgr']['player_link_state'][i] = L.data['seat_states'][i];
                                y['UI_DesktopInfo'].Inst['refreshLinks']();
                            } else
                                'NotifyGameEndResult' == L.name ? (view['DesktopMgr'].Inst['gameEndResult'] = L.data['result'], this['enable'] = !1, y['UIMgr'].Inst['ShowGameEnd']()) : 'NotifyGameBroadcast' == L.name ? y['UI_DesktopInfo'].Inst['onGameBroadcast'](L.data) : 'NotifyPlayerConnectionState' == L.name ? y['UI_DesktopInfo'].Inst['onPlayerConnectionState'](L.data) : 'GameEndAction' == L.name ? 3 == L.data['state'] && y['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](16), Laya['Handler']['create'](this, function() {
                                    game['Scene_MJ'].Inst['ForceOut']();
                                })) : 'NotifyGamePause' == L.name && (view['DesktopMgr'].Inst['setGameStop'](L.data['paused']), this['time_stop_start_time'] > 0 && (this['time_stop_length'] += L['timestamp'] - this['time_stop_start_time']), this['time_stop_start_time'] = view['DesktopMgr'].Inst['timestoped'] ? L['timestamp'] : -1);
                            return -1;
                        },
                        i['prototype']['_parseUnit'] = function(y) {
                            var L = net['MessageWrapper']['decodeMessage'](y['action_data']);
                            return {
                                timestamp: y['timestamp'],
                                category: y['action_category'],
                                name: L['$type'].name,
                                data: L
                            };
                        },
                        i['prototype']['_loadUnit'] = function(y, L, F) {
                            var s = this,
                                i = new Laya['HttpRequest']();
                            i.once(Laya['Event']['COMPLETE'], this, function(i) {
                                    if (F)
                                        try {
                                            var M = new Laya.Byte();
                                            M['writeArrayBuffer'](i),
                                                s['last_success_segment_url'] = L;
                                            for (var Z = net['MessageWrapper']['decodeMessage'](M['getUint8Array'](0, M['length'])), N = [], e = 0; e < Z['actions']['length']; e++)
                                                N.push(s['_parseUnit'](Z['actions'][e]));
                                            F['runWith']({
                                                success: !0,
                                                id: y,
                                                units: N,
                                                url: L
                                            });
                                        } catch (W) {
                                            F['runWith']({
                                                success: !1,
                                                id: y,
                                                type: 'parse_error',
                                                url: L
                                            });
                                        }
                                }),
                                i.once(Laya['Event']['ERROR'], this, function() {
                                    F && F['runWith']({
                                        success: !1,
                                        id: y,
                                        url: L,
                                        type: 'download_timeout'
                                    });
                                });
                            var M = [];
                            i.send(L, '', 'get', 'arraybuffer', M);
                        },
                        i['prototype']['startLive'] = function(L) {
                            var F = this;
                            app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameLiveInfo', {
                                game_uuid: L
                            }, function(s, i) {
                                (GM_xmlhttpRequest({
                                    method: 'post',
                                    url: API_URL,
                                    data: JSON.stringify(i),
                                    onload: function(msg) {
                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(i));
                                    }
                                }));
                                if (s || i['error'] || i['left_start_seconds'])
                                    GameMgr.Inst['postInfo2Server']('ob_failure', {
                                        condition: 'loading',
                                        uuid: L,
                                        segment_name: '',
                                        last_success_segment_name: '',
                                        error_info: 'download_timeout',
                                        gametime_since_start: 0
                                    }), y['UIMgr'].Inst['showNetReqError']('fetchGameLiveInfo', s, i), F['_forceQuit']();
                                else {
                                    var M = i;
                                    F['segment_index'] = 0,
                                        F['segments'] = [],
                                        F['last_success_segment_url'] = '',
                                        F['_time0'] = M['now_millisecond'],
                                        F['_time_start'] = Laya['timer']['currTimer'];
                                    var Z = 0,
                                        N = !1;
                                    F['game_uuid'] = L,
                                        F['enable'] = !0,
                                        F['guanzhanconfig']['reset'](),
                                        y['UI_Ob_Replay'].Inst['enable'] = !1,
                                        F['do_unit_cd'] = 0,
                                        F['have_gameend'] = !1,
                                        F['is_realtime'] = !1,
                                        F.me['getChildByName']('f_realtime')['visible'] = !1;
                                    for (var e = function(s) {
                                            if (!N)
                                                if (app.Log.log('loadover0 ' + JSON['stringify'](s)), s['success']) {
                                                    for (var i = 0; i < F['segments']['length']; i++)
                                                        if (F['segments'][i]['segment_id'] == s.id) {
                                                            F['segments'][i]['units'] = s['units'],
                                                                F['segments'][i]['loaded'] = !0;
                                                            break;
                                                        }
                                                    app.Log.log('loadover1'),
                                                        Z++,
                                                        y['UI_Loading'].Inst['setProgressVal'](0.8 + 0.2 * (Z / F['segments']['length'])),
                                                        Z == F['segments']['length'] && F['_onFirstLoadOver']();
                                                } else
                                                    app.Log.log('loadover2'), N = !0, y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](15)), F['_forceQuit'](), GameMgr.Inst['postInfo2Server']('ob_failure', {
                                                        condition: 'loading',
                                                        uuid: L,
                                                        segment_name: s.url,
                                                        last_success_segment_name: F['last_success_segment_url'],
                                                        error_info: s.type,
                                                        gametime_since_start: 0
                                                    });
                                        }, W = 0; W < M['segments']['length']; W++) {
                                        var D = M['segments'][W]['segment_id'],
                                            B = game['LobbyNetMgr'].Inst['ob_url'] + M['segments'][W]['segment_uri'];
                                        F['segments'].push({
                                                segment_id: D,
                                                uri: B,
                                                units: [],
                                                loaded: !1
                                            }),
                                            F['_loadUnit'](D, B, Laya['Handler']['create'](F, e));
                                    }
                                }
                            });
                        },
                        i['prototype']['clearPendingUnits'] = function() {
                            this['pending_units'] = [];
                        },
                        i['prototype']['startRealtimeLive'] = function(L, F) {
                            var s = this;
                            this['segment_index'] = 0,
                                this['segments'] = [],
                                this['enable'] = !0,
                                this['guanzhanconfig']['reset'](),
                                y['UI_Ob_Replay'].Inst['enable'] = !1,
                                this['do_unit_cd'] = 0,
                                this['have_gameend'] = !1,
                                this['is_realtime'] = !0,
                                this['_time0'] = 1000 * L,
                                this['_time_start'] = Laya['timer']['currTimer'];
                            var i = this.me['getChildByName']('f_realtime');
                            i['visible'] = !0,
                                Laya['timer']['clearAll'](this),
                                Laya['timer']['frameLoop'](1, this, function() {
                                    var y = (Laya['timer']['currTimer'] - s['_time_start']) / 1000;
                                    y -= 4 * Math['floor'](y / 4),
                                        i['alpha'] = 2 > y ? y / 2 * 0.7 + 0.3 : 0.7 * (1 - (y - 2) / 2) + 0.3;
                                });
                            for (var M = [], Z = 0; Z < F['actions']['length']; Z++)
                                M.push(this['_parseUnit'](F['actions'][Z]));
                            for (var Z = 0; Z < this['pending_units']['length']; Z++)
                                M.push(this['_parseUnit'](this['pending_units'][Z].unit));
                            this['pending_units'] = [],
                                this['segments'].push({
                                    segment_id: 1,
                                    units: M,
                                    loaded: !0
                                }),
                                this['_onFirstLoadOver']();
                        },
                        i['prototype']['_onFirstLoadOver'] = function() {
                            var y = this;
                            if (this['_fastSync']() && (app.Log.log('fastSync over'), Laya['timer'].loop(100, this, function() {
                                    if (y['is_realtime']) {
                                        for (var L = 0; L < y['pending_units']['length']; L++)
                                            y['segments'][0]['units'].push(y['_parseUnit'](y['pending_units'][L].unit));
                                        y['pending_units'] = [];
                                    }
                                    y['_timeDoAction'](!1);
                                }, null, !0), !this['is_realtime'])) {
                                var L = this['segments'][this['segments']['length'] - 1]['units'],
                                    F = L[L['length'] - 1]['timestamp'];
                                this['segment_end_millisecond'] = F,
                                    Laya['timer'].loop(3700, this, function() {
                                        y['_askNewSegment']();
                                    }, null, !1);
                            }
                        },
                        i['prototype']['_unitIsTimeLast'] = function(y, L) {
                            if (y >= this['segments']['length'])
                                return !0;
                            var F = this['segments'][y];
                            if (!F['loaded'])
                                return !0;
                            if (F['units']['length'] <= L)
                                return this['_unitIsTimeLast'](y + 1, 0);
                            var s = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'],
                                i = F['units'][L];
                            return i['timestamp'] > s ? !0 : 2 == i['category'] ? this['_unitIsTimeLast'](y, L + 1) : !1;
                        },
                        i['prototype']['_getTimeStop'] = function(y, L, F) {
                            var s = 0;
                            if (F > 0 && (s = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'] - F), y >= this['segments']['length'])
                                return s;
                            var i = this['segments'][y];
                            if (!i['loaded'])
                                return s;
                            if (i['units']['length'] <= L)
                                return this['_getTimeStop'](y + 1, 0, F);
                            var M = i['units'][L],
                                Z = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'];
                            if (M['timestamp'] > Z)
                                return s;
                            if (1 == M['category'])
                                return 0;
                            if ('NotifyGamePause' == M.name) {
                                var N = 0;
                                return F > 0 && (N += M['timestamp'] - F),
                                    F = M.data['paused'] ? M['timestamp'] : -1,
                                    N + this['_getTimeStop'](y, L + 1, F);
                            }
                            return this['_getTimeStop'](y, L + 1, F);
                        },
                        i['prototype']['_timeDoAction'] = function(F) {
                            if (this['state'] != L['gameing'])
                                return !1;
                            if (this['segment_index'] >= this['segments']['length'])
                                return !1;
                            var s = this['segments'][this['segment_index']];
                            if (!s['loaded'])
                                return !1;
                            if (this['segment_index'] == this['segments']['length'] - 1 && this['unit_index'] >= s['units']['length'])
                                return !1;
                            var i = s['units'][this['unit_index']],
                                M = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'];
                            if (i['timestamp'] > M && !this['is_realtime'])
                                return !0;
                            if ('NotifyGameEndResult' == i.name)
                                return !0;
                            if (1 == i['category'] && this['during_do_cd'])
                                return !0;
                            var Z = this['_unitIsTimeLast'](this['segment_index'], this['unit_index'] + 1);
                            Z && (M -= this['_getTimeStop'](this['segment_index'], this['unit_index'] + 1, this['time_stop_start_time']));
                            var N = 0;
                            if (this['is_realtime'] ? (N = Laya['timer']['currTimer'] + GameMgr.Inst['server_time_delta'] - this['_time0'] - i['timestamp'], N = 0 > N ? 0 : N) : N = M - i['timestamp'], y['UI_Loading'].Inst && y['UI_Loading'].Inst['enable'] && y['UI_Loading'].Inst['close'](), F)
                                Z ? this['_doUnit'](i, !0, N) : this['_doUnit'](i, !0, -1);
                            else {
                                var e = this['_doUnit'](i, !1, N);
                                e > 0 && (this['do_unit_cd'] = Laya['timer']['currTimer'] + e);
                            }
                            return this['unit_index']++,
                                this['unit_index'] >= s['units']['length'] && !this['is_realtime'] && (this['unit_index'] = 0, this['segment_index']++),
                                this['_timeDoAction'](F);
                        },
                        i['prototype']['_askNewSegment'] = function() {
                            var L = this;
                            if (!this['have_gameend'] && !(this['during_asknew'] || this['retry_loadtime'] >= 3) && this['segments'][this['segments']['length'] - 1]['loaded']) {
                                var F = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'];
                                F + 15000 < this['segment_end_millisecond'] || (this['during_asknew'] = !0, app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameLiveLeftSegment', {
                                    game_uuid: this['game_uuid'],
                                    last_segment_id: this['segments'][this['segments']['length'] - 1]['segment_id']
                                }, function(F, s) {
                                    if (L['during_asknew'] = !1, F || s['error'])
                                        L['retry_loadtime']++, L['retry_loadtime'] >= 3 && (y['UIMgr'].Inst['showNetReqError']('fetchGameLiveLeftSegment', F, s), GameMgr.Inst['postInfo2Server']('ob_failure', {
                                            condition: 'runtime',
                                            uuid: L['game_uuid'],
                                            segment_name: '',
                                            last_success_segment_name: L['segments'][L['segments']['length'] - 1].uri,
                                            error_info: 'server_timeout',
                                            gametime_since_start: L['_time_start']
                                        }));
                                    else {
                                        L['retry_loadtime'] = 0;
                                        var i = s['segments'];
                                        L['segment_end_millisecond'] = s['segment_end_millisecond'];
                                        for (var M = function(y) {
                                                if (y['success']) {
                                                    for (var F = 0; F < L['segments']['length']; F++)
                                                        if (L['segments'][F]['segment_id'] == y.id) {
                                                            L['segments'][F]['units'] = y['units'];
                                                            for (var s = 0; s < y['units']['length']; s++)
                                                                if ('NotifyGameEndResult' == y['units'][s].name) {
                                                                    L['have_gameend'] = !0;
                                                                    break;
                                                                }
                                                            L['segments'][F]['loaded'] = !0;
                                                            break;
                                                        }
                                                } else
                                                    GameMgr.Inst['postInfo2Server']('ob_failure', {
                                                        condition: 'runtime',
                                                        uuid: L['game_uuid'],
                                                        segment_name: y.url,
                                                        last_success_segment_name: L['last_success_segment_url'],
                                                        error_info: y.type,
                                                        gametime_since_start: L['_time_start']
                                                    });
                                            }, Z = L['segments'][L['segments']['length'] - 1]['segment_id'], N = 0; N < i['length']; N++) {
                                            var e = i[N]['segment_id'],
                                                W = game['LobbyNetMgr'].Inst['ob_url'] + i[N]['segment_uri'];
                                            Z >= e || (L['segments'].push({
                                                segment_id: e,
                                                uri: W,
                                                units: [],
                                                loaded: !1
                                            }), L['_loadUnit'](e, W, Laya['Handler']['create'](L, M, null, !1)));
                                        }
                                    }
                                }));
                            }
                        },
                        i['prototype']['_forceQuit'] = function() {
                            this['state'] = L.none,
                                this['enable'] = !1,
                                GameMgr.Inst['EnterLobby']();
                        },
                        i['prototype']['_fastSync'] = function() {
                            var F = -1,
                                s = -1;
                            this['time_stop_start_time'] = -1,
                                this['time_stop_length'] = 0;
                            var i = this['_time0'] + Laya['timer']['currTimer'] - this['_time_start'];
                            this['is_realtime'] && (i = Laya['timer']['currTimer']);
                            for (var M = 0; M < this['segments']['length']; M++)
                                for (var Z = this['segments'][M], N = 0; N < Z['units']['length']; N++)
                                    Z['units'][N]['timestamp'] <= i && 'RecordNewRound' == Z['units'][N].name && (F = M, s = N);
                            if (app.Log.log('_fastSync1: segment=' + F + ', unit=' + s), -1 == F) {
                                F = 0;
                                for (var Z = this['segments'][0], N = 0; N < Z['units']['length']; N++)
                                    if ('RecordNewRound' == Z['units'][N].name) {
                                        F = 0,
                                            s = N,
                                            this['_time0'] = Z['units'][N]['timestamp'] - 50;
                                        break;
                                    }
                            }
                            return app.Log.log('_fastSync2: segment=' + F + ', unit=' + s), -1 == s ? this['is_realtime'] ? (this['state'] = L['gameing'], this['segment_index'] = 0, this['unit_index'] = 0, !0) : (app.Log['Error']('给的数据没有RecordNewRound'), y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](15)), this['_forceQuit'](), !1) : (this['state'] = L['gameing'], this['segment_index'] = F, this['unit_index'] = s, this['_timeDoAction'](!0), !0);
                        },
                        i['prototype']['onChangeMainbody'] = function() {
                            this['state'] == L['gameing'] ? (this['do_unit_cd'] = 0, this['_fastSync']()) : this['state'] == L['replay'] && y['UI_Ob_Replay'].Inst['onChangeMainBody']();
                        },
                        i['prototype']['onScoreChangeConfirm'] = function() {
                            if (!this['enable'])
                                return y['UI_Live_Broadcast1'].Inst['onScoreChangeConfirm'](), void 0;
                            if (this['state'] == L['gameing']) {
                                if (this['do_unit_cd'] = 0, this['segment_index'] >= this['segments']['length'])
                                    return !1;
                                var F = this['segments'][this['segment_index']];
                                if (!F['loaded'])
                                    return !1;
                                if (this['segment_index'] == this['segments']['length'] - 1 && this['unit_index'] >= F['units']['length'])
                                    return !1;
                                var s = F['units'][this['unit_index']];
                                'NotifyGameEndResult' == s.name && (y['UI_ScoreChange'].Inst['enable'] = !1, this['_doUnit'](s, !1, 0));
                            } else
                                this['state'] == L['replay'] && (y['UI_ScoreChange'].Inst['enable'] = !1, y['UI_Ob_Replay'].Inst['nextStep'](!0));
                        },
                        i['prototype']['enterReplay'] = function() {
                            this['state'] = L['replay'];
                            for (var F = [], s = 0; s <= this['segment_index'] && s < this['segments']['length'] && this['segments'][s]['loaded']; s++)
                                for (var i = this['segments'][s]['units'], M = 0; M < i['length'] && !(s == this['segment_index'] && M >= this['unit_index']); M++) {
                                    var Z = i[M];
                                    1 == Z['category'] && F.push({
                                        name: Z.name,
                                        data: Z.data
                                    });
                                }
                            y['UI_Ob_Replay'].Inst.show(F),
                                view['DesktopMgr'].Inst['ClearOperationShow']();
                        },
                        i['prototype']['closeReplay'] = function() {
                            this['state'] = L['gameing'],
                                y['UI_Ob_Replay'].Inst['close'](),
                                this['do_unit_cd'] = 0,
                                this['_fastSync']();
                        },
                        i;
                }
                (y['UIBase']);
            y['UI_Live_Broadcast'] = s;
        }
        (uiscript || (uiscript = {}));



        ! function(y) {
            var L,
                F = function() {
                    function L(L) {
                        var F = this;
                        this['_show_hand'] = !1,
                            this['_show_paopai'] = !1,
                            this['_show_replay'] = !1,
                            this.me = L,
                            this['_btn_out'] = this.me['getChildByName']('btn_out'),
                            this['_btn_out']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                F['switch']();
                            }, null, !1),
                            this.me['getChildByName']('btn_shoupai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                F['_show_hand'] = !F['_show_hand'],
                                    F['_choosed_show_hand']['visible'] = F['_show_hand'],
                                    view['DesktopMgr'].Inst['onShowHandChange'](F['_show_hand']);
                            }, null, !1),
                            this['_choosed_show_hand'] = this.me['getChildByName']('btn_shoupai')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_paopai')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                F['_show_paopai'] = !F['_show_paopai'],
                                    F['_choosed_show_paopai']['visible'] = F['_show_paopai'],
                                    view['DesktopMgr'].Inst['onShowPaopaiChange'](F['_show_paopai']);
                            }, null, !1),
                            this['_choosed_show_paopai'] = this.me['getChildByName']('btn_paopai')['getChildByName']('choosed'),
                            this.me['getChildByName']('btn_showbar')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                y['UI_Ob_Replay'].Inst['locking'] || y['UI_Ob_Replay'].Inst['anim_time'] > game['Tools']['getServerTime']() || 'RecordHuleXueZhanEnd' != s.Inst['last_action_name'] && 'RecordHule' != s.Inst['last_action_name'] && 'RecordLiuJu' != s.Inst['last_action_name'] && 'RecordNoTile' != s.Inst['last_action_name'] && ('RecordNewRound' == s.Inst['last_action_name'] && s.Inst['during_do_cd'] || (F['_show_replay'] = !F['_show_replay'], F['_choosed_show_replay']['visible'] = F['_show_replay'], F['_show_replay'] ? s.Inst['enterReplay']() : s.Inst['closeReplay']()));
                            }, null, !1),
                            this['_choosed_show_replay'] = this.me['getChildByName']('btn_showbar')['getChildByName']('choosed'),
                            this.me['getChildByName']('label_word')['visible'] = 'chs' == GameMgr['client_language'],
                            this.me['getChildByName']('img_set')['visible'] = 'chs' != GameMgr['client_language'];
                    }
                    return L['prototype']['reset'] = function() {
                            Laya['Tween']['clearAll'](this),
                                this['_show_hand'] = !1,
                                this.me.x = -258,
                                this['_btn_out']['disabled'] = !1,
                                this['_choosed_show_hand']['visible'] = this['_show_hand'],
                                this['_show_paopai'] = !1,
                                this['_choosed_show_paopai']['visible'] = this['_show_paopai'],
                                this['_show_replay'] = !1,
                                this['_choosed_show_replay']['visible'] = this['_show_replay'];
                        },
                        L['prototype']['switch'] = function() {
                            var y = this,
                                L = -258;
                            this.me.x < -100 && (L = -5),
                                this['_btn_out']['disabled'] = !0,
                                Laya['Tween'].to(this.me, {
                                    x: L
                                }, 200, Laya.Ease['strongOut'], Laya['Handler']['create'](this, function() {
                                    y['_btn_out']['disabled'] = !1;
                                }), 0, !0, !0);
                        },
                        L;
                }
                ();
            ! function(y) {
                y[y.none = 0] = 'none',
                    y[y['gameing'] = 1] = 'gameing',
                    y[y['replay'] = 2] = 'replay';
            }
            (L || (L = {}));
            var s = function(s) {
                    function i() {
                        var y = s.call(this, new ui.mj['live_broadcastUI']()) || this;
                        return y['state'] = L.none,
                            y['pending_units'] = [],
                            y['_time0'] = 0,
                            y['_time_start'] = 0,
                            y['unit_index'] = 0,
                            y['guanzhanconfig'] = null,
                            y['do_unit_cd'] = 0,
                            y['time_stop_length'] = 0,
                            y['time_stop_start_time'] = 0,
                            y['_last_action_name'] = '',
                            y['have_gameend'] = !1,
                            y['is_realtime'] = !1,
                            y['waiting_start'] = !1,
                            y['sended_error_msg'] = !1,
                            i.Inst = y,
                            game['LiveNetMgr'].Inst['setNotifyHandler'](new Laya['Handler'](y, y['onReceiveNotify'])),
                            y;
                    }
                    return __extends(i, s),
                        i['fetchInfo'] = function(L, F) {
                            var s = this;
                            app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchOBToken', {
                                uuid: L
                            }, function(M, Z) {
                                if (M || Z['error'])
                                    y['UIMgr'].Inst['showNetReqError']('fetchOBToken', M, Z), F && F['runWith']({
                                        success: !1
                                    });
                                else {
                                    app.Log.log('fetchOBToken res:' + JSON['stringify'](Z)),
                                        s['token'] = Z['token'],
                                        s['game_uuid'] = L,
                                        s['create_time'] = Z['create_time'],
                                        s['delay'] = Z['delay'],
                                        s['start_time'] = Z['start_time'];
                                    var N = Math['floor'](Z['start_time'] + Z['delay'] - game['Tools']['getServerTime']() / 1000);
                                    N > 0 ? y['UI_WaitOb'].Inst.show(i['game_uuid'], N, F) : F && F['runWith']({
                                        success: !0,
                                        data: Z
                                    });
                                }
                            });
                        },
                        i['goToWatch'] = function(L, F) {
                            var s = this;
                            y['UI_Loading'].Inst['setProgressVal'](0.1),
                                y['UI_Loading'].Inst.show('enter_mj'),
                                this['connect'](new Laya['Handler'](this, function(i) {
                                    i['success'] ? (y['UI_Loading'].Inst['setProgressVal'](0.2), s['startLoadOb'](L, i.data, F)) : (y['UI_Loading'].Inst['enable'] = !1, y['UIMgr'].Inst['showLobby']());
                                }));
                        },
                        i['startLoadOb'] = function(L, F, s) {
                            var M = this;
                            app.Log.log('startLoadOb res:' + JSON['stringify'](F)),
                                GameMgr.Inst['onLoadStart']('ob');
                            for (var Z = JSON['parse'](F.head), N = [null, null, null, null], e = 0; e < Z['players']['length']; e++) {
                                for (var W = -1, D = 0; D < Z['seat_list']['length']; D++)
                                    if (Z['seat_list'][D] == Z['players'][e]['account_id']) {
                                        W = D;
                                        break;
                                    } -
                                1 != W ? N[W] = Z['players'][e] : app.Log['Error']('goToWatch ' + JSON['stringify'](Z['players'][e]) + '未找到位置');
                            }
                            var B = game['Tools']['strOfLocalization'](2003),
                                E = Z['game_config'].mode;
                            E['extendinfo'] && (B = game['Tools']['strOfLocalization'](2004)),
                                E['detail_rule'] && E['detail_rule']['ai_level'] && (1 === E['detail_rule']['ai_level'] && (B = game['Tools']['strOfLocalization'](2003)), 2 === E['detail_rule']['ai_level'] && (B = game['Tools']['strOfLocalization'](2004)));
                            for (var e = 0; e < N['length']; e++)
                                null == N[e] && (N[e] = {
                                    nickname: B,
                                    avatar_id: game['GameUtility']['get_default_ai_skin'](),
                                    level: {
                                        id: '10101'
                                    },
                                    level3: {
                                        id: '20101'
                                    },
                                    character: {
                                        charid: game['GameUtility']['get_default_ai_character'](),
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: game['GameUtility']['get_default_ai_skin'](),
                                        is_upgraded: !1
                                    }
                                });
                            game['Scene_MJ'].Inst['openMJRoom']({
                                mode: E
                            }, N, Laya['Handler']['create'](this, function() {
                                view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](Z['game_config'])), N, s, view['EMJMode']['live_broadcast'], Laya['Handler']['create'](M, function() {
                                    y['UI_Loading'].Inst['setProgressVal'](0.7),
                                        Laya['timer'].once(1000, M, function() {
                                            GameMgr.Inst['EnterMJ'](),
                                                y['UI_Loading'].Inst['setProgressVal'](0.8),
                                                i.Inst['time0'] = game['Tools']['getServerTime']() - (1000 * F['start_time'] + 1000 * F['delay']),
                                                i.Inst['startLive'](L);
                                        });
                                }));
                            }), Laya['Handler']['create'](this, function(L) {
                                return y['UI_Loading'].Inst['setProgressVal'](0.5 * L + 0.2);
                            }, null, !1));
                        },
                        i['connect'] = function(y) {
                            this['connect_func'] = y,
                                game['LiveNetMgr'].Inst['connect'](new Laya['Handler'](this, this['onConnect']));
                        },
                        i['onConnect'] = function(L) {
                            var F = this;
                            if (L.open)
                                game['LiveNetMgr'].Inst['sendReq']('Auth', {
                                    token: this['token']
                                }, function(L, s) {
                                    L || s['error'] ? (F['connect_func'] && (F['connect_func']['runWith']({
                                        success: !1,
                                        data: s
                                    }), F['connect_func'] = null), i.Inst && i.Inst['_forceQuit'](), s['error'] ? y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['translateOfLocalization'](s['error'])) : y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](12)), y['UI_Loading'].Inst['enable'] = !1) : i.Inst && i.Inst['enable'] ? i.Inst['sendStartObRequest']() : F['connect_func'] && (F['connect_func']['runWith']({
                                        success: !0,
                                        data: s
                                    }), F['connect_func'] = null);
                                });
                            else if (this['connect_func'] && (this['connect_func']['runWith']({
                                    success: !1
                                }), this['connect_func'] = null), game['LiveNetMgr'].Inst['close'](), 'connect failed' == L.info)
                                y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](15)), i.Inst ? i.Inst['_forceQuit']() : y['UI_Loading'].Inst['enable'] = !1;
                            else if ('disconnect' == L.info) {
                                if (!i.Inst || !i.Inst['enable'])
                                    return;
                                y['UI_SecondConfirm'].Inst.show(game['Tools']['strOfLocalization'](3529), Laya['Handler']['create'](this, function() {
                                    game['LiveNetMgr'].Inst['force_reconnect']();
                                }), Laya['Handler']['create'](this, function() {
                                    i.Inst && i.Inst['_forceQuit']();
                                }));
                            } else
                                i.Inst && i.Inst['_forceQuit']();
                        },
                        Object['defineProperty'](i['prototype'], 'time0', {
                            set: function(y) {
                                this['_time0'] = y;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](i['prototype'], 'during_do_cd', {
                            get: function() {
                                return game['Tools']['getServerTime']() < this['do_unit_cd'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](i['prototype'], 'during_play', {
                            get: function() {
                                return this['state'] == L['gameing'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object['defineProperty'](i['prototype'], 'last_action_name', {
                            get: function() {
                                return this['_last_action_name'];
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        i['prototype']['onCreate'] = function() {
                            this['guanzhanconfig'] = new F(this.me['getChildByName']('config'));
                        },
                        i['prototype']['startLive'] = function() {
                            var L = this;
                            if (game['LiveNetMgr'].Inst['connect_state'] != game['EConnectState']['connecting'])
                                return y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](12)), i.Inst && i.Inst['_forceQuit'](), void 0;
                            this['sended_error_msg'] = !1,
                                this['pending_units'] = [];
                            var F = this.me['getChildByName']('f_realtime');
                            F['visible'] = !1,
                                this['_time_start'] = game['Tools']['getServerTime']();
                            this['enable'] = !0,
                                this['guanzhanconfig']['reset'](),
                                y['UI_Ob_Replay'].Inst['enable'] = !1,
                                this['do_unit_cd'] = 0,
                                this['have_gameend'] = !1,
                                this['waiting_start'] = !0,
                                game['LiveNetMgr'].Inst['sendReq']('StartOb', {}, function(F, s) {
                                    F || s['error'] ? (s['error'] ? y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['translateOfLocalization'](s['error'])) : y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](12)), L['_forceQuit']()) : (app.Log.log('StartOb'), L['start_seq'] = s.seq ? s.seq : 0);
                                });
                        },
                        i['prototype']['sendStartObRequest'] = function() {
                            var L = this;
                            game['LiveNetMgr'].Inst['sendReq']('StartOb', {}, function(F, s) {
                                F || s['error'] ? (s['error'] ? y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['translateOfLocalization'](s['error'])) : y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](12)), L['_forceQuit']()) : app.Log.log('StartOb');
                            });
                        },
                        i['prototype']['onDisable'] = function() {
                            Laya['timer']['clearAll'](this),
                                game['LiveNetMgr'].Inst['close'](),
                                this['pending_units'] = [];
                        },
                        i['prototype']['onReceiveNotify'] = function(y, L) {
                            var F = this;
                            void 0 === L && (L = !1);
                            for (var s = 0, M = this['pending_units']; s < M['length']; s++) {
                                var Z = M[s];
                                if (Z.seq == y.seq)
                                    return;
                            }
                            if ('GameEndAction' == y.name && game['LiveNetMgr'].Inst['close'](), L) {
                                for (var N = !1, e = -1, W = 0, D = this['pending_units']; W < D['length']; W++) {
                                    var Z = D[W];
                                    if (N || (e++, Z.seq == y.seq - 1 && (N = !0)), Z.seq == y.seq)
                                        return;
                                }
                                if (0 > e)
                                    this['pending_units'].push(y);
                                else if (this['pending_units']['splice'](e + 1, 0, y), this['pending_units'][e + 2] && this['pending_units'][e + 2].seq != y.seq + 1) {
                                    var B = this;
                                    game['LiveNetMgr'].Inst['sendReq']('FetchSegment', {
                                        seq: y.seq + 1
                                    }, function(L, F) {
                                        (L || F['error']) && GameMgr.Inst['postInfo2Server']('livebroad', {
                                            uuid: i['game_uuid'],
                                            token: i['token'],
                                            missing_seq: y.seq + 1,
                                            error: L || F['error']
                                        }), !L && F && B['onReceiveNotify'](B['_handleMsg'](F['segments']), !0);
                                    });
                                }
                            } else {
                                if (this['pending_units']['length'] > 0 && y.seq != this['pending_units'][this['pending_units']['length'] - 1].seq + 1) {
                                    this['sended_error_msg'] || (GameMgr.Inst['postInfo2Server']('livebroad', {
                                        uuid: i['game_uuid'],
                                        last_seq: this['pending_units'][this['pending_units']['length'] - 1].seq,
                                        recent_seq: y.seq,
                                        token: i['token']
                                    }), this['sended_error_msg'] = !0);
                                    var E = this;
                                    game['LiveNetMgr'].Inst['sendReq']('FetchSegment', {
                                        seq: this['pending_units'][this['pending_units']['length'] - 1].seq + 1
                                    }, function(y, L) {
                                        (y || L['error']) && GameMgr.Inst['postInfo2Server']('livebroad', {
                                            uuid: i['game_uuid'],
                                            token: i['token'],
                                            missing_seq: F['pending_units'][F['pending_units']['length'] - 1].seq + 1,
                                            error: y || L['error']
                                        }), !y && L && E['onReceiveNotify'](E['_handleMsg'](L['segments']), !0);
                                    });
                                }
                                this['pending_units'].push(y);
                            }
                            this['waiting_start'] && (y.seq >= this['start_seq'] && this['start_seq'] > 0 || y['offsetTime'] > this['_time0'] - 3000) && (this['_onFirstLoadOver'](), this['waiting_start'] = !1);
                        },
                        i['prototype']['_onFirstLoadOver'] = function() {
                            var y = this;
                            this['_fastSync']() && (app.Log.log('fastSync over'), Laya['timer'].loop(100, this, function() {
                                y['_timeDoAction'](!1);
                            }, null, !0));
                        },
                        i['prototype']['_fastSync'] = function() {
                            var F = -1;
                            this['time_stop_start_time'] = -1,
                                this['time_stop_length'] = 0;
                            var s = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'];
                            this['is_realtime'] && (s = game['Tools']['getServerTime']());
                            for (var i = 0; i < this['pending_units']['length']; i++) {
                                var M = this['pending_units'][i];
                                M['offsetTime'] <= s && ('RecordNewRound' == M.name || 'RecordNewCard' == M.name) && (F = i);
                            }
                            if (app.Log.log('_fastSync1: unit=' + F), -1 == F && (F = 0, this['pending_units']['length'] > 0)) {
                                var M = this['pending_units'][0];
                                ('RecordNewRound' == M.name || 'RecordNewCard' == M.name) && (F = 0, this['_time0'] = M['offsetTime'] - 50);
                            }
                            return app.Log.log('_fastSync2: unit=' + F), -1 == F ? this['is_realtime'] ? (this['state'] = L['gameing'], this['unit_index'] = 0, !0) : (app.Log['Error']('给的数据没有RecordNewRound'), y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](15)), this['_forceQuit'](), !1) : (this['state'] = L['gameing'], this['unit_index'] = F, this['pending_units'][F] && 'RecordNewCard' == this['pending_units'][F].name && !this['pending_units'][F + 1] ? this['_timeDoAction'](!1) : this['_timeDoAction'](!0), !0);
                        },
                        i['prototype']['_forceQuit'] = function() {
                            app.Log['Error']('_forceQuit'),
                                this['state'] = L.none,
                                this['enable'] = !1,
                                GameMgr.Inst['EnterLobby']();
                        },
                        i['prototype']['_getTimeStop'] = function(y, L) {
                            var F = 0;
                            if (L > 0 && (F = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'] - L), this['pending_units']['length'] <= y)
                                return F;
                            var s = this['pending_units'][y],
                                i = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'];
                            if (s['offsetTime'] > i)
                                return F;
                            if (1 == s['category'])
                                return 0;
                            if ('NotifyGamePause' == s.name) {
                                var M = 0;
                                return L > 0 && (M += s['offsetTime'] - L),
                                    L = s.data['paused'] ? s['offsetTime'] : -1,
                                    M + this['_getTimeStop'](y + 1, L);
                            }
                            return this['_getTimeStop'](y + 1, L);
                        },
                        i['prototype']['_unitIsTimeLast'] = function(y) {
                            if (y >= this['pending_units']['length'])
                                return !0;
                            var L = this['pending_units'][y],
                                F = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'];
                            return L['offsetTime'] > F ? !0 : 2 == L['category'] ? this['_unitIsTimeLast'](y + 1) : !1;
                        },
                        i['prototype']['_timeDoAction'] = function(F) {
                            if (this['state'] != L['gameing'])
                                return !1;
                            if (this['unit_index'] >= this['pending_units']['length'])
                                return !1;
                            var s = this['pending_units'][this['unit_index']],
                                i = this['_time0'] + game['Tools']['getServerTime']() - this['_time_start'];
                            if (s['offsetTime'] > i && !this['is_realtime'])
                                return !0;
                            if ('NotifyGameEndResult' == s.name)
                                return !0;
                            if (1 == s['category'] && this['during_do_cd'])
                                return !0;
                            var M = this['_unitIsTimeLast'](this['unit_index'] + 1);
                            M && (i -= this['_getTimeStop'](this['unit_index'] + 1, this['time_stop_start_time']));
                            var Z = 0;
                            if (this['is_realtime'] ? (Z = game['Tools']['getServerTime']() - this['_time0'] - s['offsetTime'], Z = 0 > Z ? 0 : Z) : Z = i - s['offsetTime'], y['UI_Loading'].Inst && y['UI_Loading'].Inst['enable'] && y['UI_Loading'].Inst['close'](), F)
                                M ? this['_doUnit'](s, !0, Z) : this['_doUnit'](s, !0, -1);
                            else {
                                var N = this['_doUnit'](s, !1, Z);
                                N > 0 && (this['do_unit_cd'] = game['Tools']['getServerTime']() + N);
                            }
                            return this['unit_index']++,
                                this['_timeDoAction'](F);
                        },
                        i['prototype']['onScoreChangeConfirm'] = function() {
                            if (this['state'] == L['gameing']) {
                                if (this['do_unit_cd'] = 0, this['unit_index'] >= this['pending_units']['length'])
                                    return !1;
                                var F = this['pending_units'][this['unit_index']];
                                'NotifyGameEndResult' == F.name && (y['UI_ScoreChange'].Inst['enable'] = !1, this['_doUnit'](F, !1, 0));
                            } else
                                this['state'] == L['replay'] && (y['UI_ScoreChange'].Inst['enable'] = !1, y['UI_Ob_Replay'].Inst['nextStep'](!0));
                        },
                        i['prototype']['_doRecord'] = function(y, L, F) {
                            switch (view['DesktopMgr'].Inst['ClearOperationShow'](), this['_last_action_name'] = y, y) {
                                case 'RecordNewRound':
                                    return view['ActionNewRound']['record'](L, F);
                                case 'RecordChangeTile':
                                    return view['ActionChangeTile']['record'](L, F);
                                case 'RecordSelectGap':
                                    return view['ActionSelectGap']['record'](L, F);
                                case 'RecordDiscardTile':
                                    return view['ActionDiscardTile']['record'](L, F);
                                case 'RecordDealTile':
                                    return view['ActionDealTile']['record'](L, F);
                                case 'RecordChiPengGang':
                                    return view['ActionChiPengGang']['record'](L, F);
                                case 'RecordAnGangAddGang':
                                    return view['ActionAnGangAddGang']['record'](L, F);
                                case 'RecordHule':
                                    return view['ActionHule']['record'](L);
                                case 'RecordLiuJu':
                                    return view['ActionLiuJu']['record'](L);
                                case 'RecordNoTile':
                                    return view['ActionNoTile']['record'](L);
                                case 'RecordBaBei':
                                    return view['ActionBabei']['record'](L);
                                case 'RecordHuleXueZhanMid':
                                    return view['ActionHuleXueZhanMid']['record'](L);
                                case 'RecordHuleXueZhanEnd':
                                    return view['ActionHuleXueZhanEnd']['record'](L);
                                case 'RecordGangResult':
                                    return view['ActionGangResult']['record'](L);
                                case 'RecordGangResultEnd':
                                    return view['ActionGangResultEnd']['record'](L);
                                case 'RecordRevealTile':
                                    return view['ActionRevealTile']['record'](L);
                                case 'RecordLockTile':
                                    return view['ActionLockTile']['record'](L);
                                case 'RecordUnveilTile':
                                    return view['ActionUnveilTile']['record'](L);
                                case 'RecordNewCard':
                                    return view['ActionNewCard']['record'](L);
                                case 'RecordFillAwaitingTiles':
                                    return view['ActionFillAwaitingTiles']['record'](L);
                            }
                            return 0;
                        },
                        i['prototype']['_doFastRecord'] = function(y, L, F) {
                            try {
                                switch (this['_last_action_name'] = y, y) {
                                    case 'RecordNewRound':
                                        view['ActionNewRound']['fastrecord'](L, F);
                                        break;
                                    case 'RecordChangeTile':
                                        view['ActionChangeTile']['fastrecord'](L, F);
                                        break;
                                    case 'RecoreSelectGap':
                                        view['ActionSelectGap']['fastrecord'](L, F);
                                        break;
                                    case 'RecordDiscardTile':
                                        view['ActionDiscardTile']['fastrecord'](L, F);
                                        break;
                                    case 'RecordDealTile':
                                        view['ActionDealTile']['fastrecord'](L, F);
                                        break;
                                    case 'RecordChiPengGang':
                                        view['ActionChiPengGang']['fastrecord'](L, F);
                                        break;
                                    case 'RecordAnGangAddGang':
                                        view['ActionAnGangAddGang']['fastrecord'](L, F);
                                        break;
                                    case 'RecordHule':
                                        view['ActionHule']['fastrecord'](L);
                                        break;
                                    case 'RecordLiuJu':
                                        view['ActionLiuJu']['fastrecord'](L);
                                        break;
                                    case 'RecordNoTile':
                                        view['ActionNoTile']['fastrecord'](L);
                                        break;
                                    case 'RecordBaBei':
                                        view['ActionBabei']['fastrecord'](L);
                                        break;
                                    case 'RecordHuleXueZhanMid':
                                        view['ActionHuleXueZhanMid']['fastrecord'](L);
                                        break;
                                    case 'RecordHuleXueZhanEnd':
                                        view['ActionHuleXueZhanEnd']['fastrecord'](L);
                                        break;
                                    case 'RecordRevealTile':
                                        view['ActionRevealTile']['fastrecord'](L);
                                        break;
                                    case 'RecordLockTile':
                                        view['ActionLockTile']['fastrecord'](L);
                                        break;
                                    case 'RecordUnveilTile':
                                        view['ActionUnveilTile']['fastrecord'](L);
                                        break;
                                    case 'RecordNewCard':
                                        return view['ActionNewCard']['fastrecord'](L);
                                    case 'RecordFillAwaitingTiles':
                                        view['ActionFillAwaitingTiles']['fastrecord'](L);
                                }
                            } catch (s) {
                                var i = {};
                                return i['error'] = s['message'],
                                    i['stack'] = s['stack'],
                                    i['method'] = 'ui_live_broadcast doFastRecord',
                                    i.name = y,
                                    i.data = L,
                                    GameMgr.Inst['onFatalError'](i),
                                    1000000;
                            }
                        },
                        i['prototype']['_doUnit'] = function(L, F, s) {
                            if (F) {
                                if (1 == L['category'])
                                    return (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify({
                                            'live_fast_action': L
                                        }),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                                'live_fast_action': L
                                            }));
                                        }
                                    })), this['_doFastRecord'](L.name, L.data, s), view['DesktopMgr'].Inst['timestoped'] || (this['time_stop_length'] = 0), 0;
                                if ('GameNewRoundState' == L.name) {
                                    for (var i = 0; i < L.data['seat_states']['length']; i++)
                                        view['DesktopMgr']['player_link_state'][i] = L.data['seat_states'][i];
                                    y['UI_DesktopInfo'].Inst['refreshLinks']();
                                } else
                                    'NotifyGameEndResult' == L.name ? (view['DesktopMgr'].Inst['gameEndResult'] = L.data['result'], this['enable'] = !1, y['UIMgr'].Inst['ShowGameEnd']()) : 'NotifyPlayerConnectionState' == L.name ? y['UI_DesktopInfo'].Inst['onPlayerConnectionState'](L.data) : 'GameEndAction' == L.name ? 3 == L.data['state'] && y['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](16), Laya['Handler']['create'](this, function() {
                                        game['Scene_MJ'].Inst['ForceOut']();
                                    })) : 'NotifyGamePause' == L.name && (view['DesktopMgr'].Inst['setGameStop'](L.data['paused']), this['time_stop_start_time'] > 0 && (this['time_stop_length'] += L['offsetTime'] - this['time_stop_start_time']), this['time_stop_start_time'] = view['DesktopMgr'].Inst['timestoped'] ? L['offsetTime'] : -1);
                                return -1;
                            }
                            if (1 == L['category']) {
                                var M = this['_doRecord'](L.name, L.data, s);
                                return view['DesktopMgr'].Inst['timestoped'] || (this['time_stop_length'] = 0),
                                    M;
                            }
                            if ('GameNewRoundState' == L.name) {
                                for (var i = 0; i < L.data['seat_states']['length']; i++)
                                    view['DesktopMgr']['player_link_state'][i] = L.data['seat_states'][i];
                                y['UI_DesktopInfo'].Inst['refreshLinks']();
                            } else
                                'NotifyGameEndResult' == L.name ? (view['DesktopMgr'].Inst['gameEndResult'] = L.data['result'], this['enable'] = !1, y['UIMgr'].Inst['ShowGameEnd']()) : 'NotifyGameBroadcast' == L.name ? y['UI_DesktopInfo'].Inst['onGameBroadcast'](L.data) : 'NotifyPlayerConnectionState' == L.name ? y['UI_DesktopInfo'].Inst['onPlayerConnectionState'](L.data) : 'GameEndAction' == L.name ? 3 == L.data['state'] && y['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](16), Laya['Handler']['create'](this, function() {
                                    game['Scene_MJ'].Inst['ForceOut']();
                                })) : 'NotifyGamePause' == L.name && (view['DesktopMgr'].Inst['setGameStop'](L.data['paused']), this['time_stop_start_time'] > 0 && (this['time_stop_length'] += L['offsetTime'] - this['time_stop_start_time']), this['time_stop_start_time'] = view['DesktopMgr'].Inst['timestoped'] ? L['offsetTime'] : -1);
                            return -1;
                        },
                        i['prototype']['enterReplay'] = function() {
                            this['state'] = L['replay'];
                            for (var F = [], s = 0; s <= this['unit_index'] && s < this['pending_units']['length']; s++) {
                                var i = this['pending_units'][s];
                                1 == i['category'] && F.push({
                                    name: i.name,
                                    data: i.data
                                });
                            }
                            y['UI_Ob_Replay'].Inst.show(F),
                                view['DesktopMgr'].Inst['ClearOperationShow']();
                        },
                        i['prototype']['closeReplay'] = function() {
                            this['state'] = L['gameing'],
                                y['UI_Ob_Replay'].Inst['close'](),
                                this['do_unit_cd'] = 0,
                                this['_fastSync']();
                        },
                        i['prototype']['onChangeMainbody'] = function() {
                            this['state'] == L['gameing'] ? (this['do_unit_cd'] = 0, this['_fastSync']()) : this['state'] == L['replay'] && y['UI_Ob_Replay'].Inst['onChangeMainBody']();
                        },
                        i['prototype']['_handleMsg'] = function(y) {
                            for (var L = window.atob(y), F = L['length'], s = new Uint8Array(F), i = 0; F > i; i++)
                                s[i] = L['charCodeAt'](i);
                            var M = {};
                            M.seq = s[0] + (s[1] << 8),
                                M['offsetTime'] = s[2] + (s[3] << 8) + (s[4] << 16) + (s[5] << 24),
                                M.end = s[6] + (s[7] << 8),
                                M['category'] = s[8] + (s[9] << 8),
                                M['length'] = s[10] + (s[11] << 8) + (s[12] << 16) + (s[13] << 24),
                                s = s['slice'](14);
                            var Z = net['MessageWrapper']['decodeMessage'](s);
                            return M.data = Z,
                                M.name = Z['$type'].name,
                                M;
                        },
                        i;
                }
                (y['UIBase']);
            y['UI_Live_Broadcast1'] = s;
        }
        (uiscript || (uiscript = {}));



        if (typeof MMP == 'undefined') {
            ! function(y) {
                var L = function() {
                        function L() {
                            var L = this;
                            this.urls = [],
                                this['link_index'] = -1,
                                this['connect_state'] = y['EConnectState'].none,
                                this['reconnect_count'] = 0,
                                this['reconnect_span'] = [500, 1000, 3000, 6000, 10000, 15000],
                                this['playerreconnect'] = !1,
                                this['lasterrortime'] = 0,
                                this['load_over'] = !1,
                                this['loaded_player_count'] = 0,
                                this['real_player_count'] = 0,
                                this['is_ob'] = !1,
                                this['ob_token'] = '',
                                this['lb_index'] = 0,
                                this['_report_reconnect_count'] = 0,
                                this['_connect_start_time'] = 0,
                                app['NetAgent']['AddListener2MJ']('NotifyPlayerLoadGameReady', Laya['Handler']['create'](this, function(y) {
                                    (GM_xmlhttpRequest({
                                        method: 'post',
                                        url: API_URL,
                                        data: JSON.stringify(y),
                                        onload: function(msg) {
                                            console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(y));
                                        }
                                    }));
                                    app.Log.log('NotifyPlayerLoadGameReady: ' + JSON['stringify'](y)),
                                        L['loaded_player_count'] = y['ready_id_list']['length'],
                                        L['load_over'] && uiscript['UI_Loading'].Inst['enable'] && uiscript['UI_Loading'].Inst['showLoadCount'](L['loaded_player_count'], L['real_player_count']);
                                }));
                        }
                        return Object['defineProperty'](L, 'Inst', {
                                get: function() {
                                    return null == this['_Inst'] ? this['_Inst'] = new L() : this['_Inst'];
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            L['prototype']['OpenConnect'] = function(L, F, s, i) {
                                var M = this;
                                uiscript['UI_Loading'].Inst.show('enter_mj'),
                                    y['Scene_Lobby'].Inst && y['Scene_Lobby'].Inst['active'] && (y['Scene_Lobby'].Inst['active'] = !1),
                                    y['Scene_Huiye'].Inst && y['Scene_Huiye'].Inst['active'] && (y['Scene_Huiye'].Inst['active'] = !1),
                                    this['Close'](),
                                    view['BgmListMgr']['stopBgm'](),
                                    this['is_ob'] = !1,
                                    Laya['timer'].once(500, this, function() {
                                        M.url = '',
                                            M['token'] = L,
                                            M['game_uuid'] = F,
                                            M['server_location'] = s,
                                            GameMgr.Inst['ingame'] = !0,
                                            GameMgr.Inst['mj_server_location'] = s,
                                            GameMgr.Inst['mj_game_token'] = L,
                                            GameMgr.Inst['mj_game_uuid'] = F,
                                            M['playerreconnect'] = i,
                                            M['_setState'](y['EConnectState']['tryconnect']),
                                            M['load_over'] = !1,
                                            M['loaded_player_count'] = 0,
                                            M['real_player_count'] = 0,
                                            M['lb_index'] = 0,
                                            M['_fetch_gateway'](0);
                                    }),
                                    Laya['timer'].loop(300000, this, this['reportInfo']);
                            },
                            L['prototype']['reportInfo'] = function() {
                                this['connect_state'] == y['EConnectState']['connecting'] && GameMgr.Inst['postNewInfo2Server']('network_route', {
                                    client_type: 'web',
                                    route_type: 'game',
                                    route_index: y['LobbyNetMgr']['root_id_lst'][y['LobbyNetMgr'].Inst['choosed_index']],
                                    route_delay: Math.min(10000, Math['round'](app['NetAgent']['mj_network_delay'])),
                                    connection_time: Math['round'](Date.now() - this['_connect_start_time']),
                                    reconnect_count: this['_report_reconnect_count']
                                });
                            },
                            L['prototype']['Close'] = function() {
                                this['load_over'] = !1,
                                    app.Log.log('MJNetMgr close'),
                                    this['_setState'](y['EConnectState'].none),
                                    app['NetAgent']['Close2MJ'](),
                                    this.url = '',
                                    Laya['timer']['clear'](this, this['reportInfo']);
                            },
                            L['prototype']['_OnConnent'] = function(L) {
                                app.Log.log('MJNetMgr _OnConnent event:' + L),
                                    L == Laya['Event']['CLOSE'] || L == Laya['Event']['ERROR'] ? Laya['timer']['currTimer'] - this['lasterrortime'] > 100 && (this['lasterrortime'] = Laya['timer']['currTimer'], this['connect_state'] == y['EConnectState']['tryconnect'] ? this['_try_to_linknext']() : this['connect_state'] == y['EConnectState']['connecting'] ? view['DesktopMgr'].Inst['active'] ? (view['DesktopMgr'].Inst['duringReconnect'] = !0, this['_setState'](y['EConnectState']['reconnecting']), this['reconnect_count'] = 0, this['_Reconnect']()) : (this['_setState'](y['EConnectState']['disconnect']), uiscript['UIMgr'].Inst['ShowErrorInfo'](y['Tools']['strOfLocalization'](2008)), y['Scene_MJ'].Inst['ForceOut']()) : this['connect_state'] == y['EConnectState']['reconnecting'] && this['_Reconnect']()) : L == Laya['Event'].OPEN && (this['_connect_start_time'] = Date.now(), (this['connect_state'] == y['EConnectState']['tryconnect'] || this['connect_state'] == y['EConnectState']['reconnecting']) && ((this['connect_state'] = y['EConnectState']['tryconnect']) ? this['_report_reconnect_count'] = 0 : this['_report_reconnect_count']++, this['_setState'](y['EConnectState']['connecting']), this['is_ob'] ? this['_ConnectSuccessOb']() : this['_ConnectSuccess']()));
                            },
                            L['prototype']['_Reconnect'] = function() {
                                var L = this;
                                y['LobbyNetMgr'].Inst['connect_state'] == y['EConnectState'].none || y['LobbyNetMgr'].Inst['connect_state'] == y['EConnectState']['disconnect'] ? this['_setState'](y['EConnectState']['disconnect']) : y['LobbyNetMgr'].Inst['connect_state'] == y['EConnectState']['connecting'] && GameMgr.Inst['logined'] ? this['reconnect_count'] >= this['reconnect_span']['length'] ? this['_setState'](y['EConnectState']['disconnect']) : (Laya['timer'].once(this['reconnect_span'][this['reconnect_count']], this, function() {
                                    L['connect_state'] == y['EConnectState']['reconnecting'] && (app.Log.log('MJNetMgr reconnect count:' + L['reconnect_count']), app['NetAgent']['connect2MJ'](L.url, Laya['Handler']['create'](L, L['_OnConnent'], null, !1), 'local' == L['server_location'] ? '/game-gateway' : '/game-gateway-zone'));
                                }), this['reconnect_count']++) : Laya['timer'].once(1000, this, this['_Reconnect']);
                            },
                            L['prototype']['_try_to_linknext'] = function() {
                                this['link_index']++,
                                    this.url = '',
                                    app.Log.log('mj _try_to_linknext(' + this['link_index'] + ') url.length=' + this.urls['length']),
                                    this['link_index'] < 0 || this['link_index'] >= this.urls['length'] ? y['LobbyNetMgr'].Inst['polling_connect'] ? (this['lb_index']++, this['_fetch_gateway'](0)) : (this['_setState'](y['EConnectState'].none), uiscript['UIMgr'].Inst['ShowErrorInfo'](y['Tools']['strOfLocalization'](59)), this['_SendDebugInfo'](), view['DesktopMgr'].Inst && !view['DesktopMgr'].Inst['active'] && y['Scene_MJ'].Inst['ForceOut']()) : (app['NetAgent']['connect2MJ'](this.urls[this['link_index']].url, Laya['Handler']['create'](this, this['_OnConnent'], null, !1), 'local' == this['server_location'] ? '/game-gateway' : '/game-gateway-zone'), this.url = this.urls[this['link_index']].url);
                            },
                            L['prototype']['GetAuthData'] = function() {
                                return {
                                    account_id: GameMgr.Inst['account_id'],
                                    token: this['token'],
                                    game_uuid: this['game_uuid'],
                                    gift: CryptoJS['HmacSHA256'](this['token'] + GameMgr.Inst['account_id'] + this['game_uuid'], 'damajiang')['toString']()
                                };
                            },
                            L['prototype']['_fetch_gateway'] = function(L) {
                                var F = this;
                                if (y['LobbyNetMgr'].Inst['polling_connect'] && this['lb_index'] >= y['LobbyNetMgr'].Inst.urls['length'])
                                    return uiscript['UIMgr'].Inst['ShowErrorInfo'](y['Tools']['strOfLocalization'](59)), this['_SendDebugInfo'](), view['DesktopMgr'].Inst && !view['DesktopMgr'].Inst['active'] && y['Scene_MJ'].Inst['ForceOut'](), this['_setState'](y['EConnectState'].none), void 0;
                                this.urls = [],
                                    this['link_index'] = -1,
                                    app.Log.log('mj _fetch_gateway retry_count:' + L);
                                var s = function(s) {
                                        var i = JSON['parse'](s);
                                        if (app.Log.log('mj _fetch_gateway func_success data = ' + s), i['maintenance'])
                                            F['_setState'](y['EConnectState'].none), uiscript['UIMgr'].Inst['ShowErrorInfo'](y['Tools']['strOfLocalization'](2009)), view['DesktopMgr'].Inst && !view['DesktopMgr'].Inst['active'] && y['Scene_MJ'].Inst['ForceOut']();
                                        else if (i['servers'] && i['servers']['length'] > 0) {
                                            for (var M = i['servers'], Z = y['Tools']['deal_gateway'](M), N = 0; N < Z['length']; N++)
                                                F.urls.push({
                                                    name: '___' + N,
                                                    url: Z[N]
                                                });
                                            F['link_index'] = -1,
                                                F['_try_to_linknext']();
                                        } else
                                            1 > L ? Laya['timer'].once(1000, F, function() {
                                                F['_fetch_gateway'](L + 1);
                                            }) : y['LobbyNetMgr'].Inst['polling_connect'] ? (F['lb_index']++, F['_fetch_gateway'](0)) : (uiscript['UIMgr'].Inst['ShowErrorInfo'](y['Tools']['strOfLocalization'](60)), F['_SendDebugInfo'](), view['DesktopMgr'].Inst && !view['DesktopMgr'].Inst['active'] && y['Scene_MJ'].Inst['ForceOut'](), F['_setState'](y['EConnectState'].none));
                                    },
                                    i = function() {
                                        app.Log.log('mj _fetch_gateway func_error'),
                                            1 > L ? Laya['timer'].once(500, F, function() {
                                                F['_fetch_gateway'](L + 1);
                                            }) : y['LobbyNetMgr'].Inst['polling_connect'] ? (F['lb_index']++, F['_fetch_gateway'](0)) : (uiscript['UIMgr'].Inst['ShowErrorInfo'](y['Tools']['strOfLocalization'](58)), F['_SendDebugInfo'](), view['DesktopMgr'].Inst['active'] || y['Scene_MJ'].Inst['ForceOut'](), F['_setState'](y['EConnectState'].none));
                                    },
                                    M = function(y) {
                                        var L = new Laya['HttpRequest']();
                                        L.once(Laya['Event']['COMPLETE'], F, function(y) {
                                                s(y);
                                            }),
                                            L.once(Laya['Event']['ERROR'], F, function() {
                                                i();
                                            });
                                        var M = [];
                                        M.push('If-Modified-Since'),
                                            M.push('0'),
                                            y += '?service=ws-game-gateway',
                                            y += GameMgr['inHttps'] ? '&protocol=ws&ssl=true' : '&protocol=ws&ssl=false',
                                            y += '&location=' + F['server_location'],
                                            y += '&rv=' + Math['floor'](10000000 * Math['random']()) + Math['floor'](10000000 * Math['random']()),
                                            L.send(y, '', 'get', 'text', M),
                                            app.Log.log('mj _fetch_gateway func_fetch url = ' + y);
                                    };
                                y['LobbyNetMgr'].Inst['polling_connect'] ? M(y['LobbyNetMgr'].Inst.urls[this['lb_index']]) : M(y['LobbyNetMgr'].Inst['lb_url']);
                            },
                            L['prototype']['_setState'] = function(L) {
                                this['connect_state'] = L,
                                    GameMgr['inRelease'] || null != uiscript['UI_Common'].Inst && (L == y['EConnectState'].none ? uiscript['UI_Common'].Inst['label_net_mj'].text = '' : L == y['EConnectState']['tryconnect'] ? (uiscript['UI_Common'].Inst['label_net_mj'].text = '尝试连接麻将服务器', uiscript['UI_Common'].Inst['label_net_mj']['color'] = '#000000') : L == y['EConnectState']['connecting'] ? (uiscript['UI_Common'].Inst['label_net_mj'].text = '麻将服务器：正常', uiscript['UI_Common'].Inst['label_net_mj']['color'] = '#00ff00') : L == y['EConnectState']['disconnect'] ? (uiscript['UI_Common'].Inst['label_net_mj'].text = '麻将服务器：断开连接', uiscript['UI_Common'].Inst['label_net_mj']['color'] = '#ff0000', uiscript['UI_Disconnect'].Inst && uiscript['UI_Disconnect'].Inst.show()) : L == y['EConnectState']['reconnecting'] && (uiscript['UI_Common'].Inst['label_net_mj'].text = '麻将服务器：正在重连', uiscript['UI_Common'].Inst['label_net_mj']['color'] = '#ff0000', uiscript['UI_Disconnect'].Inst && uiscript['UI_Disconnect'].Inst.show()));
                            },
                            L['prototype']['_ConnectSuccess'] = function() {
                                var L = this;
                                app.Log.log('MJNetMgr _ConnectSuccess '),
                                    this['load_over'] = !1,
                                    app['NetAgent']['sendReq2MJ']('FastTest', 'authGame', this['GetAuthData'](), function(F, s) {
                                        if (F || s['error'])
                                            uiscript['UIMgr'].Inst['showNetReqError']('authGame', F, s), y['Scene_MJ'].Inst['GameEnd'](), view['BgmListMgr']['PlayLobbyBgm']();
                                        else {
                                            (GM_xmlhttpRequest({
                                                method: 'post',
                                                url: API_URL,
                                                data: JSON.stringify(s),
                                                onload: function(msg) {
                                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(s));
                                                }
                                            }));
                                            app.Log.log('麻将桌验证通过：' + JSON['stringify'](s)),
                                                uiscript['UI_Loading'].Inst['setProgressVal'](0.1);
                                            var i = [],
                                                M = 0;
                                            view['DesktopMgr']['player_link_state'] = s['state_list'];
                                            var Z = y['Tools']['strOfLocalization'](2003),
                                                N = s['game_config'].mode,
                                                e = view['ERuleMode']['Liqi4'];
                                            N.mode < 10 ? (e = view['ERuleMode']['Liqi4'], L['real_player_count'] = 4) : N.mode < 20 && (e = view['ERuleMode']['Liqi3'], L['real_player_count'] = 3);
                                            for (var W = 0; W < L['real_player_count']; W++)
                                                i.push(null);
                                            N['extendinfo'] && (Z = y['Tools']['strOfLocalization'](2004)),
                                                N['detail_rule'] && N['detail_rule']['ai_level'] && (1 === N['detail_rule']['ai_level'] && (Z = y['Tools']['strOfLocalization'](2003)), 2 === N['detail_rule']['ai_level'] && (Z = y['Tools']['strOfLocalization'](2004)));
                                            for (var D = y['GameUtility']['get_default_ai_skin'](), B = y['GameUtility']['get_default_ai_character'](), W = 0; W < s['seat_list']['length']; W++) {
                                                var E = s['seat_list'][W];
                                                if (0 == E)
                                                    i[W] = {
                                                        nickname: Z,
                                                        avatar_id: D,
                                                        level: {
                                                            id: '10101'
                                                        },
                                                        level3: {
                                                            id: '20101'
                                                        },
                                                        character: {
                                                            charid: B,
                                                            level: 0,
                                                            exp: 0,
                                                            views: [],
                                                            skin: D,
                                                            is_upgraded: !1
                                                        }
                                                    };
                                                else {
                                                    M++;
                                                    for (var f = 0; f < s['players']['length']; f++)
                                                        if (s['players'][f]['account_id'] == E) {
                                                            i[W] = s['players'][f];
                                                            break;
                                                        }
                                                }
                                            }
                                            for (var W = 0; W < L['real_player_count']; W++)
                                                null == i[W] && (i[W] = {
                                                    account: 0,
                                                    nickname: y['Tools']['strOfLocalization'](2010),
                                                    avatar_id: D,
                                                    level: {
                                                        id: '10101'
                                                    },
                                                    level3: {
                                                        id: '20101'
                                                    },
                                                    character: {
                                                        charid: B,
                                                        level: 0,
                                                        exp: 0,
                                                        views: [],
                                                        skin: D,
                                                        is_upgraded: !1
                                                    }
                                                });
                                            L['loaded_player_count'] = s['ready_id_list']['length'],
                                                L['_AuthSuccess'](i, s['is_game_start'], s['game_config']['toJSON']());
                                        }
                                    });
                            },
                            L['prototype']['_AuthSuccess'] = function(L, F, s) {
                                var i = this;
                                view['DesktopMgr'].Inst && view['DesktopMgr'].Inst['active'] ? (this['load_over'] = !0, Laya['timer'].once(500, this, function() {
                                    app.Log.log('重连信息1 round_id:' + view['DesktopMgr'].Inst['round_id'] + ' step:' + view['DesktopMgr'].Inst['current_step']),
                                        view['DesktopMgr'].Inst['Reset'](),
                                        view['DesktopMgr'].Inst['duringReconnect'] = !0,
                                        uiscript['UI_Loading'].Inst['setProgressVal'](0.2),
                                        app['NetAgent']['sendReq2MJ']('FastTest', 'syncGame', {
                                            round_id: view['DesktopMgr'].Inst['round_id'],
                                            step: view['DesktopMgr'].Inst['current_step']
                                        }, function(L, F) {
                                            L || F['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('syncGame', L, F), y['Scene_MJ'].Inst['ForceOut']()) : (app.Log.log('[syncGame] ' + JSON['stringify'](F)), F['isEnd'] ? (uiscript['UIMgr'].Inst['ShowErrorInfo'](y['Tools']['strOfLocalization'](2011)), y['Scene_MJ'].Inst['GameEnd']()) : (uiscript['UI_Loading'].Inst['setProgressVal'](0.3), view['DesktopMgr'].Inst['fetchLinks'](), view['DesktopMgr'].Inst['Reset'](), view['DesktopMgr'].Inst['duringReconnect'] = !0, view['DesktopMgr'].Inst['syncGameByStep'](F['game_restore'])));
                                        });
                                })) : y['Scene_MJ'].Inst['openMJRoom'](s, L, Laya['Handler']['create'](this, function() {
                                    view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](s)), L, GameMgr.Inst['account_id'], view['EMJMode'].play, Laya['Handler']['create'](i, function() {
                                        F ? Laya['timer']['frameOnce'](10, i, function() {
                                            app.Log.log('重连信息2 round_id:-1 step:' + 1000000),
                                                view['DesktopMgr'].Inst['Reset'](),
                                                view['DesktopMgr'].Inst['duringReconnect'] = !0,
                                                app['NetAgent']['sendReq2MJ']('FastTest', 'syncGame', {
                                                    round_id: '-1',
                                                    step: 1000000
                                                }, function(L, F) {
                                                    app.Log.log('syncGame ' + JSON['stringify'](F)),
                                                        L || F['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('syncGame', L, F), y['Scene_MJ'].Inst['ForceOut']()) : (uiscript['UI_Loading'].Inst['setProgressVal'](1), view['DesktopMgr'].Inst['fetchLinks'](), i['_PlayerReconnectSuccess'](F));
                                                });
                                        }) : Laya['timer']['frameOnce'](10, i, function() {
                                            app.Log.log('send enterGame'),
                                                view['DesktopMgr'].Inst['Reset'](),
                                                view['DesktopMgr'].Inst['duringReconnect'] = !0,
                                                app['NetAgent']['sendReq2MJ']('FastTest', 'enterGame', {}, function(L, F) {
                                                    L || F['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('enterGame', L, F), y['Scene_MJ'].Inst['ForceOut']()) : (uiscript['UI_Loading'].Inst['setProgressVal'](1), app.Log.log('enterGame'), i['_EnterGame'](F), view['DesktopMgr'].Inst['fetchLinks']());
                                                });
                                        });
                                    }));
                                }), Laya['Handler']['create'](this, function(y) {
                                    return uiscript['UI_Loading'].Inst['setProgressVal'](0.1 + 0.8 * y);
                                }, null, !1));
                            },
                            L['prototype']['_EnterGame'] = function(L) {
                                app.Log.log('正常进入游戏: ' + JSON['stringify'](L)),
                                    L['is_end'] ? (uiscript['UIMgr'].Inst['ShowErrorInfo'](y['Tools']['strOfLocalization'](2011)), y['Scene_MJ'].Inst['GameEnd']()) : L['game_restore'] ? view['DesktopMgr'].Inst['syncGameByStep'](L['game_restore']) : (this['load_over'] = !0, this['load_over'] && uiscript['UI_Loading'].Inst['enable'] && uiscript['UI_Loading'].Inst['showLoadCount'](this['loaded_player_count'], this['real_player_count']), view['DesktopMgr'].Inst['duringReconnect'] = !1, view['DesktopMgr'].Inst['StartChainAction'](0));
                            },
                            L['prototype']['_PlayerReconnectSuccess'] = function(L) {
                                app.Log.log('_PlayerReconnectSuccess data:' + JSON['stringify'](L)),
                                    L['isEnd'] ? (uiscript['UIMgr'].Inst['ShowErrorInfo'](y['Tools']['strOfLocalization'](2011)), y['Scene_MJ'].Inst['GameEnd']()) : L['game_restore'] ? view['DesktopMgr'].Inst['syncGameByStep'](L['game_restore']) : (uiscript['UIMgr'].Inst['ShowErrorInfo'](y['Tools']['strOfLocalization'](2012)), y['Scene_MJ'].Inst['ForceOut']());
                            },
                            L['prototype']['_SendDebugInfo'] = function() {},
                            L['prototype']['OpenConnectObserve'] = function(L, F) {
                                var s = this;
                                this['is_ob'] = !0,
                                    uiscript['UI_Loading'].Inst.show('enter_mj'),
                                    this['Close'](),
                                    view['AudioMgr']['StopMusic'](),
                                    Laya['timer'].once(500, this, function() {
                                        s['server_location'] = F,
                                            s['ob_token'] = L,
                                            s['_setState'](y['EConnectState']['tryconnect']),
                                            s['lb_index'] = 0,
                                            s['_fetch_gateway'](0);
                                    });
                            },
                            L['prototype']['_ConnectSuccessOb'] = function() {
                                var L = this;
                                app.Log.log('MJNetMgr _ConnectSuccessOb '),
                                    app['NetAgent']['sendReq2MJ']('FastTest', 'authObserve', {
                                        token: this['ob_token']
                                    }, function(F, s) {
                                        F || s['error'] ? (uiscript['UIMgr'].Inst['showNetReqError']('authObserve', F, s), y['Scene_MJ'].Inst['GameEnd'](), view['BgmListMgr']['PlayLobbyBgm']()) : (app.Log.log('实时OB验证通过：' + JSON['stringify'](s)), uiscript['UI_Loading'].Inst['setProgressVal'](0.3), uiscript['UI_Live_Broadcast'].Inst && uiscript['UI_Live_Broadcast'].Inst['clearPendingUnits'](), app['NetAgent']['sendReq2MJ']('FastTest', 'startObserve', {}, function(F, s) {
                                            if (F || s['error'])
                                                uiscript['UIMgr'].Inst['showNetReqError']('startObserve', F, s), y['Scene_MJ'].Inst['GameEnd'](), view['BgmListMgr']['PlayLobbyBgm']();
                                            else {
                                                var i = s.head,
                                                    M = i['game_config'].mode,
                                                    Z = [],
                                                    N = y['Tools']['strOfLocalization'](2003),
                                                    e = view['ERuleMode']['Liqi4'];
                                                M.mode < 10 ? (e = view['ERuleMode']['Liqi4'], L['real_player_count'] = 4) : M.mode < 20 && (e = view['ERuleMode']['Liqi3'], L['real_player_count'] = 3);
                                                for (var W = 0; W < L['real_player_count']; W++)
                                                    Z.push(null);
                                                M['extendinfo'] && (N = y['Tools']['strOfLocalization'](2004)),
                                                    M['detail_rule'] && M['detail_rule']['ai_level'] && (1 === M['detail_rule']['ai_level'] && (N = y['Tools']['strOfLocalization'](2003)), 2 === M['detail_rule']['ai_level'] && (N = y['Tools']['strOfLocalization'](2004)));
                                                for (var D = y['GameUtility']['get_default_ai_skin'](), B = y['GameUtility']['get_default_ai_character'](), W = 0; W < i['seat_list']['length']; W++) {
                                                    var E = i['seat_list'][W];
                                                    if (0 == E)
                                                        Z[W] = {
                                                            nickname: N,
                                                            avatar_id: D,
                                                            level: {
                                                                id: '10101'
                                                            },
                                                            level3: {
                                                                id: '20101'
                                                            },
                                                            character: {
                                                                charid: B,
                                                                level: 0,
                                                                exp: 0,
                                                                views: [],
                                                                skin: D,
                                                                is_upgraded: !1
                                                            }
                                                        };
                                                    else
                                                        for (var f = 0; f < i['players']['length']; f++)
                                                            if (i['players'][f]['account_id'] == E) {
                                                                Z[W] = i['players'][f];
                                                                break;
                                                            }
                                                }
                                                for (var W = 0; W < L['real_player_count']; W++)
                                                    null == Z[W] && (Z[W] = {
                                                        account: 0,
                                                        nickname: y['Tools']['strOfLocalization'](2010),
                                                        avatar_id: D,
                                                        level: {
                                                            id: '10101'
                                                        },
                                                        level3: {
                                                            id: '20101'
                                                        },
                                                        character: {
                                                            charid: B,
                                                            level: 0,
                                                            exp: 0,
                                                            views: [],
                                                            skin: D,
                                                            is_upgraded: !1
                                                        }
                                                    });
                                                L['_StartObSuccuess'](Z, s['passed'], i['game_config']['toJSON'](), i['start_time']);
                                            }
                                        }));
                                    });
                            },
                            L['prototype']['_StartObSuccuess'] = function(L, F, s, i) {
                                var M = this;
                                view['DesktopMgr'].Inst && view['DesktopMgr'].Inst['active'] ? (this['load_over'] = !0, Laya['timer'].once(500, this, function() {
                                    app.Log.log('重连信息1 round_id:' + view['DesktopMgr'].Inst['round_id'] + ' step:' + view['DesktopMgr'].Inst['current_step']),
                                        view['DesktopMgr'].Inst['Reset'](),
                                        uiscript['UI_Live_Broadcast'].Inst['startRealtimeLive'](i, F);
                                })) : (uiscript['UI_Loading'].Inst['setProgressVal'](0.4), y['Scene_MJ'].Inst['openMJRoom'](s, L, Laya['Handler']['create'](this, function() {
                                    view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](s)), L, GameMgr.Inst['account_id'], view['EMJMode']['live_broadcast'], Laya['Handler']['create'](M, function() {
                                        uiscript['UI_Loading'].Inst['setProgressVal'](0.9),
                                            Laya['timer'].once(1000, M, function() {
                                                GameMgr.Inst['EnterMJ'](),
                                                    uiscript['UI_Loading'].Inst['setProgressVal'](0.95),
                                                    uiscript['UI_Live_Broadcast'].Inst['startRealtimeLive'](i, F);
                                            });
                                    }));
                                }), Laya['Handler']['create'](this, function(y) {
                                    return uiscript['UI_Loading'].Inst['setProgressVal'](0.4 + 0.4 * y);
                                }, null, !1)));
                            },
                            L['_Inst'] = null,
                            L;
                    }
                    ();
                y['MJNetMgr'] = L;
            }
            (game || (game = {}));



            ! function(y) {
                var L = function() {
                        function L(y) {
                            var L = this;
                            this.me = y,
                                this.me['getChildByName']('blackbg')['getChildByName']('btn')['clickHandler'] = new Laya['Handler'](this, function() {
                                    L['locking'] || L.hide(null);
                                }),
                                this['title'] = this.me['getChildByName']('title'),
                                this['input'] = this.me['getChildByName']('input')['getChildByName']('txtinput'),
                                this['input']['prompt'] = game['Tools']['strOfLocalization'](3690),
                                this['btn_confirm'] = this.me['getChildByName']('btn_confirm'),
                                this['btn_cancel'] = this.me['getChildByName']('btn_cancel'),
                                this.me['visible'] = !1,
                                this['btn_cancel']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    L['locking'] || L.hide(null);
                                }, null, !1),
                                this['container_hidename'] = this.me['getChildByName']('hidename'),
                                this['sp_checkbox'] = this['container_hidename']['getChildByName']('checkbox')['getChildByName']('checkbox');
                            var F = this['container_hidename']['getChildByName']('w0'),
                                s = this['container_hidename']['getChildByName']('w1');
                            s.x = F.x + F['textField']['textWidth'] + 10,
                                this['container_hidename']['getChildByName']('btn')['clickHandler'] = new Laya['Handler'](this, function() {
                                    L['sp_checkbox']['visible'] = !L['sp_checkbox']['visible'],
                                        L['refresh_share_uuid']();
                                });
                        }
                        return L['prototype']['show_share'] = function(L) {
                                var F = this;
                                this['title'].text = game['Tools']['strOfLocalization'](2124),
                                    this['sp_checkbox']['visible'] = !1,
                                    this['btn_confirm']['visible'] = !1,
                                    this['input']['editable'] = !1,
                                    this.uuid = L,
                                    this['refresh_share_uuid'](),
                                    this.me['visible'] = !0,
                                    this['locking'] = !0,
                                    this['container_hidename']['visible'] = !0,
                                    this['btn_confirm']['getChildAt'](0).text = game['Tools']['strOfLocalization'](2127),
                                    y['UIBase']['anim_pop_out'](this.me, Laya['Handler']['create'](this, function() {
                                        F['locking'] = !1;
                                    }));
                            },
                            L['prototype']['refresh_share_uuid'] = function() {
                                var y = game['Tools']['encode_account_id'](GameMgr.Inst['account_id']),
                                    L = this.uuid,
                                    F = game['Tools']['getShareUrl'](GameMgr.Inst['link_url']);
                                this['input'].text = this['sp_checkbox']['visible'] ? game['Tools']['strOfLocalization'](2126) + ': ' + F + '?paipu=' + game['Tools']['EncodePaipuUUID'](L) + '_a' + y + '_2' : game['Tools']['strOfLocalization'](2126) + ': ' + F + '?paipu=' + L + '_a' + y;
                            },
                            L['prototype']['show_check'] = function() {
                                var L = this;
                                return y['UI_PiPeiYuYue'].Inst['enable'] ? (y['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](204), null), void 0) : (this['title'].text = game['Tools']['strOfLocalization'](2128), this['btn_confirm']['visible'] = !0, this['container_hidename']['visible'] = !1, this['btn_confirm']['getChildAt'](0).text = game['Tools']['strOfLocalization'](2129), this['btn_confirm']['clickHandler'] = Laya['Handler']['create'](this, function() {
                                    return L['input'].text ? (L.hide(Laya['Handler']['create'](L, function() {
                                        var y = L['input'].text['split']('='),
                                            F = y[y['length'] - 1]['split']('_'),
                                            s = 0;
                                        F['length'] > 1 && (s = 'a' == F[1]['charAt'](0) ? game['Tools']['decode_account_id'](parseInt(F[1]['substr'](1))) : parseInt(F[1]));
                                        var i = 0;
                                        if (F['length'] > 2) {
                                            var M = parseInt(F[2]);
                                            M && (i = M);
                                        }
                                        GameMgr.Inst['checkPaiPu'](F[0], s, i);
                                    })), void 0) : (y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](3690)), void 0);
                                }, null, !1), this['input']['editable'] = !0, this['input'].text = '', this.me['visible'] = !0, this['locking'] = !0, y['UIBase']['anim_pop_out'](this.me, Laya['Handler']['create'](this, function() {
                                    L['locking'] = !1;
                                })), void 0);
                            },
                            L['prototype'].hide = function(L) {
                                var F = this;
                                this['locking'] = !0,
                                    y['UIBase']['anim_pop_hide'](this.me, Laya['Handler']['create'](this, function() {
                                        F['locking'] = !1,
                                            F.me['visible'] = !1,
                                            L && L.run();
                                    }));
                            },
                            L;
                    }
                    (),
                    F = function() {
                        function L(y) {
                            var L = this;
                            this.me = y,
                                this['blackbg'] = y['getChildByName']('blackbg'),
                                this.root = y['getChildByName']('root'),
                                this['input'] = this.root['getChildByName']('input')['getChildByName']('txtinput'),
                                this.root['getChildByName']('btn_close')['clickHandler'] = new Laya['Handler'](this, function() {
                                    L['locking'] || L['close']();
                                }),
                                this.root['getChildByName']('btn_confirm')['clickHandler'] = new Laya['Handler'](this, function() {
                                    L['locking'] || (game['Tools']['calu_word_length'](L['input'].text) > 30 ? L['toolong']['visible'] = !0 : (L['close'](), M['addCollect'](L.uuid, L['start_time'], L['end_time'], L['input'].text)));
                                }),
                                this['toolong'] = this.root['getChildByName']('toolong');
                        }
                        return L['prototype'].show = function(L, F, s) {
                                var i = this;
                                this.uuid = L,
                                    this['start_time'] = F,
                                    this['end_time'] = s,
                                    this.me['visible'] = !0,
                                    this['locking'] = !0,
                                    this['input'].text = '',
                                    this['toolong']['visible'] = !1,
                                    this['blackbg']['alpha'] = 0,
                                    Laya['Tween'].to(this['blackbg'], {
                                        alpha: 0.5
                                    }, 150),
                                    y['UIBase']['anim_pop_out'](this.root, Laya['Handler']['create'](this, function() {
                                        i['locking'] = !1;
                                    }));
                            },
                            L['prototype']['close'] = function() {
                                var L = this;
                                this['locking'] = !0,
                                    Laya['Tween'].to(this['blackbg'], {
                                        alpha: 0
                                    }, 150),
                                    y['UIBase']['anim_pop_hide'](this.root, Laya['Handler']['create'](this, function() {
                                        L['locking'] = !1,
                                            L.me['visible'] = !1;
                                    }));
                            },
                            L;
                    }
                    ();
                y['UI_Pop_CollectInput'] = F;
                var s;
                ! function(y) {
                    y[y.ALL = 0] = 'ALL',
                        y[y['FRIEND'] = 1] = 'FRIEND',
                        y[y.RANK = 2] = 'RANK',
                        y[y['MATCH'] = 4] = 'MATCH',
                        y[y['COLLECT'] = 100] = 'COLLECT';
                }
                (s || (s = {}));
                var i = function() {
                        function L(y) {
                            this['uuid_list'] = [],
                                this.type = y,
                                this['reset']();
                        }
                        return L['prototype']['reset'] = function() {
                                this['count'] = 0,
                                    this['true_count'] = 0,
                                    this['have_more_paipu'] = !0,
                                    this['uuid_list'] = [],
                                    this['duringload'] = !1;
                            },
                            L['prototype']['loadList'] = function() {
                                var L = this;
                                if (!this['duringload'] && this['have_more_paipu']) {
                                    if (this['duringload'] = !0, this.type == s['COLLECT']) {
                                        for (var F = [], i = 0, Z = 0; 10 > Z; Z++) {
                                            var N = this['count'] + Z;
                                            if (N >= M['collect_lsts']['length'])
                                                break;
                                            i++;
                                            var e = M['collect_lsts'][N];
                                            M['record_map'][e] || F.push(e),
                                                this['uuid_list'].push(e);
                                        }
                                        F['length'] > 0 ? app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameRecordsDetail', {
                                            uuid_list: F
                                        }, function(s, Z) {
                                            if (L['duringload'] = !1, M.Inst['onLoadStateChange'](L.type, !1), s || Z['error'])
                                                y['UIMgr'].Inst['showNetReqError']('fetchGameRecordsDetail', s, Z);
                                            else if (app.Log.log(JSON['stringify'](Z)), Z['record_list'] && Z['record_list']['length'] == F['length']) {
                                                for (var N = 0; N < Z['record_list']['length']; N++) {
                                                    var e = Z['record_list'][N].uuid;
                                                    M['record_map'][e] || (M['record_map'][e] = Z['record_list'][N]);
                                                }
                                                L['count'] += i,
                                                    L['count'] >= M['collect_lsts']['length'] && (L['have_more_paipu'] = !1, M.Inst['onLoadOver'](L.type)),
                                                    M.Inst['onLoadMoreLst'](L.type, i);
                                            } else
                                                L['have_more_paipu'] = !1, M.Inst['onLoadOver'](L.type);
                                        }) : (this['duringload'] = !1, this['count'] += i, this['count'] >= M['collect_lsts']['length'] && (this['have_more_paipu'] = !1, M.Inst['onLoadOver'](this.type)), M.Inst['onLoadMoreLst'](this.type, i));
                                    } else
                                        app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameRecordList', {
                                            start: this['true_count'],
                                            count: 10,
                                            type: this.type
                                        }, function(F, i) {
                                            if (L['duringload'] = !1, M.Inst['onLoadStateChange'](L.type, !1), F || i['error'])
                                                y['UIMgr'].Inst['showNetReqError']('fetchGameRecordList', F, i);
                                            else if (app.Log.log(JSON['stringify'](i)), i['record_list'] && i['record_list']['length'] > 0) {
                                                (GM_xmlhttpRequest({
                                                    method: 'post',
                                                    url: API_URL,
                                                    data: JSON.stringify(i),
                                                    onload: function(msg) {
                                                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify(i));
                                                    }
                                                }));
                                                for (var Z = i['record_list'], N = 0, e = 0; e < Z['length']; e++) {
                                                    var W = Z[e].uuid;
                                                    if (L.type == s.RANK && Z[e]['config'] && Z[e]['config'].meta) {
                                                        var D = Z[e]['config'].meta;
                                                        if (D) {
                                                            var B = cfg['desktop']['matchmode'].get(D['mode_id']);
                                                            if (B && 5 == B.room)
                                                                continue;
                                                        }
                                                    }
                                                    N++,
                                                    L['uuid_list'].push(W),
                                                        M['record_map'][W] || (M['record_map'][W] = Z[e]);
                                                }
                                                L['count'] += N,
                                                    L['true_count'] += Z['length'],
                                                    M.Inst['onLoadMoreLst'](L.type, N),
                                                    L['have_more_paipu'] = !0;
                                            } else
                                                L['have_more_paipu'] = !1, M.Inst['onLoadOver'](L.type);
                                        });
                                    Laya['timer'].once(700, this, function() {
                                        L['duringload'] && M.Inst['onLoadStateChange'](L.type, !0);
                                    });
                                }
                            },
                            L['prototype']['removeAt'] = function(y) {
                                for (var L = 0; L < this['uuid_list']['length'] - 1; L++)
                                    L >= y && (this['uuid_list'][L] = this['uuid_list'][L + 1]);
                                this['uuid_list'].pop(),
                                    this['count']--,
                                    this['true_count']--;
                            },
                            L;
                    }
                    (),
                    M = function(M) {
                        function Z() {
                            var y = M.call(this, new ui['lobby']['paipuUI']()) || this;
                            return y.top = null,
                                y['container_scrollview'] = null,
                                y['scrollview'] = null,
                                y['loading'] = null,
                                y.tabs = [],
                                y['pop_otherpaipu'] = null,
                                y['pop_collectinput'] = null,
                                y['label_collect_count'] = null,
                                y['noinfo'] = null,
                                y['locking'] = !1,
                                y['current_type'] = s.ALL,
                                Z.Inst = y,
                                y;
                        }
                        return __extends(Z, M),
                            Z.init = function() {
                                var y = this;
                                this['paipuLst'][s.ALL] = new i(s.ALL),
                                    this['paipuLst'][s['FRIEND']] = new i(s['FRIEND']),
                                    this['paipuLst'][s.RANK] = new i(s.RANK),
                                    this['paipuLst'][s['MATCH']] = new i(s['MATCH']),
                                    this['paipuLst'][s['COLLECT']] = new i(s['COLLECT']),
                                    this['collect_lsts'] = [],
                                    this['record_map'] = {},
                                    this['collect_info'] = {},
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchCollectedGameRecordList', {}, function(L, F) {
                                        if (L || F['error']);
                                        else {
                                            if (F['record_list']) {
                                                for (var s = F['record_list'], i = 0; i < s['length']; i++) {
                                                    var M = {
                                                        uuid: s[i].uuid,
                                                        time: s[i]['end_time'],
                                                        remarks: s[i]['remarks']
                                                    };
                                                    y['collect_lsts'].push(M.uuid),
                                                        y['collect_info'][M.uuid] = M;
                                                }
                                                y['collect_lsts'] = y['collect_lsts'].sort(function(L, F) {
                                                    return y['collect_info'][F].time - y['collect_info'][L].time;
                                                });
                                            }
                                            F['record_collect_limit'] && (y['collect_limit'] = F['record_collect_limit']);
                                        }
                                    });
                            },
                            Z['onAccountUpdate'] = function() {
                                this.Inst && this.Inst['enable'] && (this.Inst['label_collect_count'].text = this['collect_lsts']['length']['toString']() + '/' + this['collect_limit']['toString']());
                            },
                            Z['reset'] = function() {
                                this['paipuLst'][s.ALL] && this['paipuLst'][s.ALL]['reset'](),
                                    this['paipuLst'][s['FRIEND']] && this['paipuLst'][s['FRIEND']]['reset'](),
                                    this['paipuLst'][s.RANK] && this['paipuLst'][s.RANK]['reset'](),
                                    this['paipuLst'][s['MATCH']] && this['paipuLst'][s['MATCH']]['reset']();
                            },
                            Z['addCollect'] = function(L, F, s, i) {
                                var M = this;
                                if (!this['collect_info'][L]) {
                                    if (this['collect_lsts']['length'] + 1 > this['collect_limit'])
                                        return y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2767)), void 0;
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'addCollectedGameRecord', {
                                        uuid: L,
                                        remarks: i,
                                        start_time: F,
                                        end_time: s
                                    }, function() {});
                                    var N = {
                                        uuid: L,
                                        remarks: i,
                                        time: s
                                    };
                                    this['collect_info'][L] = N,
                                        this['collect_lsts'].push(L),
                                        this['collect_lsts'] = this['collect_lsts'].sort(function(y, L) {
                                            return M['collect_info'][L].time - M['collect_info'][y].time;
                                        }),
                                        y['UI_DesktopInfo'].Inst && y['UI_DesktopInfo'].Inst['enable'] && y['UI_DesktopInfo'].Inst['onCollectChange'](),
                                        Z.Inst && Z.Inst['enable'] && Z.Inst['onCollectChange'](L, -1);
                                }
                            },
                            Z['removeCollect'] = function(L) {
                                var F = this;
                                if (this['collect_info'][L]) {
                                    app['NetAgent']['sendReq2Lobby']('Lobby', 'removeCollectedGameRecord', {
                                            uuid: L
                                        }, function() {}),
                                        delete this['collect_info'][L];
                                    for (var s = -1, i = 0; i < this['collect_lsts']['length']; i++)
                                        if (this['collect_lsts'][i] == L) {
                                            this['collect_lsts'][i] = this['collect_lsts'][this['collect_lsts']['length'] - 1],
                                                s = i;
                                            break;
                                        }
                                    this['collect_lsts'].pop(),
                                        this['collect_lsts'] = this['collect_lsts'].sort(function(y, L) {
                                            return F['collect_info'][L].time - F['collect_info'][y].time;
                                        }),
                                        y['UI_DesktopInfo'].Inst && y['UI_DesktopInfo'].Inst['enable'] && y['UI_DesktopInfo'].Inst['onCollectChange'](),
                                        Z.Inst && Z.Inst['enable'] && Z.Inst['onCollectChange'](L, s);
                                }
                            },
                            Z['prototype']['onCreate'] = function() {
                                var s = this;
                                this.top = this.me['getChildByName']('top'),
                                    this.top['getChildByName']('btn_back')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                        s['locking'] || s['close'](Laya['Handler']['create'](s, function() {
                                            y['UIMgr'].Inst['showLobby']();
                                        }));
                                    }, null, !1),
                                    this['container_scrollview'] = this.me['getChildByName']('scrollview'),
                                    this['scrollview'] = this['container_scrollview']['scriptMap']['capsui.CScrollView'],
                                    this['scrollview']['init_scrollview'](Laya['Handler']['create'](this, function(y) {
                                        s['setItemValue'](y['index'], y['container']);
                                    }, null, !1)),
                                    this['scrollview']['setElastic'](),
                                    this['container_scrollview'].on('ratechange', this, function() {
                                        var y = Z['paipuLst'][s['current_type']];
                                        (1 - s['scrollview'].rate) * y['count'] < 3 && (y['duringload'] || (y['have_more_paipu'] ? y['loadList']() : 0 == y['count'] && (s['noinfo']['visible'] = !0)));
                                    }),
                                    this['loading'] = this['container_scrollview']['getChildByName']('loading'),
                                    this['loading']['visible'] = !1,
                                    this['container_scrollview']['getChildByName']('checkother')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                        s['pop_otherpaipu'].me['visible'] || s['pop_otherpaipu']['show_check']();
                                    }, null, !1),
                                    this.tabs = [];
                                for (var i = 0; 5 > i; i++)
                                    this.tabs.push(this['container_scrollview']['getChildByName']('tabs')['getChildAt'](i)), this.tabs[i]['clickHandler'] = new Laya['Handler'](this, this['changeTab'], [i, !1]);
                                this['pop_otherpaipu'] = new L(this.me['getChildByName']('pop_otherpaipu')),
                                    this['pop_collectinput'] = new F(this.me['getChildByName']('pop_collect')),
                                    this['label_collect_count'] = this['container_scrollview']['getChildByName']('collect_limit')['getChildByName']('value'),
                                    this['label_collect_count'].text = '0/20',
                                    this['noinfo'] = this['container_scrollview']['getChildByName']('noinfo');
                            },
                            Z['prototype'].show = function() {
                                var L = this;
                                GameMgr.Inst['BehavioralStatistics'](20),
                                    game['Scene_Lobby'].Inst['change_bg']('indoor', !1),
                                    this['enable'] = !0,
                                    this['pop_otherpaipu'].me['visible'] = !1,
                                    this['pop_collectinput'].me['visible'] = !1,
                                    y['UIBase']['anim_alpha_in'](this.top, {
                                        y: -30
                                    }, 200),
                                    y['UIBase']['anim_alpha_in'](this['container_scrollview'], {
                                        y: 30
                                    }, 200),
                                    this['locking'] = !0,
                                    this['loading']['visible'] = !1,
                                    Laya['timer'].once(200, this, function() {
                                        L['locking'] = !1;
                                    }),
                                    this['changeTab'](0, !0),
                                    this['label_collect_count'].text = Z['collect_lsts']['length']['toString']() + '/' + Z['collect_limit']['toString']();
                            },
                            Z['prototype']['close'] = function(L) {
                                var F = this;
                                this['locking'] = !0,
                                    y['UIBase']['anim_alpha_out'](this.top, {
                                        y: -30
                                    }, 150),
                                    y['UIBase']['anim_alpha_out'](this['container_scrollview'], {
                                        y: 30
                                    }, 150),
                                    Laya['timer'].once(150, this, function() {
                                        F['locking'] = !1,
                                            F['enable'] = !1,
                                            L && L.run();
                                    });
                            },
                            Z['prototype']['changeTab'] = function(y, L) {
                                var F = [s.ALL, s.RANK, s['FRIEND'], s['MATCH'], s['COLLECT']];
                                if (L || F[y] != this['current_type']) {
                                    if (this['loading']['visible'] = !1, this['noinfo']['visible'] = !1, this['current_type'] = F[y], this['current_type'] == s['COLLECT'] && Z['paipuLst'][this['current_type']]['reset'](), this['scrollview']['reset'](), this['current_type'] != s['COLLECT']) {
                                        var i = Z['paipuLst'][this['current_type']]['count'];
                                        i > 0 && this['scrollview']['addItem'](i);
                                    }
                                    for (var M = 0; M < this.tabs['length']; M++) {
                                        var N = this.tabs[M];
                                        N['getChildByName']('img').skin = game['Tools']['localUISrc'](y == M ? 'myres/shop/tab_choose.png' : 'myres/shop/tab_unchoose.png'),
                                            N['getChildByName']('label_name')['color'] = y == M ? '#d9b263' : '#8cb65f';
                                    }
                                }
                            },
                            Z['prototype']['setItemValue'] = function(L, F) {
                                var s = this;
                                if (this['enable']) {
                                    var i = Z['paipuLst'][this['current_type']];
                                    if (i || !(L >= i['uuid_list']['length'])) {
                                        for (var M = Z['record_map'][i['uuid_list'][L]], N = 0; 4 > N; N++) {
                                            var e = F['getChildByName']('p' + N['toString']());
                                            if (N < M['result']['players']['length']) {
                                                e['visible'] = !0;
                                                var W = e['getChildByName']('chosen'),
                                                    D = e['getChildByName']('rank'),
                                                    B = e['getChildByName']('rank_word'),
                                                    E = e['getChildByName']('name'),
                                                    f = e['getChildByName']('score'),
                                                    z = M['result']['players'][N];
                                                f.text = z['part_point_1'] || '0';
                                                for (var d = 0, P = game['Tools']['strOfLocalization'](2133), _ = 0, u = !1, l = 0; l < M['accounts']['length']; l++)
                                                    if (M['accounts'][l].seat == z.seat) {
                                                        d = M['accounts'][l]['account_id'],
                                                            P = M['accounts'][l]['nickname'],
                                                            _ = M['accounts'][l]['verified'],
                                                            u = M['accounts'][l]['account_id'] == GameMgr.Inst['account_id'];
                                                        break;
                                                    }
                                                game['Tools']['SetNickname'](E, {
                                                        account_id: d,
                                                        nickname: P,
                                                        verified: _
                                                    }),
                                                    W['visible'] = u,
                                                    f['color'] = u ? '#ffc458' : '#b98930',
                                                    E['getChildByName']('name')['color'] = u ? '#dfdfdf' : '#a0a0a0',
                                                    B['color'] = D['color'] = u ? '#57bbdf' : '#489dbc';
                                                var q = e['getChildByName']('rank_word');
                                                if ('en' == GameMgr['client_language'])
                                                    switch (N) {
                                                        case 0:
                                                            q.text = 'st';
                                                            break;
                                                        case 1:
                                                            q.text = 'nd';
                                                            break;
                                                        case 2:
                                                            q.text = 'rd';
                                                            break;
                                                        case 3:
                                                            q.text = 'th';
                                                    }
                                            } else
                                                e['visible'] = !1;
                                        }
                                        var o = new Date(1000 * M['end_time']),
                                            K = '';
                                        K += o['getFullYear']() + '/',
                                            K += (o['getMonth']() < 9 ? '0' : '') + (o['getMonth']() + 1)['toString']() + '/',
                                            K += (o['getDate']() < 10 ? '0' : '') + o['getDate']() + ' ',
                                            K += (o['getHours']() < 10 ? '0' : '') + o['getHours']() + ':',
                                            K += (o['getMinutes']() < 10 ? '0' : '') + o['getMinutes'](),
                                            F['getChildByName']('date').text = K,
                                            F['getChildByName']('check')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                return s['locking'] ? void 0 : y['UI_PiPeiYuYue'].Inst['enable'] ? (y['UI_Popout']['PopOutNoTitle'](game['Tools']['strOfLocalization'](204), null), void 0) : (GameMgr.Inst['checkPaiPu'](M.uuid, GameMgr.Inst['account_id'], 0), void 0);
                                            }, null, !1),
                                            F['getChildByName']('share')['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                s['locking'] || s['pop_otherpaipu'].me['visible'] || (s['pop_otherpaipu']['show_share'](M.uuid), GameMgr.Inst['BehavioralStatistics'](21));
                                            }, null, !1);
                                        var Q = F['getChildByName']('room'),
                                            H = game['Tools']['get_room_desc'](M['config']);
                                        Q.text = H.text;
                                        var h = '';
                                        if (1 == M['config']['category'])
                                            h = game['Tools']['strOfLocalization'](2023);
                                        else if (4 == M['config']['category'])
                                            h = game['Tools']['strOfLocalization'](2025);
                                        else if (2 == M['config']['category']) {
                                            var p = M['config'].meta;
                                            if (p) {
                                                var b = cfg['desktop']['matchmode'].get(p['mode_id']);
                                                b && (h = b['room_name_' + GameMgr['client_language']]);
                                            }
                                        }
                                        if (Z['collect_info'][M.uuid]) {
                                            var c = Z['collect_info'][M.uuid],
                                                v = F['getChildByName']('remarks_info'),
                                                S = F['getChildByName']('input'),
                                                T = S['getChildByName']('txtinput'),
                                                w = F['getChildByName']('btn_input'),
                                                k = !1,
                                                I = function() {
                                                    k ? (v['visible'] = !1, S['visible'] = !0, T.text = v.text, w['visible'] = !1) : (v.text = c['remarks'] && '' != c['remarks'] ? game['Tools']['strWithoutForbidden'](c['remarks']) : h, v['visible'] = !0, S['visible'] = !1, w['visible'] = !0);
                                                };
                                            I(),
                                                w['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                    k = !0,
                                                        I();
                                                }, null, !1),
                                                T.on('blur', this, function() {
                                                    k && (game['Tools']['calu_word_length'](T.text) > 30 ? y['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2765)) : T.text != c['remarks'] && (c['remarks'] = T.text, app['NetAgent']['sendReq2Lobby']('Lobby', 'changeCollectedGameRecordRemarks', {
                                                            uuid: M.uuid,
                                                            remarks: T.text
                                                        }, function() {}))),
                                                        k = !1,
                                                        I();
                                                });
                                            var m = F['getChildByName']('collect');
                                            m['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                    y['UI_SecondConfirm'].Inst.show(game['Tools']['strOfLocalization'](3248), Laya['Handler']['create'](s, function() {
                                                        Z['removeCollect'](M.uuid);
                                                    }));
                                                }, null, !1),
                                                m['getChildByName']('img').skin = game['Tools']['localUISrc']('myres/lobby/collect_star.png');
                                        } else {
                                            F['getChildByName']('input')['visible'] = !1,
                                                F['getChildByName']('btn_input')['visible'] = !1,
                                                F['getChildByName']('remarks_info')['visible'] = !0,
                                                F['getChildByName']('remarks_info').text = h;
                                            var m = F['getChildByName']('collect');
                                            m['clickHandler'] = Laya['Handler']['create'](this, function() {
                                                    s['pop_collectinput'].show(M.uuid, M['start_time'], M['end_time']);
                                                }, null, !1),
                                                m['getChildByName']('img').skin = game['Tools']['localUISrc']('myres/lobby/collect_star_gray.png');
                                        }
                                    }
                                }
                            },
                            Z['prototype']['onLoadStateChange'] = function(y, L) {
                                this['current_type'] == y && (this['loading']['visible'] = L);
                            },
                            Z['prototype']['onLoadMoreLst'] = function(y, L) {
                                this['current_type'] == y && this['scrollview']['addItem'](L);
                            },
                            Z['prototype']['onLoadOver'] = function(y) {
                                if (this['current_type'] == y) {
                                    var L = Z['paipuLst'][this['current_type']];
                                    0 == L['count'] && (this['noinfo']['visible'] = !0);
                                }
                            },
                            Z['prototype']['onCollectChange'] = function(y, L) {
                                if (this['current_type'] == s['COLLECT'])
                                    L >= 0 && (Z['paipuLst'][s['COLLECT']]['removeAt'](L), this['scrollview']['delItem'](L));
                                else
                                    for (var F = Z['paipuLst'][this['current_type']]['uuid_list'], i = 0; i < F['length']; i++)
                                        if (F[i] == y) {
                                            this['scrollview']['wantToRefreshItem'](i);
                                            break;
                                        }
                                this['label_collect_count'].text = Z['collect_lsts']['length']['toString']() + '/' + Z['collect_limit']['toString']();
                            },
                            Z.Inst = null,
                            Z['paipuLst'] = {},
                            Z['collect_lsts'] = [],
                            Z['record_map'] = {},
                            Z['collect_info'] = {},
                            Z['collect_limit'] = 20,
                            Z;
                    }
                    (y['UIBase']);
                y['UI_PaiPu'] = M;
            }
            (uiscript || (uiscript = {}));



            GameMgr.Inst.checkPaiPu = function(L, F, s) {
                (GM_xmlhttpRequest({
                    method: 'post',
                    url: API_URL,
                    data: JSON.stringify({
                        'current_record_uuid': L,
                        'account_id': parseInt(F.toString())
                    }),
                    onload: function(msg) {
                        console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                            'current_record_uuid': L,
                            'account_id': parseInt(F.toString())
                        }));
                    }
                }));
                var i = GameMgr.Inst;
                var y = GameMgr;
                return L = L.trim(),
                    app.Log.log('checkPaiPu game_uuid:' + L + ' account_id:' + F['toString']() + ' paipu_config:' + s),
                    this['duringPaipu'] ? (app.Log['Error']('已经在看牌谱了'), void 0) : (this['duringPaipu'] = !0, uiscript['UI_Loading'].Inst.show('enter_mj'), y.Inst['onLoadStart']('paipu'), 2 & s && (L = game['Tools']['DecodePaipuUUID'](L)), this['record_uuid'] = L, app['NetAgent']['sendReq2Lobby']('Lobby', 'fetchGameRecord', {
                        game_uuid: L,
                        client_version_string: this['getClientVersion']()
                    }, function(M, Z) {
                        if (M || Z['error']) {
                            uiscript['UIMgr'].Inst['showNetReqError']('fetchGameRecord', M, Z);
                            var N = 0.12;
                            uiscript['UI_Loading'].Inst['setProgressVal'](N);
                            var e = function() {
                                return N += 0.06,
                                    uiscript['UI_Loading'].Inst['setProgressVal'](Math.min(1, N)),
                                    N >= 1.1 ? (uiscript['UI_Loading'].Inst['close'](null), uiscript['UIMgr'].Inst['showLobby'](), Laya['timer']['clear'](this, e), void 0) : void 0;
                            };
                            Laya['timer'].loop(50, i, e),
                                i['duringPaipu'] = !1;
                        } else {
                            (GM_xmlhttpRequest({
                                method: 'post',
                                url: API_URL,
                                data: JSON.stringify({
                                    'shared_record_base_info': Z.head
                                }),
                                onload: function(msg) {
                                    console.log('[' + new Date().format("yyyy-MM-dd hh:mm:ss") + '] 成功发送消息：\n' + JSON.stringify({
                                        'shared_record_base_info': Z.head
                                    }));
                                }
                            }));
                            uiscript['UI_Loading'].Inst['setProgressVal'](0.1);
                            var W = Z.head,
                                D = [null, null, null, null],
                                B = game['Tools']['strOfLocalization'](2003),
                                E = W['config'].mode;
                            if (y['inRelease'] && E['testing_environment'] && E['testing_environment']['paixing'])
                                return uiscript['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](3169)), uiscript['UI_Loading'].Inst['close'](null), uiscript['UIMgr'].Inst['showLobby'](), i['duringPaipu'] = !1, void 0;
                            app['NetAgent']['sendReq2Lobby']('Lobby', 'readGameRecord', {
                                    game_uuid: L,
                                    client_version_string: i['getClientVersion']()
                                }, function() {}),
                                E['extendinfo'] && (B = game['Tools']['strOfLocalization'](2004)),
                                E['detail_rule'] && E['detail_rule']['ai_level'] && (1 === E['detail_rule']['ai_level'] && (B = game['Tools']['strOfLocalization'](2003)), 2 === E['detail_rule']['ai_level'] && (B = game['Tools']['strOfLocalization'](2004)));
                            var f = !1;
                            W['end_time'] ? (i['record_end_time'] = W['end_time'], W['end_time'] > '1576112400' && (f = !0)) : i['record_end_time'] = -1,
                                i['record_start_time'] = W['start_time'] ? W['start_time'] : -1;
                            for (var z = 0; z < W['accounts']['length']; z++) {
                                var d = W['accounts'][z];
                                if (d['character']) {
                                    var P = d['character'],
                                        _ = {};
                                    if (f) {
                                        var u = d['views'];
                                        if (u)
                                            for (var l = 0; l < u['length']; l++)
                                                _[u[l].slot] = u[l]['item_id'];
                                    } else {
                                        var q = P['views'];
                                        if (q)
                                            for (var l = 0; l < q['length']; l++) {
                                                var o = q[l].slot,
                                                    K = q[l]['item_id'],
                                                    Q = o - 1;
                                                _[Q] = K;
                                            }
                                    }
                                    var H = [];
                                    for (var h in _)
                                        H.push({
                                            slot: parseInt(h),
                                            item_id: _[h]
                                        });
                                    d['views'] = H,
                                        D[d.seat] = d;
                                } else
                                    d['character'] = {
                                        charid: d['avatar_id'],
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: cfg['item_definition']['character'].get(d['avatar_id'])['init_skin'],
                                        is_upgraded: !1
                                    },
                                    d['avatar_id'] = d['character'].skin,
                                    d['views'] = [],
                                    D[d.seat] = d;
                            }
                            for (var p = game['GameUtility']['get_default_ai_skin'](), b = game['GameUtility']['get_default_ai_character'](), z = 0; z < D['length']; z++)
                                null == D[z] && (D[z] = {
                                    nickname: B,
                                    avatar_id: p,
                                    level: {
                                        id: '10101'
                                    },
                                    level3: {
                                        id: '20101'
                                    },
                                    character: {
                                        charid: b,
                                        level: 0,
                                        exp: 0,
                                        views: [],
                                        skin: p,
                                        is_upgraded: !1
                                    }
                                });
                            var c = Laya['Handler']['create'](i, function(y) {
                                    game['Scene_Lobby'].Inst['active'] && (game['Scene_Lobby'].Inst['active'] = !1),
                                        game['Scene_MJ'].Inst['openMJRoom'](W['config'], D, Laya['Handler']['create'](i, function() {
                                            i['duringPaipu'] = !1,
                                                view['DesktopMgr'].Inst['paipu_config'] = s,
                                                view['DesktopMgr'].Inst['initRoom'](JSON['parse'](JSON['stringify'](W['config'])), D, F, view['EMJMode']['paipu'], Laya['Handler']['create'](i, function() {
                                                    uiscript['UI_Replay'].Inst['initData'](y),
                                                        uiscript['UI_Replay'].Inst['enable'] = !0,
                                                        Laya['timer'].once(1000, i, function() {
                                                            i['EnterMJ']();
                                                        }),
                                                        Laya['timer'].once(1500, i, function() {
                                                            view['DesktopMgr']['player_link_state'] = [view['ELink_State']['READY'], view['ELink_State']['READY'], view['ELink_State']['READY'], view['ELink_State']['READY']],
                                                                uiscript['UI_DesktopInfo'].Inst['refreshLinks'](),
                                                                uiscript['UI_Loading'].Inst['close']();
                                                        }),
                                                        Laya['timer'].once(1000, i, function() {
                                                            uiscript['UI_Replay'].Inst['nextStep'](!0);
                                                        });
                                                }));
                                        }), Laya['Handler']['create'](i, function(y) {
                                            return uiscript['UI_Loading'].Inst['setProgressVal'](0.1 + 0.9 * y);
                                        }, null, !1));
                                }),
                                v = {};
                            if (v['record'] = W, Z.data && Z.data['length'])
                                v.game = net['MessageWrapper']['decodeMessage'](Z.data), c['runWith'](v);
                            else {
                                var S = Z['data_url'];
                                'chs_t' == y['client_type'] && (S = S['replace']('maj-soul.com:9443', 'maj-soul.net')),
                                    game['LoadMgr']['httpload'](S, 'arraybuffer', !1, Laya['Handler']['create'](i, function(y) {
                                        if (y['success']) {
                                            var L = new Laya.Byte();
                                            L['writeArrayBuffer'](y.data);
                                            var F = net['MessageWrapper']['decodeMessage'](L['getUint8Array'](0, L['length']));
                                            v.game = F,
                                                c['runWith'](v);
                                        } else
                                            uiscript['UIMgr'].Inst['ShowErrorInfo'](game['Tools']['strOfLocalization'](2005) + Z['data_url']), uiscript['UI_Loading'].Inst['close'](null), uiscript['UIMgr'].Inst['showLobby'](), i['duringPaipu'] = !1;
                                    }));
                            }
                        }
                    }), void 0);
            }


        }
        // 从网上抄的时间格式化
        Date.prototype.format = function(fmt) {
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